import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/dashboard'); // Redirect to dashboard after sign-in
  };

  return (
    <div className="container mx-auto my-8 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <TextInput
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <TextInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
