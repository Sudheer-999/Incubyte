import "./index.css";
import Navbar from "../Navbar";

const Incubyte = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="first-con">
          <div className="bhogi">
            <h1 className="home-head">
              Welcome to <span className="highlighted">Incubyte</span>
            </h1>
            <p>Building bridges to success in the tech ecosystem.</p>
          </div>

          <div className="inner-con" id="about">
            <h1 className="about-head">About Us</h1>
            <p className="description">
              With over 3 years of experience, we at Incubyte specialize in
              setting up captive development centers for growing startups,
              addressing key challenges and providing tailor-made solutions for
              your business needs.
            </p>
          </div>
        </div>

        <div className="second-con" id="expertise">
          <h1 className="expertise-head">Our Expertise</h1>
          <div className="cards-con">
            <div className="card">
              <h1 className="card-head">Hiring</h1>
              <p className="card-desc">
                Leveraging our deep understanding of the talent landscape, we
                devise effective hiring strategies to attract the best tech
                professionals.
              </p>
            </div>
            <div className="card">
              <h1 className="card-head">Human Resources Management</h1>
              <p className="card-desc">
                We ensure a healthy and productive work environment by
                implementing efficient HR practices tailored to the unique needs
                of your startup.
              </p>
            </div>
            <div className="card">
              <h1 className="card-head">Taxation</h1>
              <p className="card-desc">
                Our team navigates through the complexities of the tax system,
                ensuring compliance while optimizing financial efficiency.
              </p>
            </div>
            <div className="card">
              <h1 className="card-head">Regulatory Guidance</h1>
              <p className="card-desc">
                We stay abreast of the ever-changing regulatory landscape,
                providing timely advice to ensure your startup's operations stay
                within boundaries.
              </p>
            </div>
          </div>
        </div>

        <div className="third-con" id="stories">
          <h1>Success Stories</h1>
          <p className="success-desc">
            Over the years, we have helped numerous startups successfully
            establish their captive development centers. Join the roster of our
            successful collaborations.
          </p>
        </div>

        <div className="end-con" id="contact">
          <h1>Ready to Scale Up?</h1>
          <p className="end-desc">
            Experience the Incubyte advantage today. Let us help you navigate
            the challenges and scale up your operations smoothly and
            efficiently.
          </p>
          <button type="button" className="contact-button">
            Contact Us
          </button>
        </div>

        <div className="footer">
          <p className="footer-text">© 2023 incubyte</p>
        </div>
      </div>
    </>
  );
};

export default Incubyte;
