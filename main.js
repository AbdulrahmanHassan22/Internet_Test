var title = document.querySelector('.title')
var ul = document.querySelector('ul')
var reload = document.querySelector('.reload')

window.onload = function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline() 
    }
        
}
window.addEventListener("online", function(){
    online()
})
window.addEventListener("offline", function(){
    offline()
});

reload.onclick = function(){
   window.location.reload();
}

function online(){
   title.innerHTML = 'Online Now';
   title.style.color = 'red';
   ul.classList.add('hide');
   reload.classList.add('hide');
} 

function offline(){
   title.innerHTML = 'Offline Now' ;
   title.style.color = '#46, 46, 99, 0.734';
   ul.classList.remove('hide');
   reload.classList.remove('hide');
} 