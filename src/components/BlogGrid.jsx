import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BlogList } from "../utils/constants";
import "./BlogGrid.css";

export default function BlogGrid() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = useMemo(() => {
    const tagSet = new Set();
    BlogList.forEach((blog) => {
      if (Array.isArray(blog.tags)) {
        blog.tags.forEach((tag) => tagSet.add(tag));
      }
    });
    return ["All", ...Array.from(tagSet)];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (selectedTag === "All") {
      return BlogList;
    }
    return BlogList.filter(
      (blog) => Array.isArray(blog.tags) && blog.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  return (
    <div className="blog-container">
      {allTags.length > 1 && (
        <div className="tag-filter-bar">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag-pill ${selectedTag === tag ? "active" : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="blog-grid">
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            className="blog-card"
            onClick={() => navigate(`/${blog.path}`)}
          >
            {blog.tags && blog.tags.length > 0 && (
              <div className="card-tags">
                {blog.tags.map((tag) => (
                  <span key={tag} className="card-tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <img
              src={require(`../resources/${blog.thumbnail}`)}
              alt={blog.name}
              className="blog-thumb"
            />
            <div className="blog-overlay">
              <span className="blog-title">{blog.name}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p className="no-blogs-message">No blogs found for "{selectedTag}".</p>
      )}
    </div>
  );
}

