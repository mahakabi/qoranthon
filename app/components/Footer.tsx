import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-center py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لجمعية برمج
        </p>

        {/* <div className="mb-4">
          <a
            href="/terms"
            className="hover:text-secondary transition duration-300 ease-in-out inline-flex items-center gap-1 text-sm"
            aria-label="الشروط والأحكام"
          >
            الشروط والأحكام
          </a>
        </div> */}

        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://www.linkedin.com/company/parmg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://parmg.sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition duration-300 ease-in-out"
            aria-label="الموقع الرسمي"
          >
            <i className="fas fa-globe"></i>
          </a>
          <a
            href="https://x.com/parmg_sa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition duration-300 ease-in-out"
            aria-label="X تويتر"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
