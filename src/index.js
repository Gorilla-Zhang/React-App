import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './js/components/index';
import registerServiceWorker from './registerServiceWorker';
import PCNewsDetails from './components/pc_news_details'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Index} />
          <Route path="/details/:uniquekey" component={PCNewsDetails} />
        </Router>
      </div>
    )
  }
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
