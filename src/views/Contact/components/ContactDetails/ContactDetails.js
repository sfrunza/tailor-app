import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import PhoneInTalkRoundedIcon from "@material-ui/icons/PhoneInTalkRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";

const useStyles = makeStyles(theme => ({
  list: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  listItemText: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 auto",
    [theme.breakpoints.down("sm")]: {
      flex: "unset"
    }
  },
  listItem: {
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center"
    }
  },
  icon: {
    background: "transparent",
    borderRadius: 0,
    color: "#000"
  },
  iconContainer: {
    minWidth: 56,
    flexShrink: 0,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    marginRight: 10,
    borderRadius: "18%"
  }
}));

const ContactDetails = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Contact Details"
        subtitle="Our contact details. We carefully read and answer to all your questions."
        data-aos="fade-up"
        align={isMd ? "center" : "left"}
      />
      <List disablePadding className={classes.list}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <a href="tel:+1-781-772-2057">
            <ListItemAvatar className={classes.iconContainer}>
              <PhoneInTalkRoundedIcon className={classes.icon} />
            </ListItemAvatar>
          </a>
          <ListItemText
            className={classes.listItemText}
            primary="Phone"
            secondary="(781)-772-2057"
            primaryTypographyProps={{
              variant: "subtitle1",
              color: "textSecondary"
            }}
            secondaryTypographyProps={{
              variant: "subtitle1",
              color: "textPrimary",
              component: "span"
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <a href="mailto:info@tailormadeboston.com">
            <ListItemAvatar className={classes.iconContainer}>
              <EmailRoundedIcon className={classes.icon} />
            </ListItemAvatar>
          </a>
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="info@tailormadeboston.com"
            primaryTypographyProps={{
              variant: "subtitle1",
              color: "textSecondary"
            }}
            secondaryTypographyProps={{
              variant: "subtitle1",
              color: "textPrimary"
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <a
            href="https://www.google.com/maps/place/402+Washington+St,+Wellesley,+MA+02481/@42.3076621,-71.2812806,17z/data=!3m1!4b1!4m5!3m4!1s0x89e381511854595d:0x1ad2592629bc4f95!8m2!3d42.3076582!4d-71.2790919"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemAvatar className={classes.iconContainer}>
              <RoomRoundedIcon className={classes.icon} />
            </ListItemAvatar>
          </a>
          <ListItemText
            className={classes.listItemText}
            primary="Address"
            secondary="402 Washington Street, Wellesley, MA 02481"
            primaryTypographyProps={{
              variant: "subtitle1",
              color: "textSecondary"
            }}
            secondaryTypographyProps={{
              variant: "subtitle1",
              color: "textPrimary"
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

ContactDetails.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default ContactDetails;
