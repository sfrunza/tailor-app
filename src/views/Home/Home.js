import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { IconAlternate } from "components/molecules";
import { Section, Parallax, SectionAlternate } from "components/organisms";
import { Header, Reviews, Subheader } from "./components";
import tailorbg from "assets/images/tailorbg.jpeg";

import { reviews } from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  fullHeight: {
    width: "100%",
    height: "100%",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  scrollIcon: {
    background: "transparent !important",
    border: `2px solid #d4af37`,
    cursor: "pointer"
  },
  scrollTopIcon: {
    margin: "0 auto",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(12)
    }
  },
  madcapSection: {
    backgroundColor: "#0000008a"
  }
}));

const Home = () => {
  const classes = useStyles();

  const scrollTo = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({
        left: 0,
        top: element.offsetTop - 70,
        behavior: "smooth"
      });
    });
  };
  return (
    <div className={classes.root}>
      <Parallax backgroundImage={tailorbg} id="agency-madcap">
        <div className={clsx(classes.fullHeight, classes.madcapSection)}>
          <Section>
            <Header />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color="#d4af37"
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo("agency-reviews")}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <SectionAlternate>
        <Subheader />
      </SectionAlternate>
      <Divider />
      <Section id="agency-reviews">
        <Reviews data={reviews} />
      </Section>
      <IconAlternate
        shape="circle"
        fontIconClass="fas fa-chevron-up"
        color="#d4af37"
        size="small"
        className={clsx(classes.scrollIcon, classes.scrollTopIcon)}
        onClick={() => scrollTo("agency-madcap")}
        data-aos="fade-up"
      />
      <Divider />
    </div>
  );
};

export default Home;
