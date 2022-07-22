import Draggable from "react-draggable";
import { useContext } from "@wordpress/element";

// Internal dependencies
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import generateCornerUpdateFunction from "./utils/generateCornerUpdateFunction.js";
import getCornerPosition from "./utils/getCornerPosition.js";

export default function Corners() {
  const { attributes, setAttributes, parentBlockContext } = useContext(
    AttributesAndStateContext
  );
  const jumbotronRenderedWidth =
    parentBlockContext["blaze/jumbotron-rendered-width"];
  const jumbotronRenderedHeight =
    parentBlockContext["blaze/jumbotron-rendered-height"];

  return (
    <div className="section__corners-wrapper">
      {attributes.corners.map((_corner, index) => {
        {
          return (
            <Corner
              position={getCornerPosition(
                index,
                attributes,
                jumbotronRenderedWidth,
                jumbotronRenderedHeight
              )}
              onDrag={generateCornerUpdateFunction(
                index,
                attributes,
                setAttributes,
                jumbotronRenderedWidth,
                jumbotronRenderedHeight
              )}
              key={index}
            />
          );
        }
      })}
    </div>
  );
}

function Corner({ onDrag, position: [x, y] }) {
  return (
    <Draggable onDrag={(_e, { x, y }) => onDrag(x, y)} position={{ x, y }}>
      <div className="section__corner">
        <div className="section__corner__point"></div>
      </div>
    </Draggable>
  );
}
