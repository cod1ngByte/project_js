document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    const inputImage = document.querySelector("#upload-image");
    let dragElement;

    init();

    //------------->drop into box
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

    //---------------->drop back to image container
    imageContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    imageContainer.addEventListener("drop", (e) => {
        imageContainer.append(dragElement);
    });

    //-------------->changing the name of tier
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

    //-------------->upload images

    inputImage.addEventListener("change", function (e) {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file.type.startsWith("image/")) {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(file);
                //create an object url for the file
                img.setAttribute("draggable", "true");
                img.addEventListener("dragstart", (e) => {
                    dragElement = e.target;
                });
                img.onload = function () {
                    //release the object url after the image is loaded
                    URL.revokeObjectURL(img.src);
                };
                imageContainer.appendChild(img);
            }
        }
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
