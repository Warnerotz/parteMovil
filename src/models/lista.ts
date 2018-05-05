export class Lista {
  constructor(
    public _id: string,
    public name: string,
    public media: [
      {
        name: String,
        path: String,
        size: String,
        fellow: String
      }
    ]
  ) {}
}