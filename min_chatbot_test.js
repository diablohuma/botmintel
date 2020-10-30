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

     const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
         if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
             dispatch({
                 type: 'WEB_CHAT/SEND_EVENT',
                 payload: {
                     name: 'webchat/join',
                     value: { language: window.navigator.language }
                 }
             });
         }
    
         return next(action);
     });

    const MarkdownIt = require('markdown-it');
    var MarkdowStyle = require('markdown-it-style');

    const markdownIt = new MarkdownIt({ html: false, linkify: true, typographer: true });
    markdownIt .use(markdownStyle, { 'a': 'color: blue;' });

    const renderMarkdown = text => markdownIt.render(text);

    window.WebChat.renderWebChat(
        {
            directLine: window.WebChat.createDirectLine({
                token: 'S4Bn8DRkFGI.D8wUYtF_Hvmxa6ryugoLSs3_xT9ITt-6TZ1D2v7vlcQ',                
                locale: 'es-ES'
            }),
            store,
		    renderMarkdown,
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