import { useContext } from "react";

import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { ColorModeContext, themeSettings } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = themeSettings({ mode: theme.palette.mode });
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box
        display='flex'
        bgcolor={colors.palette.mode}
        borderRadius='3px'
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search'></InputBase>
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
            ? (<DarkModeOutlinedIcon/>)
            : (<LightModeOutlinedIcon/>)
          }
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;