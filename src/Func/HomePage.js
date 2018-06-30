import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Card
} from 'semantic-ui-react'
import jump from 'jump.js'
import Link from 'react-router-dom/Link'

import { loadBMap, loadMapV } from '../lib/BmapHelper'
import { navigationConfig } from '../config'


/********************************************
 * Card
 */
const FuncCard = ({ src, link, text, ...others }) => {
  return (
    <Grid.Column width={4}>
      <div  {...others} style={{ margin: '1em 0', background: 'rgba(0,0,0,0.1)', padding: '2em' }}>
        <Image src={src} size="tiny" centered />
        <Header as={Link} style={{ display: 'block' }} to={link} inverted>{text}</Header>
      </div>
    </Grid.Column>
  )
}


/********************************************
 *  Main Component
 */
export class HomePage extends React.Component {

  state = {}

  loadBMap = async () => {
    let bmap = await loadBMap('h31gPawGznx5GxO3BRzQBld7eFktCfrw')
    console.log(bmap)
    // loadMapV()
  }

  componentDidMount() {
    this.loadBMap()
  }

  render() {
    const { visible } = this.state

    return (
      <div style={{ height: '100%' }}>
        <Segment
          // inverted
          textAlign='center'
          // color="teal"
          style={{ minHeight: '100%', padding: '1em 0em', background: 'linear-gradient(#202a5b,#0c6488)' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='华理申能大数据平台'
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2.5em' }}
            />
            <Header
              as='h2'
              content='ecust.edu.cn | shenergy.com.cn'
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
          </Container>
          <Container id="main-78789" style={{ padding: '0em', marginTop: '5em' }}>
            <Grid columns='4' stackable>
              <Grid.Row>
                {navigationConfig.items.map((it, idx) => <FuncCard key={idx} src={it.pic} text={it.name} link={it.link} />)}
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

