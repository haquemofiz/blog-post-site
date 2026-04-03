import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postsAPI } from '../services/api';
import './CreatePost.css';

function CreatePost({ user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General',
    tags: ''
  });
  const [error, setError] = useState('');

  if (!user) {
    return (
      <div className="create-post">
        <p>Please login to create a post.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim())
      };
      await postsAPI.create(postData);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating post');
    }
  };

  return (
    <div className="create-post">
      <h1>Create New Post</h1>
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        
        <textarea
          name="content"
          placeholder="Post Content"
          value={formData.content}
          onChange={handleChange}
          required
          rows="10"
        />
        
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>General</option>
          <option>Technology</option>
          <option>Travel</option>
          <option>Food</option>
          <option>Lifestyle</option>
        </select>
        
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
        />
        
        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
}

export default CreatePost;