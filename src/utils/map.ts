import { Color, Size, Status } from 'utils/constants';

export const color = (code: Status) => {
  switch (code) {
    case Status.ERROR:
      return Color.RED;
    case Status.SUCCESS:
      return Color.GREEN;
    default:
      return Color.BLACK;
  }
};

export const size = (size: Size) => {
  switch (size) {
    case Size.SMALL:
      return 2;
    case Size.MEDIUM:
      return 4;
    case Size.LARGE:
      return 6;
    default:
      return 0;
  }
};
