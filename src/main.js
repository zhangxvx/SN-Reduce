import 'babel-polyfill'
import ReactDOM from 'react-dom'
import React from 'react'
import { Visibility } from 'semantic-ui-react'

import { Route, Redirect, Switch } from 'react-router'
import { HashRouter, BrowserRouter } from 'react-router-dom'

import { Navigation } from './Layout/Navigation'
import { HomePage } from './Func/HomePage'
import { Footer } from './Layout/Footer'
import { JumpToTop } from './Layout/JumpToTop'

// import { LazyLoadingVoice } from './LazyComponents/LazyLoadingVoice'
import { LazyBundleDXY, LazyBundleYK, LazyBundleGXW, LazyBundleZX, LazyBundlePipe } from './LazyComponents/LazyBundle'
// import { LazyLoadingYK } from './LazyComponents/LazyLoadingYK'
// import { LazyLoadingZX } from './LazyComponents/LazyLoadingZX'


class RR extends React.Component {

  state = {
    navShow: true
  }

  handleMenuHidden = () => {
    this.setState({ navShow: false })
  }
  handleMenuShow = () => {
    this.setState({ navShow: true })
  }

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Visibility
            onOffScreen={this.handleMenuHidden}
            onOnScreen={this.handleMenuShow}
            once={false}
          >
            <Navigation id="nav-787639" />
          </Visibility>
          <Switch>
            <Route path="/voice/overview" render={() => <LazyBundleGXW componentName="AppOverView" />} />
            <Route path="/voice/text" render={() => <LazyBundleGXW componentName="App" />} />
            <Redirect from="/voice" exact push to="/voice/overview" />
            <Route path="/pic" render={() => <LazyBundleDXY componentName="App" />} />
            <Route path="/phone" render={() => <LazyBundleDXY componentName="PhoneApp" />} />
            <Route path="/warm" render={() => <LazyBundleZX componentName="App" />} />
            <Route path="/fee" render={() => <LazyBundleYK componentName="App" />} />
            <Route path="/credit" render={() => <LazyBundleYK componentName="AppCredit" />} />
            <Route path="/pipe" render={() => <LazyBundleZX componentName="AppPipe" />} />
            <Route path="/" exact component={HomePage} />
          </Switch>
          <JumpToTop des="#nav-787639" hidden={this.state.navShow} />
        </React.Fragment>
      </HashRouter >
    )
  }
}

ReactDOM.render(<RR />, document.getElementById("container"))