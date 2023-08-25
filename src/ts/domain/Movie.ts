import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly movieTime: string,
        readonly price: number,
    ) {
        const minutesTime:string = this.movieTime;
        const hours:number = Math.floor(parseInt(minutesTime) / 60);
        const minutes:number = parseInt(minutesTime) % 60;
        this.movieTime = `${minutesTime} мин./ ${hours}:${minutes}`;
    }
}