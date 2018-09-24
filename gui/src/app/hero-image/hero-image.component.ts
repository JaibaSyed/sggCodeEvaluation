import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  template: `
  <div class="heroimage">
  </div>
  `,
  styles: [` .heroimage {
    position: fixed;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background: url("/assets/images/staff.png") no-repeat center center fixed;
    background-size: cover;
    overflow: auto;
    filter: brightness(100%);
}`
  ]
})
export class HeroImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
