let GET=(n)=>localStorage.getItem(n)
let SET=(n,v)=>localStorage.setItem(n,v)
let NEW=(n)=>SET(n,GET(n))

let items = []
let currencies = []
let values = []

const Items = {
  function: 0, add(name, value) {
    if (value==undefined) {
      value=0
      console.warn("No value given, value has been set to 0.")
    }
    items.push([name,value])
  },
  function: 0, list() {
    return items
  },
  function: 0, load() {
      for (let x = 0; x < this.list().length; x++) {
        NEW(this.list()[x][0])
      for (let y = 0; y < this.list().length; y++) {
        if (GET(this.list()[y][0]) == "null") {
          SET(this.list()[y][0], this.list()[y][1])
        }
      }
    }
  },
  function: 0, increase(name,amount) {
    SET(name,Number(GET(name))+amount)
  },
  function: 0, decrease(name, amount) {
    SET(name, Number(GET(name))-amount)
  },
  function: 0, multiply(name, amount) {
    SET(name, Number(GET(name))*amount)
  },
  function: 0, divide(name, amount) {
    SET(name, Number(GET(name))/amount)
  },
  function: 0, power(name, amount) {
    SET(name, Number(GET(name)) ** amount)
  },
  function: 0, setValue(name, value) {
    SET(name, value)
  },
  function: 0, getValue(name) {
    return GET(name)
  }
}

const Currencies = {
  function: 0, add(name, value) {
    if (value==undefined) {
      value=0
      console.warn("No value given, value has been set to 0.")
    }
    currencies.push([name,value])
  },
  function: 0, list() {
    return currencies
  },
  function: 0, load() {
      for (let x = 0; x < this.list().length; x++) {
        NEW(this.list()[x][0])
      for (let y = 0; y < this.list().length; y++) {
        if (GET(this.list()[y][0]) == "null") {
          SET(this.list()[y][0], this.list()[y][1])
        }
      }
    }
  },
  function: 0, increase(name, amount) {
      SET(name, Number(GET(name)) + amount)
    },
    function: 0, decrease(name, amount) {
      SET(name, Number(GET(name)) - amount)
    },
    function: 0, multiply(name, amount) {
      SET(name, Number(GET(name)) * amount)
    },
    function: 0, divide(name, amount) {
      SET(name, Number(GET(name)) / amount)
    },
    function: 0, power(name, amount) {
      SET(name, Number(GET(name)) ** amount)
    },
    function: 0, setValue(name, value) {
      SET(name, value)
    },
    function: 0, getValue(name) {
      return GET(name)
    },
    currencyDisplayers: {
      function: 0, add(spriteFile,name,value,id,appender) {
        let x = document.createElement("div")
        x.id=id
        x.innerHTML=`<img src=${spriteFile}>${name}: ${value}`
        appender.appendChild(x)
      },
      function: 0, update(spriteFile,id,name,value) {
        document.getElementById(id).innerHTML=`<img src=${spriteFile}>${name}: ${value}`
      }
    }
}

const Values = {
  function: 0, add(name, value) {
    if (value==undefined) {
      value=0
      console.warn("No value given, value has been set to 0.")
    }
    values.push([name,value])
  },
  function: 0, list() {
    return values
  },
  function: 0, load() {
      for (let x = 0; x < this.list().length; x++) {
        NEW(this.list()[x][0])
      for (let y = 0; y < this.list().length; y++) {
        if (GET(this.list()[y][0]) == "null") {
          SET(this.list()[y][0], this.list()[y][1])
        }
      }
    }
  },
  function: 0, increase(name, amount) {
      SET(name, Math.floor(Number(GET(name)) + amount))
    },
    function: 0, decrease(name, amount) {
      SET(name, Math.floor(Number(GET(name)) - amount))
    },
    function: 0, multiply(name, amount) {
      SET(name, Math.floor(Number(GET(name)) * amount))
    },
    function: 0, divide(name, amount) {
      SET(name, Number(GET(name)) / amount)
    },
    function: 0, power(name, amount) {
      SET(name, Number(GET(name)) ** amount)
    },
    function: 0, setValue(name, value) {
      SET(name, value)
    },
    function: 0, getValue(name) {
      return GET(name)
    },
    valueDisplayers: {
      function: 0, add(spriteFile,content,value,id,appender) {
        let x = document.createElement("div")
        x.id=id
        x.style.display="flex";
        x.style.justifyItems="center";
        x.style.justifyContent="center";
        x.innerHTML=`<h2><img src=${spriteFile}>${content} [${value}]</h2>`
        appender.appendChild(x)
      },
      function: 0, update(spriteFile,id,content,value) {
        document.getElementById(id).innerHTML=`<h2><img src=${spriteFile}>${content} [${value}]</h2>`
      }
    }
}

const UI = {
  newButton: (id,to,content,onclick)=>{
    let b = document.createElement("button")
    b.id=id
    b.onclick=onclick
    b.innerHTML=content
    
    to.appendChild(b)
  }
}

const TestModule={
  test:(x)=>{
    this.y=5
    console.log(x)
  }
}

export { Items, Currencies, Values, UI, TestModule };