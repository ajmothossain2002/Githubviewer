import { useState } from 'react';
import SearchBar from './SearchBar';
import ProfileCard from './ProfileCard';
import RepoList from './RepoList';
import { Typography, Box } from '@mui/material';
import toast from 'react-hot-toast';

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchData = async (username) => {
    try {
      // Fetch profile info
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      if (!profileRes.ok) throw new Error("User not found!");
      const profileData = await profileRes.json();
      setProfile(profileData);

      // Fetch repositories info
      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (error) {
       toast.error(`Error: ${error.message}`);
      setProfile(null);
      setRepos([]);
    }
  };

  return (
    <Box>
      <Typography  variant="h4" align="center" sx={{ mt: 4 }}>
        GitHub Profile Viewer
      </Typography>
      <SearchBar onSearch={fetchData} />
      <ProfileCard profile={profile} />
      <RepoList repos={repos} />
    </Box>
  );
};

export default Home;
