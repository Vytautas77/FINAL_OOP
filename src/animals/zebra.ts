import { Animal } from "../animal";
import { JumpAndRun } from "../interface/jumpAndRun";
import { sleepAndWalk } from "../interface/SleepAndWlak";

export class Zebra extends Animal implements sleepAndWalk, JumpAndRun {
      maxSpeed: string;
      origin: string;
      constructor(name: string, age: number, maxSpeed: string, origin: string) {
            super({ name, age });
            this.maxSpeed = maxSpeed;
            this.origin = origin;
      }
      MakeSound(): void {}
      sleepAndWalk(): void {}
      jumpAndRun(): void {}
}
