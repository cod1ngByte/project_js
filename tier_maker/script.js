document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    let dragElement;

    init();

    //drop into box
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        box.addEventListener("dragenter", () => {
            box.classList.add("hover");
        });
        box.addEventListener("dragleave", () => {
            box.classList.remove("hover");
        });
        box.addEventListener("drop", (e) => {
            box.append(dragElement);
            box.classList.remove("hover");
        });
    });

    //drop back to image container
    imageContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    imageContainer.addEventListener("drop", (e) => {
        imageContainer.append(dragElement);
    });

    //changing the name of tier
    const settings = document.querySelectorAll(".setting");
    settings.forEach((setting) => {
        setting.addEventListener("click", (e) => {
            const newName = prompt("enter the new name for rating");
            if (newName) {
                //find nearest parent element
                const box = e.target.closest(".box");
                box.firstElementChild.textContent = newName;
            }
        });
    });

    function init() {
        //making images draggable
        const images = document.querySelectorAll("img");
        images.forEach((image) => {
            image.setAttribute("draggable", "true");
        });

        //draggable element
        images.forEach((image) => {
            image.addEventListener("dragstart", (e) => {
                dragElement = e.target;
            });
        });
    }
});
