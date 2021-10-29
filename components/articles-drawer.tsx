import React, { useContext } from "react";
import { Typography, Drawer } from "@mui/material";
import { Article, Source, DRAWER } from "@/models";
import { ResizerHandle, DrawerHeader, Favicon } from "@/components";
import { LayoutContext, selectArticlesDrawer } from "@/context/layout";
import { useDrawerResizable } from "@/hooks";

interface ArticlesDrawerProps {
  source?: Source;
  articles?: Article[];
}

export default function ArticlesDrawer({
  source,
  articles,
}: ArticlesDrawerProps) {
  const [state] = useContext(LayoutContext);
  const { open, ...sx } = selectArticlesDrawer(state);
  const handleResize = useDrawerResizable(DRAWER.ARTICLES);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      elevation={5}
      open={open}
      sx={{ [`& .MuiDrawer-paper`]: sx }}
    >
      <DrawerHeader>
        <Favicon source={source} />
        <Typography color="textPrimary">{source?.name}</Typography>
      </DrawerHeader>
      <ResizerHandle onMouseDown={handleResize} left={sx.left + sx.width} />
    </Drawer>
  );
}
