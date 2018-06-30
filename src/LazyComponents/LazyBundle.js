import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'


import { FullScreenLoadingPlaceHolder } from '../Layout/LoadingPlaceHolder'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider'


// export class LazyLoader extends React.Component {

//   state = { succeed: false }

//   loadComponent = async (props) => null

//   renderComponent = (Comp, props) => <Comp {...props} />

//   load = async (props) => {
//     this.setState({ succeed: false })
//     let Comp = await this.loadComponent(props)
//     ReactDOM.render(this.renderComponent(Comp, props), this.container)
//     this.setState({ succeed: true })
//   }

//   componentDidMount() {
//     this.load(this.props)
//   }

//   componentWillUnmount() {
//     ReactDOM.unmountComponentAtNode(this.container)
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps != this.props) this.load(nextProps)
//   }

//   handleRef = (ref) => {
//     this.container = ref
//   }

//   render() {
//     const { succeed } = this.state
//     return (
//       <div style={{ height: '100%' }} ref={this.handleRef}>
//         {!succeed && <FullScreenLoadingPlaceHolder />}
//       </div>
//     )
//   }

// }

// export class LazyBundleGXW extends LazyLoader {
//   loadComponent = async (props) => {
//     let obj = await import(
//       /* webpackChunkName:"voice" */
//       /* webpackMode:"lazy" */
//       '../../bundles/gxw'
//     )
//     return obj[props.componentName]
//   }

//   renderComponent = (Comp, props) => (
//     <div>
//       <Divider hidden />
//       <Comp />
//     </div>
//   )
// }

// export class LazyBundleZX extends LazyLoader {
//   loadComponent = async (props) => {
//     let obj = await import(
//       /* webpackChunkName:"zx" */
//       /* webpackMode:"lazy" */
//       '../../bundles/zx'
//     )
//     return obj[props.componentName]
//   }

//   renderComponent = (Comp, props) => (
//     <div>
//       <Divider hidden />
//       <Comp />
//     </div>
//   )
// }

// export class LazyBundlePipe extends LazyLoader {
//   loadComponent = async (props) => {
//     let obj = await import(
//       /* webpackChunkName:"zx" */
//       /* webpackMode:"lazy" */
//       '../../bundles/zx-pipe'
//     )
//     return obj[props.componentName]
//   }

//   renderComponent = (Comp, props) => (
//     <React.Fragment>
//       <Divider hidden />
//       <Comp />
//     </React.Fragment>
//   )
// }


// export class LazyBundleDXY extends LazyLoader {
//   loadComponent = async (props) => {
//     let obj = await import(
//       /* webpackChunkName:"dxy" */
//       /* webpackMode:"lazy" */
//       '../../bundles/dxy'
//     )
//     return obj[props.componentName]
//   }

//   renderComponent = (Comp, props) => (
//     <div>
//       <Divider hidden />
//       <Comp />
//     </div>
//   )
// }

// export class LazyBundleYK extends LazyLoader {
//   loadComponent = async (props) => {
//     let obj = await import(
//       /* webpackChunkName:"yk" */
//       /* webpackMode:"lazy" */
//       '../../bundles/yk'
//     )
//     return obj[props.componentName]
//   }

//   renderComponent = (Comp, props) => (
//     <div>
//       <Divider hidden />
//       <Comp />
//     </div>
//   )
// }


const createLazyLoadComponent = (loader) =>
  Loadable({
    loader: loader,
    loading: () => <FullScreenLoadingPlaceHolder />,
    render(loaded, props) {
      const { componentName, ...others } = props
      let Comp = loaded[componentName]
      return (
        <React.Fragment>
          <Divider hidden />
          <Comp {...others} />
        </React.Fragment>
      )
    }
  })


export const LazyBundleGXW = createLazyLoadComponent(() => import(
  /* webpackChunkName:"voice" */
  /* webpackMode:"lazy" */
  '../../bundles/gxw'
))

export const LazyBundleDXY = createLazyLoadComponent(() => import(
  /* webpackChunkName:"dxy" */
  /* webpackMode:"lazy" */
  '../../bundles/dxy'
))

export const LazyBundleZX = createLazyLoadComponent(() => import(
  /* webpackChunkName:"zx" */
  /* webpackMode:"lazy" */
  '../../bundles/zx'
))

export const LazyBundleYK = createLazyLoadComponent(() => import(
  /* webpackChunkName:"yk" */
  /* webpackMode:"lazy" */
  '../../bundles/yk'
))
