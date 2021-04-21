import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 600,
    color: "#fff",
    letterSpacing: 3,
    "& span": {
      margin: theme.spacing(0, 1)
    }
  },
  wrapper: {
    display: "flex",
    justifyContent: "center"
  }
}));

const Subheader = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <div className={classes.wrapper}>
        <Typography
          variant="body1"
          align="left"
          className={classes.title}
          gutterBottom
        >
          Custom Tailoring<span>|</span>Custom Alterations <span>|</span>{" "}
          Embroidery design <span>|</span> Furniture Upholstery <span>|</span>{" "}
          Fabric, Leather, and Fur
        </Typography>
      </div>
    </div>
  );
};

Subheader.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Subheader;
