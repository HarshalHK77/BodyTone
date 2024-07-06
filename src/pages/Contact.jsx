import transition from "../transition";
import "../css/Contact.css"
function Contact() {
    return ( 
        <div className="contact-container">
            <div className="contact-heading">
            <h1>Contact</h1>
            </div>
            <div class="container6">
        <div class="contact-info">
          <h2>Get In Touch</h2>
          <p><i class="ri-map-pin-2-fill"></i> RIT, Islampur, rajaramnagar</p>
          <p>
            <i class="ri-mail-fill"></i> Email: 
            <a href="mailto:abcedefg@gmail.com"> BodyTone@gmail.com</a>
          </p>
          <p><i class="ri-phone-fill"></i> Shubham : +91 8830897023</p>
          <p><i class="ri-phone-fill"></i> Harshal : +91 9890837581</p>
          <p>
            <a href="www.linked.com"
              ><i class="ri-linkedin-box-fill"></i> www.linkedin.com</a
            >
          </p>
        </div>
        <form
          class="form"
          method="post"
          action="https://script.google.com/macros/s/AKfycbyrqDvK0Mi1TF1ok3IdMWWh3LeraOzuW1aLSocJk1HS8w3KFsCBawFFe-20F40r2xaH6Q/exec"
          name="contact-form"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          /><br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          /><br />
          <input
            type="number"
            id="email"
            name="phone"
            placeholder="Phone"
            required
          /><br />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea
          ><br />
          <button onclick="openPopup()">Send</button>
        </form>
            </div>
            <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.185655547513!2d74.28066807450358!3d17.063569112054253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc174c4124484bd%3A0x35d1cbf0672b3f50!2sRajarambapu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1713866492128!5m2!1sen!2sin"></iframe>
            </div>
        </div>
     );
}

export default transition(Contact);