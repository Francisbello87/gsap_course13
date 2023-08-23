let phrases = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
];
let layers = [];
let demo = document.querySelector(".demo");
let counter = 0;

function createLayers() {
  phrases.forEach((value) => {
    let layer = document.createElement("div");
    layer.innerHTML = value + "?";
    demo.appendChild(layer);
    layers.push(layer);
  });
  gsap.set(".demo", { visibility: "visible" });
}

function animateText(index) {
  let element = layers[index];
  gsap.set(layers[index - 1], { opacity: 0, overwrite: true });
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0 },
    { duration: 0.5, y: 0, scale: 1, opacity: 1 }
  ); 
  counter++;
}

createLayers();

document.addEventListener("click", () => animateText(counter));
