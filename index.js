console.log("hello");

const tweets = [
    {
        user: "Super User 1",
        message: "Ich finde Vision Tweet voll toll! Echt eine super App!",
        avatar: "https://picsum.photos/100?random=1"
    },
    {
        user: "Marco Meyer",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus sunt odio error, ab itaque excepturi hic. Laudantium, obcaecati facere!",
        avatar: "https://picsum.photos/100?random=2"
    }
];

const user = {
    username: "Lutz Liebig",
    avatar: "https://picsum.photos/100?random=190"
}


document.addEventListener('DOMContentLoaded', function () {
    initializeTweets();
});

function initializeTweets() {
    const list = document.getElementById("tweet-list");

    tweets.forEach(el => {
        const tweet = document.createElement("div");
        tweet.classList.add("tweet");
        tweet.innerHTML = "<img src=\""+ el.avatar +"\" alt=\"no pic found\" class=\"avatar\">\n" +
            "            <div class=\"middle-container\">\n" +
            "                <span class=\"username\">" + el.user + "</span>\n" +
            "                <p>" + el.message + "</p>\n" +
            "            </div>\n" +
            "            <button class=\"x-button\" onclick=\"deleteTweet(this)\">X</button>";
        list.appendChild(tweet);
    });
}

function addTweet() {
    const list = document.getElementById("tweet-list");
    const message = document.getElementById("message-box").value;

    const tweet = document.createElement("div");
    tweet.classList.add("tweet");
    tweet.innerHTML = " <img src=\"" + user.avatar +"\" alt=\"no pic found\" class=\"avatar\">\n" +
        "            <div class=\"middle-container\">\n" +
        "                <span class=\"username\">Super User 123</span>\n" +
        "                <p>" + message + "</p>\n" +
        "            </div>\n" +
        "            <button class=\"x-button\" onclick=\"deleteTweet(this)\">X</button>";

    list.appendChild(tweet);
}

function deleteTweet(delButton) {
    delButton.parentNode.remove();
}