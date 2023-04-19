let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let p_prompt = document.getElementById("p_prompt")
let n_prompt = document.getElementById("n_prompt")

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    tg.sendData(JSON.stringify({"prompt": p_prompt}));
    tg.close();
});

