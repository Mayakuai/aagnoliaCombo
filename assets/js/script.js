///Answer is 681

$(document).ready(function() {
  for(var count =1; count<11;count++){
    var text = document.createTextNode(count);
    var pin = document.getElementById("pinPad");
    var newNum = document.createElement("div");
    var br = document.createElement("br");
    if(count==4 || count==7 || count==10){
      pin.appendChild(br)
    }
    newNum.classList.add("number");
    newNum.classList.add("animated");
    newNum.classList.add("bounceIn");
    newNum.id = "num"+count
    if(count==10){
      text = document.createTextNode("0");
    }
    newNum.appendChild(text);
    pin.appendChild(newNum);
  }

  var field = document.getElementById("field").innerHTML;
  var nums = document.getElementsByClassName("number");
  var counter = 0;

    function func(){
      nums[0].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "1";
        counter= counter+1;
        nums[0].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[1].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "2";
        counter= counter+1;
        nums[1].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[2].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "3";
        counter= counter+1;
        nums[2].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[3].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "4";
        counter= counter+1;
        nums[3].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[4].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "5";
        counter= counter+1;
        nums[4].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[5].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "6";
        counter= counter+1;
        nums[5].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[6].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "7";
        counter= counter+1;
        nums[6].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[7].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "8";
        counter= counter+1;
        nums[7].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[8].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "9";
        counter= counter+1;
        nums[8].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };

    nums[9].onclick = function(){
      if(counter<3){
        document.querySelector("input").value = document.querySelector("input").value + "0";
        counter= counter+1;
        nums[9].classList.add("touched");
        console.log(document.querySelector("input").value);
      }
    };
  }

  //Check the Answer
  document.querySelector("div").classList.add("animated")
  var animation="bounce"
  var check = document.getElementById("check");
  check.addEventListener("click", function(){
    if(document.querySelector("input").value=="681"){
      document.querySelector("prompt").innerHTML = "Correct <span class='confetti'>🎉<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>";
      document.querySelector("div").classList.add("correct");
    }else{
      document.querySelector("h2").innerHTML = "Incorrect. Try Again!";
      document.getElementById("field").value = "";
      nums[0].classList.remove("touched");
      nums[1].classList.remove("touched");
      nums[2].classList.remove("touched");
      nums[3].classList.remove("touched");
      nums[4].classList.remove("touched");
      nums[5].classList.remove("touched");
      nums[6].classList.remove("touched");
      nums[7].classList.remove("touched");
      nums[8].classList.remove("touched");
      nums[9].classList.remove("touched");
      counter=0;
      if(animation=="bounce"){
        document.querySelector("div").classList.remove("shake");
        document.querySelector("div").classList.add("bounce");
        animation="shake";
      }else{
        document.querySelector("div").classList.remove("bounce");
        document.querySelector("div").classList.add("shake");
        animation="bounce";
      }
    }
    console.log("Checking");
  });

  //Reset Pin
  var reset = document.getElementById("reset");
  var touched =
  reset.addEventListener("click", function(){
    // var number = getElementsByClassName("number");
    document.getElementById("field").value = "";
    document.querySelector("h2").innerHTML = "Enter The Code";
    nums[0].classList.remove("touched");
    nums[1].classList.remove("touched");
    nums[2].classList.remove("touched");
    nums[3].classList.remove("touched");
    nums[4].classList.remove("touched");
    nums[5].classList.remove("touched");
    nums[6].classList.remove("touched");
    nums[7].classList.remove("touched");
    nums[8].classList.remove("touched");
    nums[9].classList.remove("touched");
    counter=0;
    console.log("Reset");
  });

  func()
});
