import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  copy: {
    marginBottom: theme.spacing(6)
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  backButton: {
    opacity: 0
  }
}));

const categories = [
  {
    value: "custom-clothing-design",
    label: "Custom Clothin Design"
  },
  {
    value: "embroidery",
    label: "Embroidery"
  },
  {
    value: "upholstery",
    label: "Upholstery"
  },
  {
    value: "drapery-and-curtains",
    label: "Drapery and curtains"
  },
  {
    value: "masks",
    label: "Masks"
  }
];

const Header = ({ className, data, history, match, ...rest }) => {
  const classes = useStyles();
  const index = categories.findIndex(category => category.value === match);

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <div className={classes.copy}>
        <SectionHeader
          title={
            <div className={classes.header}>
              <IconButton aria-label="back" onClick={() => history.goBack()}>
                <ArrowBackIosRoundedIcon />
              </IconButton>
              <Typography component="span" variant="inherit" color="secondary">
                {categories[index].label}
              </Typography>
              <IconButton
                aria-label="back"
                className={classes.backButton}
                onClick={() => history.goBack()}
              >
                <ArrowBackIosRoundedIcon />
              </IconButton>
            </div>
          }
          disableGutter={true}
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
