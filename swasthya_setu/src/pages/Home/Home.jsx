import React from "react";
import Navbar from "../../components/Navbar";
// import Hero from "../Components/Hero";
// import Info from "../Components/Info";
// import About from "../Components/About";
import BookAppointment from "../../components/BookAppointment";
import AichatBox from "../../components/AichatBox";
// import Reviews from "../Components/Reviews";
// import Doctors from "../Components/Doctors";
// import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      {/* 
      <Hero/>
      <Info />
      <About /> */}
      <BookAppointment />
      {/* <AichatBox/> */}
      {/* <Reviews />
      <Doctors />
      <Footer /> */}
    </div>
  );
}

export default Home;