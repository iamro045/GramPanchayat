import { useState } from "react";
import "./AdminEvents.css";

function AdminEvents({ onAdd }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !description) return alert("Fill both fields!");
    onAdd(date, description);
    setDate("");
    setDescription("");
  };

  return (
    <div className="admin-form">
      <h3>🔐 Admin: Add New Event</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">➕ Add Event</button>
      </form>
    </div>
  );
}

export default AdminEvents;
