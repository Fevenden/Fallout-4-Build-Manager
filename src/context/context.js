import React from 'react'

const Context = React.createContext({
  active_user: {},
  users: [],
  builds: [],
  stats: [],
  perks: [],
  addBuild: () => {},
  setActiveUser: () => {},
  addUser: () => {},
  deleteBuild: () => {},
  deleteUser: () => {}
})

export default Context