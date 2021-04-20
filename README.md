# Visualise the Times Tables

Just a quick project to help my son visualise the times tables.

## Svelte Kit and Cloudflare

I wanted to try and deploy one static project built in Svelte Kit to both Cloudflare Workers and Pages. I was able to use the adapters built in to Svelte Kit to accomplish this with ease - and working with Cloudflare has been just as sweet.

Both builds can be found here:

https://visualise-the-times-tables.pages.dev
https://visualise-the-times-tables.thudbuzz.workers.dev

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
