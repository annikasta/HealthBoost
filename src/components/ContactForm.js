import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Wir stehen Ihnen gerne zur Verfügung - Kontaktieren Sie uns!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="E-Mail Adresse" />
        <input placeholder="Betreff" />
        <textarea placeholder="Ihre Nachricht an uns!" rows="4"></textarea>
        <button>Nachricht senden</button>
      </form>
    </div>
  );
}

export default ContactForm;
