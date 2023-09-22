type AnimalType = {
      name: string;
      age: number;
};
export abstract class Animal {
      name: string;
      age: number;
      constructor({ name, age }: AnimalType) {
            this.name = name;
            this.age = age;
      }

      abstract MakeSound(): void;
}
