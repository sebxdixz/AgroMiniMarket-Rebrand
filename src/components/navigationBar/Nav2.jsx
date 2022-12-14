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
import './navigationBar.css'

const options = ['Productos', 'Frutas', 'Verduras', 'Abarrotes', 'Bebestibles', 'Insumos', 'Aliños'];

export default function Nav2() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(localStorage.getItem("opciones")===null? 0 : options.indexOf(localStorage.getItem("opciones")));

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    window.location.href = `/Productos`
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    localStorage.setItem("opciones",options[index])
    setOpen(false);
    window.location.href = `/Productos`

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

        <Button style={{left:'-10px'}}
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
        // style={{ left: "-4000%" }}
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
            <Paper style={{ width:'120px', backgroundColor: "#E3F2FD" }}>
              <ClickAwayListener onClickAway={handleClose} >
                <MenuList id="split-button-menu" style={{ width: "420px" }} autoFocusItem >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      style={{ width: "120px" }}
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

