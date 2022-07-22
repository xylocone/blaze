import { __ } from "@wordpress/i18n";
import { useState, useRef } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

// Internal Dependencies
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import MorphableRect from "./MorphableRect.jsx";
import Content from "./Content.jsx";
import Label from "./Label.jsx";
import SidebarSettings from "./SidebarSettings.jsx";
import useRefAvailable from "../../shared_utils/useRefAvailable.js";
import useStateUpdated from "../../shared_utils/useStateUpdated.js";

import getCSSvariablesFromAttributes from "./utils/getCSSvariablesFromAttributes.js";
import generateUpdateAttributeFunction from "../../shared_utils/generateUpdateAttributeFunction.js";

import "./editor.scss";

export default function Edit({
  attributes,
  setAttributes,
  isSelected,
  context,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  const [sectionRef, sectionElementRef] = useRefAvailable((section) => {
    section.addEventListener("sectionClosed", () => setIsOpened(false));
  });

  // Whenever isOpened changes, dispatch a relevant Event
  useStateUpdated(() => {
    const jumbotronElement = sectionElementRef.current.closest(".jumbotron");
    if (isOpened) jumbotronElement.dispatchEvent(new Event("sectionOpened"));
    else jumbotronElement.dispatchEvent(new Event("sectionClosed"));
  }, [isOpened]);

  return (
    <AttributesAndStateContext.Provider
      value={{
        attributes,
        setAttributes,
        updateAttribute: generateUpdateAttributeFunction(setAttributes),
        isSelected,
        parentBlockContext: context,
        state: { isOpened, isLabelHovered },
        setState: { setIsOpened, setIsLabelHovered },
      }}
    >
      <div
        {...useBlockProps({
          className: `section ${isOpened ? "is-opened" : ""}`,
          ref: sectionRef,
        })}
        style={getCSSvariablesFromAttributes(attributes)}
      >
        <MorphableRect>
          <Label />
          <Content />
        </MorphableRect>
      </div>
      <SidebarSettings />
    </AttributesAndStateContext.Provider>
  );
}
