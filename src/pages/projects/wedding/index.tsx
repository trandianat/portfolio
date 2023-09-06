import LinkOut from 'assets/icons/link';
import { Link } from 'components/link';
import * as styles from 'pages/projects/wedding/styles';
import { Links, Position } from 'utils/constants';

export const Wedding = (): JSX.Element => (
  <div css={styles.wedding}>
    <h2>Wedding</h2>
    <p>
      I created a{' '}
      <Link
        icon={<LinkOut />}
        iconPosition={Position.RIGHT}
        text="website"
        url={Links.WEDDING}
      />{' '}
      for guests to find information related to me and my husband's July 2023
      wedding. The design is based on lots of inspiration from Pinterest and
      mockups I made using{' '}
      <Link
        icon={<LinkOut />}
        iconPosition={Position.RIGHT}
        text="Justinmind"
        url={Links.DESIGN}
      />
      . I wanted to make it desktop- and mobile-friendly, so there are
      breakpoints that were setup to accommodate a range of device sizes.
      Prototyping for multiple devices is not easy, and building this website
      made me have a much deeper appreciation for UX designers.
    </p>
  </div>
);
