import { Todos } from "../types";

export class StateManager {
  private todos :Todos[]

  constructor() {
    this.todos = this.loadTodos()
  }


  private loadTodos():Todos[]{
    try {
      const storedTodo = localStorage.getItem("todos")
      return storedTodo ? JSON.parse(storedTodo) : []
    } catch (e) {
      throw(e)
    }
  }



  private saveToLocalStorage(){
    try {
      localStorage.setItem("todos" , JSON.stringify(this.todos))
    } catch (e) {
      throw (e)
    }
  }

   addTodo(todo:Todos){
    this.todos = [...this.todos , todo]
     this.saveToLocalStorage()
  }

  removeTodo(todoId:string){
    this.todos = this.todos.filter((todo)=>todo?.id !==todoId)
    this.saveToLocalStorage()
  }


  getTodos(){
    alert("get todo run")
    return this.todos
  }


  doneHandler(id:string){
    this.todos = this.todos.map((todo)=>{
      if (todo.id===id){
        return {
          ...todo ,
          done:true
        }
      } else return todo
    })

    this.saveToLocalStorage()
  }

  unDoneHandler(id:string){
    this.todos = this.todos.map((todo)=>{
      if (todo.id===id){
        return {
          ...todo , done:false
        }
      } else return todo
    })

    this.saveToLocalStorage()
  }

  idleHandler(id:string){
    this.todos = this.todos.map((todo)=>{
      if (todo.id===id){
        return {
          ...todo ,
          done:"idle"
        }
      } else return todo
    })
    this.saveToLocalStorage()
  }

}
