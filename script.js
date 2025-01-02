let submit=document.getElementById("submit")
let tbody=document.getElementById("tbody")
let count= 1;
table.appendChild(tbody)

submit.addEventListener(
    "click",()=>{
        let username = document.getElementById("input")
        let bikeno = document.getElementById("bikeno")
        let checkin = document.getElementById("checkin")
        let checkout = document.getElementById("checkout")
        let trow = document.createElement("tr")

        if (!username.value || !bikeno.value || !checkin.value || !checkout.value){
            alert("Please fill in all fields!")
            return;
        }

        tbody.appendChild(trow)

        for( let j=1;j<=6;j++){
            let td = document.createElement("td")
            td.style.padding ="5px"
            td.style.border="1px solid gray"
            td.style.borderRadius ="5px"
            trow.appendChild(td)

            if(j==1){
                td.textContent = count++
            }else if(j==2){
                td.textContent = username.value
            }else if(j==3){
                td.textContent = bikeno.value
            }else if(j==4){
                td.textContent = checkin.value
            }else if(j==5){
                td.textContent = checkout.value
            }else if(j==6){
                let del = document.createElement("button")
                del.textContent = "Remove"
                del.style.backgroundColor ="red"
                del.style.color = "white"
                del.style.border ="none"
                del.style.borderRadius ="3px"
                del.style.padding ="5px"
                del.style.cursor = "pointer";
                td.appendChild(del)
                del.setAttribute("id","delete1")

                del.addEventListener("click",
                    ()=>{
                       trow.remove();
                       count--;
                    });
            }
        }

        username.value = " ";
        bikeno.value = " ";
        checkin.value = " ";
        checkout.value = " ";
    });