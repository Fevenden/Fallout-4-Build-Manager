import React from 'react'

const Context = React.createContext({
  user: [],
  builds: [],
  stats: [],
  perks: [],
  addBuild: () => {},
  addUser: () => {},
  deleteBuild: () => {},
  deleteUser: () => {}
})

export default Context