<p align="center">``
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  kf-website
</h1>

## Prerequisites

1. [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) are needed to build website and start the development server.

2. [ipfs-cli](https://docs.ipfs.io/how-to/command-line-quick-start/) is needed to publish and pin website on ipfs.

### Nix users

Users of [NixOS](https://nixos.org/) and Nix package manager with [Nix Flakes](https://nixos.wiki/wiki/Flakes) enabled may take advatage of a complete development environent by running `nix develop`.

## Development

```shell
# install dependencies
yarn

# start a dev server and open the browser
yarn start -o
```

### Release build

Run the following command to test release build of the website locally:

``` shell
yarn build && yarn serve -o

```
## Publish

**Optional:** Run the following command if you intend on pinning the website using pinning service such as [Pinata](https://pinata.cloud/): 

```shell
# enter the devShell
nix develop

# initialize ipfs configuration (if not already exists)
ipfs init

# configure pinata as a remote pinning service
ipfs pin remote service add pinata https://api.pinata.cloud/psa <PINATA_JWT>

# build the website and publish it on ipfs
nix build && ipfs add -rQ $(readlink result)
```

If successful, you will see CID which you can use to open the published website in the browser: `https://ipfs.io/ipfs/<CID>`.
