let book = document.querySelectorAll(".book")
book[0].before(book[1])
book[2].before(book[4])
book[4].before(book[2])
book[5].after(book[2])

let body = document.querySelectorAll("body")
    body[0].style.backgroundImage = "url('image/you-dont-know-js.jpg')";

let name = document.querySelectorAll(".book > h2 > a")
for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}
name[2].innerHTML = "Книга 3. this и Прототипы Объектов"

let remove = document.querySelector(".adv");
remove.remove();

let list = document.querySelectorAll(".book > ul > li")

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}
list[10].before(list[12])
list[10].before(list[14])
list[38].before(list[45])
list[38].before(list[39])
list[39].after(list[40])
list[44].before(list[41])

let cloneElem = list[53].cloneNode(true)
cloneElem.textContent = "Глава 8: За пределами ES6"
list[55].append(cloneElem)
