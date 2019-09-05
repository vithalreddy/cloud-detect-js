# cloud-detect-js

![License](https://img.shields.io/npm/l/cloud-detect-js?style=for-the-badge)
![Version](https://img.shields.io/npm/v/cloud-detect-js?style=for-the-badge)
![Dependencies](https://img.shields.io/david/vithalreddy/cloud-detect-js?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/vithalreddy/cloud-detect-js?style=for-the-badge)
![Size](https://img.shields.io/bundlephobia/minzip/cloud-detect-js?style=for-the-badge)
![Node](https://img.shields.io/node/v/cloud-detect-js?style=for-the-badge)

`cloud-detect-js` is a Node.JS module that determines a host's cloud provider. Highly inspired by the Go based [Satellite](https://github.com/banzaicloud/satellite), `cloud-detect-js` uses the same techniques (file systems and provider metadata) to properly identify cloud providers. Currently Supports AWS, GCP, Azure, Alibaba, Oracle, and Digital Ocean Cloud Providers.

## Installation

Via NPM:

```bash
npm install --save cloud-detect-js
```

Via Yarn:

```bash
yarn add cloud-detect-js
```

## Usage

```javascript
const { cloudProvider } = require('cloud-detect-js');

(async () => {
  await cloudProvider();
  // wil return one of  'aws', 'gcp', 'azure', 'oracle', 'alibaba', 'do' or 'unknown'

  await cloudProvider();
  // 'gcp'

  await cloudProvider(['aws', 'oracle']); //excluded
  // 'unknown'
})();
```

## CLI Usage

## Installation

Via NPM:

```bash
npm install -g cloud-detect-js
```

Via Yarn:

```bash
yarn add global cloud-detect-js
```

## Usage

```bash
Usage: cloud-detect-js [options] [command]

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  detect|d       Detect's Host Machine's Cloud Provider

cloud-detect-js d
# aws

cloud-detect-js detect
# gcp
```
