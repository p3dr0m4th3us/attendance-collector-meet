
console.log('content.js is loaded')

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    function frequencia(){
        var lista = []
        var quantidade = document.getElementsByClassName('XWGOtd')
        var nomes = document.getElementsByClassName('cS7aqe NkoVdd')
        var cont = 0
        for (var i = 0; i < quantidade.length; i++){
            if (nomes[i].innerHTML != "Você"){
                lista.push(' ' + nomes[i].innerHTML)
            }
                cont++
                if (cont == nomes.length){
                var resultado = (`Participaram da aula:${lista}`)
                var hiddenElement = document.createElement('a');
                hiddenElement.href = 'data:attachment/text,' + encodeURI(resultado);
                hiddenElement.target = '_blank';
                hiddenElement.download = 'test.txt';
                hiddenElement.click();
                console.log(resultado)
                }

            
        }
    }  
    console.log(message)
    frequencia()
}

// document.getElementsByClassName('e19J0b CeoRYc')[2].click()


