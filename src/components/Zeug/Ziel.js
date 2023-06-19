import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/3.jpg";
import Mountain4 from "../../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Ziel = () => {
  return (
    <div className="ziel">
      <h1>Herzlich willkommen auf HealthBoost!</h1>
      <p>
        Wir freuen uns, dass Sie den Weg zu unserer Seite gefunden haben. Bei
        HealthBoost geht es darum, Ihre Gesundheit und Ihr Wohlbefinden zu
        fördern. Tauchen Sie ein in eine Welt voller nützlicher Informationen,
        Tipps und Ressourcen, die Ihnen helfen, Ihre Gesundheitsziele zu
        erreichen. Unser engagiertes Team von Experten steht Ihnen zur Seite, um
        Ihnen dabei zu helfen, Ihren Lebensstil zu verbessern und Ihre
        Gesundheit zu stärken. Wir laden Sie ein, unsere umfangreiche Sammlung
        von Artikeln, Ratschlägen und Programmen zu erkunden, um Ihren
        Gesundheits-Boost zu finden. Vielen Dank, dass Sie Teil unserer
        HealthBoost-Gemeinschaft sind. Wir wünschen Ihnen viel Freude und Erfolg
        auf Ihrer Reise zu einem gesünderen und glücklicheren Leben!
      </p>

      <DestinationData
        className="first-des"
        heading="Vitamine - Die Bausteine für Ihre Gesundheit"
        text="Willkommen auf unserer Webseite, dem besten Ort, um hochwertige Vitamine für Ihre Gesundheit und Ihr Wohlbefinden zu entdecken! Unsere umfangreiche Auswahl an Vitaminen unterstützt Sie dabei, Ihren Körper optimal mit den essentiellen Nährstoffen zu versorgen, die er benötigt. Erfahren Sie mehr über unsere Produkte und wie sie Ihr Leben verbessern können."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Erfahren Sie, wie Vitamine Ihr Wohlbefinden verbessern können"
        text="Unsere Vitamin-Sortiment umfasst eine Vielzahl von Optionen, die speziell auf Ihre individuellen Bedürfnisse zugeschnitten sind. Egal, ob Sie nach einem Vitamin C-Boost suchen, Ihre Knochengesundheit mit Vitamin D unterstützen oder Ihre Haut mit Vitamin E pflegen möchten - wir haben das Richtige für Sie. Unsere Produkte werden sorgfältig ausgewählt und unter strengen Qualitätsstandards hergestellt, um Ihnen die bestmöglichen Ergebnisse zu liefern."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Ziel;
