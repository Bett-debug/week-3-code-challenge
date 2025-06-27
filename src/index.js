const postList = document.getElementById('post-list');
const postDetail = document.getElementById('post-detail');
const newPostForm = document.getElementById('new-post-form');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayPosts();
});

// Display all posts

function displayPosts() {
  fetch('./db.json')
    .then(res => res.json())
    .then(data => {
      postList.innerHTML = '';
      data.blogPosts.forEach(post => {
        const li = document.createElement('li');
        li.className = 'post-item bg-gray-300 p-4 mb-2 rounded-lg';
        li.innerHTML = `
          <h3 class="font-bold">${post.title}</h3>
          <p><strong>By:</strong> ${post.author}</p>
          <p>${post.content}</p>
          <button class="bg-red-500 text-white ml-2 rounded-sm" onclick=alert"deletePost(${post.id})">Delete</button>

        `;
        postList.appendChild(li);
      });
      
    });
}


function deletePost(postId) {
  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (!confirmDelete) return; 
  fetch(`./db.json/${postId}`, {
    method: 'DELETE'
  })
  .then(() => displayPosts()) 
  .catch(err => console.error('Delete failed:', err));
}






// // Create new post
// newPostForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const newPost = {
//     title: document.getElementById('title').value,
//     author: document.getElementById('author').value,
//     content: document.getElementById('content').value
//   };

//   fetch("db.json", {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newPost)
//   })
//     .then(res => res.json())
//     .then(() => {
//       newPostForm.reset();
//       displayPosts();
//     });
// });

// // Delete post
// function deletePost(id) {
//   fetch(`${"db.json"}/${id}`, 
//     { method: 'DELETE' })
//     .then(() => {
//       postDetail.innerHTML = '';
//       displayPosts();
//     });
// }
















































































