export class Post {
  id: number;
  text: string;
  time: string;

  constructor(id: number, text: string, time:string){
    this.id = id;
    this.text = text;
    this.time = time;
  }
}
