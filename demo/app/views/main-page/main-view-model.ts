import { Observable } from 'data/observable';

export class MainViewModel extends Observable {
  public message: string;

  constructor() {
    super();

  }
}