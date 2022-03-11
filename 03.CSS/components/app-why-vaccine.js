class AppWhyVaccine extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="section whyVaccine">
                <div>
                    <h2 class="section__title">Why shoud I vaccine?</h2>
                    <p class="seciton__description">In order to avoid any doubts about getting the COVID-19 vaccine, identify the following 4 benfits of COVID-19 vaccinations :</p>
                    </div>
                    <div></div>
                </div>
                <ul class="benefits">
                    <li class="benefits__item card">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M21.3 7.58h-5.58a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7Zm-14.88 0H2.7a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7Z" fill="#3f36cd"/>
                        <path d="M10.14 10.83a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Zm11.16 6.98h-3.72a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7Zm-13.02 0H2.7a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7Z" fill="#3f36cd"/>
                        <path d="M13.86 21.07a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Z" fill="#3f36cd"/>
                        </svg>
                    </div>
                    <h3 class="benefits__title">Minize the sprad of viruses</h3>
                    <p class="benefits__description little">Vaccine has been proven effective to prevent someone form getting infected with Coronavirus.</p>
                    </li>
                    <li class="benefits__item card">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="m18.54 4.12-5.5-2.06a3.48 3.48 0 0 0-2.07 0l-5.5 2.06a3.18 3.18 0 0 0-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.34 3.34 0 0 0 1.18-2.36v-8.1a3.16 3.16 0 0 0-1.9-2.77Zm-3.06 5.6-4.3 4.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.6-1.62a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.08 1.08 3.77-3.77a.75.75 0 0 1 1.06 0c.29.29.29.78-.01 1.07Z" fill="#3f36cd"/>
                        </svg>
                    </div>
                    <h3 class="benefits__title">Forming antibodies</h3>
                    <p class="benefits__description little">COVID-19 vaccine proven to help shape antibody response for immune system.</p>
                    </li>
                    <li class="benefits__item card">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M17.53 7.77a.739.739 0 0 0-.21 0 2.874 2.874 0 0 1-2.78-2.88C14.54 3.3 15.83 2 17.43 2c1.59 0 2.89 1.29 2.89 2.89a2.89 2.89 0 0 1-2.79 2.88Zm3.262 6.93c-1.12.75-2.69 1.03-4.14.84.38-.82.58-1.73.59-2.69 0-1-.22-1.95-.64-2.78 1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8ZM6.44 7.77c.07-.01.14-.01.21 0a2.874 2.874 0 0 0 2.78-2.88 2.885 2.885 0 1 0-5.77 0c0 1.56 1.23 2.83 2.78 2.88Zm.111 5.08c0 .97.21 1.89.59 2.72-1.41.15-2.88-.15-3.96-.86-1.58-1.05-1.58-2.76 0-3.81 1.07-.72 2.58-1.01 4-.85-.41.84-.63 1.79-.63 2.8Zm5.569 3.02a1.13 1.13 0 0 0-.26 0 3.425 3.425 0 0 1-3.31-3.43C8.56 10.54 10.09 9 12 9c1.9 0 3.44 1.54 3.44 3.44a3.434 3.434 0 0 1-3.32 3.43Zm-3.25 2.07c-1.51 1.01-1.51 2.67 0 3.67 1.72 1.15 4.54 1.15 6.26 0 1.51-1.01 1.51-2.67 0-3.67-1.71-1.15-4.53-1.15-6.26 0Z" fill="#3f36cd"/>
                        </svg>
                    </div>
                    <h3 class="benefits__title">Protecting people nearby</h3>
                    <p class="benefits__description little">The benefits of COVID-19 vaccination are the vaccine that we get can also help protect people around us.</p>
                    </li>
                    <li class="benefits__item card">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="m19.1 15 .3.6c.2.3.6.6 1 .7h.4c1.3.3 1.6 1.2.7 2.2l-.4.4c-.3.2-.4.8-.4 1.1v.3c.4 1.6-.4 2.2-1.8 1.3l-.3-.1c-.3-.3-.9-.3-1.2 0l-.3.1c-1.4.9-2.2.3-1.9-1.3V20c.2-.3 0-.9-.3-1.1l-.4-.4c-.9-1-.6-2 .7-2.2h.5c.3 0 .7-.4.9-.7l.3-.7c.6-1.2 1.6-1.2 2.2 0Z" fill="#3f36cd"/>
                        <path d="M16.2 2H7.8C4.2 2 2 4.2 2 7.8v8.4C2 19.8 4.2 22 7.8 22h5.3c.3 0 .6-.4.6-.7V19.7l-.2-.2c-.9-.9-1.2-1.9-.9-2.8.3-1 1.2-1.6 2.4-1.8h.3l.2-.6c.6-1.2 1.5-1.8 2.5-1.8s2 .6 2.5 1.8l.1.3.4.3h.3c.3.1.7-.2.7-.5V7.8C22 4.2 19.8 2 16.2 2Zm0 7L14 12c-.3.3-.7.6-1.2.6s-1 0-1.3-.4l-1.8-1.4a.2.2 0 0 0-.2 0h-.2L6.9 14a.8.8 0 0 1-1 0 .7.7 0 0 1-.2-1l2.4-3a1.8 1.8 0 0 1 2.5-.4l1.8 1.5h.4L15 8c.2-.4.7-.4 1-.2.4.3.4.7.2 1Z" fill="#3f36cd"/>
                        </svg>
                    </div>
                    <h3 class="benefits__title">Creating group immunity</h3>
                    <p class="benefits__description little">COVID-19 vaccination also beneficial for creating group immunity or herd immunity.</p>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define('app-why-vaccine', AppWhyVaccine);
