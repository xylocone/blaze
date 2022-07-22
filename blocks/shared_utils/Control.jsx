/**
 * A React component to render a labelled wrapper for a Control
 * @param {Object} props Properties of the component
 * @returns A JSX component
 */
export default function Control({ children, label, description }) {
  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      {children}
      {description && <small>{description}</small>}
    </fieldset>
  );
}
