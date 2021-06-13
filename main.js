 name_of_guest_array=[];

function submit() {
var display_name_of_guest_array=[];

 var name=document.getElementById("name_of_the_guest").value;
name_of_guest_array.push(name);
console.log(name_of_guest_array);
document.getElementById("display_name_of_guest").innerHTML=name_of_guest_array;
}


function show() {
    document.getElementById("display_name_of_guest_1").innerHTML=name_of_guest_array;

}
function search() {
    var s=document.getElementById("search_the_name_of_guest").value;
    console.log(s);
    var found=0;
    var i;
    for (i=0; i<name_of_guest_array.length; i++)
    {
        if (s==name_of_guest_array[i])
        {found=found+1;}

    }
document.getElementById("display_name_of_guest_2").innerHTML="Name found at "+found+" time";
        
    
}






