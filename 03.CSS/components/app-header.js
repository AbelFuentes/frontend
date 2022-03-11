class AppHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="header__container">
                <h2 class="header__logo">Vaccination</h2>
                <nav class="header__nav">
                <ul class="header__links">
                    <li class="header__link"><a href="#">Database</a></li>
                    <li class="header__link"><a href="#">Education</a></li>
                    <li class="header__link"><a href="#">News</a></li>
                    <li class="header__link"><a href="#">Regulation</a></li>
                    <li class="header__link"><a class="primary-button" href="#">Hoax Buster</a></li>
                </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('app-header', AppHeader);
