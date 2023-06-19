import React, { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Was sind die Vorteile von Vitamin C?",
      answer:
        "Vitamin C hat viele Vorteile für die Gesundheit. Es unterstützt das Immunsystem, fördert die Kollagenproduktion für gesunde Haut, wirkt als Antioxidans zum Schutz der Zellen vor Schäden und hilft bei der Aufnahme von Eisen aus pflanzlichen Quellen."
    },
    {
      question: "Welche Vitamine sind gut für die Haare?",
      answer:
        "Vitamine wie Biotin, Vitamin E und Vitamin D sind bekannt dafür, das Haarwachstum und die Haargesundheit zu fördern. Sie können dabei helfen, das Haar zu stärken, die Haarstruktur zu verbessern und Haarausfall zu reduzieren."
    },
    {
      question:
        "Wie lange dauert es, bis man die Vorteile von Nahrungsergänzungsmitteln bemerkt?",
      answer:
        "Die Zeit, bis man die Vorteile von Nahrungsergänzungsmitteln bemerkt, kann je nach Person und Produkt variieren. In der Regel dauert es jedoch einige Wochen bis Monate, um signifikante Veränderungen zu sehen. Es ist wichtig, Nahrungsergänzungsmittel regelmäßig und über einen längeren Zeitraum einzunehmen, um optimale Ergebnisse zu erzielen."
    },
    {
      question:
        "Ist die Einnahme von Nahrungsergänzungsmitteln für meine Gesundheit unproblematisch?",
      answer:
        "Die Zeit, bis man die Vorteile von Nahrungsergänzungsmitteln bemerkt, kann je nach Person und Produkt variieren. In der Regel dauert es jedoch einige Wochen bis Monate, um signifikante Veränderungen zu sehen. Es ist wichtig, Nahrungsergänzungsmittel regelmäßig und über einen längeren Zeitraum einzunehmen, um optimale Ergebnisse zu erzielen."
    },
    {
      question:
        "Sind eure Vitamine und Nahrungsergänzungsmittel für Vegetarier oder Veganer geeignet?",
      answer:
        "Ja, wir führen eine Auswahl an Vitaminen und Nahrungsergänzungsmitteln, die für Vegetarier und Veganer geeignet sind. Diese Produkte enthalten keine tierischen Inhaltsstoffe und werden nach den entsprechenden Standards hergestellt."
    },
    {
      question:
        "Welche sind die häufigsten Kundenfavoriten und Bestseller in eurem Shop?",
      answer:
        "Zu unseren Kundenfavoriten und Bestsellern gehören häufig Produkte wie Vitamin C, Zink, Vitamin D, Kurkuma, Passionsblüte, Eisen, L-Arginin und Jod-Komplex. Diese Produkte werden aufgrund ihrer breiten gesundheitlichen Vorteile und Wirksamkeit von vielen Kunden bevorzugt."
    },
    {
      question:
        "Wie kann ich sicher sein, dass eure Vitamine und Nahrungsergänzungsmittel von hoher Qualität sind?",
      answer:
        "Bei der Auswahl unserer Produkte legen wir großen Wert auf Qualität und Sicherheit. Unsere Vitamine und Nahrungsergänzungsmittel stammen von vertrauenswürdigen Herstellern, die strenge Qualitätsstandards einhalten. Zusätzlich führen wir regelmäßige Tests durch, um sicherzustellen, dass unsere Produkte den höchsten Qualitätsansprüchen entsprechen."
    }
  ];

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-question">{faq.question}</div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
