let SET=(n,v)=>localStorage.setItem(n,v);
let GET=n=>localStorage.getItem(n);
let NEW=n=>SET(n,GET(n))

const Values = {
  function: 0, list() {
    let values=[
      ["points",0],
      ["earning",1],
      ["pointsPerSecond",0],
      ["clickaniumPerSecond",0],
      ["clickaniumEarning",0],
      ["buttonType","basic"],
      ["buttonUpgradePrice",100]
      ["clickanium",0],
      ["superPoints",0],
      ["electrium",0],
      ["autoclicker-price",30],
      ["mine-price",700],
      ["factory-price",10000],
      ["ultra-factory-price",100000],
      ["hyper-lab-price",1000000],
      ["price-multiplier",1.2],
      //-------Converter 
      
      //------Super Points
      ["marchingCubesOwned",0],
      ["skillTreeOwned",0],
      ["ultraFactoryOwned",0],
      ["vectorOwned",0]
      ["concaveAndConvexOwned",0],
      ["trigonometryOwned",0],
      //-------Skill Tree
      ["faithOwned",0],
      ["hyperLabOwned",0],
      ["electriumResourceOwned",0],
      ["drillingOwned",0],
      ["coldResistantDrillsIOwned",0],
      ["coldResistantDrillsIIOwned",0],
      ["heatResistantDrillsIOwned",0],
      ["heatResistantDrillsIIOwned",0],
      ["areaInformationOwned",0],
      ["?Owned",0],
      //-------Amount Of Buildings 
      ["autoclickers",0],
      ["mines",0],
      ["factories",0],
      ["ultraFactories",0],
      ["hyperLabs",0],
      //------ Materials 
      ["xesmeontine",0],
      ["wochuenium",0],
      ["yafluiciuntine",0],
      ["ioswuonese",0],
      ["unraveled-fabric",0],
      ["eternal-fabric",0]
    ]
    return values
  },
  function: 0, load() {
    for (let x=0;x<this.list().length;x++) {
      NEW(this.list()[x][0])
    }
  },
  function: 0, fixValues() {
    for (let y=0;y<this.list().length;y++) {
      if (GET(this.list()[y][0])=="null") {
        SET(this.list()[y][0],this.list()[y][1])
      }
    }
  },
  function: 0,incr(name, value) {
    SET(name, Number(GET(name)) + Number(value))
  },
  function: 0,decr(name, value) {
    SET(name, Number(GET(name)) - Number(value))
  }
}



Values.load()
Values.fixValues()

const Update={
  points: () => {
    document.getElementById("points").innerHTML=`<img src="./point.png">Points: ${GET("points")}P`
  },
  clickanium: ()=>{
    document.getElementById("clickanium").innerHTML=`<img src="./clickanium.png">Clickanium: ${GET("clickanium")}C`
  }
}
Update.points()
Update.clickanium()

let button=document.getElementById("button")
let upgradesSwitch=document.getElementById("upgrades-switch")
let upgradesWindow=document.getElementById("upgrades")

upgradesShown=0

upgradesSwitch.onclick=()=>{
  if (upgradesShown==0) {
    upgradesShown=1
    upgradesWindow.classList.add("upgrades-shown")
    upgradesWindow.classList.remove("upgrades-hidden")
  } else {
    upgradesShown=0
    upgradesWindow.classList.remove("upgrades-shown")
    upgradesWindow.classList.add("upgrades-hidden")
  }
}

// Converter

let converterSwitch=document.getElementById("converter-switch")
let converterWindow=document.getElementById("converter")

converterShown=0

converterSwitch.onclick=()=>{
  if (converterShown==0) {
    converterShown=1
    converterWindow.classList.add("converter-shown")
    converterWindow.classList.remove("converter-hidden")
  } else {
    converterShown=0
    converterWindow.classList.remove("converter-shown")
    converterWindow.classList.add("converter-hidden")
  }
}


button.onclick=()=>{
  Values.incr("points",GET("earning"))
  Values.incr("clickanium",GET("clickaniumEarning"))
  Update.points()
  Update.clickanium()
}

// ------- Button Upgrades -------

let buttonUp=document.getElementById("button-up-buy")
let buttonUpTitle=document.getElementById("button-up-title")
let buttonUpDesc=document.getElementById("button-up-desc")

buttonUp.onclick=()=>{
  if (GET("buttonType")=="basic") {
    if (GET("points")>=100) {
      Values.incr("earning",1)
      SET("buttonUpgradePrice",750)
      SET("buttonType","blue")
      button.classList.add("blue-button")
      Values.decr("points",100)
      Update.points()
      
      buttonUpTitle.innerText=`Titanium Button - ${GET("buttonUpgradePrice")} Points`
      buttonUpDesc.innerText="+2 Points per Click"
    }
  } else if (GET("buttonType") == "blue") {
    if (GET("points") >= 750) {
      Values.incr("earning", 2)
      SET("buttonUpgradePrice", 8000)
      SET("buttonType", "titanium")
      button.classList.remove("blue-button")
      button.classList.add("titanium-button")
      Values.decr("points",750)
      Update.points()
  
      buttonUpTitle.innerText = `Remorse Button - ${GET("buttonUpgradePrice")} Points`
      buttonUpDesc.innerText = "+46 Points per Click"
    }
  } else if (GET("buttonType") == "titanium") {
    if (GET("points") >= 8000) {
      Values.incr("earning", 46)
      SET("buttonUpgradePrice", 1274000)
      SET("buttonType", "remorse")
      button.classList.remove("titanium-button")
      button.classList.add("remorse-button")
      Values.decr("points",8000)
      Update.points()
  
      buttonUpTitle.innerText = `Ultra Button - ${GET("buttonUpgradePrice")} Points`
      buttonUpDesc.innerText = "+950 Points per Click"
    }
  } else if (GET("buttonType") == "remorse") {
    if (GET("points") >= 1274000) {
      Values.incr("earning", 950)
      SET("buttonUpgradePrice", 7777777)
      SET("buttonType", "ultra")
      button.classList.remove("remorse-button")
      button.classList.add("ultra-button")
      Values.decr("points",1274000)
      Update.points()
  
      buttonUpTitle.innerText = `Max Button`
      buttonUpDesc.innerText = "Congrats!"
    }
  }
}

