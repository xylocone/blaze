import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelRow,
  ToggleControl,
  TextControl,
  AnglePickerControl,
  ColorPalette,
  FontSizePicker,
} from "@wordpress/components";
import { useContext } from "@wordpress/element";

// Internal dependencies
import ControlsWrapper from "../../shared_utils/ControlsWrapper.jsx";
import Control from "../../shared_utils/Control.jsx";
import NumberControl from "./utils/NumberControl.jsx";
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import generateCornerUpdateFunction from "./utils/generateCornerUpdateFunction.js";
import generateLabelPositionUpdateFunction from "./utils/generateLabelPositionUpdateFunction.js";
import toFixed from "../../shared_utils/toFixed.js";

export default function SidebarSettings() {
  const { state, setState } = useContext(AttributesAndStateContext);

  return (
    <InspectorControls key="section">
      <ControlsWrapper initialOpen={true}>
        <PanelRow>
          <Control>
            <ToggleControl
              onChange={() => setState.setIsOpened(!state.isOpened)}
              checked={state.isOpened}
              label={__("Toggle Section-opened state")}
            />
          </Control>
        </PanelRow>
        <PanelRow>
          <Control>
            <ToggleControl
              onChange={() => setState.setIsLabelHovered(!state.isLabelHovered)}
              checked={state.isLabelHovered}
              label={__("Toggle Label-hovered state")}
            />
          </Control>
        </PanelRow>
      </ControlsWrapper>
      <ContentSettings />
      <CornersSettings />
      <LabelSettings />
    </InspectorControls>
  );
}

function ContentSettings() {
  const { attributes, updateAttribute } = useContext(AttributesAndStateContext);

  return (
    <ControlsWrapper title={__("Section")}>
      <PanelRow>
        <Control label={__("Source Page slug")}>
          <TextControl
            onChange={updateAttribute("sourcePageSlug")}
            placeholder={__("sample-page")}
            value={attributes.sourcePageSlug}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Background Color")}>
          <ColorPalette
            value={attributes.backgroundColor}
            onChange={updateAttribute("backgroundColor")}
          />
        </Control>
      </PanelRow>
    </ControlsWrapper>
  );
}

function CornersSettings() {
  const { attributes, setAttributes, parentBlockContext } = useContext(
    AttributesAndStateContext
  );
  const jumbotronRenderedHeight =
    parentBlockContext["blaze/jumbotron-rendered-height"];
  const jumbotronRenderedWidth =
    parentBlockContext["blaze/jumbotron-rendered-width"];

  return (
    <ControlsWrapper title={__("Corners")}>
      {attributes.corners.map((_corner, index) => {
        return (
          <PanelRow>
            <label>{index + 1}.</label>
            <Control label={__("X: ")}>
              <NumberControl
                onChange={(currentValue) =>
                  generateCornerUpdateFunction(
                    index,
                    attributes,
                    setAttributes,
                    jumbotronRenderedWidth,
                    jumbotronRenderedHeight,
                    true
                  )(currentValue, attributes.corners[index][1] /* existing y */)
                }
                min="0.00"
                max="100.00"
                step="0.01"
                value={toFixed(attributes.corners[index][0], 2) /* x */}
              />
            </Control>
            <Control label={__("Y: ")}>
              <NumberControl
                onChange={(currentValue) =>
                  generateCornerUpdateFunction(
                    index,
                    attributes,
                    setAttributes,
                    jumbotronRenderedWidth,
                    jumbotronRenderedHeight,
                    true
                  )(attributes.corners[index][0] /* existing x */, currentValue)
                }
                min="0.00"
                max="100.00"
                step="0.01"
                value={toFixed(attributes.corners[index][1], 2) /* y */}
              />
            </Control>
          </PanelRow>
        );
      })}
    </ControlsWrapper>
  );
}

function LabelSettings() {
  const { attributes, setAttributes, updateAttribute, parentBlockContext } =
    useContext(AttributesAndStateContext);

  const jumbotronRenderedWidth =
    parentBlockContext["blaze/jumbotron-rendered-width"];
  const jumbotronRenderedHeight =
    parentBlockContext["blaze/jumbotron-rendered-height"];

  return (
    <ControlsWrapper title={__("Label")}>
      <PanelRow>
        <Control label={__("Text")}>
          <TextControl
            value={attributes.label}
            onChange={updateAttribute("label")}
          />
        </Control>
      </PanelRow>
      <label>{__("Position")}</label>
      <PanelRow>
        <Control label={__("X: ")}>
          <NumberControl
            onChange={(currentValue) =>
              generateLabelPositionUpdateFunction(
                setAttributes,
                jumbotronRenderedWidth,
                jumbotronRenderedHeight,
                true
              )(currentValue, attributes.labelPosition[1] /* existing y */)
            }
            min="0.00"
            max="100.00"
            step="0.01"
            value={toFixed(attributes.labelPosition[0], 2) /* x */}
          />
        </Control>
        <Control label={__("Y: ")}>
          <NumberControl
            onChange={(currentValue) =>
              generateLabelPositionUpdateFunction(
                setAttributes,
                jumbotronRenderedWidth,
                jumbotronRenderedHeight,
                true
              )(attributes.labelPosition[0] /* existing x */, currentValue)
            }
            min="0.00"
            max="100.00"
            step="0.01"
            value={toFixed(attributes.labelPosition[1], 2) /* y */}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Rotation")}>
          <AnglePickerControl
            value={attributes.labelRotation}
            onChange={updateAttribute("labelRotation")}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Color")}>
          <ColorPalette
            value={attributes.labelColor}
            onChange={updateAttribute("labelColor")}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control
          label={__("Font Family")}
          description={__(
            "Font needs to be installed to be previewed in the editor. Automatically imported on the front-end."
          )}
        >
          <TextControl
            value={attributes.labelFontFamily}
            onChange={updateAttribute("labelFontFamily")}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Font Size")}>
          <FontSizePicker
            fontSizes={[
              {
                name: __("Small"),
                slug: "small",
                size: 36,
              },
              {
                name: __("Medium"),
                slug: "medium",
                size: 48,
              },
              {
                name: __("Large"),
                slug: "large",
                size: 64,
              },
            ]}
            withSlider
            fallbackFontSize={48}
            onChange={updateAttribute("labelFontSize")}
          />
        </Control>
      </PanelRow>
    </ControlsWrapper>
  );
}
