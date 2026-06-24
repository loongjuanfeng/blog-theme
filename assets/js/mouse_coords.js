const p = document.createElement("p");
p.style.textAlign = "center";
p.style.fontSize = "18pt";
p.textContent = "C'mon, move your mouse!";
document.body.append(p);

document.addEventListener("mousemove", e => {
  p.textContent = `mouseX: ${e.clientX}, mouseY: ${e.clientY}`;
});
