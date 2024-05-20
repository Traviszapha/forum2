document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const message = document.getElementById('message').value.trim();

        if (username && message) {
            const postElement = createPostElement(username, message);
            postsContainer.prepend(postElement);

            postForm.reset();
        } else {
            alert('Please enter both a username and a message.');
        }
    });

    function createPostElement(username, message) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const usernameDiv = document.createElement('div');
        usernameDiv.classList.add('username');
        usernameDiv.textContent = username;

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = message;s

        postDiv.appendChild(usernameDiv);
        postDiv.appendChild(messageDiv);

        return postDiv;
    }
});
