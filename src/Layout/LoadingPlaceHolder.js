import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'
import extend from 'extend'

export const FullScreenLoadingPlaceHolder = (props) => {

  return (
    <Dimmer page active {...props} >
      <Loader active > Loading ...</Loader>
    </Dimmer>
  )
}

export const LoadingPlaceHolder = ({ style, ...others }) => {
  return (
    <Segment {...others} style={style} basic>
      <Dimmer active>
        <Loader active >Loading</Loader>
      </Dimmer>
    </Segment >
  )
}