// nekoweb stats
var xhr = new XMLHttpRequest();
xhr.open('GET', location.origin + '/.nekoweb-api/countview');
xhr.send();

document.currentScript.remove();