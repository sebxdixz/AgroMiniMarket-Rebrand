import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { display } from '@mui/system';
import { Link } from "react-router-dom";


const options = ['Productos', 'Frutas', 'Verduras', 'Abarrotes', 'Bebestibles', 'Insumos'];

export default function Nav2() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    window.location.href = `/${options[selectedIndex]}`
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    window.location.href = `/${options[selectedIndex]}`

  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);


  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick} font="Helvetica">{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="Seleccionar tipo de producto"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 10,
        }}
        color="#000000"
        font="Helvetica"
        style={{ left: "-200%" }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper style={{ right: "-10%", backgroundColor: "#E3F2FD" }}>
              <ClickAwayListener onClickAway={handleClose} >
                <MenuList id="split-button-menu" style={{ width: "420px" }} autoFocusItem >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      style={{ width: "420px" }}
                      selected={index === selectedIndex}

                      onClick={(event) => handleMenuItemClick(event, index)}
                    >


                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

