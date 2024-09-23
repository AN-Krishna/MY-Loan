import React from 'react';
import aboutus from "../assets/Aboutus.avif";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="About" className="px-4 lg:px-0 py-8 mt-8">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Image Section */}
        <div className="flex justify-center lg:order-2">
          <img
            src={aboutus}
            alt="About us"
            className="w-full h-auto object-cover max-w-lg rounded-lg "
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="flex flex-col items-start justify-center px-16 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500 font-serif text-center lg:text-left">
            MY-Loan: Your Instant Loan App
          </h2>
          <p className="text-blue-900 font-medium mb-6 text-center lg:text-left">
            Ready to invest in your future, but concerned about the financial hurdles along the way? MY-Loan is your instant loan app for quick financial solutions in India. As a trusted credit loan app, we are here to help you navigate the world of personal loans with confidence and clarity.
          </p>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row items-center md:justify-start w-full space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans&pcampaignid=merch_published_cluster_promotion_battlestar_top_picks&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <button className="bg-blue-300 hover:bg-blue-500 text-white hover:font-semibold px-6 py-3 rounded-md w-full md:w-auto transition duration-300 ease-in-out transform hover:scale-105 text-center">
                GET IT ON Google Play
              </button>
            </a>
            <Link to="/login" className="w-full md:w-auto">
              <button className="bg-blue-300 hover:bg-blue-500 text-white hover:font-semibold px-6 py-3 rounded-md w-full md:w-auto transition duration-300 ease-in-out transform hover:scale-105 text-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
