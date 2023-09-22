class Logger {
      logMessages: any[] = [];
      constructor() {
            this.logMessages = [];
      }

      log(pranesimas: string): void {
            const laikoZyma = new Date().toISOString();
            this.logMessages.push({ laikoZyma, pranesimas });
            console.log(`[${laikoZyma}] ${pranesimas}`);
      }

      gautiPranesimus(): any {
            return this.logMessages;
      }
}

class SingletonLogger {
      private static instance: Logger | null = null;
      constructor() {
            if (!SingletonLogger.instance) {
                  SingletonLogger.instance = new Logger();
            }
      }

      gautiEgzemplioriu(): Logger {
            return SingletonLogger.instance;
      }
}

// Pavyzdys naudojant SingletonLogger klasę:

const registras1 = new SingletonLogger().gautiEgzemplioriu();
registras1.log("Pranešimas 1");

const registras2 = new SingletonLogger().gautiEgzemplioriu();
registras2.log("Pranešimas 2");

const registras3 = new SingletonLogger().gautiEgzemplioriu();
registras3.log("Pranešimas 3");

console.log("Visi pranešimai:");
console.log(registras1.gautiPranesimus());
