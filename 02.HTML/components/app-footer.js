class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <footer class="navbar navbar-expand-sm bg-dark navbar-dark sticky-bottom footer">
          <ul class="navbar-nav menu menu-footer">
            <li class="nav-item">
              <a class="nav-link" href="about.html">Acerca</a>
            </li>
          </ul>
          <ul class="navbar-nav menu menu-footer" style="width: 100px;">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/AbelFuentes" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/abel-fuentes/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              </li>
          </ul>
        </footer>
      `;
    }
}

customElements.define('app-footer', Footer);