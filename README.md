
# Draw Cards
A simple card drawing web app created with React hosted in github pages.

interactive demo [https://soglahash.github.io/cards/](https://soglahash.github.io/cards/)

![demo-gif](./demo.gif)

## Features

* Create a deck of 52 with optional (up to 12) jokers cards
* French-suited SVG rendered cards
* Continue drawing from the same deck
* Draw one or multiple cards at once
* Mouseover to draw a card from anywhere in the deck
* Shuffle the deck
* Flip over the deck
* Status bar to show number of cards in deck, hand and previously drawn
* Neatly show cards drawn and cards from previous draws


## Credit to NPM Modules
* svg-cards [https://github.com/htdebeer/SVG-cards](https://github.com/htdebeer/SVG-cards)
* react-widgets/NumberPicker [https://jquense.github.io/react-widgets/docs/NumberPicker/](https://jquense.github.io/react-widgets/docs/NumberPicker/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Build Mobile Android 
Options
1. create react-native app. Requires rewriting code 👎
1. convert react to react-native. No need to rewrite any code 👍

## convert react to react-native with [Cordova](https://cordova.apache.org/#getstarted)
from: https://stackoverflow.com/questions/35463547/what-is-the-quickest-way-to-convert-a-react-app-to-react-native
TLDR;
```
create Cordova app, add android platform and build. open project with android studio and simulate with virtual device.
```
Change `"homepage": ".",` in `package.json` before building 

Build cmd
```
npm run build && cp -R ./build/* ../MyApp/www/ && cd ../MyApp/ && cordova build android && cordova run android ; cd -
```
Android 10.0
![screenshot mobile](./android.png)

## IOS
Todo with QEMU VM, xcode
https://oneclick-macos-simple-kvm.notaperson535.is-a.dev/docs/start-here/




