import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { Menu, MenuItem } from 'react-pro-sidebar';

import { AccountCircleOutlinedIcon, CalendarMonthOutlinedIcon, Diversity1OutlinedIcon, HomeOutlinedIcon, InsertChartOutlinedTwoToneIcon, MenuOutlinedIcon, ReceiptIcon, WorkspacesOutlinedIcon } from '../../../utils/muiIcons';
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
          padding: "5px 0px 5px 0px",
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
      <Box paddingLeft={isCollapsed ? undefined : "15px"}>
        <Item title={'Inicio'}
          to={'/dashboard'}
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 0px" }}
        >Contable</Typography>
        <Item title={'Facturas'}
          to={'/invoices'}
          icon={<ReceiptIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item title={'Clientes'}
          to={'/customers'}
          icon={<Diversity1OutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 0px" }}
        >Interno</Typography>
        <Item title={'Perfil'}
          to={'/profile'}
          icon={<AccountCircleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item title={'Calendario'}
          to={'/calendar'}
          icon={<CalendarMonthOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item title={'Equipo de trabajo'}
          to={'/team'}
          icon={<WorkspacesOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 0px" }}
        >Información</Typography>
        <Item title={'Gráficas'}
          to={'/charts'}
          icon={<InsertChartOutlinedTwoToneIcon />}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>
    </Menu>
  );
}

export default ItemsSidebar;
