import React, { lazy, Suspense } from "react";
import { parse } from "query-string";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Loading } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    height: "100%",
    width: "100%"
  },
  section: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4)
    }
  }
}));

const getComponentId = () =>
  parse(window.location.search).component || "images";

const renderComponent = () => {
  let Component = null;
  const componentId = getComponentId();

  switch (componentId) {
    case "images":
      const Images = lazy(() => import("./parts/Images"));
      Component = <Images />;
      break;
    default:
      <Images />;
    // case "some-path":
    //   const QuickStart = lazy(() => import("./parts/SomePath"));
    //   Component = <SomePath />;
    //   break;
    // case "some-other-path":
    //   const Changelog = lazy(() => import("./parts/SomeOtherPath"));
    //   Component = <SomeOtherPath />;
    //   break;
  }

  return Component;
};

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Suspense fallback={<Loading />}>{renderComponent()}</Suspense>
      </Section>
    </div>
  );
};

export default Dashboard;
