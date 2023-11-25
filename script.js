const Hora = new Date().getHours();

let header = document.getElementsByTagName('header')[0];
let saludo = document.createElement('h1');
saludo.setAttribute('class', 'saludo');

function clickeado() {
    if  (nombre == 'hacker') {
        //Chat GPT
        // Crear un elemento div
        var miDiv = document.createElement('div');
        miDiv.setAttribute('class', 'canva');
    
        // Crear un elemento iframe
        var miIframe = document.createElement('iframe');
        miIframe.setAttribute('class', 'canva');
        miIframe.setAttribute('src', 'https://www.canva.com/design/DAF1NbT9V3c/watch?embed');
        miIframe.setAttribute('loading', 'lazy');
        miIframe.setAttribute('allowfullscreen', 'allowfullscreen');
        miIframe.setAttribute('allow', 'fullscreen');
    
        // Agregar el iframe al div
        miDiv.appendChild(miIframe);
    
        // Crear un elemento de enlace
        var miEnlace = document.createElement('a');
        miIframe.setAttribute('class', 'canva');
        miEnlace.setAttribute('href', 'https://www.canva.com/design/DAF1NbT9V3c/watch?utm_content=DAF1NbT9V3c&utm_campaign=designshare&utm_medium=embeds&utm_source=link');
        miEnlace.setAttribute('target', '_blank');
        miEnlace.setAttribute('rel', 'noopener');
        miEnlace.textContent = 'Feliz Cumple Hacker';
    
        // Agregar el div y el enlace al cuerpo del documento
        document.getElementById('foto_fondo').remove();
        document.body.appendChild(miDiv);
        document.body.appendChild(miEnlace);
    } else {
        //Insulto
        let porongus = document.createElement('img');
        porongus.setAttribute('src', 'https://files.cults3d.com/uploaders/23436622/illustration-file/02a0fbc0-21c1-4c1c-8862-ceb7316ed7b1/xd.png');
        porongus.setAttribute('class', 'insulto');
        document.getElementById('foto_fondo').remove();
        document.body.appendChild(porongus);
        document.getElementById('boton1').innerHTML = "Puto el que lo lea"
    }
}

let nombre = prompt("Dime tu nombre").toLowerCase();
for (let intentos = 2; intentos > 0; intentos--) {  
    if (nombre == 'hacker') {
        alert("Bien hecho. Puedes entrar...");
        break;
    } else if (nombre == ("mike" || "nicolas" || "nico" || "nick")) {
        alert(`Tu nombre es Hacker, no mientas! Tienes ${intentos} intentos!`);
    } else {alert(`Nombre equivocado. Tienes ${intentos} intentos!!!`);}
    nombre = prompt("Dime tu nombre").toLowerCase();
}
if (nombre != "hacker") {
    alert("Te quedaste sin intentos asi que no eres el remitente indicado.");
    alert("Fuera de aqui");
    for (let i = 0; i < 3; i++) {
        alert("PUTO");
    }
    window.close();
}

function saludar() {
    if ((Hora > 12) && (Hora < 20)) {
        saludo.innerHTML = 'Buenas tardes Hacker';
    } else if (Hora >= 20) {
        saludo.innerHTML = 'Buenas noches Hacker';
    } else {
        saludo.innerHTML = 'Buenos dias Hacker';
    }
    header.appendChild(saludo);
}

introduccion();
saludar();
