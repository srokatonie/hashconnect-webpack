# A working example of Hashconnect library + Svelte + Webpack

```
npm install
npm run dev
```

For testing, use hashconnects's test wallet available at https://hashpack.github.io/hashconnect/wallet/

## Notes for Svelte Webpack setup (and probably React + other):

1. Make sure you are using Typescript
2. Fix potential errors as described here: https://github.com/Hashpack/hashconnect#errors - Install required dependencies and in your `webpack.config.js` add:
```
module.exports = {
	resolve: {
		fallback: { 
			"crypto": require.resolve("crypto-browserify"),
			"stream": require.resolve("stream-browserify")
		}
    // ...
```
3. Add recolve paths in `tsconfig.json` - `compilerOptions`, should look like:
```
{
  "extends": "@tsconfig/svelte/tsconfig.json",
  "include": ["src/**/*", "src/node_modules/**/*"],
  "exclude": ["node_modules/*", "__sapper__/*", "static/*"],
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "crypto": [
        "node_modules/crypto-browserify"
      ],
      "stream": [
        "node_modules/stream-browserify"
      ]
    },
  },
}
```

4. Install [node-polyfill-webpack-plugin](https://github.com/Richienb/node-polyfill-webpack-plugin) and add to `webpack.config.js`:
```
// ...
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// ...
plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new NodePolyfillPlugin()
],
// ...
```