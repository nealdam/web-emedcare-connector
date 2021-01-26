const { nextI18NextRewrites } = require("next-i18next/rewrites");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const localeSubpaths = {};

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    serverUrl: (() => {
      if (isDev) return 'https://localhost:5001/api'
      if (isProd || isStaging) return 'http://vasbe.hisoft.vn/api'
      return 'https://localhost:5001/api'
    })()
  };

  // next.config.js object
  return {
    env,
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
  };
};

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {};
//   }

//   return {
//     rewrites: async () => nextI18NextRewrites(localeSubpaths),
//     publicRuntimeConfig: {
//       localeSubpaths,
//     },
//   };
// };
