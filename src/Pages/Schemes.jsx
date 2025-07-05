import "./Schemes.css";

function Schemes() {
  const schemeList = [
    {
      title_en: "Pradhan Mantri Awas Yojana (PMAY)",
      title_mr: "प्रधानमंत्री आवास योजना",
      desc: "Affordable housing scheme for rural and urban poor."
    },
    {
      title_en: "MNREGA – Mahatma Gandhi Rural Employment",
      title_mr: "महात्मा गांधी ग्रामीण रोजगार हमी योजना",
      desc: "Guaranteed 100 days of wage employment in a year."
    },
    {
      title_en: "Ujjwala Yojana",
      title_mr: "प्रधानमंत्री उज्ज्वला योजना",
      desc: "Free LPG connections to women from BPL households."
    },
    {
      title_en: "Jal Jeevan Mission",
      title_mr: "जल जीवन मिशन",
      desc: "Providing safe and adequate drinking water to every household."
    }
  ];

  return (
    <div className="schemes-container">
      <h1>🏛️ Government Schemes<br /><span className="mr-subtitle">शासकीय योजना</span></h1>

      <div className="scheme-cards">
        {schemeList.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h3>{scheme.title_en}</h3>
            <p className="marathi">{scheme.title_mr}</p>
            <p className="desc">{scheme.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schemes;
