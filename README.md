# TODO

- [x] Build for Cloudflare Workers - https://visualise-the-times-tables.thudbuzz.workers.dev
- [x] Build for Cloudflare Pages - https://visualise-the-times-tables.pages.dev
- [x] Add the urls to the github repo
- [x] Update the description on the github repo
- [x] Update the README

## How to deploy to Cloudflare Workers

To deploy to Cloudflare Workers, in `package.json` replace `"@sveltejs/adapter-static": "next"` with `"@sveltejs/adapter-cloudflare-workers": "next"`

Now run `npm install`

Then, in `svelte.config.cjs` replace `const static = require("@sveltejs/adapter-static");` with `const cloudflare = require("@sveltejs/adapter-cloudflare-workers");` and change `adapter: static()` to `adapter: cloudflare()`


## Building for other deploys

Svelte apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `node build`. To use a different adapter, add it to the `devDependencies` in `package.json` making sure to specify the version as `next` and update your `svelte.config.cjs` to [specify your chosen adapter](https://kit.svelte.dev/docs#configuration-adapter). The following official adapters are available:

- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- [@sveltejs/adapter-vercel](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- ...more soon

[See the adapter documentation for more detail](https://kit.svelte.dev/docs#adapters)
