import { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { Sidebar as ReactSidebar, sidebarClasses } from 'react-pro-sidebar';

import { designTokens } from '../../../theme';
import ItemsSidebar from './Items.sidebar';

const Sidebar: React.FC = () =>{
  const theme = useTheme();
  const colors = designTokens({mode: theme.palette.mode});
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          background: `${colors.greenAccent[400]} !important`,
        },
        "& .ps-menu-button.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ReactSidebar collapsed={isCollapsed}
        rootStyles={{
          height: "100%",
          border:"transparent",
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <ItemsSidebar colors={colors} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </ReactSidebar>
    </Box>
  );
}

export default Sidebar;