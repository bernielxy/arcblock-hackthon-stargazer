> The people who tries to predict the price of the cryptocurrency, we call them the stargazer.

[Chinese Version](https://github.com/sharkspeed/arcblock-hackthon-stargazer/blob/master/README-zh.md)

# Introduction

Since most of our members come from [Seniverse](https://www.seniverse.com/), a meteorological service provider, we'd like to do some research based on our work to take advantage of existing data. 

For [large mines](https://www.buybitcoinworldwide.com/mining/pools/), electricity costs a lot of money. Therefore, people tend to choose places with cheap price of electricity as mine sites, such as Sichuan, Inner Mongolia, and Xinjiang Province in China. We'd like to explore the relationship between natural factors and the price of cryptocurrency by using data of meteorological parameters such as rainfall, wind, and light over the past few years in the areas mentioned above. The research will be a helpful guide for can better guide for selecting  mine sites and developing annual mine migration plans., and avoid the natural risks similar to [the 2018 Sichuan flood](https://www.ft.com/content/1f2ad808-80f2-11e8-8e67-1e1a0846c475). If you are interested in this topic or the application of natural data (such as meteorological data), feel free to leave a message in issue or [Seniverse](https://www.seniverse.com/).

The prediction of cryptocurrency price is an extremely complex problem with because of the integrative effect of many factors.

Historical price, stock market, gold price, war, and macroeconomic will also be considered in future reasearch.

In this hackthon, we have now completed a forecast of three cryptocurrency prices based on historical prices. Thanks to [**ArcBlock**](https://www.arcblock.io/), we can fetch historical price data for the past two years easily. Then we use linear regression to predict the price of the cryptocurrency(support btc, eth). 


# Usage

    pip install -r requirements.txt

    python historical.py

# Result

- BTC Price

[<img src="https://github.com/sharkspeed/arcblock-hackthon-stargazer/blob/master/assets/images/btc.png?raw=true" alt="ArcBlock" width="500">](https://www.arcblock.io/)

- ETH Price

[<img src="https://github.com/sharkspeed/arcblock-hackthon-stargazer/blob/master/assets/images/eth.png?raw=true" alt="ArcBlock" width="500">](https://www.arcblock.io/)

- ABC Price

[<img src="https://github.com/sharkspeed/arcblock-hackthon-stargazer/blob/master/assets/images/abc.png?raw=true" alt="ArcBlock" width="500">](https://www.arcblock.io/)

# Acknowledgements

[<img src="https://github.com/sharkspeed/arcblock-hackthon-stargazer/blob/master/assets/images/arcblock.svg" alt="ArcBlock" width="250">](https://www.arcblock.io/)

[<img src="https://github.com/sharkspeed/arcblock-hackthon-stargazer/blob/master/assets/images/seniverse.png?raw=true" alt="Seniverse" width="500">](https://www.seniverse.com/)
