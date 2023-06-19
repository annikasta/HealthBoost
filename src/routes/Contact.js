import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Faq from "../components/FAQ/FAQ";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1594751751177-79743e7daa9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        title="Kontakt und FAQ"
        btnClass="hide"
      />
      <br></br>
      <Faq />
      <ContactForm />

      <Footer />
    </>
  );
}

export default Contact;
