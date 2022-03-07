class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="index.html">
                    <img
                    src="assets/logo.png"
                    alt="Logo Pasteleria Fuentes"
                    height="80px"
                    width="200px"
                    />
                </a>
                <ul class="navbar-nav menu">
                    <li class="nav-item">
                        <a class="nav-link" href="cakes.html">Pasteles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="custom-cakes.html">Personalizar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="request-for-quote.html">Cotizar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="administration.html">
                            &#9881;
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('app-header', Header);