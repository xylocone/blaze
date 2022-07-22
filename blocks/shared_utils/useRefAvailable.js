import {
  useRef,
  useCallback
} from "@wordpress/element";

/**
 * Execute a function when the element corresponding to the ref is available (not null)
 * @param {Function} callback Callback function
 * @returns An array containing a function and a ref
 */
export default function useRefAvailable(callback) {
  const elementRef = useRef(null);
  return [useCallback((node) => {
    if (node !== null) {
      elementRef.current = node;
      callback(node);
    }
  }, []), elementRef];
}