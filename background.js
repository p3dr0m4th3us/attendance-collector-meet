console.log('background.js is loaded')
function buttonClicked(tab){
    var texto = {
        text: "Fonte: background.js"
    }
    chrome.tabs.sendMessage(tab.id, texto.text)
}

chrome.browserAction.onClicked.addListener(buttonClicked)
