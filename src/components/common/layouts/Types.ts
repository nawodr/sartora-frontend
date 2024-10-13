import * as Icons from "@mui/icons-material";

export interface SidebarItem {
  text: string;
  iconName: keyof typeof Icons;
  path: string;
}
