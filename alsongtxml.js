﻿export function getConfig(cfg)
{
    cfg.name = "alsong2";
    cfg.version = "0.2";
    cfg.author = "wolfwork";
}

const encData = '8582df6473c019a3186a2974aa1e034ae1b2bbb2e7c99575aadc475fcddd997d74bbc1ce3d50b9900282903ee9eb60ae8c5bbf27484441bacb41ecf9128402696641655ff38c2cbbf3c81396034a883af2d82e0545ec32170bddc7c141208e7255e367e5b5ebd81750226856f5405ec3ad7b6f8600c32c2718c4c525bfe34666'

/* 
트랙 메타 정보
interface IESLyricTrackMetadb {
properties:
	// 전처리 되어있는 필드
    [r] string title;
    [r] string artist;
    [r] string album;
	// raw가 붙으면 전처리 되지 않은 필드
    [r] string rawTitle;
    [r] string rawArtist;
    [r] string rawAlbum;
    [r] string rawPath; // 전체 경로，file://c:\path\to\track.mp3
    [r] string path; // 경로，c:\path\to\track.mp3
    [r] int subSong; // 서브트랙 인덱스
    [r] double duration; // 트랙 길이
};

가사 매니저
interface IESLyricMetaInfoManager
{
Methods:
   IESLyricMetaInfo createLyric(); // 새 가사 설명 정보 생성
   void addLyric(IESLyricMetaInfo newLyric); // ESLyric에 가사 추가
   bool checkAbort(); // 사용자가 검색을 취소할 지 여부
   string getSvcData(string key); // 가사소스 관련 구성 가져오기
   void setSvcData(string key); // 가사 소스 관련 구성 설정，키는 동일한 가사 소스 내에서 고유
}
interface IESLyricMetaInfo
{
properties:
    [r,w] string title; // 가사 제목. 필수 입력
    [r,w] string artist; // 가사가 속한 아티스트를 입력하는 것이 좋습니다. 표시 결과가 더 정확합니다.
    [r,w] string album; // 검색 인터페이스에 표시되는 가사가 속한 앨범
    [r,w] string lyricText; // 가사 텍스트 및 lyricData 필드는 모두 필수 항목입니다.
    [r,w] ArrayBuffer lyricData; // 가사 데이터, 외부 파싱이 필요한 다른 가사에 대해 이 필드에 작성하는 경우 두 lyricText 필드를 모두 채워야 합니다.
    [r,w] string source; // 가사 출처, 선택사항, 기입하지 않으면 해당 가사 출처 이름이 자동으로 채워집니다.
    [r,w] string fileType; // 가사 파일 형식 기본은 lrc 다른 형식은 파서가 따로 있어야 함
    [r,w] string location; // 가사 위치, 선택사항
    [r,w] bool isLocal; // 가사가 로컬인지 여부. 기본 값은 false
    [r,w] int confidence; // 가사 일치 정도, 비어있으면 내부 판단으로 처리
};
*/

// var IsAborting = false

export function getLyrics(meta, man)
{
    evalLib("querystring/querystring.min.js");
	evalLib("txml/txml.min.js");
	
	console.log("노래 제목 : " + meta.title + ", 노래 아티스트 : " + meta.artist)
	addLyricsUsingMeta(meta,man);
}

function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\"/g, "&quot;");
}

// meta 정보로 알송 가사들을 찾는 함수
function makeRequest(meta,action) {
	let title = meta.title
	let artist = meta.artist
	
	var req ="<ns1:GetResembleLyric2>\
        <ns1:encData>"+encData+"</ns1:encData>\
        <ns1:stQuery>\
        <ns1:strTitle>"+escapeHtml(title)+"</ns1:strTitle>\
        <ns1:strArtistName>"+escapeHtml(artist)+"</ns1:strArtistName>\
        <ns1:nCurPage>0</ns1:nCurPage>\
        </ns1:stQuery></ns1:GetResembleLyric2>";
	
	
	var content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:SOAP-ENC=\"http://www.w3.org/2003/05/soap-encoding\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:ns2=\"ALSongWebServer/Service1Soap\" xmlns:ns1=\"ALSongWebServer\" xmlns:ns3=\"ALSongWebServer/Service1Soap12\"><SOAP-ENV:Body>"+req+"</SOAP-ENV:Body></SOAP-ENV:Envelope>";

	var header = {
		"Accept-Charset": "utf-8",
		"Content-Type": "application/soap+xml; charset=UTF-8",
		"User-Agent": "gSOAP/2.7",
		"SOAPAction": "AlsongWebServer/"+action
	}
	var contents = {
		method: "post",
		url: "http://lyrics.alsong.co.kr/alsongwebservice/service1.asmx",
		headers: header,
		body: content
	}
	return contents
}

function GetResembleLyricsParser(xml){
	var lyrics = [];
	// 파싱해야되는 부분
	var rawdata = txml.parse(xml)
	var json = txml.simplify(rawdata)
	// console.log(JSON.stringify(json))
	var lyricList = json['soap:Envelope']['soap:Body']['GetResembleLyric2Response']['GetResembleLyric2Result']['ST_GET_RESEMBLELYRIC2_RETURN']
	if (lyricList && lyricList.length != 0) {
		console.log('검색된 가사: ' + lyricList.length + '개')
		for (const data of lyricList) {
			lyrics.push({
				 title: data['strTitle'],
				 artist: data['strArtistName'],
				 album: data['strAlbumName'],
				 lyric: data['strLyric'].replace(/br/g,'\r\n').replace(/ /g,' ').replace(/&lt;/g,'').replace(/&gt;/g,'')
			})
			// console.log(JSON.stringify(lyrics))
		}
	}
	return lyrics
}

function addLyricsUsingMeta(meta, man){
	var contents = makeRequest(meta, 'GetResembleLyric2')
	console.log("요청 시작")
	request(contents, (err,res,body) => {
		if (!err && res.statusCode == 200) {
			console.log('요청 수신 완료')
			try {
				var lyrics = GetResembleLyricsParser(body);
				var lyricMeta = man.createLyric()
				for (const lyric of lyrics) {
					if(man.checkAbort()) {
						console.log("User Aborting");
						break;
					}
					lyricMeta.title = lyric.title;
					lyricMeta.artist = lyric.artist;
					lyricMeta.album = lyric.album;
					lyricMeta.lyricText = lyric.lyric;
					man.addLyric(lyricMeta);
				}
			} catch {
			}
		}
	}); 
}
