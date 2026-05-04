

## Development

### Install packages

```sh
pnpm install
```

### Run the project

```sh
pnpm dev
```

http://localhost:3000/
http://localhost:3000/?auth_debug
http://localhost:3000/editor/?auth_debug

### build

```sh
pnpm build
```

Build artifacts are generated in `out/`.

### Netlify

`netlify.toml` defines the Netlify build and local dev settings for this repo.

```sh
netlify dev
```

Deployment is intended to be handled by Netlify's GitHub integration. Connect this repository once in Netlify, then pushes to GitHub will trigger deploys there.

If you want to link this local checkout to an existing Netlify site for CLI usage, run:

```sh
netlify link
```
