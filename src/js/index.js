import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render () {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//
// class MyComponent extends React.Component {
//   render () {
//     return React.createElement('h1', null, 'Hello World');
//   }
// }
//
// ReactDOM.render(
//   React.createElement(MyComponent, null),
//   document.getElementById('app')
// );
