import React from 'react'

const Page = ({ style, children }) => (
  <div style={{ ...styles, ...style }}>
    {children}
  </div>
)

const styles = {
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'fixed'
}

export default Page