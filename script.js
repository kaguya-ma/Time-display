function clock() {
  let date = new Date()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  document.querySelector("#clock").innerHTML=`${hour}:${minutes}:${seconds}`
  
}

let time = setInterval(clock,1000)
