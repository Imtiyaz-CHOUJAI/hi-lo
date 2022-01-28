import React from "react";
import theme from "../theme";
import { styled } from "@mui/material/styles";
import { Box, Rating, Tooltip } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { useAppSelector } from "../Store/hooks";
import { currentPlayerSelector } from "../Store/dealer.slice";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: theme.colors.primary,
  },
  "& .MuiRating-iconEmpty": {
    color: theme.colors.secondary,
  },
});

export default function Guesses() {
  const { score } = useAppSelector(currentPlayerSelector);

  return (
    <Tooltip title="successful guesses" placement="top">
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
        <StyledRating
          name="customized-color"
          value={score}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={1}
          icon={<ThumbUpAltIcon fontSize="inherit" />}
          emptyIcon={<ThumbUpAltOutlinedIcon fontSize="inherit" />}
          max={3}
          readOnly
        />
      </Box>
    </Tooltip>
  );
}
