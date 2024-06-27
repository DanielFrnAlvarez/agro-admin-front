import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { Sidebar as ReactSidebar, sidebarClasses } from 'react-pro-sidebar';

import ItemsSidebar from './Items.sidebar';
import { designTokens } from '../../../theme/theme';

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const colors = designTokens({ mode: theme.palette.mode });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sliderBarStyles = {
    "#root & .ps-menu-button:hover": {
      color: "#868dfb",
      backgroundColor: colors.primary[300],
    },
    ".ps-menu-icon ":{
      marginRight: 0,
    },
    "& .ps-menu-button.ps-active": {
      color: "#6870fa",
    },
    ".ps-sidebar-root.ps-collapsed": {
      width: '65px',
      minWidth: '65px',
    },
    "@media (max-width: 768px)": {
      ".ps-sidebar-root": {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '70%',
      },
      ".ps-sidebar-root.ps-collapsed": {
        position: 'relative',
        ".ps-menu-button": {
          paddingLeft: '10px',
        },
      },
      ".ps-menu-button:hover": {
        backgroundColor: 'transparent !important',
      }
    }
  };

  const overlayStyles = {
    "@media (max-width: 768px)": {
      display: isCollapsed ? 'none' : 'block',
      zIndex: 2,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
  };

  return (
    <Box sx={sliderBarStyles}>
      <Box sx={overlayStyles} />
      <ReactSidebar
        collapsed={isCollapsed}
        rootStyles={{
          height: '100%',
          border: 'transparent',
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <ItemsSidebar
          colors={colors}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </ReactSidebar>
    </Box>
  );
}

export default Sidebar;
