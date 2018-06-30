import React from 'react'
import { Menu, Container, Visibility, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PT from 'prop-types'

import { navigationConfig } from '../config'

export class Navigation extends React.Component {

  static propTypes = {
    onVisibleChange: PT.func,
    id: PT.string
  }


  render() {
    return (
      <Menu
        id={this.props.id}
        fluid
        inverted
        borderless
        stackable
        style={{ margin: 0, borderRadius: 0, padding: '0.5em', fontSize: '1.2em', background: '#202a5b' }}>
        <Container>
          {navigationConfig.items.map((it) => {
            if (it.items)
              return (
                <Dropdown item text={it.name} key={it.name} basic>
                  <Dropdown.Menu>
                    {it.items.map((it) => <Menu.Item key={it.name} as={Link} to={it.link}>{it.name}</Menu.Item>)}
                  </Dropdown.Menu>
                </Dropdown>
              )
            return <Menu.Item key={it.name} as={Link} to={it.link}>{it.name}</Menu.Item>
          })
          }

          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/">首页</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>

    )
  }

}