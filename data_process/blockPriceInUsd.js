const fse = require('fs-extra');
const OcapSDK = require('@arcblock/node-ocap');

const client = new OcapSDK({
  dataSource: 'btc' // btc, eth
});

(async () => {
  try {
    result = [];
    for (let height = 1; height < 100000; height++) {
      const { blockByHeight: block } = await client.blockByHeight({
        height
      });
      console.log(height, block.priceInUsd);
      result.push(block.priceInUsd);
    }
    fse.writeJSONSync(require, result);
  } catch (err) {
    console.log(err);
  }
})();
