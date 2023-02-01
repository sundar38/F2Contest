let allimages = document.getElementsByTagName("img")
let imagea = document.querySelector(".first")
let imageb = document.querySelector(".second")
let imagec = document.querySelector(".third")
let imaged = document.querySelector(".fourth")

let flaga = false
let flagb = false
let flagc = false
let flagd = false

// imagea.addEventListener("click", showform)
imagea.onclick = showform
// imageb.addEventListener("click", showuserdetails)
// imagec.addEventListener("click", showdice)





function showform() {
    var br = document.createElement("br")
    var form = document.createElement("form")
    var name = document.createElement("input")
    name.setAttribute("type", "text")
    name.setAttribute("id", "uname")
    name.setAttribute("placeholder", "Enter name")


    var email = document.createElement("input")
    email.setAttribute("type", "email")
    email.setAttribute("id", "uemail")
    email.setAttribute("placeholder", "enter email")

    var username = document.createElement("input")
    username.setAttribute("input", "text")
    username.setAttribute("id", "uname")
    username.setAttribute("placeholder", "enter username")

    let btn = document.createElement("input")
    btn.setAttribute("type", "submit")
    btn.setAttribute("value", "click")
    btn.setAttribute("id", "btn1")

    form.appendChild(name)
    form.appendChild(br.cloneNode());

    form.appendChild(email)
    form.appendChild(br.cloneNode());
    form.appendChild(username)
    form.appendChild(br.cloneNode());

    form.appendChild(btn)

    document.getElementById("formsection").appendChild(form)
    flaga = true
    console.log(flaga);

    imagea.onclick = ""
    btn.onclick = function (e) {
        e.preventDefault()
        // console.log(name.value, email.value, username.value);
        let obj = {
            user_name: name.value,
            user_email: email.value,
            user_username: username.value,
        }
        if (flaga == true) {
            console.log(" go to 2nd");
            imageb.onclick = function () {
                form.style.display = "none"
                flagb = true
                console.log("hi 2");
                let printvalue = document.getElementById("printvaluesection")

                let values0 = document.createElement("span")
                let values1 = document.createElement("span")
                let values2 = document.createElement("span")
                let values3 = document.createElement("span")
                // let values=document.getElementsByTagName("span")
                values0.innerHTML = "Person name is "
                values1.innerHTML = obj.user_name;
                var br = document.createElement("br")
                values2.innerHTML = "Person username is "
                values3.innerHTML = obj.user_username
                printvalue.appendChild(values0)
                printvalue.appendChild(values1)
                printvalue.appendChild(br.cloneNode());
                printvalue.appendChild(values2)
                printvalue.appendChild(values3)

                if (flaga == true && flagb == true) {
                    console.log("click 3");
                    imagec.onclick = function () {
                        printvalue.style.display = "none"
                        if (flaga == true) {
                            imageb.onclick = ""
                        }
                        console.log("2nd attempt");

                        let diceplace = document.querySelector("#dicesection")
                        let diceimage = document.createElement("img")
                        diceimage.setAttribute("src", "images/dice.jpg")
                        diceimage.setAttribute("id", "dicedisplay")
                        diceplace.appendChild(diceimage)
                        // diceplace.addEventListener("click", rolldice)
                        diceplace.onclick = rolldice
                    }
                    // printvalue.style.display="none"
                }
            }
        }
    }



}



// function showdice() {

//     // document.getElementById("dicedisplay").style["visibility"]="visible"
//     if (flaga == true) {
//         imageb.onclick = ""
//     }
//     console.log("2nd attempt");

//     let diceplace = document.querySelector("#dicesection")
//     let diceimage = document.createElement("img")
//     diceimage.setAttribute("src", "images/dice.jpg")
//     diceimage.setAttribute("id", "dicedisplay")
//     diceplace.appendChild(diceimage)
//     // diceplace.addEventListener("click", rolldice)
//     diceplace.onclick = rolldice
// }
let textdisplay = document.getElementById("displaytext")
let noofrolls = 0
let score = 0
let noofattempts = 0
let scoretodisplay = document.getElementById("displayscore")
function rolldice() {

    //document.getElementById("dicedisplay").style["visibility"]="visible"
    noofrolls++
    console.log(noofrolls);
    let randomnumber = Math.floor(Math.random() * 6)
    console.log("random number is ", randomnumber);
    score += randomnumber
    console.log("Score is ", score);
    scoretodisplay.innerHTML = "Score is " + score

    if (noofrolls == 3 && score > 10) {
        console.log("success");
        // imaged.addEventListener("click",generaterandomnumber)
        imaged.onclick = function () {
            imaged.onclick = ""
            let finaltext = document.getElementById("lastsection")
            // console.log("clicked image");
            let token = crypto.randomUUID()
            let randomtext = token.substring(0, 12)
            console.log(randomtext);
            let finalimage = document.createElement("img")
            finalimage.setAttribute("src", "./images/congratulations.jpg")
            finaltext.appendChild(finalimage)
        }
        allimages[2].click = null
    }
    if (noofrolls == 3 && score <= 10) {
        noofattempts++
        if (noofattempts == 2) {
            textdisplay.innerHTML = "Bad Luck"
            document.getElementById("dicedisplay").onclick = ""
        }
        if (noofattempts < 2) {
            console.log(noofattempts);
            scoretodisplay.innerHTML = "Score is " + score
            //document.getElementById("dicedisplay").style["visibility"] = "hidden"
            prompt("Try again after scoring more than 10")
            noofrolls = 0
            score = 0
            // imagec.onclick = showdice
            // document.getElementById("dicesection").classList.remove(showdice)
        }
    }
}

function generaterandomnumber() {
    imaged.onclick = ""
    let finaltext = document.getElementById("lastsection")
    let coupondisplay=document.getElementById("coupon")
    // console.log("clicked image");
    let token = crypto.randomUUID()
    let randomtext = token.substring(0, 12)
    console.log("Randomtext is",randomtext);
    coupondisplay.innerHTML="Coupon is "+randomtext
    let finalimage = document.createElement("img")
    finalimage.setAttribute("src", "./images/congratulations.jpg")
    finaltext.appendChild(finalimage)
}
