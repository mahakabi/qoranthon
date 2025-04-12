import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-center py-6">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-wrap justify-center items-center gap-4 text-white">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لجمعية برمج
                    </p>

                    <div className="flex space-x-2 mt-4 sm:mt-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition duration-300 ease-in-out"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition duration-300 ease-in-out"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition duration-300 ease-in-out"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
