import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "index",
    path: "/",
  },
  {
    type: "how_it_works",
    path: "/howitworks",
  },
  {
    type: "about_us",
    path: "/aboutus",
  },
  {
    type: "our_services",
    path: "/ourservices",
  },
  {
    type: "textpage",
    path: "/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    accessToken: 'MC5aUzByRHhBQUFDTUF6WUF5.77-977-9cghE77-977-977-977-9M--_ve-_vR5TIe-_vWcD77-977-977-977-977-977-9HO-_vVdY77-977-977-977-9',
    fetchOptions:
      process.env.NODE_ENV === "production"
        // ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        // : { next: { revalidate: 5 } },
        ? { next: { tags: ["prismic"] }, cache: "no-store" }
        : { next: { revalidate: 0 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
