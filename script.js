let comments = [
    {
        id: 1,
        username: "tommyasek",
        date: "2023-02-10T08:30:00",
        text: "velice pekne video",
        profilePic: "https://placekitten.com/g/200/300"
    },
    {
        id: 2,
        username: "700moradens007",
        date: "2023-05-12T15:45:00",
        text: "jako pokazde, uzasne video!",
        profilePic: "https://placekitten.com/g/200/300"
    },
    {
        id: 3,
        username: "pademojo",
        date: "2023-11-16T12:00:00",
        text: "za me je bmw lepsi",
        profilePic: "https://placekitten.com/g/200/300"
    }
];

function showComments() {
    const commentsSection = document.getElementById("comments-section");
    commentsSection.innerHTML = "";

    comments.forEach(comment => {
        const visibleComment = createComment(comment);
        commentsSection.appendChild(visibleComment);
    });
}

function createComment(comment) {
    const theComment = document.createElement("div");
    theComment.classList.add("comment");

    const profilePicture = new Image();
    profilePicture.src = comment.profilePic;
    profilePicture.alt = `${comment.username}'s profile picture`;
    profilePicture.classList.add("profile-pic");
    theComment.appendChild(profilePicture);

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    const username = document.createElement("p");
    username.classList.add("username");
    username.textContent = comment.username;

    const text = document.createElement("p");
    text.classList.add("comment-text");
    text.textContent = comment.text;

    const deleteIcon = document.createElement("i");
    deleteIcon.dataset.id = comment.id;
    deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
    deleteIcon.addEventListener("click", (e) => deleteComment(e));

    userInfo.appendChild(username);
    userInfo.appendChild(text);
    theComment.appendChild(userInfo);
    theComment.appendChild(deleteIcon);

    const dateTime = document.createElement("p");
    dateTime.classList.add("comment-time");
    const commentDate = new Date(comment.date);
    dateTime.textContent = `${commentDate.toLocaleDateString()} ${commentDate.toLocaleTimeString()}`;
    theComment.appendChild(dateTime);

    return theComment;
}

function deleteComment(event) {
    const commentId = parseInt(event.target.dataset.id);
    comments = comments.filter(comment => comment.id !== commentId);
    showComments();
}

showComments();
