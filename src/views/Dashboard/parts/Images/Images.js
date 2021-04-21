import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Divider } from "@material-ui/core";

import { Results, Headline } from "./components";

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 0)
    }
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4)
    }
  }
}));

const Images = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Headline />
      <Divider className={classes.divider} />
      <Results className={classes.list} />
    </div>
  );
};

Images.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Images;
