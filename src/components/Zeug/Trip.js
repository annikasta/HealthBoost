import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../assets/p3.jpg";
import Trip2 from "../../assets/p5.jpg";
import Trip3 from "../../assets/p10.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Must-Haves</h1>
      <p>
        Holen Sie sich die essentiellen Nährstoffe, die Ihr Körper braucht, um
        gesund und vital zu bleiben. Verpassen Sie nicht die Gelegenheit, Ihre
        Vitaminversorgung zu optimieren und Ihr Wohlbefinden zu steigern. Jetzt
        entdecken!
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Vitamin C"
          text="Wichtiges wasserlösliches Vitamin mit antioxidativen Eigenschaften, das Immunsystem stärkt und die Wundheilung fördert."
        />
        <TripData
          image={Trip2}
          heading="Vitamin D3 K2"
          text="Vitamin D3 erhöht die Calciumaufnahme, während Vitamin K2 sicherstellt, dass das Calcium effektiv genutzt wird und nicht in den Arterien abgelagert wird."
        />
        <TripData
          image={Trip3}
          heading="Zink"
          text="Wichtig für das Immunsystem, die Wundheilung, den Protein-Stoffwechsel und die DNA-Synthese."
        />
      </div>
    </div>
  );
}

export default Trip;
