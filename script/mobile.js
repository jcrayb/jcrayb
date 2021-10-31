var x =1;

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);
let theme = document.getElementById('theme');

if (isMobileDevice){
		theme.setAttribute("href", "css/css-mobile.css")
} else {
		theme.setAttribute("href", "css/css.css")
}