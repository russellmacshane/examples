// import createSanityClient from "@sanity/client";
// import { createSanityEnhancer } from "@uniformdev/canvas-sanity";

// const sanityClient = createSanityClient({
//   projectId: process.env.GATSBY_SANITY_PROJECT_ID,
//   dataset: process.env.GATSBY_SANITY_DATASET,
//   useCdn: false,
// });

// // Create a modified enhancer to enhance the images and return offeringImage
// export const sanityEnhancer = createSanityEnhancer({
//   client: sanityClient,
//   modifyQuery: (options) => {
//     options.query = `*[_id == $id][0] { 
//           "offeringImage": offeringImage.asset->url,
//           "image": image.asset->url,
//           ...
//         }`;

//     return options;
//   },
// });
