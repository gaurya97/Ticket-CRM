
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
  sidebarBtn.onclick = function() {
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
    sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
  }else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }


  let dropdownLink = document.querySelector(".dropdown-link");
  let Tdropdown = document.querySelector(".Tdropdown");
  


  // dropdownLink.onclick = function(event) {
  //   event.preventDefault();
  //   Tdropdown.classList.toggle("show");
  //   if(Tdropdown.classList.contains("show") && sidebar.classList.contains("active") )
  //     {
  //       sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  //     sidebar.classList.toggle("active");
  //   }
    
  
  

  // }

  

  const smallScreen =(e)=>{
    if(e.matches){
      dropdownLink.onclick = function(event) {
        event.preventDefault();
        Tdropdown.classList.toggle("show");
        if(Tdropdown.classList.contains("show") )
          {
            sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
          sidebar.classList.add("active");
        }
      }

    }
   
  }
  const largScreen =(e)=>{
    if(e.matches){
      dropdownLink.onclick = function(event) {
        event.preventDefault();
        Tdropdown.classList.toggle("show");
        if(Tdropdown.classList.contains("show") && sidebar.classList.contains("active") )
          {
            sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
          sidebar.classList.toggle("active");
        }
      }

    }
   
  }

  // window.matchMedia("(max-width:768px)").addEventListener("change",function val(x){
   
  //     console.log('matches');
     

  //     dropdownLink.onclick = function(event) {
  //       event.preventDefault();
  //       Tdropdown.classList.toggle("show");
  //       if(Tdropdown.classList.contains("show") )
  //         {
  //           sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
  //         sidebar.classList.add("active");
  //       }
      
        
      
      
    
  //     }




  //   })
  const scq =window.matchMedia("(max-width:768px)");
  const lcq =window.matchMedia("(min-width:769px)");
  scq.addEventListener("change",smallScreen);
  lcq.addEventListener("change",largScreen);

  smallScreen(scq);
  largScreen(lcq);




   




