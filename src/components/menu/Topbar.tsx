import { useContext } from "react";

import { Box, IconButton, InputBase, useTheme } from "@mui/material";


import { DarkModeOutlinedIcon, LightModeOutlinedIcon, NotificationsNoneOutlinedIcon, PersonOutlineOutlinedIcon, SearchOutlinedIcon, SettingsOutlinedIcon } from "../../utils/muiIcons";
import { designTokens, ColorModeContext } from "../../theme/theme";

const Topbar: React.FC = () => {
  const theme = useTheme();
  const colors = designTokens({mode: theme.palette.mode});
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box
        display='flex'
        bgcolor={colors.primary[400]}
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
            ? (<DarkModeOutlinedIcon />)
            : (<LightModeOutlinedIcon />)
          }
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;