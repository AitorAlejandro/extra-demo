import { Injectable } from '@angular/core';
import {Languages} from '../domain'

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {
  public readonly DEFAULT_LANGUAGE: string = Languages.es;

  constructor() { }
}
