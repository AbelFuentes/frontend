class AppEmergencyContact extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="section emergencyContact">
                <div class="emergencyContact__left">
                    <h2 class="section__title">Emergency Contact</h2>
                    <p class="section__description">Contact one of the contacts below if you or your family feel unwell and have similar symptoms such as Covid-19, make sure you also take care of yourself before reporting us :</p>
                    <ul class="contactList">
                    <li class="contactList__item card">
                        <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path fill="#3f36cd" d="M17.62 10.75a.77.77 0 0 1-.77-.77c0-.37-.37-1.14-.99-1.8-.61-.66-1.28-1.04-1.84-1.04a.77.77 0 0 1-.77-.77c0-.42.35-.77.77-.77 1 0 2.05.54 2.97 1.51.86.91 1.41 2.04 1.41 2.86 0 .43-.35.78-.78.78zm3.61 0a.77.77 0 0 1-.77-.77 6.44 6.44 0 0 0-6.43-6.43.77.77 0 0 1-.77-.77c0-.42.34-.78.76-.78C18.42 2 22 5.58 22 9.98c0 .42-.35.77-.77.77zm-10.18 4.2L9.2 16.8a1 1 0 0 1-1.41.01l-.33-.32a28.41 28.41 0 0 1-2.79-3.27 17.83 17.83 0 0 1-1.96-3.41A8.59 8.59 0 0 1 2 6.54c0-.68.12-1.33.36-1.93a4.6 4.6 0 0 1 1.15-1.67A2.93 2.93 0 0 1 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71a3.4 3.4 0 0 1-.56.71l-.76.79a.54.54 0 0 0-.16.4c0 .08.01.15.03.23l.08.2c.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58l.31.3a1 1 0 0 1 .01 1.43zm10.92 3.38a2.54 2.54 0 0 1-.25 1.09 4.5 4.5 0 0 1-2.32 2.2l-.03.01c-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48l.18.08c.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"/>
                            </svg>
                        </div>
                        <div>
                            <p>Call</p>
                            <span>021.123.145.14</span>
                        </div>
                        </div>
                        <button class="secondary-button" type="button">Call Now</button>
                    </li>
                    <li class="contactList__item card">
                        <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M17 2H7a5 5 0 0 0-5 4.98v6.98a5 5 0 0 0 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17a5 5 0 0 0 5-4.98V6.98A5 5 0 0 0 17 2ZM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z" fill="#3f36cd"/>
                            </svg>
                        </div>
                        <div>
                            <p>Chat</p>
                            <span>021.123.145.14</span>
                        </div>
                        </div>
                        <button class="secondary-button" type="button">Chat Now</button>
                    </li>
                    <li class="contactList__item card">
                        <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38a1.88 1.88 0 0 1 0-3.76 1.88 1.88 0 0 1 0 3.76Z" fill="#3f36cd"/>
                            </svg>
                        </div>
                        <div>
                            <p>Video Call</p>
                            <span>021.123.145.14</span>
                        </div>
                        </div>
                        <button class="secondary-button" type="button">Video Call Now</button>
                    </li>
                    <li class="contactList__item card">
                        <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.57 2.57 0 0 0-2.29-1.42H2.7a.7.7 0 0 0-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7Z" fill="#3f36cd"/>
                            <path d="M22 7.81v3.04a2.06 2.06 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4.03 4.03 0 0 0-3.63-2.25H2.7c-.24 0-.48.04-.7.12V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z" fill="#3f36cd"/>
                            </svg>
                        </div>
                        <div>
                            <p>Message</p>
                            <span>021.123.145.14</span>
                        </div>
                        </div>
                        <button class="secondary-button" type="button">Message Now</button>
                    </li>
                    </ul>
                </div>
                <div class="emergencyContact__right">
                    <img src="./img/male-nurse.png" alt="front-view-male-nurse">
                </div>
            </div>
        `;
    }
}

customElements.define('app-emergency-contact', AppEmergencyContact);
