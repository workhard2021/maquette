
window.addEventListener("scroll",()=>{
    const scrollable=document.documentElement.scrollHeight - window.innerHeight;
    const  scroled=window.scrollY;
    const  service =document.getElementById("services");
    const  item=document.querySelectorAll(".item");
    const  item_p=document.querySelectorAll(".item p");
      
    if(Math.ceil(scrollable-service.offsetTop)<=scroled){ 
            for(let i=0;i<item.length;i++){
                 item[i].style.left="0%";
            }
            for(let i=0;i<item_p.length;i++){
                item_p[i].style.opacity="1";
            }
    }
    if(scroled<scrollable-service.offsetTop){
        for(let i=0;i<item.length;i++){
            item[i].style.left="-130%";
       }
       for(let i=0;i<item_p.length;i++){
            item_p[i].style.opacity="0";
       }
    }
});

// checke

window.addEventListener("load",()=>{

    const a=document.querySelectorAll(".select");
    const ul=document.querySelectorAll(".exp_child");
    
   
    a.forEach((value,index)=>{
        value.addEventListener("click",()=>{
            if(value.checked){
                ul.forEach(v=>{
                    v.style.opacity=0;
                })
                ul[index].style.opacity=1;
            }
        });
    })
    
  
})



