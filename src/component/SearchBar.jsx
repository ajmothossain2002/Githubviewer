import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (username.trim() !== '') {
  //     onSearch(username.trim());
  //   }
  // };
   const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      toast.success(`Searching for ${username.trim()}`);
      onSearch(username.trim());
    } else {
      toast.error("Please enter a username!");
    }
  };


  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <TextField
        variant="outlined"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ width: 300, mr: 2 }}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
