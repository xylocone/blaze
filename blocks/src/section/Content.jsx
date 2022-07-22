import { useState, useContext } from "@wordpress/element";

// Internal dependencies
import AttributesAndStateContext from "./AttributesAndStateContext.jsx";
import fetchContent from "../../shared_utils/fetchContent.js";
import useStateUpdated from "../../shared_utils/useStateUpdated.js";

export default function Content() {
  const { attributes, state } = useContext(AttributesAndStateContext);
  const [content, setContent] = useState(null);
  const [responseReceived, setResponseReceived] = useState(false);

  useStateUpdated(async () => {
    try {
      const fetchedContent = await fetchContent(attributes.sourcePageSlug);
      setContent(
        `<div class="section__content__fetched-content">${fetchedContent}</div>`
      );
    } catch (_e) {
      setContent(null);
    } finally {
      setResponseReceived(true);
    }
  }, [state.isOpened, attributes.sourcePageSlug]);

  if (state.isOpened && content) {
    return (
      <div
        className="section__content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    );
  } else {
    return (
      <div className="section__content">
        {state.isOpened && !responseReceived && <Loader />}
        {state.isOpened && responseReceived && !content && <ErrorMessage />}
      </div>
    );
  }
}

function Loader() {
  return (
    <div className="section__content__loader">
      {[...Array(3)].map(() => {
        return <div className="section__content__loader__bar"></div>;
      })}
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="section__content__error">
      <h2>Error!</h2>
      <p>Wordpress did not return any data for the given slug.</p>
    </div>
  );
}

Content.Save = ({ attributes }) => {
  return (
    <div
      className="section__content"
      data-source-page-slug={attributes.sourcePageSlug}
    >
      <Loader />
    </div>
  );
};
