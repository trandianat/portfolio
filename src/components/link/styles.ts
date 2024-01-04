import { Position, Size } from 'utils/constants';
import { size } from 'utils/map';

export const link = (iconGap: Size, iconPosition: Position) => ({
  gap: size(iconGap),
  '.icon': { verticalAlign: 'middle' },
  '.text':
    iconPosition === Position.LEFT
      ? { marginLeft: size(iconGap) }
      : { marginRight: size(iconGap) },
});
