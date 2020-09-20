console.log('fwef')

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    function chat(){
        var quantidade_chat = document.getElementsByClassName('GDhqjd').length
        var lista = []
        for (var i = 0; i < quantidade_chat; i++){
            var pessoa = document.getElementsByClassName('YTbUzc')[i].innerText
            var hora = document.getElementsByClassName('MuzmKe')[i].innerText
            var conteudo = document.getElementsByClassName('Zmm6We')[i].innerText
            var format = (`${pessoa},${conteudo},${hora}`)
            
            lista.push(`\n${format}`)
            
        }
        var estrutura = "Aluno,Número,Turma"
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv,' + encodeURI(`${estrutura}\n${lista}\n`);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'chat.csv';
        hiddenElement.click();
        console.log(lista)
    }
    console.log(message)
    chat()
}

                
// YTbUzc quem comentou - 
// MuzmKe hora que comentou - 
// Zmm6We conteudo comentado tudo - 
// oIy2qc por partes - document.getElementsByClassName('oIy2qc')[i].innerText (usar lenght para quantidade)
// GDhqjd quantidade de comentários - document.getElementsByClassName('GDhqjd').length
