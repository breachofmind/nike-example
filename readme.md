# Nike RWD Example

This is example of a page off of Nike.com that has been made responsive.
There are two parts to this example:
- __Static HTML/CSS__ located at `index.html`.
- __React-based components__ located at `index-components.html`

## Installing
Clone the repository.
```bash
git clone https://github.com/breachofmind/nike-example.git
```
Install dependencies, Using `yarn` or `npm` (depending on how cool you are):
```bash
yarn install
# or...
npm install
```
Run the Browsersync server.
```bash
npm run dev
```

The server should run at `http://localhost:3000`. Try the following files:
- [HTML/CSS Version](http://localhost:3000/index.html)
- [React-based Component App](http://localhost:3000/index-components.html)

Alternatively, you could open the file in your browser without the server running: `public/index.html`.
However, inline SVG with symbols will not work. `index-components.html` will not work at all, because `state.json` cannot be served in this way.

## Developing
To use webpack while making changes to files, make sure you have the webpack cli installed and run:
```bash
webpack --watch --progress
```

## Notes
- Source styles are written in __stylus__ because that's what the folks at Nike use.
- Only the __Foundation 6 Flex Grid__ was used for base styles.
- Styles are organized in the [SMACSS](https://smacss.com/book/categorizing) way.
- For time sake, I chose not to minify anything. Normally, production stuff would be minified.
- The react application uses a simple `/public/data/state.json` to mock how a server would return data.
The page layout is determined by this file, so try changing some values to see how the app changes.