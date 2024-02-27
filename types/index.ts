export type SiteConfigType = {
  title: string;
  description: string;
  icons: {
    icon: {
      url: string;
      href: string;
    };
  };
};

export type MenuBarItemType = {
  label: string;
  shortcut?: string;
  action: () => void;
};

export type MenuBarType = {
  trigger: string;
  items: MenuBarItemType[];
}[];

export type SemiCircleType = {
  percentage: number;
  width: number;
  height: number;
  radius: number;
  gradientColors: string[];
};

export type ProgressBarType = {
  percentage: number;
  width: number;
  height: number;
  radius: number;
};
