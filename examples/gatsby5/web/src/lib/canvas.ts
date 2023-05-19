import {
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
  CanvasClient,
  enhance,
  EnhancerBuilder,
  RootComponentInstance,
} from "@uniformdev/canvas";
import { CANVAS_SANITY_PARAMETER_TYPES } from "@uniformdev/canvas-sanity";
import { sanityEnhancer } from "./sanity";

const client = new CanvasClient({
  apiKey: process.env.GATSBY_UNIFORM_API_KEY,
  projectId: process.env.GATSBY_UNIFORM_PROJECT_ID,
});

export const getComposition = async (path: string, preview: boolean) => {
  const { composition } = await client.getCompositionBySlug({
    slug: !path ? "/" : path,
    state:
      preview || process.env.NODE_ENV === "development"
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  });
  return composition;
};

export const getStaticComposition = async (slug: string) => {
  const { composition } = await client.getCompositionBySlug({ slug });
  return composition;
};

export const getCompositionById = async (compositionId: string) => {
  const { composition } = await client.getCompositionById({ compositionId });
  return composition;
};

export async function enhanceComposition(composition: RootComponentInstance) {
  await enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_SANITY_PARAMETER_TYPES,
      sanityEnhancer
    ),
    context: {},
  });
  return composition;
}
