import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { SectionHeader } from "components/molecules";
import { HeroShaped, Map } from "components/organisms";
import validate from "validate.js";
import { axios, firestore } from "firebaseConfig";

const useStyles = makeStyles(theme => ({
  map: {
    zIndex: 9
  },
  form: {
    "& .MuiTextField-root": {
      background: theme.palette.background.paper
    },
    "& .MuiOutlinedInput-input": {
      background: theme.palette.background.paper
    }
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  heroleftSide: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(6)
    }
  },
  sent: {
    color: "green"
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true
  },
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 30
    }
  },

  message: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  }
};

const Form = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const [sentMessage, setSentMessage] = React.useState(null);

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const sendEmail = () => {
    axios
      .post(
        "https://us-central1-tailormade-c00e1.cloudfunctions.net/submit",
        formState.values
      )
      .then(res => {
        firestore.collection("emails").add({
          name: formState.values.name,
          email: formState.values.email,
          message: formState.values.message,
          time: new Date()
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.isValid) {
      sendEmail();
      setSentMessage("Your message has been sent!");

      setFormState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
      });
    }
    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div className={classes.heroleftSide}>
            <SectionHeader
              title="Contact us"
              subtitle="Our goal is to be as helpful as possible."
              data-aos="fade-up"
              align="left"
            />
            <div className={classes.form}>
              <form
                name="password-reset-form"
                method="post"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={isMd ? 4 : 2}>
                  <Grid item xs={12} data-aos="fade-up">
                    <TextField
                      placeholder="Full Name"
                      label="Full Name *"
                      variant="outlined"
                      size="medium"
                      name="name"
                      fullWidth
                      helperText={
                        hasError("name") ? formState.errors.name[0] : null
                      }
                      error={hasError("name")}
                      onChange={handleChange}
                      type="name"
                      value={formState.values.name || ""}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <TextField
                      placeholder="E-mail"
                      label="E-mail *"
                      variant="outlined"
                      size="medium"
                      name="email"
                      fullWidth
                      helperText={
                        hasError("email") ? formState.errors.email[0] : null
                      }
                      error={hasError("email")}
                      onChange={handleChange}
                      type="email"
                      value={formState.values.email || ""}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <TextField
                      placeholder="Message"
                      label="Message *"
                      variant="outlined"
                      size="medium"
                      name="message"
                      fullWidth
                      multiline
                      rows={4}
                      helperText={
                        hasError("message") ? formState.errors.message[0] : null
                      }
                      error={hasError("message")}
                      onChange={handleChange}
                      type="message"
                      value={formState.values.message || ""}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <i>
                      <Typography variant="subtitle2">
                        Fields that are marked with * sign are required.
                      </Typography>
                    </i>
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <Button
                      size="large"
                      variant="contained"
                      type="submit"
                      color="secondary"
                      fullWidth
                    >
                      Send
                    </Button>
                  </Grid>
                  {sentMessage && (
                    <Grid item xs={12} data-aos="fade-up">
                      <Alert severity="success">{sentMessage}</Alert>
                    </Grid>
                  )}
                </Grid>
              </form>
            </div>
          </div>
        }
        rightSide={
          <Map center={[42.30769, -71.27906]} className={classes.map} />
        }
      />
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
