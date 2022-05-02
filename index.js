
const obj = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "add": "+",
  "subtract": "-",
  "multiply": "*",
  "divide": "/",
  "point": ".",
  "result": "=",
  "reset": "C"

}

//class
class Calculator {
  constructor(data){
    Object.assign(this, data)

  }

  //display HTML calculator
  getHtmlDisplay(){
          return `
            <h1>Calculator App</h1>
            <div class="container">

                <div id="top">

                    <input type="text" id="result">


                    <button id="reset" class="red">${this.reset}</button>
                </div>

                <div id="buttons">

                    <input type="button" class="btn" id="btn0" value=${this.zero}>
                    <input type="button" class="btn" value=${this.one}>
                    <input type="button" class="btn" value=${this.two}>
                    <input type="button" class="btn" value=${this.three}>
                    <input type="button" class="btn" value=${this.four}>
                    <input type="button" class="btn" value=${this.five}>
                    <input type="button" class="btn" value=${this.six}>
                    <input type="button" class="btn" value=${this.seven}>
                    <input type="button" class="btn" value=${this.eight}>
                    <input type="button" class="btn" value=${this.nine}>
                    <input type="button" class="btn orange" value=${this.add}>
                    <input type="button" class="btn orange" value=${this.subtract}>
                    <input type="button" class="btn orange" value=${this.multiply}>
                    <input type="button" class="btn orange" value=${this.divide}>
                    <input type="button" class="btn orange" value=${this.point}>
                    <input type="button" class="btn blue" id="calValue" value=${this.result}>

                </div>
            </div>
      `
    }

      //make the calculations
  displayCalculation(){
        const collection = document.getElementsByClassName("btn")

        Array.prototype.slice.call(collection).slice(0,collection.length - 1)
                  .forEach(ele => ele.addEventListener("click", function(){
                                document.getElementById("result").value += this.value })
                  )
      }


      //display result
  displayResult(){
        return document.getElementById("result").value = eval(document.getElementById("result").value)
      }

      //clear the display
  clearDisplay(){
        return document.getElementById("result").value = ""
      }


}


const calculator = new Calculator(obj)
document.body.innerHTML = calculator.getHtmlDisplay()
calculator.displayCalculation()
document.querySelector("#calValue").addEventListener("click", calculator.displayResult)
document.querySelector("#reset").addEventListener("click", calculator.clearDisplay)
