import React from "react";

import type {
  GetServerDataProps,
  GetServerDataReturn,
  PageProps,
} from "gatsby";

import {
  UniformComposition,
  UniformCompositionProps,
  UniformSlot,
} from "@uniformdev/canvas-react";

import { UniformContext } from "@uniformdev/context-react";

import RussCta from "../components/RussCta";
import RussHeader from "../components/RussHeader";
import RussFooter from "../components/RussFooter";

import "../components/canvasComponents";

import { createUniformContext } from "../lib/uniformContext";
import { enhanceComposition, getStaticComposition } from "../lib/canvas";

export async function getServerData({
  query,
}: GetServerDataProps): GetServerDataReturn {
  const composition = await getStaticComposition("wordpress");
  await enhanceComposition(composition);
  return {
    status: 200,
    props: { composition },
  };
}

const clientContext = createUniformContext();

const WordPressPage = (props: PageProps) => {
  const { serverData } = props;
  const { composition } = (serverData as any) || {};

  const contextualEditingEnhancer: UniformCompositionProps["contextualEditingEnhancer"] =
    async ({ composition }) => {
      await enhanceComposition(composition);
      return composition;
    };

  return (
    <div>
      <RussHeader />
      <h1 className="text-7xl">This is the WordPress Page!</h1>
      <RussCta
        title="Buy WordPress Now!"
        subtitle="This is your chance to SAVE!"
        buttonText="BUY WORDPRESS!"
      />
      <UniformContext
        context={clientContext}
        outputType={
          process.env.GATSBY_UNIFORM_OUTPUT_MODE
            ? process.env.GATSBY_UNIFORM_OUTPUT_MODE
            : "standard"
        }
      >
        <UniformComposition
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}
        >
          <UniformSlot name="content" />
        </UniformComposition>
      </UniformContext>
      <RussFooter />
    </div>
  );
};

export default WordPressPage;
