import React from 'react'
import { abouteBanner, appStore, closeIcon, courses1, courses2, courses3, courses4, courses5, courses6, facebookIcon, forwardArrowIcon, heartIcon, heroBanner, linkedinIcon, menuIcon, playStore, service1, service2, service3, skyIcon, twiterIcon, upArrowIcon } from '../assets/images';
import { logo } from '../assets';
import { Link } from 'react-router-dom';

const animationLoad = () => {
    /**
     * add event on element
     */

    const addEventOnElem = function (elem, type, callback) {
        if (elem.length > 1) {
            for (let i = 0; i < elem.length; i++) {
                elem[i].addEventListener(type, callback);
            }
        } else {
            elem.addEventListener(type, callback);
        }
    }
    /**
     * navbar toggle
     */

    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    addEventOnElem(navTogglers, "click", toggleNavbar);

    const closeNavbar = function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    }

    addEventOnElem(navLinks, "click", closeNavbar);
    /**
     * header active
     */

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 100) {
            header.classList.add("active");
            backTopBtn.classList.add("active");
        } else {
            header.classList.remove("active");
            backTopBtn.classList.remove("active");
        }
    });



    /**
     * scroll reveal effect
     */

    const sections = document.querySelectorAll("[data-section]");


    const reveal = function () {
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
                sections[i].classList.add("active");
            }

        }
    }

    reveal();
    addEventOnElem(window, "scroll", reveal);
}






