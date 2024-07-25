const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const body = document.querySelector('body')

const randomcolor = function(){
    const hex = '0123456789ABCEDF'
    let random = '#'
    for(i = 0; i < 6;i++){
      random +=  hex[Math.floor(Math.random() * 16)]
    }
    return random;
}

let Interval;
function startBgChange(){
    Interval = setInterval(()=>{
        body.style.backgroundColor = randomcolor()
       }, 1000)
}

start.addEventListener('click', () => {
   startBgChange()
})


stop.addEventListener('click', () =>{
    clearInterval(Interval)
})