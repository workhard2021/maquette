
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
    const image=document.querySelectorAll(".image");
    
   
    a.forEach((value,index)=>{
        value.addEventListener("click",()=>{
            if(value.checked){

                ul.forEach(v=>{
                    v.style.opacity=0;
                })

                ul[index].style.opacity=1;
                image.forEach(val=>{
                    val.style.width="100%";
                    val.style.height="100%";
                    val.style.top="0px";
                    val.style.left="0px";
                    val.style.transform="initial";
               });
               image[index].style.width=`${150}%`;
               image[index].style.height=`${150}%`;
               image[index].style.top=`${50}%`;
               image[index].style.left=`${50}`;
               image[index].style.transform="translate(-0%,-50%)";
               image[index].style.transition="all 0.5s";
            }
        });

    })
    
  
})


