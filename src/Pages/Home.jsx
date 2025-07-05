import EventCalendar from "../Components/EventCalendar";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>🌾 Welcome to Our Village</h1>
        <p>
          Our Grampanchayat is committed to the growth and development of the community.
        </p>
      </header>

      <section className="calendar-section">
        <h2>📅 Upcoming Events</h2>
        <EventCalendar />
      </section>
    </div>
  );
}

export default Home;
