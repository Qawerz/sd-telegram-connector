let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.setText("Отправить запрос");

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";
tg.MainButton.show();

let btn = document.getElementById("btn");

let p_prompt = document.getElementById("p_prompt")
let n_prompt = document.getElementById("n_prompt")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData({p_prompt, n_prompt}); 
	//при клике на основную кнопку отправляем данные в строковом виде
});
