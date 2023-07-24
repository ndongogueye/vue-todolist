
        Vue.createApp({
            data() {
                return {
                    compiti: [
                        { id: 1, testo: "alzarsi dal letto", completato: false },
                        { id: 2, testo: "mangiare qualcosa", completato: false },
                        { id: 3, testo: "mangiare qualcosa", completato: false },
                        { id: 4, testo: "darsi una sistemata", completato: false },
                        { id: 5, testo: "iniziare a darsi da fare", completato: false }
                    ],
                    nuovoTestoCompito: "",
                };
            },
        
            computed: {
                haCompiti() {
                    return this.compiti.length > 0;
                },
                messaggioCompiti() {
                    const conteggioCompiti = this.compiti.length;
                    return `Hai ${conteggioCompiti} cose da fare`;
                }
            },
        
 
        }).mount("#app");

