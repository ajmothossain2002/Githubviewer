import React from 'react';
import { Box, Card, CardContent, Typography, Link, List, ListItem, Divider } from '@mui/material';

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, width: '90%', p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Repositories
          </Typography>
          <List>
            {repos.map((repo) => (
              <React.Fragment key={repo.id}>
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <Link href={repo.html_url} target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: 'bold' }}>
                    {repo.name}
                  </Link>
                  <Typography variant="body2" sx={{ ml: 2 }}>
                    ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                  </Typography>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RepoList;
