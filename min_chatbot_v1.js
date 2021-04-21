var activado = "false";
window.onload = cargainicialbot;

function cargainicialbot() {
    document.getElementById('webChatIcon').classList.add('latido')
    document.getElementById('botiframe').style.display = 'none'
}

function showChatWindow() {
    document.getElementById('webChatIcon').classList.remove('latido');
    document.getElementById('webchat').style.visibility = 'visible'
    document.getElementById('avatar-container').style.visibility = 'collapse'
    if (activado == "true") {
        document.getElementById('botiframe').style.display = ''
    }
}

function hideChatWindow() {
    document.getElementById('webChatIcon').classList.add('latido');
    document.getElementById('webchat').style.visibility = 'collapse'
    document.getElementById('avatar-container').style.visibility = 'visible'
    document.getElementById('botiframe').style.display = 'none'
}

function mensaje_ocultar() {
    document.getElementById('saludobot').style.visibility = 'collapse'
}

function loadchat() {
    document.getElementById('mensaje_bienvenida').style.display = 'none'
    document.getElementById('botiframe').style.display = ''
    cargabot()    
    activado = "true"
    document.getElementById('logo-cabecera').src = "https://www.gob.ec/sites/default/files/inline-images/pascal.png"
}

function abrirNuevoTab() {
    var win = window.open('https://www.telecomunicaciones.gob.ec/', '_blank');
    win.focus();
}

function cargabot() {


    window.WebChat.renderWebChat(
        {
            directLine: window.WebChat.createDirectLine({
                token: 'S4Bn8DRkFGI.D8wUYtF_Hvmxa6ryugoLSs3_xT9ITt-6TZ1D2v7vlcQ',                
                locale: 'es-ES'
            }),
            sendTypingIndicator: true,
            styleOptions: {
                hideUploadButton: true,
                sendBoxButtonColor: '#fff',
                sendBoxBackground: '#26506D',
                sendBoxTextColor: '#fff',
                sendBoxButtonColorOnHover: '#c0c0c9',
                sendBoxHeight: 30,
                bubbleFromUserBackground: '#fff',
                bubbleBackground: '#f1f3f5',
                bubbleFromUserTextColor: 'black',
                bubbleTextColor: 'black',
                bubbleFromUserBorderColor: '#26506D',
                botAvatarBackgroundColor: '#fff', 
                botAvatarImage: 'https://www.gob.ec/sites/default/files/inline-images/pascal.png',
                botAvatarInitials: 'Pascal',
                sendBoxPlaceholderColor: '#c0c0c9',
                emojiSet: true, 
                suggestedActionLayout: 'stacked',
                bubbleBorderRadius: 15,
                bubbleFromUserBorderRadius: 15,
                bubbleBorderColor: '#26506D'
            }
        },
        document.getElementById('botiframe'));
        document.querySelector('#botiframe > *').focus();


}
