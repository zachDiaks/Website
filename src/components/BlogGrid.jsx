import { useNavigate } from "react-router-dom";
import "../styles/BlogGrid.css";

export default function BlogGrid() {
  const navigate = useNavigate();
// TODO: Set BlogList variable from constants
  return (
    <div className="blog-grid">
      {BlogList.map((blog, index) => (
        <div
          key={index}
          className="blog-card"
          onClick={() => navigate(`/blog/${blog.path}`)}
        >
          <img src={blog.thumbnail} alt={blog.name} className="blog-thumb" />
          <div className="blog-overlay">
            <span className="blog-title">{blog.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