export default function MyClass() {

    return (
        <div className='prose  bg-white' onLoad={animationLoad} id='landingpage'>
            {/* - #HEADER*/}
            <header className="header shadow-md" data-header>
                <div className="container">
                    <a href="#" className="logo flex gap-4 items-center">
                        <img src={logo} width={55} alt="" />
                        Fithub<span className="span text-6xl">.</span>
                    </a>
                    <nav className="navbar" data-navbar>
                        <button className="nav-toggle-btn" aria-label="close menu" data-nav-toggler>
                            <img src={closeIcon} className=' opacity-70' width={16} height={16} alt="" />
                        </button>
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <Link to="/home" className="navbar-link" data-nav-link>Home</Link>
                            </li>
                            <li className="navbar-item">
                                <a href="#about" className="navbar-link" data-nav-link>About Us</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#course" className="navbar-link" data-nav-link>All Course</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#" className="navbar-link" data-nav-link>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                    <button className="nav-toggle-btn" aria-label="open manu" data-nav-toggler>
                        <img src={menuIcon} className=' opacity-70' width={16} height={16} alt="" />
                    </button>
                    <div className="overlay" data-nav-toggler data-overlay />
                </div>
            </header>
            <main>
                <article>
                    { /* - #HERO */}
                    <section className="section hero " aria-label="hero" id="home" data-section style={{ backgroundImage: `url("${heroBanner}")` }}>
                        <div className="container">
                            <p className="hero-subtitle">Fitness &amp; Nutrition</p>
                            <h1 className="h1 hero-title">This life style for your fitness, not only diet.</h1>
                            <p className="hero-text">
                                It has survived not only five centuries but also
                            </p>
                            <a href="#" className="btn btn-secondary">Start Course</a>
                            <div className="social-wrapper">
                                <p className="social-title">Connect with us:</p>
                                <ul className="social-list">
                                    {/* facebook */}
                                    <li>
                                        <a href="#" className="social-link">
                                            <img src={facebookIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </li>
                                    {/* skype */}
                                    <li>
                                        <a href="#" className="social-link">
                                            <img src={skyIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <img src={twiterIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <img src={linkedinIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* - #SERVICE*/}
                    <section className="section service " aria-label="service" data-section>
                        <div className="container">
                            <ul className="grid-list">
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <img src={service1} width={60} height={60} loading="lazy" alt="Women’s Course" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Women’s Course</a>
                                        </h3>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.
                                        </p>
                                        <a href="#" className="btn btn-secondary">
                                            <img src={forwardArrowIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card  ">
                                        <div className="card-icon">
                                            <img src={service2} width={60} height={60} loading="lazy" alt="Basic Course" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Basic Course</a>
                                        </h3>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.
                                        </p>
                                        <a href="#" className="btn btn-secondary">
                                            <img src={forwardArrowIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <img src={service3} width={60} height={60} loading="lazy" alt="Men’s Course" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Men’s Course</a>
                                        </h3>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.
                                        </p>
                                        <a href="#" className="btn btn-secondary">
                                            <img src={forwardArrowIcon} className=' opacity-70' width={16} height={16} alt="" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* - #ABOUT */}
                    <section className="section about " aria-label="about" id="about" data-section>
                        <div className="container">
                            <div className="about-banner img-holder" style={{ width: 470, height: 580 }}>
                                <img src={abouteBanner} width={470} height={580} loading="lazy" alt="about banner" className="img-cover" />
                                <a href="#" className="btn btn-secondary">Meet Instructor</a>
                            </div>
                            <div className="about-content">
                                <p className="section-subtitle">25+ Years Of Experience</p>
                                <h2 className="h2 section-title">We have expert instructor for help our students.</h2>
                                <p className="section-text">
                                    Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when
                                    an unknown
                                    printe specimen book has survived centuries.
                                </p>
                                <h3 className="about-h3">100+ Courses</h3>
                                <p className="section-text">
                                    Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when
                                    an unknown
                                    printe specimen book has survived centuries.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* - #COURSE */}
                    <section className="section course " aria-label="course" id="course" data-section>
                        <div className="container">
                            <div className="title-wrapper">
                                <p className="section-subtitle">100+ Courses Available</p>
                                <h2 className="h2 section-title">Fitness &amp; Nutrition Courses</h2>
                            </div>
                            <ul className="grid-list">
                                <li>
                                    <div className="course-card">
                                        <figure className="card-banner img-holder" style={{ width: 350, height: 300 }}>
                                            <img src={courses1} width={350} height={300} loading="lazy" alt="Children Nutrition and Cooking" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <data className="card-price" value={98}>$98</data>
                                            <p className="card-author">
                                                <a href="#" className="card-link">
                                                    By: <span className="span">Ryan Patterson</span>
                                                </a>
                                            </p>
                                            <h3 className="h3">
                                                <a href="#" className="card-title">Children Nutrition and Cooking</a>
                                            </h3>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item">
                                                    <time dateTime="PT8H20M">08 hr 20 mins</time>
                                                </li>
                                                <li className="card-meta-item">
                                                    <p className="card-meta-text">28 Lectures</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-card">
                                        <figure className="card-banner img-holder" style={{ width: 350, height: 300 }}>
                                            <img src={courses2} width={350} height={300} loading="lazy" alt="Introduction to Food and Health." className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <data className="card-price" value={72}>$72</data>
                                            <p className="card-author">
                                                <a href="#" className="card-link">
                                                    By: <span className="span">Arlene Daniels</span>
                                                </a>
                                            </p>
                                            <h3 className="h3">
                                                <a href="#" className="card-title">Introduction to Food and Health.</a>
                                            </h3>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item">
                                                    <time dateTime="PT9H25M">09 hr 25 mins</time>
                                                </li>
                                                <li className="card-meta-item">
                                                    <p className="card-meta-text">16 Lectures</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-card">
                                        <figure className="card-banner img-holder" style={{ width: 350, height: 300 }}>
                                            <img src={courses3} width={350} height={300} loading="lazy" alt="Nutrition and Lifestyle in Pregnancy" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <data className="card-price" value={68}>$68</data>
                                            <p className="card-author">
                                                <a href="#" className="card-link">
                                                    By: <span className="span">Selina Benton</span>
                                                </a>
                                            </p>
                                            <h3 className="h3">
                                                <a href="#" className="card-title">Nutrition and Lifestyle in Pregnancy</a>
                                            </h3>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item">
                                                    <time dateTime="PT3H38M">03 hr 38 mins</time>
                                                </li>
                                                <li className="card-meta-item">
                                                    <p className="card-meta-text">18 Lectures</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-card">
                                        <figure className="card-banner img-holder" style={{ width: 350, height: 300 }}>
                                            <img src={courses4} width={350} height={300} loading="lazy" alt="Expertise on Fitness, Nutrition and Health" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <data className="card-price" value={98}>$98</data>
                                            <p className="card-author">
                                                <a href="#" className="card-link">
                                                    By: <span className="span">Ryan Patterson</span>
                                                </a>
                                            </p>
                                            <h3 className="h3">
                                                <a href="#" className="card-title">Expertise on Fitness, Nutrition and Health</a>
                                            </h3>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item">
                                                    <time dateTime="PT2H16M">02 hr 16 mins</time>
                                                </li>
                                                <li className="card-meta-item">
                                                    <p className="card-meta-text">14 Lectures</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li >
                                <li>
                                    <div className="course-card">
                                        <figure className="card-banner img-holder" style={{ width: 350, height: 300 }}>
                                            <img src={courses5} width={350} height={300} loading="lazy" alt="Hacking exercise for health new science of fitness" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <data className="card-price" value={72}>$72</data>
                                            <p className="card-author">
                                                <a href="#" className="card-link">
                                                    By: <span className="span">Arlene Daniels</span>
                                                </a>
                                            </p>
                                            <h3 className="h3">
                                                <a href="#" className="card-title">Hacking exercise for health new science of fitness</a>
                                            </h3>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item">
                                                    <time dateTime="PT6H12M">06 hr 12 mins</time>
                                                </li>
                                                <li className="card-meta-item">
                                                    <p className="card-meta-text">35 Lectures</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li >
                                <li>
                                    <div className="course-card">
                                        <figure className="card-banner img-holder" style={{ width: 350, height: 300 }}>
                                            <img src={courses6} width={350} height={300} loading="lazy" alt="Designing Your Personal Weight Loss Plan" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <data className="card-price" value={68}>$68</data>
                                            <p className="card-author">
                                                <a href="#" className="card-link">
                                                    By: <span className="span">Selina Benton</span>
                                                </a>
                                            </p>
                                            <h3 className="h3">
                                                <a href="#" className="card-title">Designing Your Personal Weight Loss Plan</a>
                                            </h3>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item">
                                                    <time dateTime="PT9H34M">09 hr 34 mins</time>
                                                </li>
                                                <li className="card-meta-item">
                                                    <p className="card-meta-text">28 Lectures</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li >
                            </ul >
                        </div >
                    </section >
                    {/* - #BLOG*/}
                    <section className="section blog " aria-label="blog" id="blog" data-section >
                        <div className="container">
                            <div className="title-wrapper">
                                <p className="section-subtitle">Our Blog Post</p>
                                <h2 className="h2 section-title">Latest Article of Nutrition</h2>
                            </div>
                            <ul className="grid-list">
                                <li>
                                    <div className="blog-card">
                                        <div className="wrapper">
                                            <time className="publish-date" dateTime="2022-02-24">
                                                <span className="span">24</span> Feb
                                            </time>
                                            <div>
                                                <div className="card-author">
                                                    <a href="#" className="card-link">
                                                        By: <span className="span">Maddie Rife</span>
                                                    </a>
                                                </div>
                                                <ul className="card-meta-list">
                                                    <li className="card-meta-item">
                                                        <p className="item-text">87 Likes</p>
                                                    </li>
                                                    <li className="card-meta-item">
                                                        <p className="item-text">58 Share</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">It was popularised sheets the release contain</a>
                                        </h3>
                                        <p className="card-text">
                                            Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="blog-card">
                                        <div className="wrapper">
                                            <time className="publish-date" dateTime="2022-02-24">
                                                <span className="span">24</span> Feb
                                            </time>
                                            <div>
                                                <div className="card-author">
                                                    <a href="#" className="card-link">
                                                        By: <span className="span">Maddie Rife</span>
                                                    </a>
                                                </div>
                                                <ul className="card-meta-list">
                                                    <li className="card-meta-item">
                                                        <p className="item-text">87 Likes</p>
                                                    </li>
                                                    <li className="card-meta-item">
                                                        <p className="item-text">58 Share</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">It was popularised sheets the release contain</a>
                                        </h3>
                                        <p className="card-text">
                                            Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="blog-card">
                                        <div className="wrapper">
                                            <time className="publish-date" dateTime="2022-02-24">
                                                <span className="span">24</span> Feb
                                            </time>
                                            <div>
                                                <div className="card-author">
                                                    <a href="#" className="card-link">
                                                        By: <span className="span">Maddie Rife</span>
                                                    </a>
                                                </div>
                                                <ul className="card-meta-list">
                                                    <li className="card-meta-item">
                                                        <p className="item-text">87 Likes</p>
                                                    </li>
                                                    <li className="card-meta-item">
                                                        <p className="item-text">58 Share</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">It was popularised sheets the release contain</a>
                                        </h3>
                                        <p className="card-text">
                                            Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section >
                    {/* - #APP*/}
                    <section className="section app " aria-label="app" data-section >
                        <div className="container">
                            <div className="app-card">
                                <p className="section-subtitle">Mobile App Available</p>
                                <h2 className="h2 section-title">
                                    Download our mobile app.<br />
                                    and start coaching anytime.
                                </h2>
                                <div className="wrapper">
                                    <a href="#" className="app-link" aria-label="play store">
                                        <img src={playStore} width={134} height={38} loading="lazy" alt="Play Store" className="img" />
                                    </a>
                                    <a href="#" className="app-link" aria-label="app store">
                                        <img src={appStore} width={132} height={38} loading="lazy" alt="App Store" className="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section >
                </article >
            </main >
            {/* - #FOOTER */}
            <footer className="footer" >
                <div className="footer-top section" data-section>
                    <div className="container">
                        <div className="footer-list">
                            <p className="footer-list-title">Subscribe Newsletter</p>
                            <p className="footer-list-text">
                                Lorem Ipsum has been them an industry printer took a galley make book.
                            </p>
                            <form action className="footer-form">
                                <input type="email" name="email_address" aria-label="email" placeholder="Enter email" required className="email-field" />
                                <button type="submit" className="btn btn-secondary">Subscribe Now</button>
                            </form>
                        </div>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">All Courses</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Daily Exercise</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Find Your Balance</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Personal Program</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Natural Process</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Immune System</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Gives You Energy</a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Help Links</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Discussion</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Customer Support</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Course FAQ’s</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Online Classes</a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Opening Hours</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Mon-Fri: 9 AM – 6 PM</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Saturday: 9 AM – 4 PM</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Sunday: Closed</a>
                            </li>
                            <li>
                                <p className="footer-list-title address-title">Location</p>
                            </li>
                            <li>
                                <address className="address">
                                    176 W street name, New<br />
                                    York, NY 10014
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            © 2022 Futras Made With{" "}
                            <img src={heartIcon} className='inline' width={16} height={16} alt="" /> by
                            <a href="#" className="copyright-link"> {' '}codewithsadee</a>
                        </p>
                        <ul className="footer-bottom-list">
                            <li className="footer-bottom-item">
                                <a href="#" className="footer-bottom-link">Terms of Service</a>
                            </li>
                            <li className="footer-bottom-item">
                                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                            </li>
                            <li className="footer-bottom-item">
                                <a href="#" className="footer-bottom-link">Sitemap</a>
                            </li>
                            <li className="footer-bottom-item">
                                <a href="#" className="footer-bottom-link">Security</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer >
            {/* - #BACK TO TOP */}
            <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn >
                <img src={upArrowIcon} className=' opacity-70' width={16} height={16} alt="" />
            </a >
            {/* - custom js link*/}
            {/* - ionicon link*/}
        </div >
    )
};


