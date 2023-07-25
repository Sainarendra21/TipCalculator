
const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeoplediv = document.getElementById('numberOfPeople')
const perPersonTotaldiv = document.getElementById('perPersonTotal')
// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeoplediv.innerText)
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billTotalInput.value)
  // get the tip from user & convert it into a percentage (divide by 100)

  const tip = Number(tipInput.value) / 100
  // get the total tip amount

  const tipAmount = bill * tip
  // calculate the total (tip amount + bill)

  const total = tipAmount + bill


  // calculate the per person total (total divided by number of people)

  const perPersonTotal = total / numberOfPeople

  // update the perPersonTotal on DOM & show it to user
  perPersonTotaldiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1


  // update the DOM with the new number of people
  numberOfPeoplediv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  if (numberOfPeople <= 1) {
    alert("heeey!!!you cannot have less than One person")
    return
  }
  // decrement the amount of people

  numberOfPeople -= 1
  // update the DOM with the new number of people
  numberOfPeoplediv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}