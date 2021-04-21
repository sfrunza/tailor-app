/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react";
import {
  NavLink as RouterLink,
  Link as RouterLinkHome
} from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  listContainer: {
    width: "70%",
    marginTop: "1rem"
  },
  listItem: {
    flexDirection: "column",
    alignItems: "center"
  },

  listItemIcon: {
    minWidth: "auto",
    color: "#000"
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer"
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    color: theme.palette.secondary.main
  },
  menuItems: {
    display: "flex",
    flexDirection: "column"
  },
  menuGroupItem: {
    padding: theme.spacing(2, 0),
    flexGrow: 1,
    textAlign: "center"
  },
  menuGroupTitle: {
    // fontWeight: 900,
    // textDecoration: "none",
    flexGrow: 1,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 6,
    "&.active": {
      color: theme.palette.secondary.main
    }
    // marginLeft: 15,
    // fontSize: 16,
  },
  divider: {
    width: "100%"
  }
}));

const SidebarNav = ({ pages, onClose, className, ...rest }) => {
  const classes = useStyles();

  const MenuGroup = props => {
    return (
      <List disablePadding className={classes.listContainer}>
        {props.pages.map((page, i) => {
          return (
            <div className={classes.menuItems} key={i}>
              <ListItem disableGutters className={classes.menuGroupItem}>
                <Typography
                  variant="body1"
                  component={page.href === "/" ? RouterLinkHome : RouterLink}
                  to={page.href}
                  className={classes.menuGroupTitle}
                  color="textPrimary"
                  onClick={onClose}
                >
                  {page.title}
                </Typography>
              </ListItem>
              <Divider className={classes.divider} />
            </div>
          );
        })}
      </List>
    );
  };

  const LandingPages = () => {
    return <MenuGroup pages={pages} />;
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon className={classes.closeButton} />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LandingPages />
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
};

export default SidebarNav;
