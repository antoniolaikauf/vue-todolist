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
            taskAggiunta:"",
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
        // aggiunta task dentro array todos
        addTask(){
            if (this.taskAggiunta < 5) {
               alert("la task deve almeno avere 5 caratteri")
            }else{
                this.todos.push({"text":this.taskAggiunta,"done":false})
                this.taskAggiunta=""
            }
        },
         switchDone(ci){
           for (let i = 0; i < this.todos.length; i++) {
                    
                if (this.todos[i].done === false) {
                    this.todos[ci].done = true
                }
                else if (this.todos[i].done === true) {
                     this.todos[ci].done = false
                }
            
           }
        }
    }
}).mount("#app");


// keyup va messo all'input