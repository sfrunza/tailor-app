import React from "react";
import { Divider } from "@material-ui/core";
import { Section } from "components/organisms";
import { Form, ContactDetails } from "./components";
const Contact = () => (
  <div>
    <Form />
    <Section>
      <ContactDetails />
    </Section>
    <Divider />
  </div>
);

export default Contact;
