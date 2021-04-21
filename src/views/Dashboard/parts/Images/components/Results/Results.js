import React, { useState } from "react";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Body from "./Body";
import { firestore, storage } from "firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";

const filterOptions = [
  {
    id: "all",
    name: "All"
  },
  {
    id: "custom-clothing-design",
    name: "Custom Clothin Design"
  },
  {
    id: "embroidery",
    name: "Embroidery"
  },
  {
    id: "upholstery",
    name: "Upholstery"
  },
  {
    id: "drapery-and-curtains",
    name: "Drapery and curtains"
  }
];
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#d4af37"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#d4af37"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#d4af37"
      }
    }
  }
})(TextField);

function applyFilters(images, filters) {
  if (!images) return null;
  return images
    .slice(0)
    .reverse()
    .filter(image => {
      let matches = true;
      if (filters.category && image.category !== filters.category) {
        matches = false;
      }

      if (filters.category) {
        if (
          filters.category === "custom-clothing-design" &&
          !["custom-clothing-design"].includes(image.category)
        ) {
          matches = false;
        }

        if (
          filters.category === "embroidery" &&
          !["embroidery"].includes(image.category)
        ) {
          matches = false;
        }

        if (
          filters.category === "upholstery" &&
          !["upholstery"].includes(image.category)
        ) {
          matches = false;
        }

        if (
          filters.category === "drapery-and-curtains" &&
          !["drapery-and-curtains"].includes(image.category)
        ) {
          matches = false;
        }
      }

      if (
        filters.inStock &&
        !["Needs Attention"].includes(image.image_status)
      ) {
        matches = false;
      }

      return matches;
    });
}

function applyPagination(images, page, limit) {
  if (!images) {
    return null;
  } else {
    return images.slice(page * limit, page * limit + limit);
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  }
}));

function Results() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({
    category: null
  });

  const collection = firestore.collection("images");
  const collectionQuery = collection.orderBy("createdAt");
  const [images] = useCollectionData(collectionQuery, { idField: "id" });

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleLimitChange = event => {
    setLimit(event.target.value);
  };
  const filteredImages = applyFilters(images, filters);
  const paginatedPhotos = applyPagination(filteredImages, page, limit);

  const handleCategoryChange = event => {
    event.persist();
    let value = null;
    if (event.target.value !== "all") {
      value = event.target.value;
    }
    setFilters(prevFilters => ({
      ...prevFilters,
      category: value
    }));
  };

  return (
    <Card className={classes.root}>
      <Box p={2} minHeight={56} display="flex" alignItems="center">
        <Box>
          <CssTextField
            label="Sort By Category"
            name="category"
            onChange={handleCategoryChange}
            select
            SelectProps={{ native: true }}
            value={filters.category || "all"}
            variant="outlined"
            size="small"
          >
            {filterOptions.map(filterOption => (
              <option key={filterOption.id} value={filterOption.id}>
                {filterOption.name}
              </option>
            ))}
          </CssTextField>
        </Box>
        <Box flexGrow={1} />
      </Box>
      <Box minWidth={800}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Upload Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPhotos?.map((image, i) => {
              return (
                <Body
                  image={image}
                  index={images.indexOf(image) + 1}
                  key={i}
                  firestore={firestore}
                  storage={storage}
                />
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={filteredImages ? filteredImages.length : 1}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

export default Results;
