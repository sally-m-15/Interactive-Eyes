"use strict"
const addElement = document.querySelector('#face');
const blinkCloseTime = 500;
const blinkOpenTime = 5000;

for (let i = 0; i < 2; i++) {
    const eye = document.createElement('div');
    eye.classList.add(
    "eye",
    "rounded-circle",
    "bg-white",
    "position-relative",
    "overflow-hidden",
    "border",
    "border-1",
    "border-black",
);
const firstChildElement = document.createElement('div');
firstChildElement.classList.add(
    "my-5",
    "mx-5",
    "w-50",
    "h-50",
    "rounded-circle",
    "bg-black",
    "position-absolute"
);


const eyelid = document.createElement('div');
let animation = true;
eyelid.classList.add(
    "eyelid",
    "bg-face",
    "rounded-circle",
    "position-absolute",
    "w-100",
    "top-0",
    "border",
    "border-1",
    "border-black"
);
function blink() {
    if (!animation) {
    eyelid.style.height = '100%';
    animation = true;
    setTimeout(blink, blinkCloseTime);
    } else {
    eyelid.style.height = '32%';
    animation = false;
    setTimeout(blink, blinkOpenTime);
    }
};
blink();

eye.append(firstChildElement, eyelid);
addElement.appendChild(eye);

  document.addEventListener('mousemove', (e) => {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;  

    const maxMove = rect.width * 0.5; 
    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;
    const angle = Math.atan2(diffY, diffX);

    const moveX = Math.cos(angle) * Math.min(maxMove, Math.abs(diffX));
    const moveY = Math.sin(angle) * Math.min(maxMove, Math.abs(diffY));

    firstChildElement.style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`;
  });
};
