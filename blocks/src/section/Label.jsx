import { __ } from "@wordpress/i18n";
import { useContext } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";
import Draggable from "react-draggable";

// Internal dependencies
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import { generateFromPercentConverter } from "../../shared_utils/converter.js";
import generateLabelPositionUpdateFunction from "./utils/generateLabelPositionUpdateFunction.js";

export default function Label() {
  const {
    attributes,
    setAttributes,
    updateAttribute,
    isSelected,
    state,
    parentBlockContext,
  } = useContext(AttributesAndStateContext);

  const jumbotronRenderedWidth =
    parentBlockContext["blaze/jumbotron-rendered-width"];
  const jumbotronRenderedHeight =
    parentBlockContext["blaze/jumbotron-rendered-height"];

  return (
    <Draggable
      onDrag={(_e, { x, y }) => handleLabelDrag(x, y)}
      position={getLabelPosition()}
      positionOffset={{ x: "-50%", y: "-50%" }}
    >
      <div
        className={`section__label ${
          state.isLabelHovered ? "is-label-hovered" : ""
        }`}
      >
        <div className="section__label__wrapper">
          <RichText
            className="section__label__text"
            tagName="h2"
            value={attributes.label}
            onChange={updateAttribute("label")}
            placeholder={__("Label")}
          />
          <LabelClones attributes={attributes} />
        </div>
      </div>
    </Draggable>
  );

  function getLabelPosition() {
    const fromPercent = generateFromPercentConverter(
      jumbotronRenderedWidth,
      jumbotronRenderedHeight
    );

    const [x, y] = fromPercent(...attributes.labelPosition);
    return { x, y };
  }

  function handleLabelDrag(x, y) {
    if (!isSelected) return;
    if (state.isOpened) return;
    if (state.isLabelHovered) return;

    const updateLabelPosition = generateLabelPositionUpdateFunction(
      setAttributes,
      jumbotronRenderedWidth,
      jumbotronRenderedHeight
    );

    updateLabelPosition(x, y);
  }
}

function LabelClones({ attributes }) {
  return (
    <>
      {[...Array(3)].map((_value, index) => (
        <h2 className="section__label__clone" key={index}>
          {attributes.label}
        </h2>
      ))}
    </>
  );
}

function FontLink({ attributes }) {
  const { labelFontFamily, label } = attributes;

  return (
    <link
      href={encodeURI(
        `https://fonts.googleapis.com/css2?family=${labelFontFamily}&text=${label}`
      )}
      rel="stylesheet"
    ></link>
  );
}

Label.Save = ({ attributes }) => {
  return (
    <div className="section__label">
      <div className="section__label__wrapper">
        <RichText.Content
          className="section__label__text"
          tagName="h2"
          value={attributes.label}
        />
        <LabelClones attributes={attributes} />
        <FontLink attributes={attributes} />
      </div>
    </div>
  );
};