// ------- Buildings -------

let autoClickerTitle=document.getElementById("autoclicker-title")
let autoClickerBuy=document.getElementById("autoclicker-buy")


let mineTitle=document.getElementById("mine-title")
let mineBuy=document.getElementById("mine-buy")

let factoryTitle = document.getElementById("factory-title")
let factoryBuy = document.getElementById("factory-buy")

let ultraFactoryTitle = document.getElementById("ultraFactory-title")
let ultraFactoryBuy = document.getElementById("ultraFactory-buy")
let ultraFactoryDesc = document.getElementById("ultraFactory-desc")

let hyperLabTitle = document.getElementById("hyperLab-title")
let hyperLabBuy = document.getElementById("hyperLab-buy")
let hyperLabDesc = document.getElementById("hyperLab-desc")

autoClickerBuy.onclick=()=>{
  if (Number(GET("points"))>=Number(GET("autoclicker-price"))) {
  Values.decr("points",GET("autoclicker-price"))
  SET("autoclicker-price",Math.ceil(Number(GET("autoclicker-price"))*Number(GET("price-multiplier"))))
  Values.incr("pointsPerSecond",1)
  Values.incr("autoclickers",1)
  
  autoClickerTitle.innerText=`Autoclicker - ${GET("autoclicker-price")} Points [${GET("autoclickers")}]`
  Update.points()
  }
}

mineBuy.onclick=()=>{
  if (Number(GET("points"))>=Number(GET("mine-price"))) {
  Values.decr("points",GET("mine-price"))
  SET("mine-price",Math.ceil(Number(GET("mine-price"))*Number(GET("price-multiplier"))))
  Values.incr("pointsPerSecond",24)
  Values.incr("clickaniumPerSecond",1)
  Values.incr("mines",1)
  
  mineTitle.innerText=`Mine - ${GET("mine-price")} Points [${GET("mines")}]`
  Update.points()
  }
}

factoryBuy.onclick=()=>{
  if (Number(GET("points"))>=Number(GET("factory-price"))) {
  Values.decr("points",GET("factory-price"))
  SET("factory-price",Math.ceil(Number(GET("factory-price"))*Number(GET("price-multiplier"))))
  Values.incr("pointsPerSecond",500)
  Values.incr("clickaniumPerSecond",10)
  Values.incr("factories",1)
  
  factoryTitle.innerText=`Factory - ${GET("factory-price")} Points [${GET("factories")}]`
  Update.points()
  }
}

// ------- Prestige Upgrades -------

// ------- Skill Tree Upgrades -------

// ------- Loader -------

if (GET("buttonType")=="blue") {
  button.classList.add("blue-button")
  
  buttonUpTitle.innerText=`Titanium Button - ${GET("buttonUpgradePrice")} Points`
  buttonUpDesc.innerText="+2 Points per Click"
}
if (GET("buttonType")=="titanium") {
  button.classList.add("titanium-button")
  
  buttonUpTitle.innerText=`Remorse Button - ${GET("buttonUpgradePrice")} Points`
  buttonUpDesc.innerText="+46 Points per Click"
}
if (GET("buttonType")=="remorse") {
  button.classList.add("remorse-button")
  
  buttonUpTitle.innerText=`Ultra Button - ${GET("buttonUpgradePrice")} Points`
  buttonUpDesc.innerText="+950 Points per Click"
}
if (GET("buttonType")=="ultra") {
  button.classList.add("ultra-button")
  
  buttonUpTitle.innerText=`Max Button`
  buttonUpDesc.innerText="Congrats!"
}

// Auto-earning

setInterval(function rewardUser() {
  Values.incr("points",GET("pointsPerSecond"))
  Values.incr("clickanium",GET("clickaniumPerSecond"))
  Update.points()
  Update.clickanium()
},1000)

// Building Loader



autoClickerTitle.innerText=`Autoclicker - ${GET("autoclicker-price")} Points [${GET("autoclickers")}]`

mineTitle.innerText=`Mine - ${GET("mine-price")} Points [${GET("mines")}]`

factoryTitle.innerText=`Factory - ${GET("factory-price")} Points [${GET("factories")}]`

ultraFactoryTitle.innerText=`Ultra Factory - ${GET("ultra-factory-price")} Points [${GET("ultraFactories")}]`

hyperLabTitle.innerText=`Hyper Lab - ${GET("hyper-lab-price")} Points [${GET("hyperLabs")}]`



if (GET("ultraFactoryOwned")==0) {
  ultraFactoryTitle.style.display="none"
  ultraFactoryBuy.style.display="none"
  ultraFactoryDesc.style.display="none"
}
if (GET("hyperLabOwned")==0) {
  hyperLabTitle.style.display="none"
  hyperLabBuy.style.display="none"
  hyperLabDesc.style.display="none"
}
