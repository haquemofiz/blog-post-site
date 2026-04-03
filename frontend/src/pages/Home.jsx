import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postsAPI } from '../services/api';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await postsAPI.getAll();
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to BlogHub</h1>
        <p>Share your thoughts and ideas with the world</p>
      </div>
      
      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to create one!</p>
        ) : (
          posts.map(post => (
            <div key={post._id} className="post-card">
              <h2>{post.title}</h2>
              <p className="post-meta">
                By <strong>{post.author.username}</strong> • {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="post-excerpt">{post.content.substring(0, 150)}...</p>
              <div className="post-footer">
                <span>❤️ {post.likes} likes</span>
                <span>💬 {post.comments.length} comments</span>
              </div>
              <Link to={`/post/${post._id}`} className="read-more">Read More →</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
