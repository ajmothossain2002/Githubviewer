import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
               GitHub Profile Viewer
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Webskitters. All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} md="auto" sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <IconButton
              component={Link}
              href="https://github.com/"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com/"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
