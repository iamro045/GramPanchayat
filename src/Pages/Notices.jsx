// ✅ Notices.jsx (updated to use localStorage)
import { useState, useEffect } from "react";
import "./Notices.css";

function Notices() {
  const [storedNotices, setStoredNotices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notices")) || [];
    setStoredNotices(data);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedNotices = storedNotices.filter((_, i) => i !== indexToRemove);
    localStorage.setItem("notices", JSON.stringify(updatedNotices));
    setStoredNotices(updatedNotices);
  };

  return (
    <div className="notices-container">
      <h1>📢 Public Notices<br /><span className="mr-subtitle">सार्वजनिक सूचना</span></h1>

      <div className="notice-list">
        {storedNotices.length === 0 ? (
          <p>No notices uploaded yet. Go to <a href="/admin-upload">Admin Upload</a></p>
        ) : (
          storedNotices.map((notice, index) => (
            <div key={index} className="notice-item">
              <div className="notice-text">
                <p className="title-en">{notice.title_en}</p>
                <p className="title-mr">{notice.title_mr}</p>
              </div>
              <div className="notice-actions">
                <a href={notice.file} download className="download-btn">⬇️ Download</a>
                <button onClick={() => handleDelete(index)} className="delete-btn">🗑 Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notices;

