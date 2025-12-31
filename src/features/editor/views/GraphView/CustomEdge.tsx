import React from "react";
import { useComputedColorScheme } from "@mantine/core";
import { Edge, type EdgeProps } from "reaflow";

const CustomEdgeWrapper = (props: EdgeProps) => {
  const colorScheme = useComputedColorScheme();

  return (
    <Edge
      {...props}
      style={{
        stroke: colorScheme === "dark" ? "#424242" : "#BCBEC0",
      }}
    />
  );
};

export const CustomEdge = React.memo(CustomEdgeWrapper);
