//FIREBASE DB SETUP 🔥
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js"
import { getDatabase ,
    ref,
    push,
    onValue,
    remove} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js"

 const firebaseConfig = {
    databaseURL : "https://leads-tracker-9fac5-default-rtdb.asia-southeast1.firebasedatabase.app/"
 }

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceinDB = ref(database, "leads")

onValue(referenceinDB,function(snapshot){ //onvalue a func used to show all changes on DB
    const snapshotExists = snapshot.exists() 
    if(snapshotExists){
        const snapshotValues = snapshot.val() //getting snapshot values only
        let leadsArray = Object.values(snapshotValues) //converting object into array of values of object
        console.log()
        renderLeads(leadsArray)
    }
})

//APP SETUP👏
const inputbtn = document.querySelector("#input-btn")
const input = document.querySelector("#input-el")
let listitems = document.querySelector("#list-items")

inputbtn.addEventListener("click", function () {
    push(referenceinDB,input.value)
    input.value = "" 
})

let delbtn = document.querySelector("#del-btn")
delbtn.addEventListener("dblclick", () => {
   remove(referenceinDB)
   listitems.innerHTML = ""
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