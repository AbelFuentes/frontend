const app = Vue.createApp({
    data () {
        return {
            first_name: 'Abel',
            last_name: 'fuentes',
            email: 'launchx07175@innovaccion.mx',
            gender: 'male',
            photo: './assets/initial_photo.jpg',
        }
    },
    methods: {
        async get_random_profile() {
            const response = await fetch('https://randomuser.me/api');
            const { results } = await response.json();
            console.log(results);
            this.first_name = results[0].name.first
            this.last_name = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.photo = results[0].picture.large
        }
    },
})

app.mount('#app');
