# react-lazy-image
> Lazy load image with placeholder for react js based on vanilla-lazyload.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-lazy-image
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-lazy-image/dist/style.css";

  // or use sass
  @import "~@jswork/react-lazy-image/dist/style.scss";
  ```
2. import js
  ```js
__GENERATE_DAPP__
  ```

## img
```jsx
<img 
  className="lazy"
  data-src="https://via.placeholder.com/realimage.jpg"
  src="https://via.placeholder.com/fallback.jpg" 
  alt="image" 
/>;
```

## preview
- https://afeiship.github.io/react-lazy-image/

## license
Code released under [the MIT license](https://github.com/afeiship/react-lazy-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-lazy-image
[version-url]: https://npmjs.org/package/@jswork/react-lazy-image

[license-image]: https://img.shields.io/npm/l/@jswork/react-lazy-image
[license-url]: https://github.com/afeiship/react-lazy-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-lazy-image
[size-url]: https://github.com/afeiship/react-lazy-image/blob/master/dist/react-lazy-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-lazy-image
[download-url]: https://www.npmjs.com/package/@jswork/react-lazy-image
