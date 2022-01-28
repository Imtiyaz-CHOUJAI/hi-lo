import React from "react";
import theme from "../theme";
import { Box } from "@mui/material";
import { useAppSelector } from "../Store/hooks";
import { currentPlayerSelector } from "../Store/dealer.slice";

const Player = () => {
  const { name, avatar } = useAppSelector(currentPlayerSelector);

  return (
    <Box sx={style.container}>
      <Box sx={{ ...style.avatar, backgroundImage: `url(${avatar})` }}></Box>
      <Box sx={style.name}>{name}</Box>
    </Box>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: theme.radius,
    backgroundColor: theme.colors.primary,
    width: "200px",
    height: "200px",
    margin: "20px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    mt: 2,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "50%",
    boxShadow: "0px 0 30px 6px rgb(0 0 0 / 50%)",
  },
  name: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: "10px 20px",
    borderRadius: "50px",
    mt: "auto",
    mb: 2,
  },
};

export default Player;
