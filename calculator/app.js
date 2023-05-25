var vel = document.getElementById("inp");
function add(v){
    vel.value += v ;
    }
    function anser(){
        vel.value=eval(vel.value);
    }
    function clr(){
        vel.value ="";
    }
    function del(){
        vel.value=vel.value.slice(0,-1);
    }