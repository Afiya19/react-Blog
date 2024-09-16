import { Button, Navbar, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
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
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchTerm)); 
  };

  const handleHomeClick = () => {
    setSearchTerm(''); 
    dispatch(setSearchQuery('')); 
    navigate('/blogs'); // Navigate to the blogs page when logo is clicked
  };

  return (
    <Navbar className="border-b-2 flex justify-between items-center py-2">
      <div className="flex items-center flex-1 justify-center gap-4">
        {/* Update Link for the logo */}
        <button onClick={handleHomeClick} className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Afiya's
          </span>
          Blog
        </button>

        <form className="hidden lg:flex flex-1 justify-center items-center" onSubmit={handleSearch}>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value === "") {
                dispatch(setSearchQuery("")); 
              }
            }}
            className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
          />
          <Button type="submit" color="gray" className="ml-2 hidden lg:inline">
            <AiOutlineSearch />
          </Button>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/create-blog">
          <button className="px-3 py-2 bg-gradient-to-r from-green-500 to-teal-300 text-white rounded-lg">
            Create Blog
          </button>
        </Link>

        <Button className="w-12 h-10" color="gray" pill onClick={() => dispatch(toggletheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        <Button className="w-12 h-10 lg:hidden" color="gray" pill onClick={handleSearch}>
          <AiOutlineSearch />
        </Button>

        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
