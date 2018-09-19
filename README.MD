# react-lazy-image
> Lazy load image with placeholder for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    fit: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
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

class App extends React.Component {
  state = {
    lazyValue: false
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onClick1 = (inEvent) => {
    this.setState({ lazyValue: true });
  };

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
              value={lazyValue}
              lazy={true}
              src="http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg" ref='rc' />
            <button onClick={this._onClick1} className="button"> Trigger Lazy Image </button>
          </div>
        </div>
      </div>
    );
  }
}

```
