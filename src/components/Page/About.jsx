import img1 from '../../assets/images/about/about-1.png'
import img2 from '../../assets/images/about/about-2.png'
import img3 from '../../assets/images/about/about-3.png'
import img4 from '../../assets/images/about/about-4.png'
import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/icon-2.png'
import icon3 from '../../assets/images/icon-3.png'
import icon4 from '../../assets/images/icon-4.png'
import icon5 from '../../assets/images/icon-5.png'
import icon6 from '../../assets/images/icon-6.png'
import about5 from '../../assets/images/about/about-5.png'
import about6 from '../../assets/images/about/about-6.png'
import about8 from '../../assets/images/about/about-8.png'
import '../Page/About.scss'

const listTag = [
    {
        id:11,
        icon: icon1,
        title: "Best Prices & Offers",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:12,
        icon: icon2,
        title: "Wide Assortment",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:13,
        icon: icon3,
        title: "Free Delivery",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:14,
        icon: icon4,
        title: "Easy Returns",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:15,
        icon: icon5,
        title: "100% Satisfaction",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:16,
        icon: icon6,
        title: "Great Daily Deal",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },

]

const TagItem = ({ icon, title,content}) => {
    return (
        <div className='TagItem'>
            <img src={icon} alt="" />
            <a href="">{title}</a>
            <p>{content}</p>
            <a className='readmore' href="">Read More</a>
        </div>
    )
}
const About = () => {
    return (

        <div className="container">
            <div className="AboutPage">
                <div className="titleAbout">
                    <a href="/"><i class="fa-solid fa-house"></i> Home <i class="fa-solid fa-chevron-right fa-2xs"></i></a> <span>About</span>
                </div>
                <div className="contentAbout">
                    <img src={img1} alt="" />
                    <div className="wccontent">
                        <p>Welcome to Nest</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</span><br/><br/>
                        <span>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum. </span>
                        <div className="wcBanner">
                            <img src={img4} alt="" />
                            <img src={img3} alt="" />
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="title_what">
                    <p>What We Provide?</p>
                    <i class="fa-solid fa-wave-sine"></i>
                </div>
                <div className="tag">
                    {listTag.map(val => (
                        <TagItem key={val} icon={val.icon} title={val.title} content={val.content}  />
                    ))}
                </div>
                <div className="title_our">
                    <img src={about5} alt="" />
                    <div className="ourpref">
                        <p>Our performance</p>
                        <p>Your Partner for <br/> e-commerce grocery solution</p>
                        <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                        <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                    </div>
                </div>
                <div className="title_info">
                    <div className="info_web">
                        <p>Who we are</p>
                        <span>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</span>
                    </div>
                    <div className="info_web">
                        <p>Our history</p>
                        <span>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</span>
                    </div>
                    <div className="info_web">
                        <p>Our mission</p>
                        <span>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</span>
                    </div>
                </div>
                <div className="title_team">
                    <div className="info_team">
                        <p>Our Team</p>
                        <p>Meet Our Expert Team</p>
                        <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                        <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                        <a href="">View All Members</a>
                    </div>
                    <div className="info_1">
                        <img src={about6} alt="" />
                        <div className="info_tag">
                            <a href="">H. Merinda</a>
                            <p>CEO & Co-Founder</p>
                            <div className="social">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-skype"></i>
                            <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="info_1">
                        <img src={about8} alt="" />
                        <div className="info_tag">
                            <a href="">H. Merinda</a>
                            <p>CEO & Co-Founder</p>
                            <div className="social">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-skype"></i>
                            <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default About