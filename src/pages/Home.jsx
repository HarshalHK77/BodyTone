import React from "react";
import "../index.css"
import transition from "../transition";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Featured from "../components/FeaturedClasses";
import Chooseus from "../components/Chooseus";
import Trainers from "../components/Trainers";
import Testimonial from "../components/Testimonials";
import Galleryhome from "../components/GalleryHome";
import Blog from "../components/Blog";
function Home() {
    return ( 
        <div className="home">
            <Hero/>
            <HomeAbout/>
            <Featured/>
            <Chooseus/>
            <Trainers/>
            <Testimonial/>
            <Galleryhome/>
            <Blog/>
        </div>
     );
}
export default transition(Home);