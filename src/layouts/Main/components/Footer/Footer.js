import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 0)
    },
    background: "#000"
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8)
    }
  },
  logoContainerItem: {
    paddingTop: 0,
    justifyContent: "center"
  },
  logoContainer: {
    width: 120,
    height: 32
  },
  logoImage: {
    width: "100%",
    height: "100%"
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1)
  },
  socialIconContainer: {
    justifyContent: "center"
  },
  socialIcon: {
    padding: 0,
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
  menuListContainer: {
    padding: "0 !important"
  },
  menu: {
    display: "flex"
  },
  menuItem: {
    margin: "auto",
    display: "flex",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "70%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  menuGroupItem: {
    paddingTop: 0,
    justifyContent: "center",
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0
    }
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white"
  },
  divider: {
    width: "100%"
  },
  navLink: {
    color: "#fff"
  },
  date: {
    color: "#d4af37"
  }
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Grid container spacing={3} className={classes.menuListContainer}>
              <List disablePadding className={classes.menuItem}>
                {pages.map((page, i) => (
                  <ListItem
                    disableGutters
                    key={i}
                    className={classes.menuGroupItem}
                  >
                    <Typography
                      variant="body1"
                      component={RouterLink}
                      to={page.href}
                      className={clsx(classes.navLink, "submenu-item")}
                    >
                      {page.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div>
                  <Typography
                    variant="body1"
                    className={clsx(classes.date, "submenu-item")}
                  >
                    © {new Date().getFullYear()} TailorMadeBoston.
                  </Typography>
                </div>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default Footer;
