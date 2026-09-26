import { Injectable } from '@angular/core';
import { FandomDataset, FandomProfile } from '../models/fandom-profile';
import { FANDOM_DATA } from '../data/fandom-data';

@Injectable({
  providedIn: 'root'
})
export class FandomData {
  private readonly cache: FandomDataset = FANDOM_DATA;

  getData(): Promise<FandomDataset> {
    return Promise.resolve(this.cache);
  }

  getCategory(key: keyof FandomDataset): Promise<FandomProfile[]> {
    return Promise.resolve(this.cache[key] ?? []);
  }
}
