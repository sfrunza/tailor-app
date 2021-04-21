import React from "react";
import { Section } from "components/organisms";
import { Gallery } from "./components";

import { gallery } from "./data";

const GalleryPage = () => (
  <div>
    <Section>
      <Gallery data={gallery} />
    </Section>
  </div>
);

export default GalleryPage;
