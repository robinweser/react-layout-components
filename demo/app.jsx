import React from 'react'
import { render } from 'react-dom'
import Box, { ScrollView, Page, Container } from '../lib/index'

const Example = () => (
  <Box fit column>
    <Box center width="100%" flex="0 0 400px" justifyContent="space-between" style={styles.redBox}>
      <Container padding={30} style={styles.yellowBox}>
        400x400 (inclusive 30px padding)
      </Container>
      <Box width={200} justifyContent="flex-end">
        <Container padding={30} style={styles.greenBox}>
          auto-size (+ 10px padding)
        </Container>
      </Box>
      <Box height={400} minWidth={100} style={styles.blueBox}>
        400x min(100) (inclusive 10px padding)
      </Box>
    </Box>
    <ScrollView width="100%" flex={1} style={styles.scrollView}>
      {new Array(160).join().split(',').map((item, i) => (
         <Box flexShrink={0} minHeight={40} style={styles.listItem}>
           Scroll Item &nbsp;
           {i}
         </Box>
       ))}
    </ScrollView>
  </Box>
)

const styles = {
  redBox: {
    background: 'red'
  },
  yellowBox: {
    background: 'yellow'
  },
  greenBox: {
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
