import { model } from "./model";
import { Site } from "../classes/sity";
import { Sidebar } from "../classes/sidebar";
import "./styles/main.css";

const site = new Site("#site");
site.render(model);

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

new Sidebar("#panel", updateCallback);
