import { LocalizationModule } from "./Localizations";

export module ModuleA {
    export class Greeting {
        localize: (key: string) => string

        constructor(localize: (key: string) => string) {
            this.localize = localize
        }

        public specialGreeting(): string {
            return this.localize("Howdy")
        }
    }
}