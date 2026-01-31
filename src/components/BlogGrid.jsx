import { useNavigate } from "react-router-dom";
import { BlogList } from "../utils/constants";
import "./BlogGrid.css";

export default function BlogGrid() {
  const navigate = useNavigate();
  BlogList.forEach((item) => console.log(`../resources/${item.thumbnail}`))
  return (
    <div className="blog-grid">
      {BlogList.map((blog, index) => (
        <div
          key={index}
          className="blog-card"
          onClick={() => navigate(`/${blog.path}`)}
        >
          <img src={require(`../resources/${blog.thumbnail}`)} alt={blog.name} className="blog-thumb" />
          <div className="blog-overlay">
            <span className="blog-title">{blog.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
