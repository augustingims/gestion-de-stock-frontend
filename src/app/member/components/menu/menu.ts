export interface Menu {
  id?: string;
  title?: string;
  icon?: string;
  url?: string;
  active?: boolean;
  subMenu?: Array<Menu>;
}
