/*
 * simple test to alter the page
 */
alert(chrome.extension.getURL("icon.png"));
var nldp_img = document.createElement('IMG');
nldp_img.setAttribute('src',chrome.extension.getURL("icon.png"));
document.getElementById('p-logo').appendChild(nldp_img);
