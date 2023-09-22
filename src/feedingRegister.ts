//import { FeedingsType } from "./dB";

export type AnimalType = "Tiger" | "Zebra" | "Elephant";
export type WorkType = "Cage cleaning" | "feeding the animal";

export class Zookeeper {
      zookeeperName: string;
      animalType: AnimalType;
      work: WorkType;
      time: string = new Date().toISOString();

      constructor(
            zookeeperName: string,
            animalType: AnimalType,
            work: WorkType,
      ) {
            this.zookeeperName = zookeeperName;
            this.animalType = animalType;
            this.work = work;
            // this.time = new Date().toISOString();
      }
      // getZookeeper(): any {
      //       return {
      //             zookeeperName: this.zookeeperName,
      //             animalType: this.animalType,
      //             time: this.time,
      //       };
      // }
      // setZookeeper(zookeeperName: string, animalType: AnimalType): void {
      //       this.zookeeperName = zookeeperName;
      //       this.animalType = animalType;
      //       this.time = new Date().toISOString();
      // }
}
