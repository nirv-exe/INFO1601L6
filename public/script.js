//get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
   console.log("Page has loaded");
   //do other javascript stuff here

   const result = document.querySelector('#result');
    result.innerHTML = '<h2>My Span</h2>';
    result.style.color = 'blue';

    let obj2 = myobj;

    //obj2 and myobj are the same variable

    obj2.name = "Shelly";

    console.log(myobj.name);//Shelly

    //if you need to create a new object and copy its values use Object.assign

    let obj3 = {};
    Object.assign(obj3, myobj);

    obj3.name = 'Smith';

    console.log(myobj.name, obj3.name);//Shelly, Smith
}