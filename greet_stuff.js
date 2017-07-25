var whoAreYou = document.getElementById("who-is-it"),
	greetingArea = document.getElementById("greet-thing"),
	greetingBtn = document.getElementById("gr-button"),
	helloBtn = document.getElementById("h-button"),
	howdyBtn = document.getElementById("how-button"),
	backAtYaBtn = document.getElementById("bay-button");

var clearName = function() {
	document.getElementById("who-is-it").value = "";
}


    greetingBtn.addEventListener("click", function(){
        greetingArea.innerText += "\n" + greetingBtn.value + " " + whoAreYou.value;
        // document.getElementById("who-to-greet").value = "";
        clearName;
    });

helloBtn.addEventListener("click", function(){
	greetingArea.innerText += "\n" + helloBtn.value + " " + whoAreYou.value;
	clearName;
});


howdyBtn.addEventListener("click", function(){
	greetingArea.innerText += "\n" + howdyBtn.value + " " + whoAreYou.value;
	clearName;
});

backAtYaBtn.addEventListener("click", function(){
	greetingArea.innerText += "\n" + backAtYaBtn.value +  " " + whoAreYou.value;
	clearName;
});

