let prsn1 = document.getElementById("prsn1");
let prsn2 = document.getElementById("prsn2");
let chatContainer = document.getElementById("chatContainer");
let backBtn = document.getElementById("backBtn");




prsn1.addEventListener("click", function () {
    

    chatContainer.style.animation  ="chatBox 0.4s ease-in-out forwards"; 
    
    
    
})

backBtn.addEventListener("click", function () {


    chatContainer.style.animation  ="chatBox2 0.4s ease-out forwards alternate";
})




