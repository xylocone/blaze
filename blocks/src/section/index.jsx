import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit.jsx";
import Save from "./save.jsx";
import metadata from "./block.json";

import "./style.scss";

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
});
