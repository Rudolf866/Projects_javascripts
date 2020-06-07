function jump(){
    function date(){
        let time = document.getElementById('time');
        time.innerHTML= new Date().toTimeString();
    }
setInterval(date,1000);
}
function time(){
    function vrema(){
         let lan = document.getElementById('lang')
        lan.innerHTML = new Date(2011, 0, 1, 2, 3, 4, 567).toTimeString();
    }
    setInterval(vrema,1000);
}

