import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { set_alert } from "../Store/dealer.slice";

const Alert = React.forwardRef(function Alert(props, ref) {
  // @ts-ignore
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertDialog() {
  const { open, message, type } = useAppSelector((state) => state.dealer.alert);
  const dispatch = useAppDispatch();

  const handleClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(set_alert({ open: false, message: "", type }));
  };

  if (!open) {
    return <></>;
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      {/* @ts-ignore */}
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
