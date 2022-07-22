import { Panel, PanelBody } from "@wordpress/components";

/**
 * A component to wrap <Control /> components
 * @param {Object} props Properties of the component
 * @returns A JSX component
 */
export default function ControlsWrapper({
  children,
  title,
  description,
  initialOpen,
}) {
  return (
    <Panel>
      <PanelBody title={title} initialOpen={initialOpen ?? false}>
        {description && <small>{description}</small>}
        {children}
      </PanelBody>
    </Panel>
  );
}
