
    setInterval(function(){
        
        var adPreview = document.querySelector('Div.ytp-ad-preview-slot');
        var skipAdButton = document.querySelector('button.ytp-ad-skip-button.ytp-button');
        var muteButton = document.querySelector('button.ytp-mute-button.ytp-button');
    
        if(!(adPreview && skipAdButton)){
            return;
        }
    
        //console.log("adPreview.style.display", adPreview.style.display);
        //console.log("skipAdButton.style.display", skipAdButton.style.display);
    
        if(adPreview.style.display !== 'none'){
            //console.log('mute the video');
            if(muteButton.getAttribute("aria-label").indexOf("Unmute") == -1){
                muteButton.click();
            }
        } else if(adPreview.style.display === 'none' && skipAdButton.style.display !== 'none'){
            //console.log('un-mute the video');		
            skipAdButton.click();
            if(muteButton.getAttribute("aria-label").indexOf("Unmute") == 0){
                muteButton.click();
            }
            
        }
    }, 1000);

    