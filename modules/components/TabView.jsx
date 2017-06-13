import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

/**
 * Scrollable Container
 */
export default class TabView extends PureComponent {
  static defaultProps = { selectedTab: 0 }
  static propTypes = {
    selectedTab: PropTypes.number,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      view: PropTypes.any,
      tab: PropTypes.any
    }))
  }

  constructor(props) {
    super(...arguments)
    this.state = { selectedTab: props.selectedTab }
  }

  selectTab = (tabIndex) => {
    this.setState({ selectedTab: tabIndex })
  }

  getSelectedTabIndex = () => this.state.selectedTab
  getSelectedTabView = () => this.props.tabs[this.state.selectedTab].view
  getSelectedTab = () => this.props.tabs[this.state.selectedTab]
  getTab = (tabIndex) => this.props.tabs[tabIndex]
  getTabView = (tabIndex) => this.props.tabs[tabIndex].view

  render() {
    const props = this.props

    const selectedView = props.tabs.map((tab, index) => {
      if (index === this.state.selectedTab) {
        return <Box width="100%">
                 {tab.view}
               </Box>
      }
    })

    const items = props.tabs.map((tab, index) => <Box center flex={1} onClick={() => {
                                this.selectTab(index)
                              }}>
                                                   {tab.tab}
                                                 </Box>)

    return (
      <Box {...props} flex={1} fit column>
        <Box fit>
          {selectedView}
        </Box>
        <Box flex="0 0 auto">
          {items}
        </Box>
      </Box>
    )
  }
}
