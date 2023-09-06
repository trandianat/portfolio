import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import dog from 'assets/images/dog.jpg';
import street from 'assets/images/street.jpg';
import table from 'assets/images/table.jpg';
import wine from 'assets/images/wine.jpg';
import * as styles from 'pages/projects/detection/styles';

type Prediction = {
  bbox: number[];
  class: string;
  score: number;
};

export const Detection = (): JSX.Element => {
  const colors = useMemo(
    () => [
      'red',
      'blue',
      'green',
      'orange',
      'purple',
      'gray',
      'pink',
      'brown',
      'black',
      'yellow',
    ],
    []
  );
  const [error, setError] = useState(false);
  const [image, setImage] = useState(dog);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Prediction[]>([]);

  const vowels = ['a', 'e', 'i', 'o', 'u'];

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
        10,
        0.25
      );
      setResults(predictions as Prediction[]);
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
        const [x, y, width, height] = result['bbox'];
        context.strokeRect(x, y, width, height);
      });
    } else {
      const selectedImage = document.getElementById(
        'image'
      ) as HTMLImageElement;
      context.clearRect(0, 0, selectedImage.width, selectedImage.height);
    }
  }, [colors, results]);

  return (
    <div css={styles.detection}>
      <h2>Detection</h2>
      <p>
        This project identifies objects within images via{' '}
        <b>TensorFlow's COCO-SSD machine learning object detection model</b>.
        The model returns a list of predicted objects, their coordinates within
        the image, and a score of confidence for each object. Results will vary
        per detection depending on what the model returns.
      </p>
      <div className="selection">
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
      {(results.length === 0 || error) && (
        <button onClick={() => detectImage()} {...{ disabled: loading }}>
          {loading ? 'Loading...' : 'Detect'}
        </button>
      )}
      <div className="result">
        <img id="image" src={image} />
        <canvas height={200} id="canvas" />
      </div>
      {error && (
        <p className="error text">
          Error in object detection. Please try again.
        </p>
      )}
      {results.length > 0 && (
        <div className="confidence">
          {results.map((result: Prediction, index: number) => (
            <p className="text" key={index}>
              A{vowels.includes(result.class.charAt(0)) ? 'n' : ''}{' '}
              <span style={{ color: colors[index] }}>
                <strong>{result.class}</strong>
              </span>{' '}
              with {Math.round(result.score * 100)}% confidence
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
