import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./components";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";
import { LearnMoreLink } from "components/atoms";

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
  }
}));

const PasswordReset = () => {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  return (
    <div>
      <Section className={classes.section}>
        {sent ? (
          <div className={classes.formContainer}>
            <SectionHeader
              title="Reset Link sent, check your email!"
              titleProps={{
                variant: "h4"
              }}
            />
            <LearnMoreLink title="Sign in here" href="/login" />
          </div>
        ) : (
          <div className={classes.formContainer}>
            <SectionHeader
              title="Password reset"
              subtitle="Enter your email to reset your password."
              titleProps={{
                variant: "h4"
              }}
            />
            <Form sent={sent} setSent={setSent} />
          </div>
        )}
      </Section>
    </div>
  );
};

export default PasswordReset;
