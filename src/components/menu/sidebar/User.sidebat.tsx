import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface UserSidebarProps {
  colors: Colors;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ colors }) => {
  const theme = useTheme();
  const companyImage = theme.palette.mode === 'dark'
    ? '/src/assets/images/app_logo.png'
    : '/src/assets/images/app_logo_dark.png';

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={companyImage}
        />
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mt: "10px" }}
        >
          Jhon Doe
        </Typography>
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
        >
          User role
        </Typography>
      </Box>
    </Box>
  );
}

export default UserSidebar;
