import { LocalizationModule } from "./Localizations";

export module ModuleB {
    export class Greeting {
        public specialGreeting(): string {
            return LocalizationModule.localize("Howdy")
        }
    }
}