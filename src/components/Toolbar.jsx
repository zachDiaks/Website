import{ useState } from "react";
import { Link } from "react-router-dom";
import { BlogList } from "../utils/constants";
import "./Toolbar.css";

const Toolbar = () => {

  const [showBlogDropdown, setShowBlogDropdown] = useState(false)

  const renderBlogList = (blogList) => {
    const linkList = blogList.map((blog) => {
      return <Link to={`/${blog.path}`}>{`${blog.name}`}</Link>
    })
    return linkList
  }

  const handleMouseover = (shouldSet) => {
    /**
     * On mouseover:
     *  1) When entering, set new background to make the bloglist more visible
     *  2) When exiting, restore background
     *  3) Either expand or destroy the dropdown by setting the div's state
     */
    const targetElement = document.querySelector(".BlogLinkDiv")
    if (shouldSet && targetElement) {
      targetElement.classList.remove('BlogDropdown')
      targetElement.classList.add('BlogDropdown-Expanded')
    } else if(targetElement) {
      targetElement.classList.remove('BlogDropdown-Expanded')
      targetElement.classList.add('BlogDropdown')
    }
    setShowBlogDropdown(shouldSet)
  }

  return (
    <div className="Toolbar relative">

      <div className="ToolbarLink flex justify-center gap-6">
        <Link to="/">Home</Link>
        <div
          className="BlogLinkDiv BlogDropdown ToolbarLink"
          onMouseEnter={() => handleMouseover(true)}
          onMouseLeave={() => handleMouseover(false)}
        >
          Blog
          {showBlogDropdown && (
            renderBlogList(BlogList)
          )}
        </div>
        <a href="https://github.com/zachDiaks">Projects</a>
        <a href="https://github.com/zachDiaks/Website/blob/main/src/resources/resume.pdf">
          Resume
        </a>
        <a href="https://www.linkedin.com/in/zachary-diaks/">LinkedIn</a>
      </div>

    </div>
  );
};

export default Toolbar;
