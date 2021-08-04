import React from 'react'
import ContentLoader from 'react-content-loader'

const Youtube = props => (
  <ContentLoader viewBox="0 0 834 300" height={300} width={834}
  
  backgroundColor="hsl(0, 0%, 93.3%)"
  foregroundColor="#ecebeb"
  speed="2"

  {...props}>

    <rect x="0" y="20" rx="0" ry="0" width="400" height="20" /> 
    <rect x="0" y="50" rx="0" ry="0" width="220" height="20" /> 
    <circle cx="810" cy="65" r="12" /> 
    <circle cx="760" cy="65" r="12" /> 
    <circle cx="710" cy="65" r="12" /> 
    <circle cx="660" cy="65" r="12" /> 
    <circle cx="610" cy="65" r="12" />

  </ContentLoader>
)

export default Youtube;