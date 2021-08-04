import React from 'react'
import ContentLoader from 'react-content-loader'

const Videosk = props => (
  <ContentLoader viewBox="0 0 834 480" height={480} width={834}
  
  backgroundColor="hsl(0, 0%, 93.3%)"
  foregroundColor="#ecebeb"
  speed="2"

  {...props}>

<rect x="0" y="0" rx="0" ry="0" width="834" height="480" />

  </ContentLoader>
)

export default Videosk;