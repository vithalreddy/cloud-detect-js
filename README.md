# cloud-detect-js

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

  await cloudProvider((excluded = ['aws', 'oracle']));
  // 'unknown'
})();
```
