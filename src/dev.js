import './dev.scss';
import ReactLazyimg from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-lazyimg">
        <h1>Replace</h1>
        <ReactLazyimg
        effect="replace"
        placeholder="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
        url="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" title="Fei's logo" size="30px" />

        <h1>Fade</h1>
        <ReactLazyimg
        effect="fade"
        url="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" title="Fei's logo" size="30px" />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
