import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postsAPI } from '../services/api';
import './PostDetail.css';

function PostDetail({ user }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await postsAPI.getById(id);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setLoading(false);
    }
  };

  const handleLike = async () => {
    try {
      const response = await postsAPI.like(id);
      setPost(response.data);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to comment');
      return;
    }

    try {
      const response = await postsAPI.addComment(id, { content: comment });
      setPost(response.data);
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <div className="post-header">
        <h1>{post.title}</h1>
        <p className="post-meta">
          By <strong>{post.author.username}</strong> • {new Date(post.createdAt).toLocaleDateString()}
        </p>
        {post.category && <span className="category">{post.category}</span>}
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-actions">
        <button onClick={handleLike} className="like-btn">❤️ Like ({post.likes})</button>
      </div>

      <div className="comments-section">
        <h2>Comments ({post.comments.length})</h2>
        
        {user && (
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              required
            />
            <button type="submit">Post Comment</button>
          </form>
        )}

        <div className="comments-list">
          {post.comments.map((c, idx) => (
            <div key={idx} className="comment">
              <p className="comment-author">{c.author.username}</p>
              <p className="comment-content">{c.content}</p>
              <p className="comment-date">{new Date(c.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;