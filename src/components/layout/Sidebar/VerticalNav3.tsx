import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import NavigationStyles from './Styles';

export default function Navigation(props) {
  const classes = NavigationStyles();

  const content = {
    brand: { image: '/ondo-logo.svg', width: 110 },
    'brand-mobile': { image: '/logo-ondo.svg', width: 110 },
    link1: 'All Transactions The Graph',
    link2: 'All Transactions Web3',
    link3: 'Added',
    link4: 'Removed',
    'primary-action': 'Connect',
    ...props.content,
  };

  let brand = content['brand'].text || '';
  let brandMobile = content['brand-mobile'].text || '';

  if (content['brand'].image) {
    brand = (
      <img src={content['brand'].image} alt="" width={content['brand'].width} />
    );
  }

  if (content['brand-mobile'].image) {
    brandMobile = (
      <img
        src={content['brand-mobile'].image}
        alt=""
        width={content['brand-mobile'].width}
      />
    );
  }

  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : [],
  };

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/"
            color="inherit"
            underline="none"
            variant="h5"
            className={classes.linkBrand}
          >
            {brand}
          </Link>
          <Button
            variant="contained"
            color="secondary"
            className={classes.primaryButton}
          >
            {content['primary-action']}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawerRoot} variant="permanent">
        <Toolbar className={classes.toolbar} />
        <div className={classes.drawerContainer}>
          <List>
            <Link href="/">
              <ListItem button key={content['link1']}>
                <ListItemIcon className={classes.iconWrapper}>
                  <CompareArrowsIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={content['link1']} />
              </ListItem>
            </Link>
            <Link href="/web3">
              <ListItem button key={content['link2']}>
                <ListItemIcon className={classes.iconWrapper}>
                  <SwapCallsIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={content['link2']} />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box
            mb={1}
            ml={2}
            pb={2}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Link
              href="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              {brandMobile}
            </Link>
          </Box>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon className={classes.iconWrapper}>
                <CompareArrowsIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon className={classes.iconWrapper}>
                <CompareArrowsIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
          </List>
          <Box
            mt={1}
            ml={2}
            pt={3}
            border={1}
            borderBottom={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Button variant="contained" color="secondary" fullWidth>
              {content['primary-action']}
            </Button>
          </Box>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <div>
          {buckets['main'].map((component) => (
            <React.Fragment>{component}</React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
