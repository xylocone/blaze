import { useContext } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
  PanelRow,
  __experimentalUnitControl as UnitControl,
  ToggleControl,
  ColorPalette,
  __experimentalRadioGroup as RadioGroup,
  __experimentalRadio as Radio,
} from "@wordpress/components";

// Internal dependencies
import ControlsWrapper from "../../shared_utils/ControlsWrapper.jsx";
import Control from "../../shared_utils/Control.jsx";
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";

export default function SidebarSettings() {
  const { state, setState } = useContext(AttributesAndStateContext);
  return (
    <InspectorControls key="settings">
      <ControlsWrapper initialOpen={true}>
        <PanelRow>
          <Control>
            <ToggleControl
              label={__("Toggle Section-opened state")}
              onChange={() =>
                setState.setIsSectionOpened(!state.isSectionOpened)
              }
              checked={state.isSectionOpened}
            />
          </Control>
        </PanelRow>
      </ControlsWrapper>
      <JumbotronSettings />
      <BackButtonSettings />
    </InspectorControls>
  );
}

function JumbotronSettings() {
  const { attributes, updateAttribute } = useContext(AttributesAndStateContext);

  return (
    <ControlsWrapper title={__("Jumbotron")}>
      <PanelRow>
        <Control label={__("Height")}>
          <UnitControl
            onChange={updateAttribute("height")}
            value={attributes.height}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Width")}>
          <UnitControl
            onChange={updateAttribute("width")}
            value={attributes.width}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Padding")}>
          <UnitControl
            onChange={updateAttribute("padding")}
            value={attributes.padding}
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

function BackButtonSettings() {
  const { attributes, updateAttribute } = useContext(AttributesAndStateContext);

  return (
    <ControlsWrapper title={__("Back Button")}>
      <PanelRow>
        <Control label={__("Margin")}>
          <UnitControl
            onChange={updateAttribute("backButtonMargin")}
            value={attributes.backButtonMargin}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Background Color")}>
          <ColorPalette
            value={attributes.backButtonBackgroundColor}
            onChange={updateAttribute("backButtonBackgroundColor")}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Icon Color")}>
          <ColorPalette
            value={attributes.backButtonIconColor}
            onChange={updateAttribute("backButtonIconColor")}
          />
        </Control>
      </PanelRow>
      <PanelRow>
        <Control label={__("Icon Size")}>
          <RadioGroup
            onChange={updateAttribute("backButtonIconSize")}
            checked={attributes.backButtonIconSize}
          >
            <Radio value="small">{__("Small")}</Radio>
            <Radio value="medium">{__("Medium")}</Radio>
            <Radio value="large">{__("Large")}</Radio>
          </RadioGroup>
        </Control>
      </PanelRow>
    </ControlsWrapper>
  );
}
