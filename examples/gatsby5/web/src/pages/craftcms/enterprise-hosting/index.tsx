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

import RussCta from "../../../components/RussCta";
import RussHeader from "../../../components/RussHeader";
import RussFooter from "../../../components/RussFooter";

import "../../../components/canvasComponents";

import { createUniformContext } from "../../../lib/uniformContext";
import { enhanceComposition, getCompositionById } from "../../../lib/canvas";

export async function getServerData({
  query,
}: GetServerDataProps): GetServerDataReturn {
  const composition = await getCompositionById("82dc81fc-561a-4708-9438-8854c5349fca");
  await enhanceComposition(composition);
  return {
    status: 200,
    props: { composition },
  };
}

const clientContext = createUniformContext();

const CraftCMSEnterpriseHostingPage = (props: PageProps) => {
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
      <h1 className="text-7xl">This is the Craft CMS Enterprise Hosting Page!</h1>
      <RussCta
        title="Buy Craft CMS Now!"
        subtitle="This is your chance to SAVE!"
        buttonText="BUY CRAFT CMS!"
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

export default CraftCMSEnterpriseHostingPage;
