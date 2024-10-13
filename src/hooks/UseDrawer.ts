import { useState } from "react";

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleDrawerOpen,
    handleDrawerClose,
  };
};
