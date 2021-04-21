import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

const useStyles = makeStyles(theme => ({
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0
  },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase"
  }
}));

const NotFound = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            label="404"
            title="Uh oh."
            subtitle="Page Not Found"
            titleProps={{
              variant: "h3"
            }}
            labelProps={{
              color: "secondary",
              className: classes.label,
              variant: "h5"
            }}
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                Go Back Home
              </Button>
            ]}
            disableGutter
          />
        </div>
      </Section>
    </div>
  );
};

export default NotFound;
