import {
	useEffect,
	useRef
} from "@wordpress/element";

/**
 * Like useEffect(() => {}, []), but callback does not run when the component is rendered for the first time
 * @param {Function} callback Callback function
 * @param {Array} dependencies Array of dependencies
 */
export default function useStateUpdated(callback, dependencies) {
	const isFirstTime = useRef(true);
	useEffect(async () => {
		if (isFirstTime.current) isFirstTime.current = false;
		else await callback();
	}, dependencies)
}