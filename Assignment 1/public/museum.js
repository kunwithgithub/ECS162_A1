const img_list = [
    {
        src:"./../assets/fabric.jpg",
        subtitle:"",
        alt:"fabric"
    },
    {
        src:"./../assets/fatherPortrait.jpg",
        subtitle:"",
        alt:"fatherPortrait"
    },
    {
        src:"./../assets/openAfterDeath.jpg",
        subtitle:"",
        alt:"openAfterDeath"
    },
    {
        src:"./../assets/roomCube.jpg",
        subtitle:"",
        alt:"roomCube"
    }

];

let curr_index = 0;

const set_carousel_img = (index)=>{
    document.getElementById("sk_carousel").style.backgroundImage = "url('"+img_list[index].src+"')";
}

const carousel_prev_img = ()=>{
    if(curr_index > 0){
        curr_index -= 1;
    }else{
        curr_index = img_list.length-1;
    }
    set_carousel_img(curr_index);
}

const carousel_next_img = ()=>{
    if(curr_index < img_list.length-1){
        curr_index += 1;
    }else{
        curr_index = 0;
    }
    set_carousel_img(curr_index);

}

const decrementer = ()=>{
    const decrementer = document.getElementById("sk_decrementer_header");
    number = decrementer.innerText;
    number = number.replace(/,/g,"");
    number -=1;
    decrementer.innerText=number.toLocaleString();
}

const init = ()=>{

    curr_index = 0;

    const prev_img_button = document.getElementById("prev_img");
    prev_img_button.addEventListener('click',carousel_prev_img);
    
    const next_img_button = document.getElementById("next_img");
    next_img_button.addEventListener('click',carousel_next_img); 

    const carousel_control_panel = document.getElementById("sk_carousel_control_panel");
    img_list.map((curr_val,index)=>{
        carousel_control_panel.innerHTML+="<div class=\"sk_carousel_control_panel_item\" id=\"sk_carousel_control_panel_item_"+index.toString()+"\" onclick=\"set_carousel_img("+index.toString()+")\"></div>";
        
    })
    setInterval(decrementer,1000);
}


init();