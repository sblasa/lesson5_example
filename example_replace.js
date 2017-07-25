var textSection = document.getElementById("display-this"),
	printBtn = document.getElementById("p-button"),
	clearBtn = document.getElementById("c-button"),
	printArea = document.getElementById("print-in-here");

	
	printBtn.addEventListener("click", function(){
		printArea.innerText += "\n" + textSection.value;

	});

	clearBtn.addEventListener("click", function(){
		printArea.innerHTML = "";
	
	});