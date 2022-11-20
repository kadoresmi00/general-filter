  <h1>
    <img align="left" height=40 src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png" />
    &nbsp;
    <span align="left">General Filter</span>
  </h1>

A modules to make your work easier. A helpful resource that includes Caps Filter, Link Filter, Swear Filter, Word Filter. 💻‍✨

```bash
npm i @kadoresmi00/general-filter
```

<a href="https://www.npmjs.com/package/@kadoresmi00/general-filter">![GitHub package.json version](https://img.shields.io/github/package-json/v/kadoresmi00/general-filter?style=for-the-badge)</a>
<a href="https://www.npmjs.com/package/@kadoresmi00/general-filter">![npm](https://img.shields.io/npm/dw/general-filter?style=for-the-badge)</a>

**Features:**

- Catches bad words. Language: TR, EN, FR. ✅
- Captures links! ✅
- Controls the use of the words you specify. ✅

# Usage

It's pretty self-explanatory… check out the examples below 😉

**Swear Filter**
```js
const { SwearFilter } = require("@kadoresmi00/general-filter")

const kado = new SwearFilter({ language: "EN" });
let message = "hello";
if (kado.isCheck(message)) {
  console.log("Thiis text contains profenity!");
} else {
  console.log("This text does not contain profenity!");
}
// Return : This text does not contain profenity!

```

**Link Filter**

```js
const { LinkFilter } = require("@kadoresmi00/general-filter")

const kado = new LinkFilter({ all : true });
// all options : true;

let message = "https://kadomedia.org";
if (kado.isCheck(message)) {
  console.log("This text contains link!")
} else {
  console.log("This text does not contain link!");
}
// Return : This text contains link!

```
**Word Filter**

```js
const { WordFilter } = require("@kadoresmi00/general-filter")
// You enter the words into the object as an array.
const kado = new WordFilter({ words: ["kadoo","of"] });

let message = "kado";
if (kado.isCheck(message)) {
  console.log("This text contains word!")
} else {
  console.log("This text does not contain word!");
}
// Return : This text contains word!

```
**Caps Filter**

```js
const { CapsFilter } = require("@kadoresmi00/general-filter")
//You need to set a percentage for it to detect Caps. If you do not specify, it will automatically accept 70%.
const kado = new CapsFilter({ percentAge: 50 });

let message = "KADO was HERE.";
if (kado.isCheck(message)) {
 console.log("This text contains caps!");
} else {
 console.log("This text does not contain caps!");
}
// Return : This text contains caps!

```
## NPM
**Link**
- [Click](https://www.npmjs.com/package/@kadoresmi00/general-filter)
