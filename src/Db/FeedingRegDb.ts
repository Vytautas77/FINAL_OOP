import { AnimalType } from "../feedingRegister";
export type FeedingsType = {
      zookeeperName: string;
      animalType: AnimalType;
      time: string;
};
export class Db {
      private feedRegistration: FeedingsType[] = [];

      insertFeeding(feedingTime: FeedingsType): void {
            this.feedRegistration.push(feedingTime);
      }
      getfeeding(): FeedingsType[] {
            return this.feedRegistration;
      }
}
