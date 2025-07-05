import { useLang } from "../context/LanguageContext";

function Notices() {
  const { lang } = useLang();

  const notices = [
    {
      id: "water-supply",
      title: {
        en: "Water Supply Interruption – 5 July",
        mr: "पाण्याचा पुरवठा खंडित – ५ जुलै"
      },
      file: {
        en: "/documents/water-supply-en.pdf",
        mr: "/documents/water-supply-mr.pdf"
      }
    },
    {
      id: "election",
      title: {
        en: "Gram Sabha Election Notice",
        mr: "ग्रामसभा निवडणूक सूचना"
      },
      file: {
        en: "/documents/election-en.pdf",
        mr: "/documents/election-mr.pdf"
      }
    }
  ];

  return (
    <div>
      <h1>{lang === "en" ? "Public Notices" : "सार्वजनिक सूचना"}</h1>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id}>
            <a href={notice.file[lang]} download>
              {notice.title[lang]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notices;
