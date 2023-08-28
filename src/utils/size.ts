import { Size } from 'utils/constants';

const size = (size: Size) => {
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

export default size;
