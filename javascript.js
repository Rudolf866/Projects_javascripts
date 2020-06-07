function jump(){
    function date(){
        let time = document.getElementById('time');
        time.innerHTML= new Date().toTimeString();
    }
setInterval(date,1000);
}

