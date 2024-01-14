import { Todos } from "../types";

export class StateManager {
  private state: Todos | undefined;

  constructor() {
    this.state = this.loadState();
  }

  private loadState(): Todos | undefined {
    try {
      const serializedState = localStorage.getItem("todoList");
      return serializedState ? JSON.parse(serializedState) : {};
    } catch (e) {
      console.log("error loading in load state in class");
      return undefined;
    }
  }

  private saveState(): void {
    try {
      const serializedState = JSON.stringify(this.state);
      localStorage.setItem("todoList", serializedState);
    } catch (e) {
      console.error("error in Ssaving State in class");
    }
  }

  updateState(newState: Todos | undefined): void {
    this.state = { ...this.state, ...newState };
    this.saveState();
  }

  getState(): Record<string, any> {
    return this.state;
  }
}
