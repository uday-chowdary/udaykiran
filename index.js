

let myLeads = []
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()

})

function renderLeads(){
 let listIteam = ""
 for(let i = 0; i < myLeads.length; i++) {
  listIteam += "<li><a traget = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a><li>"
 // const li = document.createElement("li")
 // li.textContent = myLeads[i]
  //ulEl.append(li)
 // listIteam += 
  //<li>
    //<a traget='_blank' href='${myLeads[i]}'>
      //${myLeads[i]}
    //</a>
  //</li>
  }
 ulEl.innerHTML = listIteam

}