import React from 'react'

const Context = React.createContext({
  builds: [],
  build: [],
  perks: [],
  setBuild: () => {},
  deleteBuild: () => {},
  clearBuild: () => {},
  setBuilds: () => {},
})

export default Context
