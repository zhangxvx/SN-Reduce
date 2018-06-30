import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import jump from 'jump.js'
import PT from 'prop-types'

const fixedButtonStyle = {
  position: 'fixed',
  right: '1em',
  bottom: '1em',
  transition: 'right 0.5s ease-in',
}

const hiddenFixedButtonStyle = {
  position: 'fixed',
  right: '-3em',
  bottom: '1em',
  transition: 'right 0.5s ease-out',
}

export class JumpToTop extends React.Component {


  static propTypes = {
    des: PT.string.isRequired,
    hidden: PT.bool
  }

  handleClick = async () => {
    const { des } = this.props
    jump(des, {
      duration: 500
    })
  }

  render() {
    const { des, hidden, ...others } = this.props
    return (
      <Button
        circular
        icon="angle double up"
        style={hidden ? hiddenFixedButtonStyle : fixedButtonStyle}
        onClick={this.handleClick}
        {...others} />
    )
  }
}