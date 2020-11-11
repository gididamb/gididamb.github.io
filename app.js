function hoverListener(event, img){
    var target = document.getElementsByClassName("open")[0];

    target.addEventListener(event, function(){
        target.children[0].src = img;
    })
}
hoverListener("mouseover", "icons/hoverChange.png")
hoverListener("mouseout", "icons/open.png")


function addClass(){
    let elem = document.getElementsByTagName("a");

    for(let i = 0; i < elem.length; i++){
        let elemloc = "/" + elem[i].getAttribute("href");
        if(location.pathname == elemloc){
            elem[i].className = "active";
        }
        else{
            elem[i].className = "";
        }
    }
}
addClass();

let open = document.getElementsByClassName("open")[0].children[0];
let close = document.getElementsByClassName("close")[0].children[0];

let links = document.getElementsByClassName("links")[0];

$('document').ready(() => {
    $('.open').click(() => {
        $('.links').toggle()
        $('.links').css('display', 'grid')
        $('.open').hide()
        $('.close').show()
    })
    $('.close').click(() => {
        $('.links').toggle()
        $('.logo').show()
        $('.open').show()
        $('.close').hide()
    })
 })