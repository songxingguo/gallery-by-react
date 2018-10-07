require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import  yeoman from '../../src/images/yeoman.png'

class AppComponent extends React.Component {
  render() {
    const fontStyle = {
      width: '18rem'
    };
    return (
      <div className="card" style={fontStyle}>
        <img className="card-img-top" src={yeoman} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
          </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
