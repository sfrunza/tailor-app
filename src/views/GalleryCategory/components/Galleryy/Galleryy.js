import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Gallery from "react-grid-gallery";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid"
  },
  imageStyle: {
    // borderRadius: theme.spacing(1),
    // transition: "transform .2s"
  }
}));

function Galleryy({ className, data, ...rest }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  let arr = data.map(image => {
    return {
      src: image.src,
      thumbnailWidth: 4,
      thumbnailHeight: 4,
      thumbnail: image.src
    };
  });

  if (!data) {
    return null;
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={2}>
        <Gallery
          images={arr}
          enableLightbox
          enableImageSelection={false}
          rowHeight={isMd ? 350 : 180}
          backdropClosesModal={true}
          showImageCount={true}
          margin={isMd ? 10 : 4}
          reactModalProps={{ shouldReturnFocusAfterClose: false }}
          thumbnailStyle={() => {
            let st = {
              display: "flex",
              cursor: "pointer",
              width: "100%",
              height: "100%",
              marginTop: 0,
              objectFit: "cover",
              ":hover": {
                opacity: 0.5
              }
            };
            return st;
          }}
        />
      </Box>
    </div>
  );
}

Galleryy.propTypes = {
  className: PropTypes.string
};

export default withWidth()(Galleryy);
