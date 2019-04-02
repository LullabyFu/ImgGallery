function showPic(whichpic)
{
    var source=whichpic.getAttribute("href");
    var palceholder = document.getElementById("placeholder");
    palceholder.setAttribute("src",source);
    alert('hello');
}

function countBabyChildren(){
    var body_elemet=document.getElementsByTagName("body")[0];
    //alert(body_elemet.childNodes.length);
    alert(body_elemet.nodeType);
}

window.onload = countBabyChildren;