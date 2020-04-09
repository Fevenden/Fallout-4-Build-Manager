export default {
  users: [
    {
      id: 1,
      username: "McLovin",
      first_name: "Fogell",
      last_name: "Smith",
      email: "immclovinit@email.com",
      password: "superbad"
    },
    {
      id: 2,
      username: "Superman",
      first_name: "Clark",
      last_name: "Kent",
      email: "justanormaldude@email.com",
      password: "kryptonite"
    },
    {
      id: 3,
      username: "Actualy_A_Targaryn",
      first_name: "Jon",
      last_name: "Snow",
      email: "youknownothing@email.com",
      password: "ygritte"
    }
  ],
  
  builds: [
    {
      id: 1,
      user_id: 2,
      title: "Build 1",
      description: 'Maecenas mauris felis, efficitur nec justo quis, condimentum blandit quam. Nunc quis enim eget quam maximus pharetra non id tellus. Aliquam vel bibendum nisl, vel dapibus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      stats: [
        {
          title: "strength",
          value: 1 
        },
        {
          title: "perception",
          value: 1
        },
        {
          title: "endurance",
          value: 1
        },
        {
          title: "charisma",
          value: 1
        },
        {
          title: "intelligence",
          value: 1
        },
        {
          title: "agility",
          value: 1
        },
        {
          title: "luck",
          value: 1
        }
      ],
      perks: [
        {
          stat: 'strength',
          perks: []
        },
        {
          stat: 'perception',
          perks: []
        },
        {
          stat: 'endurance',
          perks: []
        },
        {
          stat: 'charisma',
          perks:[]
        },
        {
          stat: 'intelligence',
          perks: []
        },
        {
          stat: 'agility',
          perks:[]
        },
        {
            stat: 'luck',
            perks: []
        }
    ]
    },
    {
      id: 2,
      user_id: 3,
      title: "Build 2",
      description: 'Maecenas mauris felis, efficitur nec justo quis, condimentum blandit quam. Nunc quis enim eget quam maximus pharetra non id tellus. Aliquam vel bibendum nisl, vel dapibus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      stats: [
        {
          title: "strength",
          value: 2
        },
        {
          title: "perception",
          value: 2
        },
        {
          title: "endurance",
          value: 2
        },
        {
          title: "charisma",
          value: 2
        },
        {
          title: "intelligence",
          value: 2
        },
        {
          title: "agility",
          value: 2
        },
        {
          title: "luck",
          value: 2
        }
      ],
      perks: [
        {
          stat: 'strength',
          perks: []
        },
        {
          stat: 'perception',
          perks: []
        },
        {
          stat: 'endurance',
          perks: []
        },
        {
          stat: 'charisma',
          perks:[]
        },
        {
          stat: 'intelligence',
          perks: []
        },
        {
          stat: 'agility',
          perks:[]
        },
        {
          stat: 'luck',
          perks: []
        }
      ]
    },
    {
      id: 3,
      user_id: 1,
      title: "Build 3",
      description: 'Maecenas mauris felis, efficitur nec justo quis, condimentum blandit quam. Nunc quis enim eget quam maximus pharetra non id tellus. Aliquam vel bibendum nisl, vel dapibus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      stats: [
        {
          title: "strength",
          value: 3
        },
        {
          title: "perception",
          value: 3
        },
        {
          title: "endurance",
          value: 3
        },
        {
          title: "charisma",
          value: 3
        },
        {
          title: "intelligence",
          value: 3
        },
        {
          title: "agility",
          vlaue: 3
        },
        {
          title: "luck",
          value: 3
        }
      ],
      perks: [
        {
          stat: 'strength',
          perks: []
        },
        {
          stat: 'perception',
          perks: []
        },
        {
          stat: 'endurance',
          perks: []
        },
        {
          stat: 'charisma',
          perks:[]
        },
        {
          stat: 'intelligence',
          perks: []
        },
        {
          stat: 'agility',
          perks:[]
        },
        {
          stat: 'luck',
          perks: [{
                title: 'perk 1'
          }]
        }
      ]
    }
  ]
}