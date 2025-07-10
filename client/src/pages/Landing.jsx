import React from "react";
import {
  abouteBanner,
  appStore,
  closeIcon,
  courses1,
  courses2,
  courses3,
  courses4,
  courses5,
  courses6,
  facebookIcon,
  forwardArrowIcon,
  heartIcon,
  heroBanner,
  linkedinIcon,
  menuIcon,
  playStore,
  service1,
  service2,
  service3,
  skyIcon,
  twiterIcon,
  upArrowIcon,
  user1profile,
  user2profile,
  user3profile,
  userImageIcon,
} from "../assets/images";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/user/userSlice";
import Testomonialcard from "../components/Testomonialcard";
import Blogcard from "../components/Blogcard";

const articles = [
  {
    author: "Khan Faiz",
    likes: 20,
    shares: 30,
    title: "The Crucial Role of Diet in Daily Life",
    content:
      "A well-balanced diet plays a pivotal role in maintaining optimal health and well-being for individuals of all ages. Each day, the food choices we make directly impact our energy levels, mood, cognitive function, and overall vitality. Incorporating a variety of nutrient-rich foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats into our meals provides essential vitamins, minerals, and antioxidants necessary for supporting bodily functions and preventing chronic diseases. Furthermore, maintaining a healthy diet can help regulate weight, reduce the risk of obesity, heart disease, diabetes, and other health conditions. By making mindful dietary choices and adopting sustainable eating habits, individuals can enhance their quality of life and promote long-term health and longevity.",
  },
  {
    author: "Khan Faiz",
    likes: 20,
    shares: 30,
    title: "The Importance of Regular Exercise",
    content:
      "Regular exercise is an indispensable component of a healthy lifestyle, offering a myriad of physical, mental, and emotional benefits. Engaging in physical activity on a consistent basis strengthens muscles, improves cardiovascular health, enhances flexibility, and boosts overall fitness levels. Moreover, exercise releases endorphins, neurotransmitters that promote feelings of happiness and reduce stress and anxiety. By incorporating regular exercise into our routines, we can alleviate symptoms of depression, enhance cognitive function, and improve sleep quality. Additionally, physical activity stimulates the production of growth factors that support brain health and neuroplasticity, reducing the risk of cognitive decline and age-related diseases. Whether it's through cardiovascular workouts, strength training, yoga, or outdoor activities, prioritizing regular exercise is essential for optimizing health and well-being.",
  },
  {
    author: "Khan Faiz",
    likes: 20,
    shares: 30,
    title: "The Transformative Effects of Yoga",
    content:
      "Yoga is renowned for its transformative effects on the mind, body, and spirit, offering a holistic approach to health and wellness. Through a combination of physical postures, breathwork, and meditation, yoga cultivates strength, flexibility, and balance while promoting relaxation and stress reduction. Regular practice of yoga can alleviate muscle tension, improve posture, and enhance joint mobility, mitigating the risk of injury and promoting physical resilience. Moreover, yoga fosters mental clarity, emotional stability, and a profound sense of inner peace, empowering practitioners to navigate life's challenges with equanimity and grace. Research has shown that yoga may also have therapeutic benefits for various health conditions, including chronic pain, anxiety disorders, and depression. By embracing the practice of yoga, individuals can embark on a journey of self-discovery, self-care, and holistic healing, unlocking their full potential and embracing a life of vitality and well-being.",
  },
];

const openNavebar = () => {
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};
const closeNavbar = function () {
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  console.log("i got click");
};

