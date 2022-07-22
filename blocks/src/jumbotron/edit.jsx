import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { Icon, arrowLeft } from "@wordpress/icons";
import { useState } from "@wordpress/element";

// Internal Dependencies
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import SidebarSettings from "./SidebarSettings.jsx";

import useRefAvailable from "../../shared_utils/useRefAvailable.js";
import useStateUpdated from "../../shared_utils/useStateUpdated.js";
import getCSSVariablesFromAttributes from "./utils/getCSSvariablesFromAttributes.js";
import getBackButtonIconSize from "./utils/getBackButtonSize.js";
import generateUpdateAttributeFunction from "../../shared_utils/generateUpdateAttributeFunction.js";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, isSelected }) {
  const updateAttribute = generateUpdateAttributeFunction(setAttributes);
  const [isSectionOpened, setIsSectionOpened] = useState(false);

  const [jumbotronRef, jumbotronElementRef] = useRefAvailable(
    (jumbotronElement) => {
      jumbotronElement.addEventListener("sectionOpened", () =>
        setIsSectionOpened(true)
      );

      jumbotronElement.addEventListener("sectionClosed", () =>
        setIsSectionOpened(false)
      );

      function updateRenderedWidthAndHeight() {
        updateAttribute("renderedWidth")(
          jumbotronElement.clientWidth - 2 * parseInt(attributes.padding, 10)
        );
        updateAttribute("renderedHeight")(
          jumbotronElement.clientHeight - 2 * parseInt(attributes.padding, 10)
        );
      }

      new ResizeObserver(updateRenderedWidthAndHeight).observe(
        jumbotronElement
      );

      updateRenderedWidthAndHeight();
    }
  );

  useStateUpdated(() => {
    if (!isSectionOpened) {
      const openedSection =
        jumbotronElementRef.current?.querySelector(".section.is-opened");
      if (openedSection)
        openedSection.dispatchEvent(new Event("sectionClosed"));
    }
  }, [isSectionOpened]);

  return (
    <AttributesAndStateContext.Provider
      value={{
        attributes,
        setAttributes,
        isSelected,
        updateAttribute,
        state: {
          isSectionOpened,
        },
        setState: {
          setIsSectionOpened,
        },
      }}
    >
      <div
        {...useBlockProps({
          className: `jumbotron ${isSectionOpened ? "is-section-opened" : ""}`,
          style: getCSSVariablesFromAttributes(attributes),
          ref: jumbotronRef,
        })}
      >
        <button
          className={`jumbotron__back-button`}
          onClick={handleBackButtonClick}
        >
          <Icon
            icon={arrowLeft}
            size={getBackButtonIconSize(attributes.backButtonIconSize)}
          />
        </button>
        <div className="jumbotron__sections-wrapper">
          <InnerBlocks allowedBlocks={["blaze/section"]} />
        </div>
      </div>
      <SidebarSettings />
    </AttributesAndStateContext.Provider>
  );

  function handleBackButtonClick() {
    setIsSectionOpened(false);
  }
}
