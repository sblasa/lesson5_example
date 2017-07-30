var userName = document.getElementById("user-name"),
    makeBtn = document.getElementById("make-a-sentence"),
    sArea = document.getElementById("sentences"),
    clrBtn = document.getElementById("clr-button"),
    somePhrases1 = ["In the days long past", 
            "During the summer",
            "Far away in a town"],
    somePhrases2 = ["there was a mog named",
            "a pretty sloth called",
            "slept a liger named"],
    somePhrases3 = ["who jumped over",
            "who told tales about",
            "who ran about"],
    somePhrases4 = ["a limping frog",
            "a misfortunate fairy",
            "a jesting clown",
            "a weeping willow"];

var getRandomWord = function getRandomWord(wordList) {
    var index = Math.floor(Math.random() * wordList.length);
    return wordList[index];

}

makeBtn.addEventListener("click", function(){
    var results = getRandomWord(somePhrases1);
    results += " " + getRandomWord(somePhrases2);
    results += " " + userName.value;
    results += " " + getRandomWord(somePhrases3);
    results += " " + getRandomWord(somePhrases4) + "\n\n";

    sArea.innerText += results; 

});

clrBtn.addEventListener("click", function(){
    sArea.innerText = "";
});

