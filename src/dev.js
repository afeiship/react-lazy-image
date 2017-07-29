import './dev.scss';

import ReactLazyimg from './main';
import lazyImg from 'assets/lazyimg.jpg';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      lazy: true,
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

  _click1 = e =>{
    this.setState({lazy:false})
  };

  render(){
    return (
      <div className="hello-react-lazyimg">

        <button onClick={this._click1} >Click do Lazy</button>

        <h1>Aggressive</h1>
        <ReactLazyimg
        effect="replace"
        lazy={this.state.lazy}
        placeholder={require('./assets/small-2.png')}
        url={require('./assets/mm.jpg')} title="Fei's logo" size="30px" />


        <h1>Replace</h1>
        <ReactLazyimg
        effect="replace"
        lazy={this.state.lazy}
        placeholder="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
        url="https://cdn01.weipaitang.com/img/20170628C4wt5E-fO5OFcrmkWIXsapIVkC5GQGF6v8SynW7BRDVxitWPkDYw4M26FM3ZrHy3-W140H140" title="Fei's logo" size="30px" />

        <h1>Fade</h1>
        <ReactLazyimg
        effect="fade"
        lazy={this.state.lazy}
        url='https://www.baidu.com/img/bd_logo1.png' title="Fei's logo" size="30px" />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
