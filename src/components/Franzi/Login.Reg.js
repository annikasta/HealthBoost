import React, { useState } from "react";
import "./Login.Reg.css";

const Appf = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForm, setShowForm] = useState(true); // Ändere auf true, um das Anmeldeformular standardmäßig anzuzeigen
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState(false); // Hinzufügen des Zustands für die Passwortanforderungen

  const handleExistingButton = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(""); // Fehlermeldung zurücksetzen

    // Email-Validierung
    if (isSignUp && !validateEmail(email)) {
      setError("E-Mail-Adresse fehlerhaft!");
      return;
    }

    // Passwort-Validierung
    if (!validatePassword(password)) {
      setError(
        "Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben und ein Sonderzeichen enthalten!"
      );
      return;
    }

    if (isSignUp) {
      // Registrierungslogik hier verarbeiten
      console.log(
        `Signing up with username: ${username}, email: ${email}, and password: ${password}`
      );
    } else {
      // Anmelde-Logik hier verarbeiten
      console.log(
        `Logging in with username: ${username} and password: ${password}`
      );
    }
    setLoggedIn(true); // Erfolgreiche Anmeldung/Registrierung simulieren
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Passwortanforderungen prüfen
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  return (
    <div className="app-containerf">
      {loggedIn ? (
        <div className="center-containerf">
          <h2 className="welcome-messagef">Willkommen, {username}!</h2>
        </div>
      ) : (
        <div className="center-containerf">
          {showForm && (
            <div className="login-containerf">
              <form onSubmit={handleFormSubmit}>
                <h2 className="form-headingf">
                  {isSignUp ? "Konto erstellen" : "Bereits vorhandenes Konto"}
                </h2>
                {isSignUp && (
                  <div className="form-input-containerf">
                    <i className="fas fa-envelope form-input-iconf"></i>
                    <input
                      type="email"
                      placeholder="E-Mail Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-inputf email-inputf"
                    />
                  </div>
                )}
                <div className="form-input-containerf">
                  <i className="fas fa-user form-input-iconf"></i>
                  <input
                    type="text"
                    placeholder="Benutzername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-inputf username-inputf"
                  />
                </div>
                <div className="form-input-containerf">
                  <i className="fas fa-lock form-input-iconf"></i>
                  <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-inputf password-inputf ${
                      passwordRequirements ? "invalid-passwordf" : ""
                    }`}
                  />
                </div>
                {error && <p className="error-messagef">{error}</p>}
                <button type="submit" className="submit-buttonf">
                  {isSignUp ? "Registrieren" : "Einloggen"}
                </button>
                <p
                  className="toggle-linkf"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp
                    ? "Sie haben bereits einen Account? Hier anmelden."
                    : "Sie haben noch keinen Account? Hier registrieren."}
                </p>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Appf;
