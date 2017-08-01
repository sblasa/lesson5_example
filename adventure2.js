var rollDice = document.getElementById("attack-button"),
    displayArea = document.getElementById("outcome"),
    someOutcome1 = ["You have not conquered the spider. Try again.",
                "You are having an effect on the spider. Almost there!",
                "The spider is gaining strength. Are you sure you're trying?",
                "Maybe you need to train more. Go back.",
                "Ugh. He wrapped you up in his web. Prepare to die!",
                "You call that an attack? Weak."];

var getRandomOutcome = function getRandomOutcome(outcomeList) {
                var index = Math.floor(Math.random() * outcomeList.length);
                return outcomeList[index];

}


rollDice.addEventListener("click", function() {
            displayArea.innerText = "";
            var results = getRandomOutcome(someOutcome1);
            displayArea.innerText += results;
        

});


    