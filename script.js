let comments = [
    {
        name: "Tomas Dvoracek",
        date: "2023-12-10",
        text: "top"
    },
    {
        name: "Denis Moravec",
        date: "2023-12-11",
        text: "Velice povedene!"
    },
    {
        name: "Patrik Moravec",
        date: "2023-12-12",
        text: "Super video!"
    }
];

let commentsSection = document.getElementById("comments-section");

comments.forEach(comment => {
    let commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    let nameElement = document.createElement("strong");
    nameElement.textContent = comment.name;

    let dateElement = document.createElement("p");
    dateElement.textContent = `${comment.date}`;
    dateElement.classList.add("date");

    let textElement = document.createElement("p");
    textElement.textContent = comment.text;

    commentElement.appendChild(nameElement);
    commentElement.appendChild(dateElement);
    commentElement.appendChild(textElement);

    commentsSection.appendChild(commentElement);
});
