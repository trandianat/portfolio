import { Storage } from 'aws-amplify';
import { Fragment, useEffect, useState } from 'react';
import LinkOut from 'assets/icons/link';
import { Link } from 'components/link';
import * as styles from 'pages/projects/wedding/styles';
import { Links, Position, Wedding as Key } from 'utils/constants';

export const Wedding = (): JSX.Element => {
  const [images, setImages] = useState<string[]>([]);
  const folder = 'wedding';

  useEffect(() => {
    const getImages = async () => {
      await Storage.list(`${folder}/${folder}`, { pageSize: 'ALL' })
        .then(async ({ results }) => {
          const list: string[] = [];
          results.forEach(async result => {
            const image = await Storage.get((result as any).key);
            list.push(image);
          });
          setImages(list);
        })
        .catch(() => {});
    };
    getImages();
  }, []);

  return (
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
      {!!images.length && (
        <Fragment>
          <h3>Desktop</h3>
          <div className="images desktop">
            <div>
              <img src={images[Key.ENTRY_DESKTOP]} />
            </div>
            <div>
              <img src={images[Key.HOME_DESKTOP]} />
            </div>
          </div>
          <h3>Mobile</h3>
          <div className="images mobile">
            <div>
              <img src={images[Key.ENTRY_MOBILE]} />
            </div>
            <div>
              <img src={images[Key.HOME_MOBILE]} />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