export default function MyClass() {
  const auth = localStorage.getItem("isLogin");
  const testemonials = [
    {
      author: "Jane Smith",
      title: "Great for Tracking Meals",
      image: user1profile,
      description:
        "FitHub makes it easy to track my meals and understand the nutrients I'm consuming. The meal page is super intuitive, and the customizable serving sizes are a nice touch. Highly recommended for anyone looking to manage their diet!",
    },
    {
      author: "John Doe",
      title: "Helps Me Stay on Track",
      image: user2profile,
      description:
        "I've always struggled with staying consistent with my diet, but FitHub's dashboard and interactive graphs keep me on track. The weekly summaries are great for seeing my progress, and I love the flexibility to add or remove meals from my daily routine.",
    },
    {
      author: "Sarah Lee",
      title: "A Complete Nutrition Solution",
      image: user3profile,
      description:
        "FitHub is a one-stop solution for all my nutrition needs. It provides detailed information about each meal, including health benefits and what to avoid if you have certain illnesses. The advanced search system makes finding meals and their alternatives easy.",
    },
  ];

  return (
    <div
      className="prose  bg-white"
      onLoad={animationLoad}
      id="landingpage"
    >
      {/* - #HEADER*/}
      <header
        className="header shadow-md"
        data-header
      >
        <div className="container">
          <a
            href="#"
            className="logo flex gap-4 items-center"
          >
            <img
              src={logo}
              width={55}
              alt=""
            />
            Fithub<span className="span text-6xl">.</span>
          </a>
          <nav
            className="navbar"
            data-navbar
          >
            <button
              className="nav-toggle-btn"
              aria-label="close menu"
              data-nav-toggler
              onClick={closeNavbar}
            >
              <img
                src={closeIcon}
                className=" opacity-70"
                width={16}
                height={16}
                alt=""
              />
            </button>

            <ul className="navbar-list">
              {auth && (
                <li className="navbar-item">
                  <Link
                    to="/home"
                    className="navbar-link"
                    data-nav-link
                  >
                    Home
                  </Link>
                </li>
              )}

              <li className="navbar-item">
                <a
                  href="#about"
                  className="navbar-link"
                  data-nav-link
                >
                  About Us
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#course"
                  className="navbar-link"
                  data-nav-link
                >
                  Experiences
                </a>
              </li>
              <li className="navbar-item">
                {/* <a href="#blog" className="navbar-link" data-nav-link>Blog</a> */}
              </li>
              <li className="navbar-item">
                {/* <a href="#dev" className="navbar-link" data-nav-link>developers</a> */}
              </li>
              <li className="navbar-item">
                <a
                  href="#contact"
                  className="navbar-link"
                  data-nav-link
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {auth ? (
            <Link
              to="/signin"
              className="btn btn-primary"
              onClick={() => {
                localStorage.removeItem("isLogin");
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/signin"
              className="btn btn-primary"
            >
              Sign In
            </Link>
          )}
          <button
            className="nav-toggle-btn"
            aria-label="open manu"
            data-nav-toggler
            onClick={openNavebar}
          >
            <img
              src={menuIcon}
              className=" opacity-70"
              width={16}
              height={16}
              alt=""
            />
          </button>
          <div
            className="overlay"
            data-nav-toggler
            data-overlay
          />
        </div>
      </header>
      <main>
        <article>
          {/* - #HERO */}
          <section
            className="section hero "
            aria-label="hero"
            id="home"
            data-section
            style={{ backgroundImage: `url("${heroBanner}")` }}
          >
            <div className="container">
              <p className="hero-subtitle">Fitness &amp; Nutrition</p>
              <h1 className="h1 hero-title">
                This life style for your fitness, not only diet.
              </h1>
              <p className="hero-text">
                It has survived not only five centuries but also
              </p>
              <a
                href="#"
                className="btn btn-secondary"
              >
                Start Tracking
              </a>
              <div className="social-wrapper">
                <p className="social-title">Connect with us:</p>
                <ul className="social-list">
                  {/* facebook */}
                  <li>
                    <a
                      href="#"
                      className="social-link"
                    >
                      <img
                        src={facebookIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </li>
                  {/* skype */}
                  <li>
                    <a
                      href="#"
                      className="social-link"
                    >
                      <img
                        src={skyIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="social-link"
                    >
                      <img
                        src={twiterIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="social-link"
                    >
                      <img
                        src={linkedinIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* - #SERVICE*/}
          <section
            className="section service "
            aria-label="service"
            data-section
          >
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={service1}
                        width={60}
                        height={60}
                        loading="lazy"
                        alt="Women’s Course"
                      />
                    </div>
                    <h3 className="h3">
                      <a
                        href="#"
                        className="card-title"
                      >
                        Meal Management
                      </a>
                    </h3>
                    <p className="card-text">
                      Plan and track meals with tools for customizing,
                      scheduling, and saving recipes to help you maintain a
                      balanced diet.
                    </p>
                    <a
                      href="#"
                      className="btn btn-secondary"
                    >
                      <img
                        src={forwardArrowIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-card  ">
                    <div className="card-icon">
                      <img
                        src={service2}
                        width={60}
                        height={60}
                        loading="lazy"
                        alt="Basic Course"
                      />
                    </div>
                    <h3 className="h3">
                      <a
                        href="#"
                        className="card-title"
                      >
                        Food Insights
                      </a>
                    </h3>
                    <p className="card-text">
                      Explore nutritional content and ingredients to understand
                      the health benefits of various foods and make informed
                      dietary choices.
                    </p>
                    <a
                      href="#"
                      className="btn btn-secondary"
                    >
                      <img
                        src={forwardArrowIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={service3}
                        width={60}
                        height={60}
                        loading="lazy"
                        alt="Men’s Course"
                      />
                    </div>
                    <h3 className="h3">
                      <a
                        href="#"
                        className="card-title"
                      >
                        Dashboard
                      </a>
                    </h3>
                    <p className="card-text">
                      View graphs and charts that display your daily calorie
                      intake and nutrient levels for easy health monitoring.
                    </p>
                    <a
                      href="#"
                      className="btn btn-secondary"
                    >
                      <img
                        src={forwardArrowIcon}
                        className=" opacity-70"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* - #ABOUT */}
          <section
            className="section about "
            aria-label="about"
            id="about"
            data-section
          >
            <div className="container">
              <div
                className="about-banner img-holder"
                style={{ width: 470, height: 580 }}
              >
                <img
                  src={abouteBanner}
                  width={470}
                  height={580}
                  loading="lazy"
                  alt="about banner"
                  className="img-cover"
                />
                <Link
                  to={"/signup"}
                  className="btn btn-secondary"
                >
                  Create Account
                </Link>
              </div>
              <div className="about-content">
                <p className="section-subtitle">
                  accurate and correct information
                </p>
                <h2 className="h2 section-title">
                  Fithub - Your Ultimate Companion
                </h2>
                <p className="section-text">
                  FitHub is a comprehensive web application designed to simplify
                  nutrition tracking and fitness management. Provide users with
                  an intuitive platform to track their meals, monitor nutrient
                  intake, and achieve their health goals effectively.
                </p>
                <h3 className="about-h3">Feature</h3>
                <p className="section-text">
                  Daily Meal Tracking
                  <br />
                  Previous Meal Navigation
                  <br />
                  Dashboard <br />
                  Profile Management
                  <br />
                  Advanced Search System
                  <br />
                </p>
              </div>
            </div>
          </section>
          {/* - #Testomonials */}
          <section
            className="section course"
            aria-label="course"
            id="course"
            data-section
          >
            <div className="container">
              <div className="title-wrapper">
                <p className="section-subtitle">100+ Users</p>
                <h2 className="h2 section-title">
                  Testimonials &amp; Experiences
                </h2>
              </div>
              <ul className="grid-list">
                {testemonials.map(({ title, description, author, image }) => {
                  return (
                    <li>
                      <Testomonialcard
                        image={image}
                        title={title}
                        description={description}
                        author={author}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </article>
      </main>
      {/* - #FOOTER */}
      <footer
        className="footer"
        id="contact"
      >
        <div
          className="footer-top section"
          data-section
        >
          <div className="container">
            <div className="footer-list">
              <p className="footer-list-title">Subscribe Newsletter</p>
              <p className="footer-list-text">
                Lorem Ipsum has been them an industry printer took a galley make
                book.
              </p>
              <form
                action
                className="footer-form"
              >
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Enter email"
                  required
                  className="email-field"
                />
                <button
                  type="submit"
                  className="btn btn-secondary"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Twiter
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Help Links</p>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Discussion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  FAQ’s
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              © 2022 Futras Made With{" "}
              <img
                src={heartIcon}
                className="inline"
                width={16}
                height={16}
                alt=""
              />{" "}
              by
              <a
                href="#"
                className="copyright-link"
              >
                {" "}
                shaikh amanullah
              </a>
            </p>
            <ul className="footer-bottom-list">
              <li className="footer-bottom-item">
                <a
                  href="#"
                  className="footer-bottom-link"
                >
                  Terms of Service
                </a>
              </li>
              <li className="footer-bottom-item">
                <a
                  href="#"
                  className="footer-bottom-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="footer-bottom-item">
                <a
                  href="#"
                  className="footer-bottom-link"
                >
                  Sitemap
                </a>
              </li>
              <li className="footer-bottom-item">
                <a
                  href="#"
                  className="footer-bottom-link"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* - #BACK TO TOP */}
      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        <img
          src={upArrowIcon}
          className=" opacity-70"
          width={16}
          height={16}
          alt=""
        />
      </a>
    </div>
  );
}

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
  };
  /**
   * navbar toggle
   */

  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");

  const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    console.log("i got click");
  };

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
  };

  reveal();
  addEventOnElem(window, "scroll", reveal);
};
