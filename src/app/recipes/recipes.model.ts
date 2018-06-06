export class Recipes {
    public name: string;
    public descripttion: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.descripttion = desc;
        this.imagePath = imagePath;
    }
}
