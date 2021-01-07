export type TsxActionButton = {
  icon: string;
  mode: number;
  id: string;
  label: string;
  defaultColor: string;
};

export const actionButtons: TsxActionButton[] = [
  {
    icon: 'underground',
    mode: 1,
    id: 'underground',
    label: 'Underground',
    defaultColor: '--transportTypeUnderground',
  },
  {
    icon: 'tram',
    mode: 2,
    id: 'tram',
    label: 'Tram',
    defaultColor: '--transportTypeTram',
  },
  {
    icon: 'bus',
    mode: 3,
    id: 'bus',
    label: 'Bus',
    defaultColor: '--transportTypeBus',
  },
];
