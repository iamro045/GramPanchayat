import { useState } from "react";
import "./Gallery.css";


const images = [
  { src: "/images/festival1.jpg", caption: "Village Festival" },
  { src: "/images/school.jpg", caption: "ZP School" },
  { src: "/images/health-camp.jpg", caption: "Health Camp" },
  { src: "/images/cleanliness.jpg", caption: "Swachhata Abhiyan" }
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.caption}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.caption} />
            <p>{selected.caption}</p>
            <button onClick={() => setSelected(null)}>Close ✖</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
