import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import warn from '../utils/warn'
import Box from './Box'

/**
 * Scrollable Container
 */
export default class ScrollView extends Component {
  static defaultProps = {
    horizontal: false,
    initialScrollPos: 0
  }
  static propTypes = {
    width: PropTypes.any.isRequired,
    height: PropTypes.any.isRequired,
    horizontal: PropTypes.bool,
    initialScrollPos: PropTypes.number
  }

  constructor(props) {
    super(...arguments)
    this.state = {scrollPos: props.initialScrollPos}
  }

  _onScroll = (event) => {
    const scrollPos = this.props.horizontal ? event.currentTarget.scrollLeft : event.currentTarget.scrollTop

    this.setState({scrollPos: scrollPos})

    // fire a custom onScroll if provided
    if (this.props.onScroll) {
      this.props.onScroll(scrollPos)
    }
  }

  scrollToStart = () => {
    this.setState({scrollPos: 'start'})
  }

  scrollToEnd = () => {
    this.setState({scrollPos: 'end'})
  }

  getScrollPosition = () => this.state.scrollPos

  scrollTo = (scrollPosition) => {
    this.setState({scrollPos: scrollPosition})
  }

  componentWillUpdate = () => {
    if (this.state.scrollPos === 'end') {
      const DOMNode = findDOMNode(this)

      if (this.props.horizontal) {
        DOMNode.scrollLeft = DOMNode.scrollWidth - DOMNode.clientWidth
        this.setState({scrollPos: DOMNode.scrollLeft})
      } else {
        DOMNode.scrollTop = DOMNode.scrollHeight - DOMNode.clientHeight
        this.setState({scrollPos: DOMNode.scrollTop})
      }
    } else if (this.state.scrollPos === 'start') {
      const DOMNode = findDOMNode(this)

      if (this.props.horizontal) {
        DOMNode.scrollLeft = 0
      } else {
        DOMNode.scrollTop = 0
      }

      this.setState({scrollPos: 0})
    }
  }

  render() {
    const props = this.props

    const styles = {
      overflowY: props.horizontal ? 'hidden' : 'auto',
      overflowX: props.horizontal ? 'auto' : 'hidden'
    }
    return <Box {...props} column={!props.horizontal} style={{...styles, ...props.style}} onScroll={this._onScroll} />
  }
}
