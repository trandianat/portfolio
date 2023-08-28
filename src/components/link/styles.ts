import { Size } from 'utils/constants';
import size from 'utils/size';

export const link = (iconGap: Size) => ({
  alignItems: 'center',
  display: 'inline-flex',
  gap: size(iconGap),
  verticalAlign: 'bottom',
});
