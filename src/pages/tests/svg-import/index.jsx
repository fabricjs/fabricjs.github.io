import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/layoutFullWidth';
import {
  loadSVGFromURL,
  util,
  Object as FabricObject,
  StaticCanvas,
} from 'fabric';
import PropTypes from 'prop-types';
import './svg-import.css';

FabricObject.ownDefaults.originX = 'center';
FabricObject.ownDefaults.originY = 'center';

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const SVGImportShowcase = ({ id, delay }) => {
  const svgLink = `/assets/${id}.svg`;
  const canvasRef = useRef();
  const outputRef = useRef();
  useEffect(() => {
    if (canvasRef.current && outputRef.current) {
      delay.then(() =>
        loadSVGFromURL(svgLink, (objects, options) => {
          const canvasEl = canvasRef.current;
          const div = outputRef.current;
          const shape = util.groupSVGElements(objects, options);
          const { x: width, y: height } = shape._getTransformedDimensions();
          canvasEl.width = width;
          canvasEl.height = height;
          const bbox = canvasEl.getBoundingClientRect();
          shape.top = canvasEl.height / 2;
          shape.left = canvasEl.width / 2;
          const canvas = new StaticCanvas(canvasEl, {
            backgroundColor: '#fff',
          });
          const scale = util.findScaleToFit(canvas, bbox);
          canvas.add(shape);
          canvasEl.style.width = `${scale * width}px`;
          canvasEl.style.height = `${scale * height}px`;
          div.innerHTML = canvas.toSVG();
        })
      );
    }
  }, []);

  return (
    <div className="svg-row">
      <div className="svg-block">
        <p>Test svg {`${id}`}</p>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="svg-block">
        <p>
          <a href={svgLink}>Original SVG</a>
        </p>
        <img src={svgLink} />
      </div>
      <div className="svg-block">
        <p>
          <a href={svgLink}>Exported SVG</a>
        </p>
        <div ref={outputRef}></div>
      </div>
    </div>
  );
};

export default function SvgImportShowcase() {
  const numberSvg = 184; // 184;
  const numberArray = new Array(numberSvg).fill(0);
  const denyList = [
    //    16 /* image doesn't render properly */,
    //    20 /* very intense shape */,
    //    33, 34, 35 /* very intense shapes */,
    //    66 /* the shape is too big */,
    //    68 /* svg has parsing error */,
    //    72, 73 /* shapes are too big */,
    //   74, 75 /* shapes has weird dimensions */,
    //   78, 79, 80, 81, 82, 83, 84, 85 /* wrong offset */,
    //   149 /* too big? */,
    150 /* svg parse error */,
  ];
  return (
    <Layout>
      <section>
        <h2>Svg import showcase</h2>
        {numberArray.map((_, index) => {
          const svgToDisplay = numberSvg - index;
          return denyList.includes(svgToDisplay) ? null : (
            <SVGImportShowcase
              id={svgToDisplay}
              key={svgToDisplay}
              delay={delay(index * 10)}
            />
          );
        })}
      </section>
    </Layout>
  );
}

SVGImportShowcase.propTypes = {
  id: PropTypes.number.isRequired,
  delay: PropTypes.any.isRequired,
};
