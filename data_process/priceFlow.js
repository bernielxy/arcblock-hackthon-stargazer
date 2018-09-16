const fse = require('fs-extra');
const OcapSDK = require('@arcblock/node-ocap');

const token = 'eth';

const client = new OcapSDK({
  dataSource: token // btc, eth
});

(async () => {
  try {
    const data = [];
    let { cryptoHistoryPrice: result } = await client.doRawQuery(`
      {
        cryptoHistoryPrice(startDate: "2016-01-01T00:00:00Z", endDate: "2018-09-01T00:00:00Z", token: "${token}") {
          data {
            date
            price
          }
          page {
            cursor
            next
            total
          }
        }
      }
    `);
    console.log(result);
    data.push(...result.data);
    let cursor = result.page.cursor;
    while (result.page.next) {
      result = (await client.doRawQuery(`
        {
          cryptoHistoryPrice(startDate: "2016-01-01T00:00:00Z", endDate: "2018-09-01T00:00:00Z", token: "${token}", paging: { cursor: "${cursor}" }) {
            data {
              date
              price
            }
            page {
              cursor
              next
              total
            }
          }
        }
      `)).cryptoHistoryPrice;
      console.log(result, data.length);
      data.push(...result.data);
      cursor = result.page.cursor;
    }
    fse.writeJsonSync(`${token}-prices.json`, data);
  } catch (err) {
    console.log(err);
  }
})();
