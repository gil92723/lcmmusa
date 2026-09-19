import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kw3f29bt",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
  perspective: "published",
});
