import React from 'react';
import style from './style.scss';
import ReactDOM from 'react-dom';
import { Provider, inject, observer } from 'mobx-react';
import State from './store';

const stores = {
  state: new State()
};

class Main extends React.Component {
  componentDidMount() {
    style.use();
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <Provider {...stores}>
        <div />
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
