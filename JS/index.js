// const todos: [
//     {
//         text: 'Fare i compiti',
//         done: false
//     },
//     {
//         text: 'Fare la spesa',
//         done: true
//     },
//     {
//         text: 'Fare il bucato',
//         done: false
//     }
// ]



const {createApp}= Vue;

createApp({
    data(){
        return{
        // array di tasks 
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
        }
    },
    methods:{
        // rimozione della tasks
        remove(indice){
            this.todos.splice(indice,1)
        },
    }
}).mount("#app")