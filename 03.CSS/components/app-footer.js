class AppFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer__big">
                <div class="footer__text">
                    <h2>Vaccination</h2>
                    <p>Our goals is to help the ongoing pandemic</p>
                </div>
                <div></div>
                <div class="footer__about">
                    <p>About</p>
                    <ul class="footer__links">
                    <li class="footer__link"><a href="#">About Us</a></li>
                    <li class="footer__link"><a href="#">Features</a></li>
                    <li class="footer__link"><a href="#">News &amp; Blog</a></li>
                    </ul>
                </div>
                <div class="footer__company">
                    <p>Company</p>
                    <ul class="footer__links">
                    <li class="footer__link"><a href="#">How We Work?</a></li>
                    <li class="footer__link"><a href="#">Capital</a></li>
                    <li class="footer__link"><a href="#">Security</a></li>
                    </ul>
                </div>
                <div class="footer__support">
                    <p>Support</p>
                    <ul class="footer__links">
                    <li class="footer__link"><a href="#">FAQs</a></li>
                    <li class="footer__link"><a href="#">Support Center</a></li>
                    <li class="footer__link"><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                </div>
                <div class="footer__little">
                <p>&copy; 2022 Vaccination. All rights reserved</p>
                <div>
                    <a href="#">Terms &amp; Agreements</a>
                    <a href="#">Privacy Policy</a>
                </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);
