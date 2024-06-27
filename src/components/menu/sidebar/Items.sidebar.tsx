import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {
  AccountCircleOutlinedIcon,
  CalendarMonthOutlinedIcon,
  Diversity1OutlinedIcon,
  HomeOutlinedIcon,
  InsertChartOutlinedTwoToneIcon,
  MenuOutlinedIcon,
  ReceiptIcon,
  WorkspacesOutlinedIcon
} from '../../../utils/muiIcons';
import UserSidebar from './User.sidebat';

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (value: string) => void;
}

const Item: React.FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography style={{ marginLeft: '10px' }}>{title}</Typography>
    </MenuItem>
  );
};

interface ItemsSidebarProps {
  colors: Colors;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const ItemsSidebar: React.FC<ItemsSidebarProps> = ({ colors, isCollapsed, setIsCollapsed }) => {
  const [selected, setSelected] = useState('Dashboard');

  const renderMenuSection = (title: string, items: Array<ItemProps>) => (
    <Box>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 10px" }}
      >
        {!isCollapsed && title}
      </Typography>
      {items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          to={item.to}
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </Box>
  );

  return (
    <Menu
      menuItemStyles={{
        button: {
          height: "40px",
          paddingLeft: isCollapsed ? "15px" : "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
        },
      }}
    >
      <MenuItem
        onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={{ margin: "10px 0 20px 0" }}
      >
        {!isCollapsed && (
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h3" color={colors.grey[100]}>
              Agro Admin
            </Typography>
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </MenuItem>
      {!isCollapsed && <UserSidebar colors={colors} />}
      <Box>
        <Item
          title="Inicio"
          to="/dashboard"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        {renderMenuSection('Contable', [
          { title: 'Facturas', to: '/invoices', icon: <ReceiptIcon />, selected, setSelected },
          { title: 'Clientes', to: '/customers', icon: <Diversity1OutlinedIcon />, selected, setSelected },
        ])}
        {renderMenuSection('Interno', [
          { title: 'Perfil', to: '/profile', icon: <AccountCircleOutlinedIcon />, selected, setSelected },
          { title: 'Calendario', to: '/calendar', icon: <CalendarMonthOutlinedIcon />, selected, setSelected },
          { title: 'Equipo de trabajo', to: '/team', icon: <WorkspacesOutlinedIcon />, selected, setSelected },
        ])}
        {renderMenuSection('Información', [
          { title: 'Gráficas', to: '/charts', icon: <InsertChartOutlinedTwoToneIcon />, selected, setSelected },
        ])}
      </Box>
    </Menu>
  );
};

export default ItemsSidebar;
