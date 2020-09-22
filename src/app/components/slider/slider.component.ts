import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  title = 'Lucas';

  setTitle(input: string) {
    this.title = input;
  }
}
