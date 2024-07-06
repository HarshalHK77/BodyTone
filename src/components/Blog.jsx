import React from "react";
import "../css/Blog.css";
function Blog() {
    return ( 
        <div className="blog-container">
            <div className="blog-heading">
                <p>LATEST BLOG</p>
                <h1>Our Recent News</h1>
                <p>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</p>
            </div>
            <div className="blog-card-container">
                <div className="blog-card">
                    <h3>22.03.2024</h3>
                    <h2>Yoga For Everyone in 2023</h2>
                    <p>This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
                    <button>Read More</button>
                </div>
                <div className="blog-card">
                    <h3>22.03.2024</h3>
                    <h2>Yoga For Everyone in 2023</h2>
                    <p>This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
                    <button>Read More</button>
                </div>
                <div className="blog-card">
                    <h3>22.03.2024</h3>
                    <h2>Yoga For Everyone in 2023</h2>
                    <p>This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="contact-img">
                <h1>Need a Fitness Trainer?</h1>
                <p><span>Call:</span> +123-456789</p>
                <button>Purchase Now</button>
            </div>
        </div>
     );
}

export default Blog;