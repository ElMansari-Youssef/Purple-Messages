let chatContainer = document.querySelector(".mainChat .chatContainer");
let messageBox = document.querySelectorAll(".messageBox");
let backBtn = document.getElementById("backBtn");


messageBox.forEach((element) => {

    element.addEventListener("click", () => {

        chatContainer.style.animation = "chatBox 0.4s ease-in-out forwards";

        id = element.id;

        switch (id) {

            case "contact1":

                setImageSource(element, '.image img');

                break;

            case "contact2":

                setImageSource(element, '.image img');

                break;

            case "contact3":

                setImageSource(element, '.image img');

                break;

            case "contact4":

                setImageSource(element, '.image img');

                break;

            case "contact5":

                setImageSource(element, '.image img');

                break;


        }


    })
})



backBtn.addEventListener("click", function () {


    chatContainer.style.animation = "chatBox2 0.4s ease-out forwards alternate";
})




function setImageSource(element, selector) {

    let img = element.querySelector(selector).src;
    let imageElements = document.querySelectorAll('.chatContainer .message .image img');
    imageElements[0].src = img;
    imageElements[3].src = img;
}





