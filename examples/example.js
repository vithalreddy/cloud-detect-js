const { cloudProvider } = require('cloud-detect-js');

(async () => {
  const result = await cloudProvider();
  console.log(result);
})();
