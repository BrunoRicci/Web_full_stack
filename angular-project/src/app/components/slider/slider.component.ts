import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {} from "../../../assets/bxslider/dist/jquery.bxslider.min.js";

declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input('customWidth') sliderWidth:number;
  @Output('sliderValues') getValues = new EventEmitter;

  public value:any;

  constructor() {
    
  }
  
  ngOnInit(): void {
    $(document).ready(function(){
      $('.slider').bxSlider(
        {
          mode: 'fade',
          captions: false,
          sliderWidth: this.sliderWidth
        }
        );
      });
    }

  sendValues(event):any{
    
    this.value = {
      a: 1,
      b: 2,
      c: 'hello',
      width: this.sliderWidth
    }
    
    console.log(event);
    console.log('Value sent to parent element', this.value);
    
    this.getValues.emit(this.value);
  }
    
}
