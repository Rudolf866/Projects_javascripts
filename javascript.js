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
function text(){
    let div = document.querySelector('div.div');
    let h2 = document.createElement("h2");
    let node = document.createTextNode('Hello Rudik!!!');
    h2.appendChild(node);
    div.appendChild(h2);

}

function update(){
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let node = document.createTextNode('New Text!!!');
    div.appendChild(h1);
    h1.appendChild(node);
    document.body.appendChild(div);
}
