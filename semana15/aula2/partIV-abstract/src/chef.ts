import { Employee } from "./employee";
import {allDishes} from './index'
import {Dish} from './dish'

export class Chef extends Employee {
  public sayJob(): void {
    console.log("Sou um Chef");
  }

  public removeDishFromMenu(dish: string): void {
    for(let i: number= 0, )
  }

  public addDishToMenu(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ): string {
    return "macarrão";
  }
}
