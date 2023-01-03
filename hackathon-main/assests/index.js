function foo1() {
    if (navigator.connection && !!navigator.connection.effectiveType) {
        let type = navigator.connection.effectiveType;
        document.cookie = "page1type=" + type;
        downlinkMax = navigator.connection.downlinkMax;
        document.cookie = "page1dl=" + downlinkMax;
        window.location.replace("first");
    }
  
   // return;

}

function foo2() {
    if (navigator.connection && !!navigator.connection.effectiveType) {
        let type = navigator.connection.effectiveType;
        document.cookie = "page2type=" + type;
        // window.location.replace("second/"+type);
        // return;
    }
  
}

function foo3() {
    if (navigator.connection && !!navigator.connection.effectiveType) {
        let type = navigator.connection.effectiveType;
        document.cookie = "page3type=" + type;
    }
    if ('downlinkMax' in navigator.connection) {
        downlinkMax = navigator.connection.downlinkMax;
        document.cookie = "page3dl=" + downlinkMax;
    }
}