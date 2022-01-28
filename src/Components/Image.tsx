import React, { useState } from "react";
import { Skeleton } from "@mui/material";

interface ImageProps {
  src: string;
  width: number;
  height: number;
}

const Image = ({ src, width, height }: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {!loaded ||
        (!src && (
          <Skeleton
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.13)",
              borderRadius: "15px",
            }}
            variant="rectangular"
            width={width}
            height={height}
          />
        ))}
      <img
        src={src}
        style={{ display: loaded ? "" : "none" }}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </>
  );
};

export default Image;
