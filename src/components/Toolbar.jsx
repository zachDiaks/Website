import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, PinOff, Menu } from "lucide-react";
import './Toolbar.css'

const Toolbar = () => {
  const [pinned, setPinned] = useState(true);
  const [open, setOpen] = useState(true);

  const togglePin = () => setPinned(!pinned);
  const toggleOpen = () => {
    if (!pinned) setOpen(!open);
  };

  return (
    <div className="Toolbar">
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
            <div className="ToolbarLink">
              <div>
                <Link to="/">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/blog">
                  Blog
                </Link>
              </div>
              <div>
                <a href="https://github.com/zachDiaks/Website/blob/main/src/resources/resume.pdf">
                  Resume
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/zachary-diaks/">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Top bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: open ? 0 : -60 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >

        {/* Right side - buttons */}
        <div>
          <button
            onClick={togglePin}
            className="p-2 rounded-full hover:bg-gray-800 transition"
            title={pinned ? "Unpin toolbar" : "Pin toolbar"}
          >
            {pinned ? <Pin size={18} /> : <PinOff size={18} />}
          </button>

          {!pinned && (
            <button
              onClick={toggleOpen}
              className="p-2 rounded-full hover:bg-gray-800 transition"
              title={open ? "Collapse toolbar" : "Expand toolbar"}
            >
              <Menu size={18} />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Toolbar;
