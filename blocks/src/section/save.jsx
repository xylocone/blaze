import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

// Internal dependencies
import Label from "./Label.jsx";
import MorphableRect from "./MorphableRect.jsx";
import Content from "./Content.jsx";
import getCSSvariablesFromAttributes from "./utils/getCSSvariablesFromAttributes.js";

import "./style.scss";

export default function Save({ attributes }) {
  return (
    <div
      {...useBlockProps.save({
        className: "section",
      })}
      style={Object.assign(
        getCSSvariablesFromAttributes(attributes),
        getLabelTranslationCSSvariable()
      )}
    >
      <MorphableRect.Save>
        <Label.Save attributes={attributes} />
        <Content.Save attributes={attributes} />
      </MorphableRect.Save>
    </div>
  );

  function getLabelTranslationCSSvariable() {
    const [x, y] = attributes.labelPosition;

    return {
      "--section-label-translation": `translate(calc(${x} * var(--jumbotron-rendered-width) / 100), calc(${y} * var(--jumbotron-rendered-height) / 100))`,
    };
  }
}
