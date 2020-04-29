import React from 'react'

const Context = React.createContext({
  builds: [],
  build: [],
  perks: [],
  error: null,
  setBuild: () => {},
  deleteBuild: () => {},
  clearBuild: () => {},
  setBuilds: () => {},
})

export default Context
