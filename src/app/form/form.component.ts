import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title: string = '';
  details: string = '';
  imageUrl: string = '';
  postUrl: string = '';
  agree: boolean = false;
}
