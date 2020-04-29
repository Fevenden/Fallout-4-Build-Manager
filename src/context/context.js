import React from 'react'

const Context = React.createContext({
  builds: [],
  build: [],
  perks: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setBuild: () => {},
  deleteBuild: () => {},
  clearBuild: () => {},
  setBuilds: () => {},
})

export default Context
