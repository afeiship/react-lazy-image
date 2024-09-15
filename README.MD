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
  import ReactLazyLoadImage from '@jswork/react-lazy-image';
  import '@jswork/react-lazy-image/dist/style.scss';
  import { useEffect, useState } from 'react';

  function App() {
    const [dom, setDom] = useState<HTMLDivElement>();
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
      fetch('https://picsum.photos/v2/list').then(res => res.json()).then(data => {
        setDataSource(data);
      });
    }, []);

    console.log('dataSource: ', dataSource);
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="text-center y-2 layout-abs-scrollable h-100">
          <ReactLazyLoadImage container={dom}>
            <div className="is-scrollable-y" ref={(el) => setDom(el as HTMLDivElement)}>
              {dataSource.map((item: any, index) => {
                return <div key={index}>
                  <img
                    className="lazy w-full"
                    width={item.width}
                    height={item.height}
                    src="https://web-assets.alo7.com/assets/images/apply7-ph.jpg"
                    data-src={item.download_url}
                    alt={item.alt}
                  />
                </div>;
              })}
            </div>
          </ReactLazyLoadImage>
        </div>
        <hr className="my-5" />
        <div className="text-center y-2 layout-abs-scrollable h-100">
          <ReactLazyLoadImage className="is-scrollable-y">
            {dataSource.map((item: any, index) => {
              return <div key={index}>
                <img
                  className="lazy w-full"
                  width={item.width}
                  height={item.height}
                  src="https://web-assets.alo7.com/assets/images/apply7-ph.jpg"
                  data-src={item.download_url}
                  alt={item.alt}
                />
              </div>;
            })}
          </ReactLazyLoadImage>
        </div>


      </div>
    );
  }

  export default App;
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
