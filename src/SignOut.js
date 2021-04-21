import React from "react";
import Button from "@material-ui/core/Button";
import { auth } from "firebaseConfig";

function SignOut() {
  return (
    auth.currentUser && (
      <Button
        variant="contained"
        size="small"
        color="secondary"
        disableElevation
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    )
  );
}

export default SignOut;
