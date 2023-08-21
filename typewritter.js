

const text = document.querySelector(".highlighted");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "a Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "studying BSC.CSIT";
    }, 4000);
    setTimeout(() => {
        text.textContent = "from Batch 2076";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);