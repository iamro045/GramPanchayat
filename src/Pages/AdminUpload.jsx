// ✅ AdminUpload.jsx
import { useState } from "react";
import "./AdminUpload.css";

function AdminUpload() {
  const [titleEn, setTitleEn] = useState("");
  const [titleMr, setTitleMr] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleEn || !titleMr || !file) return alert("All fields are required!");

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result;

      const newNotice = {
        title_en: titleEn,
        title_mr: titleMr,
        file: base64File,
      };

      const existingNotices = JSON.parse(localStorage.getItem("notices")) || [];
      const updatedNotices = [...existingNotices, newNotice];

      localStorage.setItem("notices", JSON.stringify(updatedNotices));

      setTitleEn("");
      setTitleMr("");
      setFile(null);
      alert("✅ Notice uploaded successfully!");
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="admin-upload-container">
      <h2>📤 Upload Public Notice</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          placeholder="Title (English)"
          value={titleEn}
          onChange={(e) => setTitleEn(e.target.value)}
        />
        <input
          type="text"
          placeholder="शीर्षक (मराठी)"
          value={titleMr}
          onChange={(e) => setTitleMr(e.target.value)}
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AdminUpload;