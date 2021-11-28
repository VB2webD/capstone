import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ open, setOpen, name, isTiny }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const vertical = "top";
  const horizontal = "left";

  return (
    <Stack spacing={2} sx={{ width: "90%" }}>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        sx={{ top: "30%" }}
      >
        <Alert
          severity="success"
          sx={{
            flexDirection: "row!important",
            width: "fit-content",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {name} {isTiny ? "hinzugefügt" : "wurden hinzugefügt!"}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
