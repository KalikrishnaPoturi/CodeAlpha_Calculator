function display(value){
  document.getElementById("result").value += value;
}

function clearScreen(){
  document.getElementById("result").value = "";
}

function calculate(){
  let expression = document.getElementById("result").value;

  try{
    let result = eval(expression);
    document.getElementById("result").value = result;
  }
  catch{
    document.getElementById("result").value = "Error";
  }
}
