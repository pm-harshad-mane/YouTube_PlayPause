chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.getAll({"populate":true}, function(windows) {
        for (var i in windows) {
            var tabs = windows[i].tabs;
            for (var j in tabs) {
                var tab = tabs[j];
                if(tab.url.indexOf('youtube')>=0){
                    chrome.tabs.executeScript(
                        tab.id,
                        {code: "var b = document.querySelector('button[class=\"ytp-play-button ytp-button\"]'); if(b){b.click();}"}
                    );
                    break;
                }            
            }            
        }
    });
});
