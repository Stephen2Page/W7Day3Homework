﻿function chooseAnswer() {
    /*get random number
    retrieve answer from array
    return answer
    */
    var num = Math.floor(Math.random() * 20);
    console.log(num);
    var answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    document.getElementById("answer").innerHTML = answers[num];

}