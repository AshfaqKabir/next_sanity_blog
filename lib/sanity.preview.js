"use client";

import { definePreview } from "next-sanity/preview";
import { client } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

const { projectId, dataset } = client.clientConfig;

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
