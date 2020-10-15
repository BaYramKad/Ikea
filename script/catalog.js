const catalog = () => {
    const burgerMenu = document.querySelector(".btn-burger");
    const exitMenu = document.querySelector(".btn-close");
    const catalog = document.querySelector(".catalog");
    const overlay = document.querySelector(".overlay");
    const subCatalog = document.querySelector(".subcatalog");
    const subSatalogHeader = document.querySelector(".subcatalog-header");
    const closeSubMenu = document.querySelector(".btn-return");

    const openMenu = () => {
        catalog.classList.add("open");
        overlay.classList.add("active");
    };

    const closeMenu = event => {
        catalog.classList.remove("open");
        overlay.classList.remove("active");
        removeSubMenu();
    };

    const openSubCatalog = event => {
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest(".catalog-list__item");
        if (itemList) {
            subSatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add("subopen");
        }
    }

    const removeSubMenu = () => {
        subCatalog.classList.remove("subopen");
    }

    closeSubMenu.addEventListener("click", removeSubMenu);
    burgerMenu.addEventListener("click", openMenu);
    exitMenu.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    catalog.addEventListener("click", openSubCatalog);
    document.addEventListener("keydown", event => {
        if (event.key === "Escape"){
            closeMenu();
        }
        
    });
};

export default catalog;

export const data = {
    a: 12,
    b: 43
};
