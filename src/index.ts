import { toConfig, createPage } from "roam-client";

const CONFIG = toConfig("graph-overview");
createPage({ title: CONFIG });
