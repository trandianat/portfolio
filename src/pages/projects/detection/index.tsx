import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import LinkOut from 'assets/icons/link';
import dog from 'assets/images/dog.jpg';
import street from 'assets/images/street.jpg';
import table from 'assets/images/table.jpg';
import wine from 'assets/images/wine.jpg';
import { Link } from 'components/link';
import * as styles from 'pages/projects/detection/styles';
import { colors, Links, Position } from 'utils/constants';

type Prediction = {
  bbox: number[];
  class: string;
  score: number;
};

export const Detection = (): JSX.Element => {
  const [error, setError] = useState(false);
  const [image, setImage] = useState(dog);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Prediction[]>([]);

  const images: { [image: string]: string } = {
    dog: dog,
    street: street,
    table: table,
    wine: wine,
  };

  const detectImage = async () => {
    setLoading(true);
    const model = await cocoSsd.load();
    try {
      const predictions = await model.detect(
        document.getElementById('image') as HTMLImageElement,
        colors.length,
        0.15
      );
      setResults(predictions);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (results.length) {
      setError(false);
      results.forEach((result: Prediction, index: number) => {
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = colors[index];
        const [x, y, width, height] = result.bbox;
        context.strokeRect(x, y, width, height);
      });
    } else {
      const selectedImage = document.getElementById(
        'image'
      ) as HTMLImageElement;
      context.clearRect(0, 0, selectedImage.width, selectedImage.height);
    }
  }, [results]);

  return (
    <div css={styles.detection}>
      <h2>Detection</h2>
      <p>
        This project identifies objects within images via the{' '}
        <b>
          <Link
            icon={<LinkOut />}
            iconPosition={Position.RIGHT}
            text="TensorFlow"
            url={Links.TENSORFLOW}
          />{' '}
          COCO-SSD machine learning object detection model
        </b>
        . The model returns a list of predicted objects, their coordinates
        within the image, and a score of confidence for each object. The score
        of confidence must be at least 15% for the predicted object to be
        included in the results. Results will vary per detection depending on
        what the model returns.
      </p>
      <hr />
      <div css={styles.dropdown}>
        <label htmlFor="dropdown">Select an image:</label>
        <select
          id="dropdown"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setImage(event.target.value);
            setError(false);
            setResults([]);
          }}
          {...{ disabled: loading }}
        >
          {Object.keys(images).map((image: string) => (
            <option key={image} value={images[image]}>
              {image}
            </option>
          ))}
        </select>
      </div>
      {(!results.length || error) && (
        <button onClick={() => detectImage()} {...{ disabled: loading }}>
          {loading ? 'Loading...' : 'Detect'}
        </button>
      )}
      <div css={styles.image}>
        <img id="image" src={image} />
        <canvas height={200} id="canvas" />
      </div>
      {error && (
        <p className="error">Error in object detection. Please try again.</p>
      )}
      {results.length > 0 && (
        <div css={styles.objects}>
          <div className="heading">Object</div>
          <div className="heading">Confidence</div>
          <div className="divider" />
          {results.map((result: Prediction, index: number) => (
            <Fragment key={index}>
              <div css={styles.object(index)}>{result.class}</div>
              <div>{Math.round(result.score * 100)}%</div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
