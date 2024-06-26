import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import { AccountCircleOutlinedIcon, HomeOutlinedIcon, MenuOutlinedIcon, ReceiptIcon } from '../../../utils/muiIcons';
import UserSidebar from './User.sidebat';

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (value: string) => void;
}

const Item: React.FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <MenuItem active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  )
}

const ItemsSidebar: React.FC<{ colors: Colors, isCollapsed: boolean, setIsCollapsed: (value: boolean) => void }> = ({ colors, isCollapsed, setIsCollapsed }) => {
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Menu
      menuItemStyles={{
        button: {
          height: "40px",
          padding: "5px 35px 5px 20px",
        }
      }}
    >
      <MenuItem
        onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={{
          margin: "10px 0 20px 0",
        }}
      >
        {!isCollapsed && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography variant="h3" color={colors.grey[100]}>
              Agro Admin
            </Typography>
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </MenuItem>
      {!isCollapsed && (
        <UserSidebar colors={colors} />
      )}
      <Box paddingLeft={isCollapsed ? undefined : "10%"}>
        <Item title={'Dashboard'} 
          to={'/dashboard'} 
          icon={<HomeOutlinedIcon/>} 
          selected={selected} 
          setSelected={setSelected} 
        />
        <Item title={'Invoices'} 
          to={'/invoices'} 
          icon={<ReceiptIcon/>} 
          selected={selected} 
          setSelected={setSelected} 
        />
        <Item title={'Customers'} 
          to={'/customers'} 
          icon={<AccountCircleOutlinedIcon/>} 
          selected={selected} 
          setSelected={setSelected} 
        />
      </Box>
    </Menu>
  );
}

export default ItemsSidebar;
