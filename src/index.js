import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './js/components/index';
import registerServiceWorker from './registerServiceWorker';

export default class Root extends React.Component{
render(){
  return(
    <div>
      <Index/>
    </div>
  )
}
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
