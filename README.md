>> The people who tries to predict the price of the cryptocurrency, we call them the stargazer.

# Introduction

Since most of our members come from Seniverse, a meteorological service provider, we want to do something that combines our work. 

For [large mines](https://www.buybitcoinworldwide.com/mining/pools/), electricity costs a lot of money. Large mines often need to find places with cheap electricity, such as China's Sichuan, Inner Mongolia, and Xinjiang. We want to explore the relationship between natural factors and the price of cryptocurrency by using data such as rainfall, wind, and light over the past few years in these areas. In addition, the research on these meteorological data can better guide the site selection of the mine and the development of the annual mine migration plan, and avoid the natural risks similar to the 2018 Sichuan flood. If you are interested in this topic or the application of natural data (such as meteorological data), feel free to leave a message in issue or visit [Seniverse](https://www.seniverse.com/).

The prediction of cryptocurrency is an extremely complex problem with many influential factors.

We will also add historical price, stock market, gold, war factors, macroeconomic and other influential factors. 

In this hackthon, we have now completed a forecast of three cryptocurrency prices based on historical prices. Thanks to [**ArcBlock**](https://www.arcblock.io/), we can fetch historical price data for the past two years easily. Then we use a simple linear regression to predict the price of the cryptocurrency(support btc, eth).


# Usage:



    pip install -r requirements.txt

    python historical.py