let ul=(n)=>document.getElementById("loading").innerText=n

ul("Loading modules.")

import { Items, Currencies, Values, UI, TestModule } from './stdmodule.js';

ul("Loading storage.")

Currencies.add("points",0)
Currencies.add("clickanium",0)
Currencies.add("superPoints",0)
Currencies.add("electrium",0)

Values.add("autoclickers",0)
Values.add("autoclickerPrice",15)
Values.add("priceMultiplier",1.25)
Values.add("pointsPerSecond",0)
Values.add("pointsPerClick",1)



Currencies.load()
Values.load()

ul("Loading page.")

const updatePoints=()=>{
  Currencies.currencyDisplayers.update("./sprites/currencies/point.png","points","Points",Currencies.getValue("points"))
}

let Menu=document.getElementById("menu")
let Buildings=document.getElementById("buildings")

Currencies.currencyDisplayers.add("./sprites/currencies/point.png","Points",0,"points",document.body)
Currencies.currencyDisplayers.update("./sprites/currencies/point.png","points","Points",Currencies.getValue("points"))

UI.newButton(
  "button",
  Menu,
  "Click for Points",
  ()=>{
  Currencies.increase("points",Number(Values.getValue("pointsPerClick")))
  updatePoints()
})

let bs=0

let BuildingsSwitch=()=>{
  if (bs == 0) {
    document.getElementById("menu").classList.remove("shown")
    document.getElementById("menu").classList.add("hidden")
    document.getElementById("buildings").classList.remove("hidden")
    document.getElementById("buildings").classList.add("shown")
    bs = 1
  } else {
    document.getElementById("menu").classList.add("shown")
    document.getElementById("menu").classList.remove("hidden")
    document.getElementById("buildings").classList.remove("shown")
    document.getElementById("buildings").classList.add("hidden")
    bs = 0
  }
}

const updateAutoclickers=()=>{
  Values.valueDisplayers.update("./sprites/buildings/autoclicker.png","autoclicker-title",`Autoclicker - ${Values.getValue("autoclickerPrice")} <img src=\"./sprites/currencies/point.png\">`,Values.getValue("autoclickers"))
}

UI.newButton("show-buildings",Menu,"Buildings",()=>{BuildingsSwitch()})

Values.valueDisplayers.add("./sprites/buildings/autoclicker.png",`Autoclicker - ${Values.getValue("autoclickerPrice")} <img src=\"./sprites/currencies/point.png\">`,Values.getValue("autoclickers"),"autoclicker-title",Buildings)


UI.newButton("autoclicker-buy",Buildings,"Buy",()=>{
  if (Number(Currencies.getValue("points"))>=Number(Values.getValue("autoclickerPrice"))) {
    Currencies.decrease("points",Number(Values.getValue("autoclickerPrice")))
    Values.increase("autoclickers",1)
    Values.increase("pointsPerSecond",1)
    
    Values.multiply("autoclickerPrice",Number(Values.getValue("priceMultiplier")))
    
    updateAutoclickers()
    updatePoints()
  }
  
  
})


UI.newButton("buildings-back",Buildings,"<<<",()=>{BuildingsSwitch()})


setInterval(()=>{
  Currencies.increase("points",Number(Values.getValue("pointsPerSecond")))
  updatePoints()
},1000)

ul("")