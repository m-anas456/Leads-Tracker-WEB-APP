const btn = document.querySelector("#input-btn")
const input = document.querySelector("#input-el")
let listitems = document.querySelector("#list-items")
let myLeads = []
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromlocalstorage)
if (leadsfromlocalstorage) {
    myLeads = leadsfromlocalstorage
    renderLeads(myLeads) 
}

let delbtn = document.querySelector("#del-btn")
delbtn.addEventListener("dblclick", () => {
    myLeads = []
    localStorage.clear()
    renderLeads(myLeads) 
})
btn.addEventListener("click", function () {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads) // Pass myLeads here
})

function renderLeads(leads) {
    let allinnerhtml = "" // Reset the variable to avoid duplication
    for (let i = 0; i < leads.length; i++) {
        allinnerhtml += `<li>
            <a href='${leads[i]}' target='_blank'> 
                ${leads[i]}  
             </a> 
         </li>`
    }
    listitems.innerHTML = allinnerhtml
}
