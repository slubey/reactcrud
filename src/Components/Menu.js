// import React, { Component } from 'react';
// // import {
// //   BrowserRouter as Router,
// //  // Switch,
// //  // Route,
// //  // Link
// // } from "react-router-dom";
// import 
//   {
//     AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, CssBaseline, MenuList, MenuItem
//    } from '@material-ui/core';
//    import { withStyles } from '@material-ui/core/styles'
//    //import { Menu } from '@material-ui/icons'

// class Menu extends Component {
//   constructor() {
//     super()

//     this.state = {
//         // Breed: "",
//         // ImageUri: ""
//     }
//   }
//   render() {
//     return (
//         <div>
//           Menu goes here menu Component
//           <MenuList>

//           </MenuList>
//            </div>
//         );
//     }
//     //this.handleBlur = this.handleBlur.bind(this)
// }
// export default Menu
// // import { makeStyles } from '@material-ui/core/styles';
// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// // import AccountCircle from '@material-ui/icons/AccountCircle';
// // import Switch from '@material-ui/core/Switch';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import FormGroup from '@material-ui/core/FormGroup';
// // import MenuItem from '@material-ui/core/MenuItem';
// // import Menu from '@material-ui/core/Menu';

// // const useStyles = makeStyles(theme => ({
// //   root: {
// //     flexGrow: 1,
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
// //   title: {
// //     flexGrow: 1,
// //   },
// // }));

// // export default function MenuAppBar() {
// //   const classes = useStyles();
// //   const [auth, setAuth] = React.useState(true);
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const open = Boolean(anchorEl);

// //   const handleChange = event => {
// //     setAuth(event.target.checked);
// //   };

// //   const handleMenu = event => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <FormGroup>
// //         <FormControlLabel
// //           control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
// //           label={auth ? 'Logout' : 'Login'}
// //         />
// //       </FormGroup>
// //       <AppBar position="static">
// //         <Toolbar>
// //           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" className={classes.title}>
// //             Photos
// //           </Typography>
// //           {auth && (
// //             <div>
// //               <IconButton
// //                 aria-label="account of current user"
// //                 aria-controls="menu-appbar"
// //                 aria-haspopup="true"
// //                 onClick={handleMenu}
// //                 color="inherit"
// //               >
// //                 <AccountCircle />
// //               </IconButton>
// //               <Menu
// //                 id="menu-appbar"
// //                 anchorEl={anchorEl}
// //                 anchorOrigin={{
// //                   vertical: 'top',
// //                   horizontal: 'right',
// //                 }}
// //                 keepMounted
// //                 transformOrigin={{
// //                   vertical: 'top',
// //                   horizontal: 'right',
// //                 }}
// //                 open={open}
// //                 onClose={handleClose}
// //               >
// //                 <MenuItem onClick={handleClose}>Profile</MenuItem>
// //                 <MenuItem onClick={handleClose}>My account</MenuItem>
// //               </Menu>
// //             </div>
// //           )}
// //         </Toolbar>
// //       </AppBar>
// //     </div>
// //   );
// // }


// // // import React from 'react';
// // // import { makeStyles } from '@material-ui/core/styles';
// // // import AppBar from '@material-ui/core/AppBar';
// // // import Toolbar from '@material-ui/core/Toolbar';
// // // import Typography from '@material-ui/core/Typography';
// // // import Button from '@material-ui/core/Button';
// // // import IconButton from '@material-ui/core/IconButton';
// // // import MenuIcon from '@material-ui/icons/Menu';

// // // const useStyles = makeStyles(theme => ({
// // //   root: {
// // //     flexGrow: 1,
// // //   },
// // //   menuButton: {
// // //     marginRight: theme.spacing(2),
// // //   },
// // //   title: {
// // //     flexGrow: 1,
// // //   },
// // // }));

// // // export default function ButtonAppBar() {
// // //   const classes = useStyles();

// // //   return (
// // //     <div className={classes.root}>
// // //       <AppBar position="static">
// // //         <Toolbar>
// // //           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
// // //             <MenuIcon />
// // //           </IconButton>
// // //           <Typography variant="h6" className={classes.title}>
// // //             News
// // //           </Typography>
// // //           <Button color="inherit">Login</Button>
// // //         </Toolbar>
// // //       </AppBar>
// // //     </div>
// // //   );
// // // }
