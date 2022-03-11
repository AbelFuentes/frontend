class AppBeforeVaccine extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="section beforeVaccine">
                <div class="beforeVaccine__left">
                    <img class="beforeVaccine__image" src="./img/female-with-mask.png" alt="font-view-female-suit-with-white-mask">
                </div>
                <div class="beforeVaccine__right">
                    <h2 class="section__title">Preparations Before Vaccine</h2>
                    <p class="section__description">The succes of vaccines is strongly influenced by strength of the body's immune system. Therefore, there are several thing that can be tried to make the COVID-19 vaccine work :</p>
                    <ul class="beforeVaccine__list">
                    <li class="card">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="m18.54 4.12-5.5-2.06a3.48 3.48 0 0 0-2.07 0l-5.5 2.06a3.18 3.18 0 0 0-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.34 3.34 0 0 0 1.18-2.36v-8.1a3.16 3.16 0 0 0-1.9-2.77Zm-3.86 9.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.59-1.59-1.64 1.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l1.64-1.64-1.6-1.6a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.59 1.59 1.55-1.55a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-1.55 1.55 1.59 1.59c.3.3.3.77.01 1.07Z" fill="#3f36cd"/>
                        </svg>
                        </div>
                        <h3>Avoid alcoholic bevarages</h3>
                        <button class="secondary-button" type="button"><i class="fa-solid fa-chevron-down"></i></button>
                    </li>
                    <li class="card">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.83 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2.3 2.3 2.3-2.3a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z" fill="#3f36cd"/>
                        </svg>
                        </div>
                        <h3>Avoid stress</h3>
                        <button class="secondary-button" type="button"><i class="fa-solid fa-chevron-down"></i></button>
                    </li>
                    <li class="card">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.11 16.9a.5.5 0 0 1-.5.5H5.82a.5.5 0 0 1-.5-.5v-4.62c0-.63.51-1.14 1.14-1.14h2.15c.28 0 .5.22.5.5v5.26Zm4.78 0a.5.5 0 0 1-.5.5H10.6a.5.5 0 0 1-.5-.5V7.74c0-.63.51-1.14 1.14-1.14h1.52c.63 0 1.14.51 1.14 1.14v9.16h-.01Zm4.79 0a.5.5 0 0 1-.5.5h-2.79a.5.5 0 0 1-.5-.5v-3.55c0-.28.22-.5.5-.5h2.15c.63 0 1.14.51 1.14 1.14v2.91Z" fill="#3f36cd"/>
                        </svg>
                        </div>
                        <h3>Eat healthy food</h3>
                        <button class="secondary-button" type="button"><i class="fa-solid fa-chevron-down"></i></button>
                    </li>
                    <li class="card">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M15 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z" fill="#3f36cd"/>
                            <path d="M18 20h-3V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4ZM6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm1.75 11.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7Z" fill="#3f36cd"/>
                        </svg>
                        </div>
                        <h3>Het enough sleep</h3>
                        <button class="secondary-button" type="button"><i class="fa-solid fa-chevron-down"></i></button>
                    </li>
                    <li class="card">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.55 5.55 0 0 0 7.56 3.1 5.57 5.57 0 0 0 2 8.7c0 1.18.19 2.28.52 3.3 1.58 5 6.45 8 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.8 8.86-8.8.33-1.03.52-2.13.52-3.32a5.57 5.57 0 0 0-5.56-5.59Z" fill="#3f36cd"/>
                        </svg>
                        </div>
                        <h3>Exercise or physical acrivity</h3>
                        <button class="secondary-button" type="button"><i class="fa-solid fa-chevron-down"></i></button>
                    </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('app-before-vaccine', AppBeforeVaccine);
