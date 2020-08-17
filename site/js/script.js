document.addEventListener("DOMContentLoaded",
  function (event){
    function sayHello(event){
      this.textContent = "said It";
      var name="";
      var name = 
        document.getElementById("name").value;
      var message = "<h2>"+"hellow "+name+"</h2>";
    
      document.getElementById("content").innerHTML = message;
    
    
      if (name==="student"){
        var title = 
        document
                .querySelector("h1").textContent;
        title +=" loving it";
        document.querySelector("h1").textContent=title;
      }
    };
    
    document.querySelector("button").onclick = sayHello;

    document.querySelector("body").addEventListener("mousemove",
      function (event){
        if(event.shiftKey){
          console.log(event.clientX);
          console.log(event.clientY);
        }
          
        
      }
    );
  } 
);




