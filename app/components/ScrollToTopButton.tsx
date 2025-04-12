import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        visible && (
            <button className='bg-secondary p-2'
                type="button"
                aria-label="Scroll to top"
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: 18,
                    right: '30px',
                    // backgroundColor: '#1c5d34',
                    color: '#14406D',
                    border: 'none',
                    borderRadius: '50%',
                    // padding: '10px 15px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    zIndex: 1000,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
            >
                <FaArrowUp />

            </button>
        )
    );
};

export default ScrollToTopButton;
