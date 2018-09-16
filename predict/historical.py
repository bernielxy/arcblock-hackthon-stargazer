from sklearn.linear_model import LinearRegression
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn

# change the coin_type as you want. Support: btc, eth, abc

coin_type = 'btc'

Df = pd.read_csv( 'data/' + coin_type + '_price.csv', 
    parse_dates=True,
    index_col=0)

Df = Df[['Price']]
Df = Df.dropna()
Df['S_3'] = Df['Price'].shift(1).rolling(window=3).mean()
Df['S_9'] = Df['Price'].shift(1).rolling(window=9).mean()
Df = Df.dropna()
x = Df[['S_3', 'S_9']]
x.head()
y = Df['Price']
y.head()

t = .8
t = int(t * len(Df))

x_train = x[:t]
y_train = y[:t]

x_test = x[t:]
y_test = y[t:]

linear = LinearRegression().fit(x_train, y_train)

print("Price =", round(linear.coef_[0], 2),
      "* 3 Days Moving Average", round(linear.coef_[1], 2),
      "* 9 Days Moving Average +", round(linear.intercept_, 2))

predicted_price = linear.predict(x_test)

predicted_price = pd.DataFrame(
    predicted_price,
    index=y_test.index,
    columns=['price'])

predicted_price.plot(figsize=(10, 5))

y_test.plot()

plt.legend(['predicted_price', 'actual_price'])

plt.ylabel(coin_type.upper() + "Price")

r2_score = linear.score(x[t:], y[t:]) * 100

print('\nThe heigher, the better (0 - 100)')
print(float("{0:.2f}".format(r2_score)))

plt.show()
