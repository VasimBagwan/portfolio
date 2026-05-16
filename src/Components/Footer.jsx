// Footer.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ABOUT */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                <span className="font-bold text-primary text-xl">
                  V
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Vasim Bagwan
                </h3>

                <div className="text-sm text-base-content/70">
                  Software Engineer
                </div>
              </div>
            </div>

            <p className="text-sm text-base-content/70 leading-relaxed">
              Passionate about programming, web development,
              and building practical software applications.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-base-content/80">

              <li>
                <a href="/" className="link link-hover">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="link link-hover">
                  About
                </a>
              </li>

              <li>
                <a href="/projects" className="link link-hover">
                  Projects
                </a>
              </li>

              <li>
                <a href="/skills" className="link link-hover">
                  Skills
                </a>
              </li>

              <li>
                <a href="/contact" className="link link-hover">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-base-content/80">

              {/* EMAIL */}
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-primary" />

                <div>
                  <div className="font-medium">
                    Email
                  </div>

                  <a
                    href="mailto:vbagwan415@gmail.com"
                    className="link link-hover"
                  >
                    vbagwan415@gmail.com
                  </a>
                </div>
              </li>

              {/* PHONE */}
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-primary" />

                <div>
                  <div className="font-medium">
                    Phone
                  </div>

                  <a
                    href="tel:+918485856475"
                    className="link link-hover"
                  >
                    +91 8485856475
                  </a>
                </div>
              </li>

              {/* LOCATION */}
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />

                <div>
                  <div className="font-medium">
                    Location
                  </div>

                  <div className="text-base-content/70">
                    Damani Nagar, Solapur
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider my-8" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-base-content/70">
          © {new Date().getFullYear()} Vasim Bagwan.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}