const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            mails: []
        }
    },

    methods: {
        // funzione che genera mail e le pusha nell'array
        randomMail() {
            for (let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                   this.mails.push(response.data.response);
                });
            }
        }
    },

    created() {
        this.randomMail();
    }

});

app.mount('#app');