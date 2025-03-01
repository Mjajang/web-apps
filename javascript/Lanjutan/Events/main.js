/* Object Event and Custom Event */
/* 
  example:
  const event = new Event("click");
  elem.dispatchEvent(event);
*/

/* Adding and Remove Event */
/* 
  example:
  function doSomething(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);

    console.log(e.detail);
  }
  const buttonSave = document.getElementById("tombol-save");
  const buttonUpdate = document.getElementById("tombol-update");
  buttonSave.addEventListener("click", doSomething);
  buttonSave.dispatchEvent(new Event("click"));

  buttonUpdate.addEventListener("click", doSomething);
  buttonUpdate.dispatchEvent(new CustomEvent("click", {
    detail: {
      detail: 1
    }
  }));

*/

/* Event Options */
/* 
  Event Options:
  - bubbles: false -> true
  - cancelable: false -> true
  - composed: false -> true

  EventListener Options:
  - capture: false -> true 
  - once: false -> true
  - passive: false -> true
  - signal: false -> true	

*/

/* Bubbles and Capturing */
/* 
  Example:
  const tombol = document.getElementById("tombol");
  tombol.addEventListener('suatuEvent', () => console.log('Event di tombol'));
  document.getElementById("parent").addEventListener('suatuEvent', () => console.log('Event di parent'), { capture: true });
  document.getElementById("grandparent").addEventListener('suatuEvent', () => console.log('Event di grandparent'), { capture: true });
  tombol.dispatchEvent(new Event('suatuEvent', { bubbles: true, detail: {tes: 3} }));
*/

/* PreventDefault and StopPropagation */
/* 
  Example:
  const tombol = document.getElementById("tombol");
  tombol.addEventListener('suatuEvent', (event) => {event.stopPropagation(); , console.log('Event di tombol')});
  document.getElementById("parent").addEventListener('suatuEvent', () => console.log('Event di parent'), { capture: true });
  document.getElementById("grandparent").addEventListener('suatuEvent', () => console.log('Event di grandparent'), { capture: true });
  tombol.dispatchEvent(new Event('suatuEvent', { bubbles: true, detail: {tes: 3} }));
*/

/* Delegasi Event */
/* 
  Example:
  Array.from(new Array(5)).forEach((_value, index) => { const list = document.createElement("li"); list.textContent = `List ke-${index + 1}`; document.getElementById("parent").appendChild(list); });
  document.getElementById("parent").addEventListener("click", (event) => { if (event.target.tagName === "LI") { console.log(event.target.textContent); } });
*/

/* Mouse Event and Pointer Event */
/* 
  Example:
  document.getElementById("parent").addEventListener("click", (event) => { console.log(event.clientX, event.clientY); });
  document.getElementById("parent").addEventListener("mousedown", (event) => { console.log("Mouse down"); });
  document.getElementById("parent").addEventListener("mouseup", (event) => { console.log("Mouse up"); });
  document.getElementById("parent").addEventListener("mousemove", (event) => { console.log("Mouse move"); });
  document.getElementById("parent").addEventListener("mouseenter", (event) => { console.log("Mouse enter"); });
  document.getElementById("parent").addEventListener("mouseleave", (event) => { console.log("Mouse leave"); });
  document.getElementById("parent").addEventListener("mouseover", (event) => { console.log("Mouse over"); });
  document.getElementById("parent").addEventListener("mouseout", (event) => { console.log("Mouse out"); });
  document.getElementById("parent").addEventListener("pointermove", (event) => { console.log(event.ClientX); });
*/

/* Keyboard Event */
/* 
  Example:
  Array.from(new Array(5)).forEach((_value, index) => { const input = document.createElement("input"); document.getElementById("parent").appendChild(input); });
  document.getElementById("parent").addEventListener("keydown", (event) => { console.log(event.key); });
  document.getElementById("parent").addEventListener("keyup", (event) => { console.log(event.key); });
*/

/* Event Change and Submit */
/* 
  Example:
  document.querySelector('input').addEventListener('change', (event) => { console.log(event.target.value); });
  document.querySelector('form').addEventListener('submit', (event) => { event.preventDefault(); const formData = new FormData(document.querySelector('form')); console.log(formData.get('data')); console.log('Submit form'); });
*/

/* Cookies and LocalStorage */
/* 
  Example:
  document.cookie = "name=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
  console.log(document.cookie);
  localStorage.setItem("name", "John Doe");
  console.log(localStorage.getItem("name"));
*/

/* History and Location */
/* 
  Example:
  history.pushState({}, "", "about.html");
  console.log(location.href);
  history.back();
  history.forward();
  Location.reload();
  Location.assign("https://www.google.com");
  Location.replace("https://www.google.com");
  Location.href = "https://www.google.com";
  Location.search = "?q=javascript";
  Location.hash = "#about";
  Location.pathname = "/about";
*/
