function clock() {
  let date = new Date()
  let hour = `${date.getHours()}`.padStart(2, '0')
  let minutes = `${date.getMinutes()}`.padStart(2, '0')
  let seconds = `${date.getSeconds()}`.padStart(2, '0')
  document.querySelector("#clock").innerHTML=`${hour}:${minutes}:${seconds}`
  
}

let time = setInterval(clock,1000)
