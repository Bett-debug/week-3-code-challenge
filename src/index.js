
const postList = document.getElementById('post-list');
const postDetail = document.getElementById('post-detail');
const newPostForm = document.getElementById('new-post-form');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayPosts();
});

// Display all posts
function displayPosts() {
  fetch('http://localhost:3000/blogPosts')
    .then(res => res.json())
    .then(posts => {
      postList.innerHTML = '';
      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        li.dataset.id = post.id;
        li.addEventListener('click', () => showPost(post.id));
        postList.appendChild(li);
      });
    });
}

// Show single post
function showPost(id) {
  fetch(`${'http://localhost:3000/'}/${id}`)
    .then(res => res.json())
    .then(post => {
      postDetail.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>By:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;
    });
}

// Create new post
newPostForm.addEventListener('submit', e => {
  e.preventDefault();
  const newPost = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    content: document.getElementById('content').value
  };

  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost)
  })
    .then(res => res.json())
    .then(() => {
      newPostForm.reset();
      displayPosts();
    });
});

// Delete post
function deletePost(id) {
  fetch(`${'http://localhost:3000/'}/${id}`, 
    { method: 'DELETE' })
    .then(() => {
      postDetail.innerHTML = '';
      displayPosts();
    });
}
















































































