const text="Для нас керамика это не только ремесло, но и искусство";
const typingtext=document.querySelector("#typingtext");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingtext.textContent += text[index];
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();