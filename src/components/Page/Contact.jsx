import contact2 from '../../assets/images/about/contact-2-min.png'
import './Contact.scss'
const Contact = () => {
    return (
        <div className="container">
            <div className="ContactPage">
                <div className="titleContact">
                    <a href="/"><i class="fa-solid fa-house"></i> Home <i class="fa-solid fa-chevron-right fa-2xs"></i></a> <span>Contact</span>
                </div>
                <div className="title_howcan">
                    <div className="howcan">
                        <p>How can help you ?</p>
                        <p>Let us know how we can help you</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="solution">
                        <p>01. Visit Feedback</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p>03. Billing Inquiries</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="solution">
                        <p>02. Employer Services</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p>04. General Inquiries</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className="titleCompany">
                    <div className="aboutCompany">
                        <p>About Company</p>
                        <p><i class="fa-solid fa-location-dot"></i> <span>Address</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        <p><i class="fa-solid fa-headphones"></i> <span>Call Us</span> <a href="">(+91)-540-025-124553</a></p>
                        <p><i class="fa-regular fa-envelope"></i> <span>Email</span> <a href="">sale@Nest.com</a></p>
                        <p><i class="fa-regular fa-clock"></i> <span>Hours</span> 10:00 - 18:00, Mon - Sat</p>
                        <a className="viewmap" href="/"><i class="fa-sharp fa-regular fa-user"></i> View Map</a>
                    </div>
                    <div className="aboutCompany">
                        <p>About Company</p>
                        <p><i class="fa-solid fa-location-dot"></i> <span>Address</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        <p><i class="fa-solid fa-headphones"></i> <span>Call Us</span> <a href="">(+91)-540-025-124553</a></p>
                        <p><i class="fa-regular fa-envelope"></i> <span>Email</span> <a href="">sale@Nest.com</a></p>
                        <p><i class="fa-regular fa-clock"></i> <span>Hours</span> 10:00 - 18:00, Mon - Sat</p>
                        <a className="viewmap" href="/"><i class="fa-sharp fa-regular fa-user"></i> View Map</a>
                    </div>
                    <div className="aboutCompany">
                        <p>About Company</p>
                        <p><i class="fa-solid fa-location-dot"></i> <span>Address</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        <p><i class="fa-solid fa-headphones"></i> <span>Call Us</span> <a href="">(+91)-540-025-124553</a></p>
                        <p><i class="fa-regular fa-envelope"></i> <span>Email</span> <a href="">sale@Nest.com</a></p>
                        <p><i class="fa-regular fa-clock"></i> <span>Hours</span> 10:00 - 18:00, Mon - Sat</p>
                        <a className="viewmap" href="/"><i class="fa-sharp fa-regular fa-user"></i> View Map</a>
                    </div>
                </div>
                <div className="contactForm">
                    <p>Contact form</p>
                    <p>Drop Us a Line</p>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <div className="form_info">
                        <form action="">
                            <input type="text" name="" id="" placeholder="First Name" required/> <br/>
                            <input type="email" name="" id="" placeholder="Your Email" required/> <br/>
                            <input type="text" name="" id="" placeholder="Subject" required /> <br/>
                            <input type="number" name="" id="" placeholder="Your Phone" required/> <br/>
                            <textarea name="" id="" cols="40" rows="10" placeholder="Message"></textarea> <br/>
                            <button>Send Message</button>
                        </form>
                        <img src={contact2} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact