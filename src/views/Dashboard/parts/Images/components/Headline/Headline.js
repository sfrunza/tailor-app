import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Box,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
// import Uploader from "src/components/Uploader";
import { storage, firestore } from "firebaseConfig";
import Compress from "browser-image-compression";
import firebase from "firebase/app";

const useStyles = makeStyles(theme => ({
  root: {},
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  form: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
}));

const categories = [
  {
    value: "custom-clothing-design",
    label: "Custom Clothin Design"
  },
  {
    value: "embroidery",
    label: "Embroidery"
  },
  {
    value: "upholstery",
    label: "Upholstery"
  },
  {
    value: "drapery-and-curtains",
    label: "Drapery and curtains"
  },
  {
    value: "masks",
    label: "Masks"
  }
];

function Header() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  // function handleChange(e) {
  //   setFile(e.target.files[0]);
  // }
  const handleChange = e => {
    // Get the files selected from the input tag
    // On select files always come in an array even
    // if you choose one its the first index
    // if you selected a couple then loop through the array
    const file = e.target.files[0];

    // Compression config
    const options = {
      // As the key specify the maximum size
      // Leave blank for infinity
      maxSizeMB: 0.5,
      // Use webworker for faster compression with
      // the help of threads
      useWebWorker: true
    };

    // Initialize compression
    // First argument is the file object from the input
    // Second argument is the options object with the
    // config
    Compress(file, options)
      .then(compressedBlob => {
        // Compressed file is of Blob type
        // You can drop off here if you want to work with a Blob file

        // If you want to work with the File
        // Let's convert it here, by adding a couple of attributes
        compressedBlob.lastModifiedDate = new Date();

        // Conver the blob to file
        const convertedBlobFile = new File([compressedBlob], file.name, {
          type: file.type,
          lastModified: Date.now()
        });
        setFile(convertedBlobFile);

        // Here you are free to call any method you are gonna use to upload your file example uploadToCloudinaryUsingPreset(convertedBlobFile)
      })
      .catch(e => {
        // Show the user a toast message or notification that something went wrong while compressing file
      });
  };

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then(url => {
          setFile(null);
          firestore
            .collection("images")
            .doc()
            .set({
              src: url,
              category: category,
              name: `${file.name}`,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(function() {
              console.log("upload success");
              setCategory("");
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    });
  }

  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      spacing={3}
    >
      <Grid item className={classes.box}>
        <Typography variant="h4" color="textPrimary">
          Images
        </Typography>
        <Box flexGrow={0.7}>
          <form onSubmit={handleUpload} className={classes.form}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={8} md={3}></Grid>
              <Grid item xs={8} md={3}>
                <Button
                  variant="contained"
                  component="label"
                  size="small"
                  fullWidth
                >
                  Choose File
                  <input type="file" hidden onChange={handleChange} />
                </Button>
                {file ? <p>{file.name}</p> : null}
              </Grid>
              <Grid item xs={8} md={3}>
                <TextField
                  id="category"
                  select
                  name="category"
                  label="Select"
                  value={category || ""}
                  onChange={e => setCategory(e.target.value)}
                  fullWidth
                >
                  {categories.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={8} md={3}>
                <Button
                  disabled={!file || !category}
                  variant="contained"
                  color="secondary"
                  size="small"
                  type="submit"
                  fullWidth
                >
                  upload
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
