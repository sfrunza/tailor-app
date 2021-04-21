import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Topbar, Footer, Sidebar } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    overflow: "hidden"
  },
  mainContainer: {
    marginTop: 115
    // [theme.breakpoints.down("md")]: {
    //   marginTop: 125,
    // },
  }
}));

const Main = ({ children }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const pages = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Gallery",
      href: "/gallery"
    },
    {
      title: "Contact Us",
      href: "/contact"
    }
  ];

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main className={classes.mainContainer}>{children}</main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
