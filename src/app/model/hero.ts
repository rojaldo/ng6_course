export class Hero {
    constructor(public name: string, public description: string, public rate?: number, public height?: number) {
        if (!this.rate) {
            this.rate = 5;
        }
        if (!this.height) {
            this.height = 180;
        }
     }
}
