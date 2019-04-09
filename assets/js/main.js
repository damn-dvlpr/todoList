var x=0;
itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray)); //to set array as string

const data = JSON.parse(localStorage.getItem('items'));  //to get back our array

// function to append li

function liMaker (text){
    const li = document.createElement('li')
    li.textContent = text
    $("ul").append("<li>" + text + "</li>");
    // ul.appendChild(li)
}

//to remake our todo at opening 
function start(){
    data.forEach(item => {
        liMaker(item)
    });
}
start();

//to add todo from input text

$("input").on("keypress", function (event) {
    var t = $(this).val();
    if (event.which === 13 && $("input").val() != "") {
        itemsArray.push(t);                             //pushing values to array for local storage
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(t);
        $("input").val("");
    }
});

//to toggle grey and line through effect

$("ul").on("click", "li", function (e) {
    $(this).toggleClass("done");
    e.stopPropagation();
});

//to slideup animate and remove that particular todo {currently unavailable}

// $("ul").on("click", "span", function (event) {
//     $(this).parent().slideUp(300, function () {
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

// for edit button

$("h1 i").click(function(e){
    if(x==1){
        $("input").css("display","block");
        x=0;
    }
    else{
        $("input").css("display","none");
        x=1;
    }
    e.stopPropagation();
});

// for trash button

$(".fa-trash-alt").click(function(){
    localStorage.clear();
    $("li").fadeOut();
});
