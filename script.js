let comments = [
    {
        username: "tommyasek",
        date: "2023-01-03T03:02:00Z",
        text: "velice pekne video"
    },
    {
        username: "700moradens007",
        date: "2023-01-03T12:53:00Z",
        text: "jako pokazde, uzasne video!"
    },
    {
        username: "pademojo",
        date: "2023-01-03T02:39:00Z",
        text: "za me je bmw lepsi"
    },
];

let commentsSection = document.getElementById("comments-section");

comments.forEach(comment => {
    let commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    let userInfoElement = document.createElement("p");
    userInfoElement.classList.add("user-info");
    let commentDate = new Date(comment.date);
    userInfoElement.textContent = `${comment.username} - ${commentDate.toLocaleDateString()} ${commentDate.toLocaleTimeString()}`;

    let textElement = document.createElement("p");
    textElement.classList.add("comment-text");
    textElement.textContent = comment.text;

    commentElement.appendChild(userInfoElement);
    commentElement.appendChild(textElement);

    commentsSection.appendChild(commentElement);
});
