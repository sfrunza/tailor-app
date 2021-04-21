import React from "react";
import {
  IconButton,
  SvgIcon,
  TableCell,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button
} from "@material-ui/core";
import { Trash2 as Trash2Icon } from "react-feather";

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

const Body = ({ image, index, firestore, storage }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categoryIndex = categories.findIndex(
    category => category.value === image.category
  );
  const handleDeletePhoto = (id, name) => {
    var storageRef = storage.ref();
    var desertRef = storageRef.child(`images/${name}`);

    // Delete the file
    desertRef
      .delete()
      .then(() => {
        console.log("Image deleted from storage!");
      })
      .catch(error => {
        console.error("Error removing image: ", error);
      });
    firestore
      .collection("images")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Image deleted from collection!");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <TableRow hover key={image.id}>
      <TableCell>
        <Typography variant="body1">{index}.</Typography>
      </TableCell>
      <TableCell>
        <img src={image.src} alt={index} height="100px" width="auto" />
      </TableCell>
      <TableCell>{categories[categoryIndex].label}</TableCell>
      <TableCell>
        {image.createdAt
          ? image.createdAt.toDate().toLocaleString("en-US")
          : ""}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleClickOpen}>
          <SvgIcon fontSize="inherit">
            <Trash2Icon color="red" />
          </SvgIcon>
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <img src={image.src} alt={index} width="20%" height="100%" />
            <Typography variant="body1">
              Are you sure you want to delete this image?
            </Typography>
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="default"
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleDeletePhoto(image.id, image.name);
                handleClose();
              }}
              color="secondary"
              variant="contained"
              size="small"
              autoFocus
              startIcon={<Trash2Icon size="18" />}
              style={{ backgroundColor: "#F80103", color: "#fff" }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default Body;
