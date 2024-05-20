import { Injectable } from '@angular/core';
import { assets, liabilities } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAssets(){
    return assets;
  }

  getLiabilities(){
    return liabilities;
  }
}
