import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>HealthBoost</h1>
          <p>"Natürliche Power für Ihr Wohlbefinden!"</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://instagram.com/h3althboost?igshid=OGQ5ZDc2ODk2ZA==">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Rechtliches</h4>
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
          <a href="/">Cookie-Einstellungen</a>
          <a href="/">AGB</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="/">Kontakt & FAQ</a>
          <a href="/">Bestellung verfolgen</a>
          <a href="/">Versand</a>
          <a href="/">Rückerstattung</a>
        </div>
        <div>
          <h4>Karriere</h4>
          <a href="/">Unser Team</a>
          <a href="/">Stellenangebote</a>
          <a href="/">Newsletter</a>
          <a href="/">Presse</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
