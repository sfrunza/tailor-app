import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Image from "components/atoms/Image";
import {
  NavLink as RouterLink,
  Link as RouterLinkHome
} from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "assets/images/newlogo.png";

const useStyles = makeStyles((theme, props) => ({
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // height: (props) => props.minHeight,
    padding: 0
    // transition: "padding .5s ease-in-out"
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    zIndex: 999,
    width: "100%",
    margin: "0 auto",
    position: "fixed",
    backgroundColor: "#fff"
    // padding: theme.spacing(0, 2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(0, 8),
    // },
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.secondary.main
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0
    }
    // "&.active": {
    //   color: theme.palette.secondary.main,
    // },
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark
    }
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    letterSpacing: 6,
    "&.active": {
      color: theme.palette.secondary.main
    }
  },
  listItemButton: {
    whiteSpace: "nowrap"
  },
  listItemIcon: {
    minWidth: "auto"
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2)
  },
  iconButton: {
    width: "1.7rem",
    height: "1.7rem",
    color: theme.palette.secondary.main
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark
  },
  logoContainer: {
    width: 45,
    height: 45,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: props => props.width,
      height: props => props.width,
      transition: "all .4s ease-in-out"
    }
    // transition: "all .4s ease-in-out"
  },
  logoImage: {
    width: "100%",
    height: "100%"
    // margin: "auto",
    // transition: "all .5s ease-in-out"
  },
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuItem: {
    marginRight: theme.spacing(5),
    "&:last-child": {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: "uppercase"
  },
  blackContainer: {
    backgroundColor: "#000",
    display: "flex",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: props => props.padding,
    transition: "all .4s ease-in-out"
  },
  socialIconContainer: {
    justifyContent: "center"
  },
  socialIcon: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 1)
    },
    marginRight: theme.spacing(1),
    color: "#fff",
    "&:hover": {
      background: "transparent"
    },
    "&:last-child": {
      marginRight: 0
    }
  },
  icon: {
    fontSize: 24
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
      paddingRight: theme.spacing(3)
    }
  },
  lastChildDisplay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    "& p ": {
      fontWeight: 600
    }
  }
}));

const Topbar = ({ onSidebarOpen, pages, className, ...rest }) => {
  const [padding, setPadding] = useState("10px 0px");
  const [navPadding, setNavPadding] = useState("10px 0px");
  const [width, setWidth] = useState(80);
  const classes = useStyles({ padding, width, navPadding });

  useEffect(() => {
    const checkBackgroundColor = () => {
      if (window.scrollY > 90) {
        setPadding("5px 0px");
        setNavPadding("0px");
        setWidth(50);
      } else {
        setPadding("10px 0px");
        setNavPadding("10px 0px");
        setWidth(80);
      }
    };
    window.addEventListener("scroll", checkBackgroundColor);
    return () => {
      window.removeEventListener("scroll", checkBackgroundColor, false);
    };
  }, [width, padding, navPadding]);

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.blackContainer}>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4}>
            <List disablePadding>
              <ListItem disableGutters className={classes.socialIconContainer}>
                <IconButton
                  className={classes.socialIcon}
                  aria-label="facebook"
                  href="https://www.facebook.com/tailormadeboston/"
                  target="_blank"
                >
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.socialIcon}
                  aria-label="intagram"
                  href="https://www.instagram.com/tailormadeboston/"
                  target="_blank"
                >
                  <InstagramIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={4} className={classes.logoWrap}>
            <div className={classes.logoContainer}>
              <Typography component={RouterLink} to="/">
                <Image
                  className={classes.logoImage}
                  src={logo}
                  alt="tailormade"
                  lazy={false}
                />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} className={classes.lastChildDisplay}>
            <a href="tel:+1-781-772-2057">
              <Typography variant="body1" color="secondary">
                (781) 772-2057
              </Typography>
            </a>
            <Typography variant="body2" color="inherit">
              402 Washington Street Wellesley MA 02481
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {pages.map((page, i) => {
            return (
              <ListItem className={classes.listItem} key={i}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component={page.href === "/" ? RouterLinkHome : RouterLink}
                  to={page.href}
                  className={clsx(classes.listItemText, "menu-item")}
                >
                  {page.title}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton onClick={onSidebarOpen} aria-label="Menu">
          <MenuRoundedIcon className={classes.iconButton} />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.array.isRequired
};

export default Topbar;
