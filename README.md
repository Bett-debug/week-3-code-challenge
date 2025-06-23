   week-3-code-challenge

  Post Pulse - Simple Blog Post Manager
This is a simple web application for managing blog posts. It lets you:
.View all blog posts
.View a single post in detail
.Add a new blog post
.Delete a blog post

  Project Structure:

1.index.html - Main HTML file

2.styles.css - Basic styling

3.index.js - JavaScript for fetching and displaying posts

4.db.json - JSON database for storing posts (used with json-server)

   How to Run:

1.Install json-server:
2.npm install -g json-server

3.Start the backend server:
4.json-server --watch db.json

Open the app in your browser by opening index.html 

Endpoints Used:

1.GET /posts – Get all posts

2.GET /posts/:id – Get one post

3.POST /posts – Add a new post

4.DELETE /posts/:id – Delete a post
