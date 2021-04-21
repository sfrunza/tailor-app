import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Icon } from "components/atoms";

const useStyles = makeStyles(theme => ({
  extraSmall: {
    width: 20,
    height: 20
  },
  small: {
    width: 50,
    height: 50
  },
  medium: {
    width: 70,
    height: 70
  },
  large: {
    width: 90,
    height: 90
  },
  circle: {
    borderRadius: "100%"
  },
  square: {
    borderRadius: theme.spacing(2)
  }
}));

/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */
const IconAlternate = props => {
  const {
    iconProps,
    fontIconClass,
    size,
    color,
    shape,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const useBackgroundStyles = makeStyles(() => ({
    background: {
      background: color[50]
    }
  }));
  const backgroundClasses = useBackgroundStyles();

  return (
    <Avatar
      className={clsx(
        "icon-alternate",
        classes[size],
        classes[shape],
        backgroundClasses.background,
        className
      )}
      {...rest}
    >
      <Icon
        size={size}
        fontIconClass={fontIconClass}
        fontIconColor={color}
        className="icon-alternate__icon"
        {...iconProps}
      />
    </Avatar>
  );
};

IconAlternate.defaultProps = {
  size: "medium",
  shape: "square",
  iconProps: {}
};

IconAlternate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Sizes of the icon
   */
  size: PropTypes.oneOf(["extraSmall", "small", "medium", "large"]),
  /**
   * Color of the icon
   */
  // color: PropTypes.string,
  /**
   * The shape of the alternate icon
   */
  shape: PropTypes.oneOf(["circle", "square"]),
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: PropTypes.object
};

export default IconAlternate;
