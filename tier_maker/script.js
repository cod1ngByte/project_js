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

        box.addEventListener("drop", (e) => {
            box.append(dragElement);
        });
    });

    //drop back to image container
    imageContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    imageContainer.addEventListener("drop", (e) => {
        imageContainer.append(dragElement);
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
