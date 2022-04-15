import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CommonService{
  public loginModalVisible = false;
  public dailogVisible = false;
 constructor() {
 }
}
