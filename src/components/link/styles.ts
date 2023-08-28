import { Size } from 'utils/constants';
import { size } from 'utils/map';

export const link = (iconGap: Size) => ({
  alignItems: 'center',
  display: 'inline-flex',
  gap: size(iconGap),
  verticalAlign: 'bottom',
});
