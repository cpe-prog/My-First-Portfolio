var aboutskills = document.getElementsByClassName("about-skills");
      var tabcontent = document.getElementsByClassName("tab-content");
      
        function opentab(tabname){
          for(aboutskill of aboutskills){
            aboutskill.classList.remove("active-skills");
          }
          for(tabcontents of tabcontent){
            tabcontents.classList.remove("skills-tab");
          }
          event.currentTarget.classList.add("active-skills");
          document.getElementById(tabname).classList.add("skills-tab")
        }

        