export function getConfig(cfg)
{
    cfg.name = "alsong";
    cfg.version = "0.1";
    cfg.author = "wolfwork";
}

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

export function getLyrics(meta, man)
{
    evalLib("querystring/querystring.min.js");
	
	getAlsongLyrics(meta)

    
}

// meta 정보로 알송 가사들을 찾는 함수
function getAlsongLyrics(meta) {
	let title = meta.title
	let artist = meta.artist
	
	var content ="<ns1:GetResembleLyric2>\
        <ns1:encData>"+encData+"</ns1:encData>\
        <ns1:stQuery>\
        <ns1:strTitle>"+escapeHtml(title)+"</ns1:strTitle>\
        <ns1:strArtistName>"+escapeHtml(artist)+"</ns1:strArtistName>\
        <ns1:nCurPage>0</ns1:nCurPage>\
        </ns1:stQuery></ns1:GetResembleLyric2>";
	
	
}

function GetResembleLyricsParser(result){
	var lyrics = [];
	var xmlParser = new XMLParser(result);
	var resultNodes = xmlParser["GetResembleLyric2Result"];
	if(resultNodes && resultNodes.length != 0){
		resultNodes = resultNodes["ST_GET_RESEMBLELYRIC2_RETURN"];
		for(var key in resultNodes){
			if(IsAborting()){
				break;
			}
			var lyric = resultNodes[key];
			lyrics.push({
				Source: "MetaData",
				Title : lyric["strTitle"],
				Artist : lyric["strArtistName"],
				Album : lyric["strAlbumName"],
				Lyric : lyric["strLyric"].replace(/<br>/g,'\r\n').replace(/ /g,' ')
			});
		}
	}
	return lyrics;
}

function AlsongServerRequest(action,req){
        var content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:SOAP-ENC=\"http://www.w3.org/2003/05/soap-encoding\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:ns2=\"ALSongWebServer/Service1Soap\" xmlns:ns1=\"ALSongWebServer\" xmlns:ns3=\"ALSongWebServer/Service1Soap12\"><SOAP-ENV:Body>"+req+"</SOAP-ENV:Body></SOAP-ENV:Envelope>";
        client.addHttpHeader("Accept-Charset","utf-8");
        client.addHttpHeader("content-type","application/soap+xml; charset=UTF-8");
        client.addHttpHeader("User-Agent","gSOAP/2.7");
        client.addHttpHeader("SOAPAction","AlsongWebServer/"+action);
        client.addPostData(content);
        request("http://lyrics.alsong.co.kr/alsongwebservice/service1.asmx", (err, res, body) => {
        if (!err && res.statusCode == 200) {
            return body
        }
    });
		var ret = client.Request("http://lyrics.alsong.co.kr/alsongwebservice/service1.asmx","POST");
        client.Reset();
        return ret;
    }

function checkUserAbort(man) {
	return man.checkAbort()
}