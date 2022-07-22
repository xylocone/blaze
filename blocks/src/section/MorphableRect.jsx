import { useContext } from "@wordpress/element";

// Internal dependencies
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import Corners from "./Corners.jsx";

export default function MorphableRect({ children }) {
  const { isSelected, state } = useContext(AttributesAndStateContext);

  return (
    <>
      <div className={`section__container ${isSelected ? "is-selected" : ""}`}>
        {children}
      </div>
      {isSelected && !state.isOpened && <Corners />}
    </>
  );
}

MorphableRect.Save = ({ children }) => {
  return <div className="section__container">{children}</div>;
};
