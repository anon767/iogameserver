export class GameObject {
    public id: number;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public updatable: boolean

    constructor(x, y, w, h, updatable) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.updatable = updatable;
    }
}