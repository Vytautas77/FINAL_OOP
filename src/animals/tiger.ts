import { Animal } from "../animal";
import { JumpAndRun } from "../interface/jumpAndRun";
import { sleepAndWalk } from "../interface/SleepAndWlak";
import { SwimAndHunt } from "../interface/swimAndHunt";

export class Tiger
      extends Animal
      implements JumpAndRun, SwimAndHunt, sleepAndWalk
{
      wasOutside: boolean;
      constructor(name: string, age: number, wasOutside: boolean) {
            super({ name, age });
            this.wasOutside = wasOutside;
      }
      MakeSound(): void {
            console.log("Roar!");
      }
      WasOutside(): string {
            if (this.wasOutside) {
                  return "Tiger was outside from the cage in the past 8h";
            } else {
                  return "Tiger wasn't outside from the cage in the past 8h";
            }
      }
      sleepAndWalk(): void {}
      jumpAndRun(): void {}
      swimAndHunt(): void {}
}
