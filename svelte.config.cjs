const cloudflare = require("@sveltejs/adapter-cloudflare-workers");
const static = require("@sveltejs/adapter-static");
const pkg = require("./package.json");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    // use 'static()' for Cloudflare Pages and 'cloudflare()' for Cloudflare Workers
    adapter: static(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
