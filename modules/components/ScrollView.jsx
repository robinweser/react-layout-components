import React, { PureComponent, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import omit from '../utils/omit'
import Box from './Box'

const scrollViewProps = [ 'horizontal', 'initialScrollPos' ]

/**
 * Scrollable Container
 */
export default class ScrollView extends PureComponent {
  static defaultProps = { horizontal: false, initialScrollPos: 0 }
  static propTypes = {
    width: PropTypes.any,
    height: PropTypes.any,
    horizontal: PropTypes.bool,
    initialScrollPos: PropTypes.number
  }

  constructor(props, context) {
    super(props, context)
    this.state = { scrollPos: props.initialScrollPos }
  }

  _onScroll = event => {
    const scrollPos = this.props.horizontal ? event.currentTarget.scrollLeft : event.currentTarget.scrollTop

    // fire a custom onScroll if provided
    if (this.props.onScroll) {
      this.props.onScroll(scrollPos)
    }

    this.setState({ scrollPos: scrollPos })
  }

  scrollToStart = () => {
    this.setState({ scrollPos: 'start' })
  }

  scrollToEnd = () => {
    this.setState({ scrollPos: 'end' })
  }

  getScrollPosition = () => this.state.scrollPos

  scrollTo = (scrollPosition) => {
    this.setState({ scrollPos: scrollPosition })
  }

  componentWillUpdate = () => {
    if (this.state.scrollPos === 'end') {
      const DOMNode = findDOMNode(this)

      if (this.props.horizontal) {
        DOMNode.scrollLeft = DOMNode.scrollWidth - DOMNode.offsetWidth
        this.setState({ scrollPos: DOMNode.scrollLeft })
      } else {
        DOMNode.scrollTop = DOMNode.scrollHeight - DOMNode.offsetHeight
        this.setState({ scrollPos: DOMNode.scrollTop })
      }
    } else if (this.state.scrollPos === 'start') {
      const DOMNode = findDOMNode(this)

      if (this.props.horizontal) {
        DOMNode.scrollLeft = 0
      } else {
        DOMNode.scrollTop = 0
      }

      this.setState({ scrollPos: 0 })
    }
  }

  render() {
    const props = this.props

    const styles = {
      overflowY: props.horizontal ? 'hidden' : 'auto',
      overflowX: props.horizontal ? 'auto' : 'hidden'
    }

    const childProps = omit(props, scrollViewProps)

    return <Box {...childProps} column={!props.horizontal} style={{ ...styles, ...props.style }} onScroll={this._onScroll} />
  }
}
