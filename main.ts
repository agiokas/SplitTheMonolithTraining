import { ModuleA } from "./ModuleA";
import { ModuleB } from "./ModuleB";
import { LocalizationModule } from "./Localizations";

// import
const greetingObject = new ModuleB.Greeting()
console.log(greetingObject.specialGreeting());

// inject
const greetingObject2 = new ModuleA.Greeting(LocalizationModule.localize)
console.log(greetingObject2.specialGreeting());