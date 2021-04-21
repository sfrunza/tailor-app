import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";
import { Image } from "components/atoms";
import MenuIcon from "@material-ui/icons/Menu";
import SignOut from "SignOut";
import logo from "assets/images/newlogo.png";

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#000"
  },
  logoContainer: {
    width: 52,
    height: 50,
    padding: 4,
    [theme.breakpoints.up("md")]: {
      width: 60,
      height: 60,
      marginLeft: theme.spacing(5)
    }
  },
  logoImage: {
    width: "100%",
    height: "100%"
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItem: {
    paddingRight: 0
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap"
  },
  listItemButton: {
    whiteSpace: "nowrap"
  },
  iconButton: {
    paddingRight: 0,
    width: "2rem",
    height: "2rem",
    color: theme.palette.secondary.main,
    "&:hover": {
      background: "transparent"
    }
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  themeToggler,
  themeMode,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      <Toolbar>
        <div className={classes.logoContainer}>
          <a href="/" title="thefront">
            <Image
              className={classes.logoImage}
              src={logo}
              alt="tailormade"
              lazy={false}
            />
          </a>
        </div>
        <Box flexGrow={1} />
        <List disablePadding className={classes.navigationContainer}>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <SignOut />
          </ListItem>
        </List>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            className={classes.iconButton}
            disableRipple
          >
            <MenuIcon className={classes.iconButton} />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired
};

export default TopBar;
