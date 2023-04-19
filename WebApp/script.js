let tg = window.Telegram.WebApp;

tg.expand();

let p_prompt = document.getElementById("p_prompt")
let n_prompt = document.getElementById("n_prompt")
let width = document.getElementById("n_width")
let height = document.getElementById("n_height")
let seed = document.getElementById("seed")
let steps = document.getElementById("n_steps")

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    tg.sendData(JSON.stringify(
        {
            "prompt": p_prompt.value,
            "negative_prompt": n_prompt.value,
            "steps": steps.value,
            "width": width.value,
            "height": height.value,
            "seed": seed.value
        }));
    tg.close();
});

