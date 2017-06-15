import './dev.scss';

import ReactLazyimg from './main';
import lazyImg from 'assets/lazyimg.jpg';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      test:'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg'
    };
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        // test:'https://www.baidu.com/img/bd_logo1.png'
      });
    },2000)
  }
  render(){
    return (
      <div className="hello-react-lazyimg">
        <h1>Replace</h1>
        <ReactLazyimg
        effect="replace"
        placeholder="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
        url="https://www.baidu.com/img/bd_logo1.png" title="Fei's logo" size="30px" />

        <h1>Fade</h1>
        <ReactLazyimg
        effect="fade"
        url='https://www.baidu.com/img/bd_logo1.png' title="Fei's logo" size="30px" />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
