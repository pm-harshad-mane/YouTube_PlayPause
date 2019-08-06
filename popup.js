
function findYouTubeRunningTabAndExecute(success, failure){
    chrome.windows.getAll({"populate":true}, function(windows) {
        var tabFound = false;
        for (var i in windows) {
            var tabs = windows[i].tabs;
            for (var j in tabs) {
                var tab = tabs[j];
                if(tab.url.indexOf('youtube.com')>=0){
                    if(typeof success === "function"){
                        tabFound = true;
                        success(tab, windows[i]);
                    }
                    break;
                }
            }
            if(tabFound){                
                break;
            }
        }

        if(!tabFound){
            if(typeof failure === "function"){
                failure();
            }
        }
    });
}

// add play pause functionality
document.getElementById('play_pause').onclick = function(){
    findYouTubeRunningTabAndExecute(function(tab){
        chrome.tabs.executeScript(
            tab.id,
            {code: "var b = document.querySelector('button.ytp-play-button.ytp-button'); if(b){b.click();}"}
        );
        window.close();
    })
}

// add play next song functionality
document.getElementById('play_next').onclick = function(){
    findYouTubeRunningTabAndExecute(function(tab){
        chrome.tabs.executeScript(
            tab.id,
            {code: "var b = document.querySelector('a.ytp-next-button.ytp-button'); if(b){b.click();}"}
        );
        window.close();
    })
}

// add play previous song functionality
document.getElementById('play_previous').onclick = function(){
    findYouTubeRunningTabAndExecute(function(tab){
        chrome.tabs.executeScript(
            tab.id,
            {code: "var b = document.querySelector('a.ytp-prev-button.ytp-button'); if(b){b.click();}"}
        );
        window.close();
    })
}

// open youtube tab functionality
document.getElementById('open_tab').onclick = function(){
    findYouTubeRunningTabAndExecute(
        function(tab, window){
            chrome.windows.update(window.id, {focused: true})
            chrome.tabs.update(tab.id, {active: true});
        }, 
        function(){
            chrome.tabs.create({
                url: 'https://youtube.com'
            });
        }
    );
    window.close();
}