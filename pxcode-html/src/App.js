import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Menu from 'components/Menu';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './common.css';
import './fonts.css';
false;

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/Menu">Menu</Link>
            </div>
          </Route>

          <Route exact path="/Menu" component={Menu} />
        </Switch>
      </Router>
    );
  }
}

export default App;
