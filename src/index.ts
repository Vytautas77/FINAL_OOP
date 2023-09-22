import { Tiger } from "./animals/tiger";
import { Db } from "./Db/FeedingRegDb";
import { Zookeeper } from "./feedingRegister";

const tiger = new Tiger("ryzius", 8, false);

console.log(tiger);
console.log(tiger.WasOutside());

const registr = new Zookeeper("Jonas", "Tiger", "Cage cleaning");
const registr1 = new Zookeeper("Petras", "Elephant", "feeding the animal");
const db = new Db();
db.insertFeeding(registr);
db.insertFeeding(registr1);
console.log(db.getfeeding());
