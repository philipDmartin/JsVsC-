function main () {
  // Put your code here
  console.log('My Enemies List!')
  console.log('----------------')

  const enemiesCollection = [
    {
      firstName: 'Joshua',
      lastName: 'Flowers',
      offenses: [
        'Being a jerk to me in elementary school',
        'Not being nice to me in elementary school'
      ],
      isReallyHated: true
    },
    {
      firstName: 'Darth',
      lastName: 'Vader',
      offenses: [
        "Cut off Luke's hand",
        'Murdered all those kids',
        'Unkind management practices'
      ],
      isReallyHated: false
    },
    {
      firstName: 'Betty',
      lastName: 'Rudelady',
      offenses: [
        'Phone calls in the theater',
        'Phone calls on the bus',
        'Phone calls in line at the grocery store',
        'Poor conversationalist'
      ],
      isReallyHated: true
    },
    {
      firstName: 'Leon',
      lastName: 'Peck',
      offenses: ['Keeps giving me a hotplate'],
      isReallyHated: false
    }
  ]

  const getEnemies = () => {
    return enemiesCollection
  }

  const enemies = getEnemies()

  for (let enemy of enemies) {
    if (enemy.isReallyHated) {
      console.log(
        `${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`
      )
    } else {
      console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
  }

  return enemies

  // const Enemy = (firstName, lastName, isReallyHated, offenses) => {
  //   return {
  //     firstName: firstName,
  //     lastName: lastName,
  //     isReallyHated: isReallyHated,
  //     offenses: offenses
  //   }
  // }
}

main()
