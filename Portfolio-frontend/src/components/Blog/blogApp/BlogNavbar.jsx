// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogNavbar.jsx

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import images from '../../../assets/imageIndex';
import { FaSearch } from 'react-icons/fa';
import './BlogNavbar.scss';

export const BlogNavbar = () => {
  // State to manage the visibility of the search box (only for small screens)
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  // State to track whether the screen width is 768px or less
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to toggle the visibility of the search box
  const toggleSearchBox = () => {
    if (isMobile) {
      setSearchBoxVisibility(!searchBoxVisibility);
    }
  };

  // Effect to update the `isMobile` state based on window resize
  useEffect(() => {
    // Handler to update `isMobile` whenever the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className='blogNavbar'>
        {/* Link to the blog homepage */}
        <Link to='/blog'>
          <img src={images.deoIconGold} alt='Circular logo with the letter D' />
        </Link>

        {/* Search box with conditional visibility */}
        <div
          className={`blogSearch ${
            isMobile && !searchBoxVisibility ? 'hide' : 'show'
          }`}>
          <input type='text' placeholder='Search' className='blogSearchInput' />
          {/* Search icon with conditional click handler based on screen size */}
          <FaSearch
            onClick={isMobile ? toggleSearchBox : null}
            className='BlogSearchIcon'
          />
        </div>
      </nav>
    </>
  );
};
