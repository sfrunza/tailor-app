import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { HeroShaped } from "components/organisms";
import { Button, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import about from "assets/images/about.jpeg";

const useStyles = makeStyles(theme => ({
  root: {
    "& .hero-shaped": {
      borderBottom: 0
    },
    "& .hero-shaped__wrapper": {
      [theme.breakpoints.up("md")]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`
      }
    }
  },
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 700,
      margin: `0 auto`
    }
  },
  image: {
    objectFit: "cover"
  },
  title: {
    textTransform: "none"
  },
  button: {
    fontWeight: 600
  }
}));

const About = () => {
  const classes = useStyles();
  const line1 =
    "Tailor Made Is a unique based luxurious hand-made wedding and evening gowns tailoring company. We strive to satisfy the most glamorous and demanding expectations of our sophisticated Clientele throughout the world. Outstanding craftsmanship, superior service, and exceptional quality are the driving force behind Tatiana Safronova brand. We proudly ensure that every detail of custom-tailored gown gives an unexcelled experience and makes you inimitable at your most important day.";
  const line2 =
    "Tatiana has been working with clients for over 20 years, crafts custom-tailor wedding dresses and women's clothing made of leather fabric and fur.";

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer} data-aos="fade-up">
            <SectionHeader
              title="Be Perfectly Attired for Any Occasion"
              subtitle={
                <div>
                  <Typography variant="subtitle1" style={{ marginBottom: 16 }}>
                    {line1}
                  </Typography>
                  <Typography variant="h6">
                    Meet the Business Owner, Tatiana Safronova.
                  </Typography>
                  <Typography variant="subtitle1">{line2}</Typography>
                </div>
              }
              titleProps={{
                variant: "h4",
                className: classes.title
              }}
              subtitleVariant="subtitle1"
              subtitleColor="textPrimary"
              align="left"
              ctaGroup={[
                <Button
                  variant="outlined"
                  color="secondary"
                  to="/contact"
                  component={RouterLink}
                  className={classes.button}
                >
                  Contact us
                </Button>
              ]}
            />
          </div>
        }
        rightSide={<Image src={about} className={classes.image} lazy={false} />}
      />
    </div>
  );
};

export default About;
