import { useState } from "react";
import "./EventCalendar.css";
import jsPDF from "jspdf";
import AdminEvents from "./AdminEvents";

function EventCalendar() {
  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(today.getMonth()); // 0-11
  const [year, setYear] = useState(today.getFullYear());

  const [events, setEvents] = useState({
    "2025-07-10": "Gram Sabha Meeting",
    "2025-07-14": "Health Check-up Camp",
    "2025-07-26": "Tree Plantation Drive",
    "2025-08-02": "Women Empowerment Workshop"
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const getDateKey = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = getDateKey(day);
    const hasEvent = events[dateKey];
    const isSelected = selectedDate === dateKey;
    const isToday = dateKey === todayKey;

    calendarDays.push(
      <div
        key={dateKey}
        className={`calendar-day 
          ${hasEvent ? "event-day" : ""} 
          ${isSelected ? "selected-day" : ""} 
          ${isToday ? "today-day" : ""}`}
        onClick={() => setSelectedDate(dateKey)}
      >
        {day} {isToday && hasEvent && "🚨"}
      </div>
    );
  }

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Events - ${months[month]} ${year}`, 10, 20);

    let y = 30;
    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = getDateKey(i);
      if (events[dateKey]) {
        doc.text(`${dateKey}: ${events[dateKey]}`, 10, y);
        y += 10;
      }
    }

    if (y === 30) {
      doc.text("No events this month.", 10, y);
    }

    doc.save(`Events_${months[month]}_${year}.pdf`);
  };

  return (
    <div className="calendar-container">
      <h2>📅 Event Calendar</h2>

      {events[todayKey] && (
        <div className="today-banner">
          🔔 <strong>Today's Event:</strong> {events[todayKey]}
        </div>
      )}

      <div className="calendar-controls">
        <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))}>
          {months.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
          {[2024, 2025, 2026].map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <button onClick={exportToPDF} className="export-btn">
          📤 Export as PDF
        </button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-header">Sun</div>
        <div className="calendar-header">Mon</div>
        <div className="calendar-header">Tue</div>
        <div className="calendar-header">Wed</div>
        <div className="calendar-header">Thu</div>
        <div className="calendar-header">Fri</div>
        <div className="calendar-header">Sat</div>
        {calendarDays}
      </div>

      <div className="event-details">
        {selectedDate && (
          events[selectedDate] ? (
            <p><strong>{selectedDate}:</strong> {events[selectedDate]}</p>
          ) : (
            <p><strong>{selectedDate}:</strong> No events</p>
          )
        )}
      </div>

      <AdminEvents
        onAdd={(date, description) =>
          setEvents((prev) => ({ ...prev, [date]: description }))
        }
      />
    </div>
  );
}

export default EventCalendar;
