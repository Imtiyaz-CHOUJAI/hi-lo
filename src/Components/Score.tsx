import React from "react";
import theme from "../theme";
import { Box, Tooltip, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppSelector } from "../Store/hooks";
import { currentPlayerSelector } from "../Store/dealer.slice";

export default function Score() {
  const { score } = useAppSelector(currentPlayerSelector);

  return (
    <Tooltip title="Number of cards in your pile" placement="top">
      <Box
        sx={{
          "& > legend": { mt: 2 },
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.colors.white,
          padding: "10px 20px",
          borderRadius: "50px",
          alignSelf: "flex-end",
        }}
      >
        <Typography>{score}</Typography>
        <DashboardIcon sx={{ pl: 1, color: theme.colors.primary }} />
      </Box>
    </Tooltip>
  );
}
