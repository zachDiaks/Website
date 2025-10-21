import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, PinOff, Menu } from "lucide-react";
import { BlogList } from "../utils/constants";
import "./Toolbar.css";

const Toolbar = () => {
  const [pinned, setPinned] = useState(true);
  const [open, setOpen] = useState(true);

  const togglePin = () => setPinned(!pinned);
  const toggleOpen = () => {
    if (!pinned) setOpen(!open);
  };

  const [showBlogDropdown, setShowBlogDropdown] = useState(false)

  const renderBlogList = (blogList) => {
    const linkList = blogList.map((blog) => {
      return <Link to={`/${blog.path}`}>{`${blog.name}`}</Link>
    })
    return linkList
  }

  return (
    <div className="Toolbar relative">
      {/* Expanded menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-800 text-white shadow-md rounded-b-2xl px-6 py-3"
          >
            <div className="ToolbarLink flex justify-center gap-6">
              <Link to="/">Home</Link>
              <div 
                className="BlogDropdown ToolbarLink"
                onMouseEnter={() => setShowBlogDropdown(true)}
                onMouseLeave={() => setShowBlogDropdown(false)}
              >
                Blog
                {showBlogDropdown && (
                  renderBlogList(BlogList)
                )}
              </div>
              <a href="https://github.com/zachDiaks/Website/blob/main/src/resources/resume.pdf">
                Resume
              </a>
              <a href="https://www.linkedin.com/in/zachary-diaks/">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating control buttons (always visible) */}
      <div className="absolute top-2 right-2 flex gap-2 z-50">
        <button
          onClick={togglePin}
          className="p-2 rounded-full hover:bg-gray-800 text-white bg-gray-700 transition"
          title={pinned ? "Unpin toolbar" : "Pin toolbar"}
        >
          {pinned ? <Pin size={20} /> : <PinOff size={20} />}
        </button>

        {!pinned && (
          <button
            onClick={toggleOpen}
            className="p-2 rounded-full hover:bg-gray-800 text-white bg-gray-700 transition"
            title={open ? "Collapse toolbar" : "Expand toolbar"}
          >
            <Menu size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
