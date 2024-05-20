document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addPostButton').addEventListener('click', addPost);
});

function addPost() {
    const name = document.getElementById('name').value;
    const post = document.getElementById('post').value;

    if (name && post) {
        const postsContainer = document.getElementById('posts');

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postHeader = document.createElement('h3');
        postHeader.textContent = name;

        const postContent = document.createElement('p');
        postContent.textContent = post;

        const feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('feedback');

        const replyForm = document.createElement('div');
        replyForm.classList.add('reply-form');
        const replyInput = document.createElement('input');
        replyInput.setAttribute('type', 'text');
        replyInput.setAttribute('placeholder', 'Host reply');
        const replyButton = document.createElement('button');
        replyButton.textContent = 'Reply';
        replyButton.addEventListener('click', () => addReply(feedbackDiv, replyInput));

        replyForm.appendChild(replyInput);
        replyForm.appendChild(replyButton);

        postDiv.appendChild(postHeader);
        postDiv.appendChild(postContent);
        postDiv.appendChild(feedbackDiv);
        postDiv.appendChild(replyForm);

        postsContainer.appendChild(postDiv);

        document.getElementById('name').value = '';
        document.getElementById('post').value = '';
    } else {
        alert('Please enter both your name and post.');
    }
}

function addReply(feedbackDiv, replyInput) {
    const replyText = replyInput.value;
    if (replyText) {
        feedbackDiv.textContent = "Sumeiya & Edgar: " + replyText;
        replyInput.value = '';
    } else {
        alert('Please enter a reply.');
    }
}
