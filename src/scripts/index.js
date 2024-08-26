function handleModal(buttonSelector, modalSelector) {
    const button = document.querySelector(buttonSelector);
    const modalContainer = document.querySelector(modalSelector);

    button.addEventListener("click", () => {
        modalContainer.showModal();
    });

    const closeButton = modalContainer.querySelector("#closeModal");
    closeButton.addEventListener("click", () => {
        modalContainer.close();
    });
}

handleModal("#showMessage", "#modalContainer");
handleModal("#showMessageTwo", "#modalContainer");
