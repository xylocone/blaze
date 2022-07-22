import { useRef } from "@wordpress/element";

/**
 * A component to render a Number control whose value can be assigned dynamically but can also be edited by the user
 * @param {Object} props Component props
 * @returns A JSX Component
 */
export default function NumberControl({ onChange, value, min, max, step }) {
  const inputRef = useRef(null);

  return (
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      ref={inputRef}
      onChange={(e) => onChange(parseFloat(e.currentTarget.value, 10))}
      onBlur={(e) => (e.currentTarget.value = value)}
      defaultValue={value}
      value={inputRef.current == document.activeElement ? undefined : value}
    />
  );
}
