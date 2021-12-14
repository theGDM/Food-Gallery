const icons = document.querySelectorAll(".section-1-icons i");
const menu = document.querySelector(".menu");
let i = 1;
setInterval(() => {
    ++i;
    const icon = document.querySelector(".section-1-icons .change");
    icon.classList.remove("change");
    if (i > icons.length) {
        i = 1;
        icons[0].classList.add("change");
    } else {
        icon.nextElementSibling.classList.add("change");
    }
}, 3000);

//the callback function will be executed when someone click the menu
menu.addEventListener("click", () => {
    const target = document.querySelectorAll(".target");
    // so we are going to add some new styles to both elements once we click
    //the icon and then get rid of those styles on the next click, fo that
    //we need to look through the nodelist, which is returned by the query 
    //selectorall method, and then we have to attach new element a new class
    //using toggle method.
    target.forEach((item) => {
        item.classList.toggle("change")
    })
    //classlist method gives us all the classes that the element has and also
    //it allows us to access different methods, in order to manipulate the 
    //classes of the element, in this case we need to use a toggle method 
    //which allows us to add class to the element if it doesn't have it,and
    //remove class if the element does have it.
})
