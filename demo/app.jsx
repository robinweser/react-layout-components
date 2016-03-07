import React from 'react'
import { render } from 'react-dom'
import Box, { ScrollView, Page } from '../lib/index'

const Example = () => (
<Box fit column>
    <Box center width="100%" flex="0 0 400px" justifyContent="space-between" style={styles.redBox}>
        400x400 (inclusive 30px padding)
        <Box width={200} justifyContent="flex-end">
          <Box style={styles.greenBox}>
            auto-size (+ 20px padding)
          </Box>
        </Box>
        <Box height={400} minWidth={100} style={styles.blueBox} onClick={() => {
    this.scrollTop()
  }}>
          400x min(100) (inclusive 10px padding)
        </Box>
      </Box>
      <ScrollView width="100%" flex={1} style={styles.scrollView} onScroll={(scrollPos) => {
    return false
    }}>
        {new Array(160).join().split(',').map((item, i) => <Box flexShrink={0} minHeight={40} style={styles.listItem}>Scroll Item {i}</Box>)}
      </ScrollView>
    </Box>
  )

  const styles = {
    redBox: {
      padding: 30,
      background: 'red'
    },
    greenBox: {
      padding: 20,
      background: 'green'
    },
    blueBox: {
      padding: 10,
      background: 'blue'
    },
    scrollView: {
      background: 'gray'
    },
    listItem: {
      borderBottom: '1px solid black'
    }
  }

  render(<Example />, document.body)
