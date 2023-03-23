function getToday() {
  return new Date()
}

function isWeekend(date) {
  return (date.getDay() === 0 || date.getDay() === 6)
}

function getMonthName(date) {
  const options = { month: "long" }
  return(new Intl.DateTimeFormat("en-US", options).format(date))

}
