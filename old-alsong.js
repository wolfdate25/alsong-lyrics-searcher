//===================================================
//=========Alsong Lyric Source For ESLyric===========
//============ Berrzebb 2020-03-03 ==================
//===================================================
// File Hash Finish
// 외부 서버로 md5 계산 Pass
// FileStream 객체에서 데이터를 읽어 올때 utf-16 대응 추가.
var encData = '8582df6473c019a3186a2974aa1e034ae1b2bbb2e7c99575aadc475fcddd997d74bbc1ce3d50b9900282903ee9eb60ae8c5bbf27484441bacb41ecf9128402696641655ff38c2cbbf3c81396034a883af2d82e0545ec32170bddc7c141208e7255e367e5b5ebd81750226856f5405ec3ad7b6f8600c32c2718c4c525bfe34666'
function md5(d){return rstr2hex(binl2rstr(binl_md5(rstr2binl(d),8*d.length)))}function rstr2hex(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function rstr2binl(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function binl2rstr(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function binl_md5(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
/*== Array Extensions ==*/
Array.prototype.IntB = function(offset, len) {
    len = len || 4
    var buff = this;
    if (len-- > 4) {
        len = 3;
    }
    var a = 0;
    for (var i =0; i <= len; i++) {
        a |= buff[offset + i] << 8 * (len - i)
    }
    return a;
}


/*== ECMA262 Backport ==*/
  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
/*== XMLParser Module ==*/
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = false;
xmlDoc.validateOnParse = false;

var XMLParser = function(xml){
    var not_whitespace = /[^\s]/;
    var xml2array = function(xmlDoc,parent_count){
        var arr = {};
        var parent = "";
        parent_count = parent_count || {};
        
        var attribute_inside = 0;
        
        if(xmlDoc.nodeName && xmlDoc.nodeName.charAt(0) != "#"){
            if(xmlDoc.childNodes.length > 1){
                arr = {};
                parent = xmlDoc.nodeName;
            }
        }
        var value = xmlDoc.nodeValue;
        if(xmlDoc.parentNode && xmlDoc.parentNode.nodeName && value) {
            if(not_whitespace.test(value)) { // if its a child
                arr = {};
                arr[xmlDoc.parentNode.nodeName] = value;
            }
        }
        
        if(xmlDoc.childNodes.length){
            if(xmlDoc.childNodes.length == 1){ // Tag?
                arr = xml2array(xmlDoc.childNodes[0],parent_count); // RECURSION
            } else {
                var index = 0;
                
                for(var i = 0; i < xmlDoc.childNodes.length; i++){
                    var currentNodes = xmlDoc.childNodes[i];
                    var t = xml2array(currentNodes,parent_count);
                    if(t) {
                        var assoc = false;
                        var arr_count = 0;
                        for(key in t){
                            if(isNaN(key)) assoc = true;
                            arr_count++;
                            if(arr_count>2) break;
                        }
                        
                        if(assoc && arr_count == 1) {
                            if(arr[key]) {
                                if(!parent_count || !parent_count[key]) {
                                    parent_count[key] = 0;
                                    
                                    var ta = arr[key];
                                    arr[key] = {};
                                    arr[key][0] = ta;
                                }
                                parent_count[key]++;
                                arr[key][parent_count[key]] = t[key];
                            } else {
                                parent_count[key] = 0;
                                arr[key] = t[key];
                                if(currentNodes.attributes && currentNodes.attributes.length) {
                                    for(var j = 0; j < currentNodes.attributes.length; j++){
                                        var nname = currentNodes.attributes[j].nodeName;
                                        if(nname) {
                                            if(attribute_inside) {
                                                var ta = arr[key];
                                                arr[key] = {};
                                                arr[key]['value'] = ta;
                                                arr[key]['attribute_'+nname] = currentNodes.attributes[j].nodeValue;
                                            } else {
                                                arr['attributes_' + key + '_' + nname] = currentNodes.attributes[j].nodeValue;
                                            }
                                        }
                                    } // for(var j = 0)
                                } // if(currentNodes
                            }
                        } else {
                            arr[index] = t;
                            index++;
                        }
                    } // if(t)
                } // for(var i = 0)
            }
        }
        
        if(parent && arr) {
            var t = arr;
            arr = {};
            arr[parent] = t;
        }
        return arr;
    }
    xmlDoc.loadXML(xml);
    return xml2array(xmlDoc);
}

/*== File Stream Module ==*/

var SeekOrigin = {
    Begin : 0,
    Current : 1,
    End : 2
}
var Encoding = {};
Encoding.GetString = function(buf){
    return buf.map(function(b){
        return String.fromCharCode(b);
    }).join('');
}
Encoding.GetSymbols = function(charCode) {
    switch(charCode) {
        case 0x152: return 0xbc;
        case 0x153: return 0xbd;
        case 0x160: return 0xa6;
        case 0x161: return 0xa8;
        case 0x178: return 0xbe;
        case 0x17d: return 0xb4;
        case 0x17e: return 0xb8;
        case 0x20ac: return 0xa4;
        default: return charCode;
    }
}
var FileStream = function(){
    var stream = new ActiveXObject("ADODB.Stream");
    var isLittleEndian = false;
    this.position = 0;
    this.Open = function(){
        stream.Type = 2;
        stream.Charset = "iso-8859-15";
        stream.Open();
    }
    this.Current = function(){
        return stream.Position;
    }
    this.Close = function(){
        stream.Close();
    }
    this.EOS = function(){
        return stream.EOS;
    }
    this.Size = function(){
        return stream.Size;
    }
    this.LoadFromFile = function(filename){
        stream.LoadFromFile(filename);
    }
    this.SaveToFile = function(filename,option){
        var option = option || 2;
        stream.SaveToFile(filename,option);
    }
    this.Seek = function(pos,origin){
        switch(origin){
            case SeekOrigin.Begin:
                stream.Position = pos;
                break;
            case SeekOrigin.Current:
                stream.Position = stream.Position + pos;
                break;
            case SeekOrigin.End:
                stream.Position = stream.Size + pos;
                break;
        }
    }
    this.Read = function(size){
        var bytes = [];
        //console("Prev: " + stream.Position + "Req:" + size);
        var s = stream.ReadText(size);
        //console("Next: " + stream.Position);
        for(var i = 0; i<s.length; ++i){
            var charCode = s.charCodeAt(i);
            var intc = charCode;
            if (charCode < 0x80) {
                intc = charCode;
            } else {
                intc = Encoding.GetSymbols(charCode) | 0x80;
            }
            var st = ('0'+intc.toString(16)).slice(-2).split();
                if(isLittleEndian) st = st.reverse();
                bytes.push(parseInt(st.join(''),16));
        }

        return bytes;
    }
}

/*== Audio Hashing Module ==*/
var client = utils.CreateHttpClient();
var AudioHash = function(){
    var RawPosition = 0;
    var Hash = "";
    var Done = {};
    var SetHash = function(s){
        s.Seek(RawPosition, SeekOrigin.Begin);
        //console(RawPosition);
        var buff = s.Read(0x28000);
        client.addHttpHeader("Content-Type","application/octet-stream; charset=iso-8859-15");
        client.addHttpHeader("Accept","*");
        client.addPostData(buff);
        //Hash = md5(buff);
        var ret = client.Request("https://md5.astralgate.net","POST");
        client.Reset();        
        Hash = ret;
        console(Hash);
    }
    var Mpeg = function(s){
        var ParseVersion = function (header) {
            return (header >> 19) & 3;
        }
        var ParseLayer = function (header) {
            return (header >> 17) & 3;
        }
        var ParseBitRate = function (header) {
            return (header >> 12) & 0xF;
        }
        var ParseSampleRate = function (header) {
            return (header >> 10) & 3;
        }
        var ParseMode = function (header) {
            return (header >> 6) & 3;
        }
        var ParseEmphasis = function (header) {
            return header & 3;
        }        
        var Validate = function (header) {
            var version = ParseVersion(header);
            var layer = ParseLayer(header);
            var bitrate = ParseBitRate(header);
            var samplerate = ParseSampleRate(header);
            var Emphasis = ParseEmphasis(header);
            
            return ((header >> 21) & 0x7FF) === 0x7FF && version !== 1 && layer !== 0 &&
                   bitrate !== 0 && bitrate !== 0xF && samplerate !== 3 &&
                   Emphasis !== 2;
        }
        s.Seek(0, SeekOrigin.Begin);
        var buff = [];
        var read = 0;
        do {
            buff = s.Read(10);
            read = buff.length;
            var what = Encoding.GetString(buff.slice(0,3)).replace(/\u0003/,'');
            if (what == "ID3") // "ID3"
            {
                s.Seek(buff[6] << 21 | buff[7] << 14 | buff[8] << 7 | buff[9], SeekOrigin.Current);
                break;
            } else {
                s.Seek(-buff.length, SeekOrigin.Current);
                break;
            }
        } while(read === buff.length);
        do {
            buff = s.Read(4096);
            read = buff.length;
            for (var i = 3; i < read; i++) {
                var header = buff.IntB(i - 3);
                if (Validate(header)) {
                    RawPosition = s.Current() - read + i - 3;
                    //console(s.Current() + "," + read + "," + RawPosition);
                    read = 0;
                }
            }
            s.Seek(-4, SeekOrigin.Current);
        } while(read == buff.length);
        
        SetHash(s);
    }
    this.Load = function(Path){
        var fs = new FileStream();
        fs.Open();
        fs.LoadFromFile(Path);
        var buf = fs.Read(4);
        var what = Encoding.GetString(buf).replace(/\u0003/,'');
        switch(what){
            case 'ID3':
                Mpeg(fs, Path);
                break;
            default:
                SetHash(fs,Path);
                break;
        }
        fs.Close();
        return {Hash : Hash};
    }
}
function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\"/g, "&quot;");
}
/*== Alsong API Module ==*/
var AlsongAPI = function(){
    // Properties
    var GetResembleLyricsParser = function(result){
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
    var GetLyricsParser = function(result){
        var lyrics = [];
        var xmlParser = new XMLParser(result);
        //console(result);
        var resultNodes = xmlParser["GetLyric7Result"];
        if(resultNodes["strStatusID"] != 2){
            lyrics.push({
                Source: "FileHash",
                Title : resultNodes["strTitle"],
                Artist : resultNodes["strArtist"],
                Album : resultNodes["strAlbum"],
                Lyric : lyric["strLyric"].replace(/<br>/g,'\r\n').replace(/ /g,' ')
            })
        }
        return lyrics;
    }
    var Request = function(action,req){
        var content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:SOAP-ENC=\"http://www.w3.org/2003/05/soap-encoding\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:ns2=\"ALSongWebServer/Service1Soap\" xmlns:ns1=\"ALSongWebServer\" xmlns:ns3=\"ALSongWebServer/Service1Soap12\"><SOAP-ENV:Body>"+req+"</SOAP-ENV:Body></SOAP-ENV:Envelope>";
        client.addHttpHeader("Accept-Charset","utf-8");
        client.addHttpHeader("content-type","application/soap+xml; charset=UTF-8");
        client.addHttpHeader("User-Agent","gSOAP/2.7");
        client.addHttpHeader("SOAPAction","AlsongWebServer/"+action);
        client.addPostData(content);
        var ret = client.Request("http://lyrics.alsong.co.kr/alsongwebservice/service1.asmx","POST");
        client.Reset();
        return ret;
    }
    this.RequestFileHash = function(fileName){
        var Hash = new AudioHash().Load(fileName).Hash;
        //console(Hash)
        var content = "<ns1:GetLyric7>\
        <ns1:encData>"+encData+"</ns1:encData>\
        <ns1:stQuery>\
        <ns1:strChecksum>"+Hash+"</ns1:strChecksum>\
        <ns1:strVersion>3.46</ns1:strVersion>\
        <ns1:strMACAddress></ns1:strMACAddress>\
        <ns1:strIPAddress></ns1:strIPAddress>\
        </ns1:stQuery></ns1:GetLyric7>";
        return GetLyricsParser(Request("GetLyric7",content));
    }
    this.RequestMetaData = function(title,artist){
        var results = [];
        var content ="<ns1:GetResembleLyric2>\
        <ns1:encData>"+encData+"</ns1:encData>\
        <ns1:stQuery>\
        <ns1:strTitle>"+escapeHtml(title)+"</ns1:strTitle>\
        <ns1:strArtistName>"+escapeHtml(artist)+"</ns1:strArtistName>\
        <ns1:nCurPage>0</ns1:nCurPage>\
        </ns1:stQuery></ns1:GetResembleLyric2>";
        return GetResembleLyricsParser(Request('GetResembleLyric2',content));
    }
}

/*== Main Lyrics Module ==*/

var dbg = false;

function get_my_name()
{
    return "Alsong Lyric Source";
}

function get_version() 
{
    return "0.3.0";
}

function get_author() 
{
    return "Berrzebb";
}
function console(s){
    if(dbg){return;}
    fb.trace(get_my_name() + " $> " + s);
}
var IsAborting={};
function start_search(info,callback)
{
//add your codes here
    IsAborting = function(){
        var r = callback.IsAborting();
        if(r)console("Search Aborting..");
        return r;
    }
    var API = new AlsongAPI();
    var RegisterLyric = function(callback,Lyric){
        var new_lyric = callback.CreateLyric();
        new_lyric.Source = get_my_name() + "(" + Lyric.Source + ")";
        new_lyric.Title = Lyric.Title;
        new_lyric.Artist = Lyric.Artist;
        new_lyric.Album = Lyric.Album;
        new_lyric.LyricText = Lyric.Lyric;
        //console(new_lyric.LyricText);
        callback.AddLyric(new_lyric);
        new_lyric.Dispose();
    }
    console('Title : ' +info.Title + ' Artist : ' + info.Artist);
    console("Search MetaData");
    var lyrics = API.RequestMetaData(info.Title,info.Artist);
    if(lyrics.length != 0){
        console("Found Alsong Lyrics : " + lyrics.length);
    } else {
        console("Search File Hash");
        lyrics = API.RequestFileHash(info.RawPath.replace(/file:\/\//,""));
        if(lyrics.length != 0){
            console("Found Alsong Lyrics : " + lyrics.length);
        }
    }
    for(var i in lyrics){
        if(IsAborting()){
            console("User Aborting");
            break;
        }
        RegisterLyric(callback,lyrics[i]);
    }
    console("Alsong Search Done");
}