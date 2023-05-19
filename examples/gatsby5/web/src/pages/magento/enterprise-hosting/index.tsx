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
  const composition = await getCompositionById("cb8ebd26-9a82-4b06-90f0-fa62f63c3ff4");
  await enhanceComposition(composition);
  return {
    status: 200,
    props: { composition },
  };
}

const clientContext = createUniformContext();

const MagentoEnterpriseHostingPage = (props: PageProps) => {
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
      <h1 className="text-7xl">This is the Magento Enterprise Hosting Page!</h1>
      <RussCta
        title="Buy Magento Now!"
        subtitle="This is your chance to SAVE!"
        buttonText="BUY MAGENTO!"
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

export default MagentoEnterpriseHostingPage;
