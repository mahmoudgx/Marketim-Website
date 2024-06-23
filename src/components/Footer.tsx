import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-20 flex items-center justify-center text-center px-4 md:px-0">
      <div className="space-y-10">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Subscribe to Our Newsletter
          </h1>
          <p>
            Subscribe to our newsletter to receive exclusive offers, product
            updates, and
            <br className="hidden md:block" /> marketing tips directly to your
            inbox
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border-2 rounded-lg py-2 px-2 md:w-1/3"
          />
          <button className="bg-[#5356EC] px-7 font-semibold py-3 rounded-lg">
            Subscribe Now
          </button>
        </div>
        <div className="flex flex-col md:flex-row max-w-7xl justify-center text-left gap-5">
          <div className="space-y-5 w-full md:w-[25%]">
            <h1 className="text-xl font-bold uppercase">Marketim</h1>
            <p>
              Learn more about marketing analytics and our mission to empower
              businesses with actionable insights
            </p>
            <div className="flex items-center space-x-3">
              <FaFacebook className="cursor-pointer" size={20} />
              <FaLinkedin className="cursor-pointer" size={20} />
              <FaInstagram className="cursor-pointer" size={20} />
            </div>
          </div>
          <div className="list-none w-full md:w-[10%] space-y-3">
            <ul className="font-semibold">Quick Links</ul>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Download</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
          </div>
          <div className="space-y-3 w-full md:w-[28%]">
            <h1>Contact Us:</h1>
            <p>
              Get in touch with our dedicated support team for any inquiries,
              technical assistance, or feedback you may have.
            </p>
            <div className="flex space-x-3 items-center">
              <FaPhoneAlt />
              <a href="tel:(252) 555-0126">
                <h1>(252) 555-0126</h1>
              </a>
            </div>
            <div className="flex space-x-3 items-center">
              <MdEmail />
              <a href="mailto:info@Marketim.io">
                <h1>info@Marketim.io</h1>
              </a>
            </div>
          </div>
          <div className="list-none w-full md:w-[10%] space-y-3">
            <ul className="font-semibold">Legal</ul>
            <li className="cursor-pointer">Terms of Service</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </div>
          <div className="list-none w-full md:w-[10%] space-y-3">
            <ul className="font-semibold">Support</ul>
            <li className="cursor-pointer">Help Center</li>
            <li className="cursor-pointer">FAQs</li>
          </div>
        </div>
        <div>
          <hr className="pb-5"></hr>
          <h1 className="pb-5">
            Copyright © 2024 Marketim. All Rights Reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
