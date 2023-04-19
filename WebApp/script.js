let tg = window.Telegram.WebApp;

tg.expand();


let btn = document.getElementById("btn");

let p_prompt = document.getElementById("p_prompt")
let n_prompt = document.getElementById("n_prompt")

btn.addEventListener("click",function(){
	tg.sendData({p_prompt, n_prompt}); 
});
