import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    sum(property?:number): number {
        const sum: Array<number> = [];
        for (let e of this._items) {
            if(property) {
                let percent: number = e.price / 100 * property;
                sum.push(e.price - percent);
            } else {
                sum.push(e.price);
            }
        }
        
        return sum.reduce((sum, a) => sum + a, 0)
    }

    remove(id:number): void {
        for (let e in this._items) {
            if (id === this._items[e].id) {
                this._items.splice(Number(e), 1);
            }
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}