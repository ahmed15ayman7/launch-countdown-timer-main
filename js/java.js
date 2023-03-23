let social = document.querySelectorAll('.social svg');
social.forEach(e=>{
    e.addEventListener('mouseover',pr=>{
        e.children[0].setAttribute('fill','#fb6087');
        pr.preventDefault()
    })
    e.addEventListener('mouseout',pr=>{
        e.children[0].setAttribute('fill','#8385A9');
        pr.preventDefault()
    })
})
let num_time_rot = document.querySelectorAll('.num-time');
let num_time = document.querySelectorAll('.num-time h1');
setInterval(()=>{
    if (+num_time[3].textContent[1]==0&&+num_time[3].textContent[0]==0) {
        num_time_rot[2].style.cssText='transform: rotateX(360deg); transition: all 1s;'
        num_time[3].textContent=60;
        num_time[2].textContent=+num_time[2].textContent-1
    }
    if (+num_time[2].textContent[1]==0&&+num_time[2].textContent[0]==0) {
        num_time_rot[1].style.cssText='transform: rotateX(360deg); transition: all 1s;'
        num_time[2].textContent=60;
        num_time[1].textContent=+num_time[1].textContent-1
    }
    if (+num_time[1].textContent[1]==0&&+num_time[1].textContent[0]==0) {
        num_time_rot[0].style.cssText='transform: rotateX(360deg); transition: all 1s;'
        num_time[1].textContent=24;
        num_time[0].textContent=+num_time[0].textContent-1
    }
    if(+num_time[3].textContent<=10){
        num_time_rot[3].style.cssText='transform: rotateX(360deg); transition: all 1s;'
        
        num_time[3].textContent=`0${+num_time[3].textContent-1}`;
    }else{
        num_time_rot[3].style.cssText='transform: rotateX(360deg); transition: all 1s;'
        num_time[3].textContent=+num_time[3].textContent-1;

    }
    num_time[2].textContent=+num_time[2].textContent<10?`0${+num_time[2].textContent}`:+num_time[2].textContent;
    num_time[1].textContent=+num_time[1].textContent<10?`0${+num_time[1].textContent}`:+num_time[1].textContent;
    num_time[0].textContent=+num_time[0].textContent<10?`0${+num_time[0].textContent}`:+num_time[0].textContent;
    
},1000);



