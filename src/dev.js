import './dev.scss';
import ReactLazyImage from './main';

/*===example start===*/

// install: npm install afeiship/react-lazy-image --save
// import : import ReactLazyImage from 'react-lazy-image'

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
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/nature',
    ],
    scrollLazyValues: []
  };

  _onClick1 = (inEvent) => {
    this.setState({ lazyValue: false });
  };

  updateLazyValues() {
    const { scrollLazyValues } = this.state;
    const elements = document.querySelectorAll('.scroller .react-lazy-image');
    const els = [].slice.call(elements);
    els.forEach((el, index) => {
      if (scrollLazyValues[index] === undefined || scrollLazyValues[index] === true) {
        scrollLazyValues[index] = !isElementInViewport(el, 200);
      }
    });
    console.log(scrollLazyValues);

    this.setState({ scrollLazyValues });
  }

  componentDidMount() {
    this.updateLazyValues();
    window.onscroll = () => {
      this.updateLazyValues();
    }
  }

  render() {
    // https://react-progressive-bg-image.netlify.com/static/media/image1.9c4f63a7.jpg
    // http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg
    const { scrollLazyValues, lazyValue } = this.state;

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
                  lazy={scrollLazyValues[index]}
                  once={true}
                  src="http://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg" ref='rc' />
              )
            })
          }
        </div>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
