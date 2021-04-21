import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: "white",
    letterSpacing: 16,
    textTransform: "uppercase"
  },
  button: {
    fontWeight: 600
  },
  subtitle: {
    fontSize: 22,
    marginLeft: 8
  }
}));

const Header = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Tailor Made</span>}
        titleVariant="h3"
        subtitleVariant="body1"
        subtitle={
          <span className={clsx(classes.subtitle, classes.textWhite)}>
            Boston
          </span>
        }
        ctaGroup={[
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.button}
            component={RouterLink}
            to="/gallery"
          >
            See portfolio
          </Button>
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Header.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Header;
