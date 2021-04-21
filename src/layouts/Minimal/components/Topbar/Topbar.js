import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";
import { Image } from "components/atoms";
import logo from "assets/images/newlogo.png";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: "#000",
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8)
    }
  },
  logoContainer: {
    width: 52,
    height: 50,
    padding: 4,
    [theme.breakpoints.up("md")]: {
      width: 60,
      height: 60
    }
  },
  logoImage: {
    width: "100%",
    height: "100%"
  }
}));

const Topbar = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
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
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired
};

export default Topbar;
