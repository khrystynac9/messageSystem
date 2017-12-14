var navigatorMessageMap = {
	'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];
  
    if (platform.indexOf(key) >= 0){
        var myplatform = document.getElementsByClassName("download-message");
        var i;
        for(i = 0; i < myplatform.length; i++) {
            if( version == myplatform[i].getAttribute('data-version')) {
               myplatform[i].style.display = "inline";
            }
            
        }
    }
}
   

