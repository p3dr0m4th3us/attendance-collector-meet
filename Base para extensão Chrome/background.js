console.log('background.js is loaded')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    var texto = {
        text: "Fonte: background.js"
    }
    chrome.tabs.sendMessage(tab.id, texto.text)
}
