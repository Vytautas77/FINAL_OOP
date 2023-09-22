import { Animal } from "../animal";
import { sleepAndWalk } from "../interface/SleepAndWlak";
import { JumpAndRun } from "../interface/jumpAndRun";

export class Elephant extends Animal implements sleepAndWalk, JumpAndRun {
      weight: number;
      constructor(name: string, age: number, weight: number) {
            super({ name, age });
            this.weight = weight;
      }
      MakeSound(): void {}
      jumpAndRun(): void {}
      sleepAndWalk(): void {}
}
