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

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    // https://react-progressive-bg-image.netlify.com/static/media/image1.9c4f63a7.jpg
    // http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg
    return (
      <div className="hello-react-lazy-image">
            <ReactLazyImage src="http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg" ref='rc' />
      </div>
    );
  }
}

```
