import { Button, Navbar, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggletheme } from '../redux/theme/themeSlice';
import { setSearchQuery } from '../redux/blog/blogSlice';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchTerm)); // Dispatch search query to Redux
  };

  // Reset search query when Home is clicked
  const handleHomeClick = () => {
    setSearchTerm(''); // Clear local search input
    dispatch(setSearchQuery('')); // Clear the search query in Redux state
  };

  return (
    <Navbar className="border-b-2 flex justify-between items-center py-2">
      {/* Center Section: Home button and Search bar */}
      <div className="flex items-center flex-1 justify-center gap-4">
        {/* Home Button */}
        <Link to="/" onClick={handleHomeClick} className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Afiya's
          </span>
          Blog
        </Link>

        {/* Search Bar */}
        <form className="hidden lg:flex flex-1 justify-center items-center" onSubmit={handleSearch}>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value === "") {
                dispatch(setSearchQuery("")); // Reset search when input is cleared
              }
            }}
            className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
          />
          <Button type="submit" color="gray" className="ml-2 hidden lg:inline">
            <AiOutlineSearch />
          </Button>
        </form>
      </div>

      {/* Right Section: Create Blog, Sign In, and Theme toggle */}
      <div className="flex items-center gap-4">
        <Link to="/create-blog">
          <button className="px-3 py-2 bg-gradient-to-r from-green-500 to-teal-300 text-white rounded-lg">
            Create Blog
          </button>
        </Link>
        <Link to="/sign-in">
          <button className="px-3 py-2 bg-gradient-to-r from-pink-500 to-blue-300 text-white rounded-lg">
            Sign In
          </button>
        </Link>

        {/* Theme Toggle */}
        <Button className="w-12 h-10" color="gray" pill onClick={() => dispatch(toggletheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        {/* Search button for small screens */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill onClick={handleSearch}>
          <AiOutlineSearch />
        </Button>

        {/* Navbar Toggle for mobile */}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
