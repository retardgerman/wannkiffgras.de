const memes = ["lindner_kapitalist.png"];

const filename = memes[Math.floor(Math.random() * memes.length)];
document.getElementById("image").src = `./img/${filename}`;

function show() {
  document.getElementById("answer").classList.remove("hidden");
  document.getElementById("button").classList.add("hidden");
}
