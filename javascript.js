function show(){
    alert('You push my button!!!!!');
    // var popup = window.open('http://vk.com', 'vkontakte', 'width=400, height=400, resizable=yes');
}

//  let timer=setTimeout(jump,3000);
// clearTimeout(timerId);
// setInterval(jump(),3000)
function date(){
    let button = document.getElementsByTagName('button');
    let time = document.getElementById('time');
    time.innerHTML= new Date().toTimeString();

}
setInterval(date,1000);
function jump(){
    let time = new Date().toTimeString();
   document.write(time);
}
