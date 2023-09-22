Task: Create a Zoo System
Requirements:

1. Animal
   all animals have:

- name;
- age;

all animals can:

- makeSound;
  LT Reikalavimai:
  Gyvūnas
  visi gyvūnai turi:
- vardas;
- amžius;
  visi gyvūnai gali:
- makeSound;

//////////////////////////////////

2. One group of animals can:

- Sleep and walk;

     Other group of animals can:

- Jump and run;

     Third group of animals can:

- Swim and hunt;
  LT Viena gyvūnų grupė gali:
- Miegoti ir vaikščioti;
  Kitos gyvūnų grupės gali:
- Šokinėti ir bėgioti;
  Trečioji gyvūnų grupė gali:
- Plaukioti ir medžioti;

///////////////////////////////////

3. Animals exists in zoo: Zebra, Tiger, Elephant;

- Zebra additional info: max speed and origin;
- Elephant additional info: weight;
- Tiger has to have a status if he was outside from the cage in the past 8h;
  LT Zoologijos sode yra gyvūnų: zebra, tigras, dramblys;
- Zebra papildoma informacija: maksimalus greitis ir kilmė;
- Dramblio papildoma informacija: svoris;
- Tigras turi turėti statusą, jei jis buvo lauke iš narvo per pastarąsias 8 valandas;

4. Zookeeper should be able to feed the animals. There should be a log recording which animal was fed and at what time.
   LT Zoologijos sodo prižiūrėtojas turi turėti galimybę maitinti gyvūnus. Turėtų būti registruojamas, koks gyvūnas buvo šeriamas ir kokiu laiku.

5. If you have some time left: Instead of using simple console logs, create a singleton logger that accepts a logger class instance and prints messages through it. Each message should be saved into an array to simulate a database.
   LT Jei liko šiek tiek laiko: užuot naudoję paprastus konsolės žurnalus, sukurkite viengubą registratorių, kuris priima registratoriaus klasės egzempliorių ir per jį spausdina pranešimus. Kiekvienas pranešimas turi būti įrašytas į masyvą, kad būtų imituojama duomenų bazė.
