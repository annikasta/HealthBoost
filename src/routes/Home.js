import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Zeug/Trip";
import Ziel from "../components/Zeug/Ziel";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80  "
        title="HealthBoost"
        text="Natürliche Power für Ihr Wohlbefinden!"
        buttonText="Zu den Produkten"
        url="/produkte"
        btnClass="show"
      ></Hero>
      <Ziel />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
