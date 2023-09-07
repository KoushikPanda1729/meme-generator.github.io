const url = "https://meme-api.com/gimme/wholesomememes";
const memeContent = document.querySelector(".memeContent");
const containerImg = document.querySelector(".container img");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
const coustomBtn = document.querySelector(".coustomBtn");
const stopBtn = document.querySelector(".stopBtn");

const fatchingData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    generate(data);
}
fatchingData(url);


const generate = (data) => {
    if (!data.url) return;
    memeContent.textContent = data.title;
    containerImg.src = data.url;
    author.textContent = `Author : ${data.author}`
}

btn.addEventListener("click", () => {
    fatchingData(url);
});

coustomBtn.addEventListener("click", () => {
    const id = setInterval(() => {
        fatchingData(url);
    }, 3000);

    stopBtn.addEventListener("click", () => {
        clearInterval(id);
    })
})