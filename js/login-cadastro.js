const tabsForm = () => {

    const tabLinks = document.querySelectorAll("[data-tab]");
    const tabContent = document.querySelectorAll(".cadastroLogin__box__tabs__contents__content");

    tabLinks.forEach(function (el) {
        el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        let btnTarget = el.currentTarget;
        let tab = btnTarget.dataset.tab;
        let content = document.querySelector("#" + tab);

        tabContent.forEach(function (el) {
            el.classList.remove("open");
        });

        tabLinks.forEach(function (el) {
            el.classList.remove("open");
        });

        content.classList.add("open");
        btnTarget.classList.add("open");
    }

}
tabsForm();

const carrossel = () => {

    const tabLinks = document.querySelectorAll("[data-bullet]");
    const tabContent = document.querySelectorAll(".cadastroLogin__carrossel__image");

    tabLinks.forEach(function (el) {
        el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        let btnTarget = el.currentTarget;
        let bullet = btnTarget.dataset.bullet;
        let content = document.querySelector("#" + bullet);

        tabContent.forEach(function (el) {
            el.classList.remove("open");
        });

        tabLinks.forEach(function (el) {
            el.classList.remove("open");
        });

        content.classList.add("open");
        btnTarget.classList.add("open");
    }

}
carrossel();