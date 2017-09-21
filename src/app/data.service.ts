import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  public activeIndex: number;
  public activeContent: string;
  public markedContent: string;
  public storageEmpty: boolean;
}
