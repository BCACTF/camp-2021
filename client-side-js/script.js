var clicks = 0;
const NEEDED_CLICKS = 7348592194592193;
var cookie = document.getElementById("cookie");
window.onload = (event) => {
    document.getElementById("clicksToGo").innerHTML = `Click the Cookie ${NEEDED_CLICKS.toLocaleString("en-US")} times to get the flag!`;
    document.getElementById("cookieButton").style.left = (window.innerWidth / 2) - 64 + "px";
};
function clickCookie() {
    clicks++;
    document.getElementById("clicks").innerHTML = "Total Clicks: " + clicks.toLocaleString("en-US");
    document.getElementById("clicksToGo").innerHTML = `${NEEDED_CLICKS - clicks < 0 ? 0 : (NEEDED_CLICKS - clicks).toLocaleString("en-US")} more clicks until you get the flag!`;
    document.getElementById("cookieButton").style.left = Math.max(Math.floor(Math.random() * window.innerWidth - 128), 0) + "px";
    if (clicks >= NEEDED_CLICKS) {
        getFlag();
    }
}

// This isn't part of the intended solve path, so trying to do anything with this (probably) won't help you and will just waste your time.
function _0x1361(_0x27cb40,_0x122168){var _0x509b18=_0x509b();return _0x1361=function(_0x1361a9,_0x46e443){_0x1361a9=_0x1361a9-0xef;var _0x347257=_0x509b18[_0x1361a9];return _0x347257;},_0x1361(_0x27cb40,_0x122168);}(function(_0x7033a6,_0x13cbf3){var _0x571d45=_0x1361,_0x49a6c9=_0x7033a6();while(!![]){try{var _0x29e3a4=parseInt(_0x571d45(0x103))/0x1*(parseInt(_0x571d45(0x100))/0x2)+-parseInt(_0x571d45(0xf4))/0x3+-parseInt(_0x571d45(0xf1))/0x4*(-parseInt(_0x571d45(0x102))/0x5)+parseInt(_0x571d45(0xff))/0x6*(-parseInt(_0x571d45(0xfe))/0x7)+-parseInt(_0x571d45(0xf5))/0x8+parseInt(_0x571d45(0xf7))/0x9*(-parseInt(_0x571d45(0xfc))/0xa)+parseInt(_0x571d45(0xf9))/0xb*(parseInt(_0x571d45(0xf8))/0xc);if(_0x29e3a4===_0x13cbf3)break;else _0x49a6c9['push'](_0x49a6c9['shift']());}catch(_0x25f5e1){_0x49a6c9['push'](_0x49a6c9['shift']());}}}(_0x509b,0xcdc77));function _0x509b(){var _0x51dcb7=['text','125LsGGWj','12542nQMkKf','then','innerHTML','222524xkTwdM','Please\x20get\x20the\x20needed\x20amount\x20of\x20cookies\x20before\x20trying\x20to\x20get\x20the\x20flag.','body','2221092DnWtnN','13051640ELTXDL','flag','9BPLcrT','144QfurCQ','1617099EyRwtn','createElement','Hopefully\x20your\x20wrist\x20doesn\x27t\x20hurt\x20after\x20clicking\x20that\x20much!\x20Here\x27s\x20your\x20flag:\x20','568370LNWxkI','./dDa7iqNk95','42EsenMc','924342IDsAXA','166gjaiHi'];_0x509b=function(){return _0x51dcb7;};return _0x509b();}var done=![];function getFlag(){var _0xd1de4b=_0x1361;clicks>=NEEDED_CLICKS?!done&&(fetch(_0xd1de4b(0xfd))[_0xd1de4b(0xef)](_0x52f132=>_0x52f132[_0xd1de4b(0x101)]())[_0xd1de4b(0xef)](_0x588165=>{var _0xe34ce4=_0xd1de4b;f=document[_0xe34ce4(0xfa)]('h2'),f['class']=_0xe34ce4(0xf6),f[_0xe34ce4(0xf0)]=_0xe34ce4(0xfb)+_0x588165,document[_0xe34ce4(0xf3)]['appendChild'](f);}),done=!![]):alert(_0xd1de4b(0xf2));}