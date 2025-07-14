import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '90%', textAlign: 'center', p: 2 }}>
        <Avatar src={profile.avatar_url} alt="avatar" sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
        <CardContent>
          <Typography variant="h5">{profile.name || profile.login}</Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
            {profile.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Followers: {profile.followers}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileCard;
