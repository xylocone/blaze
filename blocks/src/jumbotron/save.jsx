import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { Icon, arrowLeft } from "@wordpress/icons";

// Internal dependencies
import getCSSVariablesFromAttributes from "./utils/getCSSvariablesFromAttributes.js";
import getBackButtonIconSize from "./utils/getBackButtonSize.js";

export default function Save({ attributes }) {
  return (
    <div
      {...useBlockProps.save({ className: "jumbotron" })}
      style={getCSSVariablesFromAttributes(attributes)}
    >
      <button className="jumbotron__back-button">
        <Icon
          icon={arrowLeft}
          size={getBackButtonIconSize(attributes.backButtonSize)}
        />
      </button>
      <div className="jumbotron__sections-wrapper">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
