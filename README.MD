# react-lazy-image
> Lazy load image with placeholder for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    fit: PropTypes.string,
  };

  static defaultProps = {
    placeholder: 'https://static.ws.126.net/163/wap/f2e/milk_index/bg_img_sm_minfy.png',
    fit: 'contain'
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-lazy-image --registry=https://registry.npm.taobao.org
```

```js
import ReactLazyImage from 'react-lazy-image';
```

```scss
// customize your styles:
$react-lazy-image-options:(
);

@import 'node_modules/react-lazy-image/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-lazy-image --save
// import : import ReactLazyImage from 'react-lazy-image'

// TODO: NOT a good implementation
function isElementInViewport(el, offset = 0) {
  const box = el.getBoundingClientRect(),
    top = (box.top >= 0),
    left = (box.left >= 0),
    bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset),
    right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + offset);
  return (top && left && bottom && right);
}

class App extends React.Component {
  state = {
    lazyValue: true,
    images: [
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/people',
      'https://placeimg.com/640/480/people/grayscale',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature/sepia',
      'https://placeimg.com/640/480/animals',
      'https://placeimg.com/640/480/animals/grayscale',
      'https://placeimg.com/640/480/arch',
      'https://placeimg.com/640/480/tech',
      'https://placeimg.com/640/480/tech/grayscale',
      'https://placeimg.com/640/480/tech/sepia',
      'https://placeimg.com/640/480/nature/grayscale',
    ]
  };

  _onClick1 = (inEvent) => {
    this.setState({ lazyValue: false });
  };

  componentDidMount() {
    this._scrollerLazyImage = new NxScrollLazyImage( document.querySelector('.scroller'));
  }

  render() {
    // https://react-progressive-bg-image.netlify.com/static/media/image1.9c4f63a7.jpg
    // http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg
    const { lazyValue } = this.state;

    return (
      <div className="hello-react-lazy-image">

        <div className="list">
          <div className="item">
            <ReactLazyImage src="http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg" ref='rc' />
            <button disabled className="button">Auto load lazy Image </button>
          </div>

          <div className="item">
            <ReactLazyImage
              lazy={lazyValue}
              src="http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg" ref='rc' />
            <button onClick={this._onClick1} className="button"> Trigger Lazy Image </button>
          </div>
        </div>

        <div className="scroller">
          <center>Lazy load by scrolling</center>
          {
            this.state.images.map((item, index) => {
              return (
                <ReactLazyImage
                  key={index}
                  id={`id_${index}`}
                  lazy={true}
                  once={true}
                  src={item} ref='rc' />
              )
            })
          }
        </div>
      </div>
    );
  }
}

```
