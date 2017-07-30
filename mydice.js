var rollBtn = document.getElementById("roll-baby-roll"),
    displaySomething = document.getElementById("display-results");


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randySm = Math.random();
        step1 = (max - min + 1);
        return Math.floor(randySm * (max - min +1)) + min;

    }


    rollBtn.addEventListener("click", function(){
            displaySomething.innerText += getRandomInt(1,6) + "\n";

    });