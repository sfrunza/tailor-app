import React from "react";
import { Section } from "components/organisms";
import { Header, Galleryy } from "./components";
import { ContactDetails } from "../Contact/components";
import { Divider } from "@material-ui/core";
import { firestore } from "firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";

const GalleryCategory = props => {
  const match = props.match.params.category;
  const collection = firestore.collection("images");
  const collectionQuery = collection.orderBy("createdAt", "desc");
  const [images] = useCollectionData(collectionQuery, { idField: "id" });
  var filteredImages = [];

  if (images) {
    filteredImages = images.filter(image => image.category === match);
  }

  return (
    <div>
      <Section>
        <Header history={props.history} match={match} />
        {filteredImages && <Galleryy data={filteredImages} />}
      </Section>
      <Divider />
      <Section>
        <ContactDetails />
      </Section>
    </div>
  );
};
export default GalleryCategory;
