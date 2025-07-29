import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // 6. Fetch data from API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        this.setState({ hasError: true });
        alert("Error fetching posts: " + error.message);
      });
  };

  // 7. Call loadPosts after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // 9. Handle rendering errors
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("An error occurred in the component: " + error.message);
  }

  // 8. Render post titles and bodies
  render() {
    const { posts } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
