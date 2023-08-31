import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, DoCheck {

  @Input() fromParent: string;
  constructor(private postService: PostService) { 
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(this.fromParent);

    for(const propName in changes) 
    {
      const prop = changes[propName];
      const { previousValue, currentValue, firstChange} = prop;
      console.log(`Prop name ${propName}`);
      console.log(`Prev Value ${previousValue}`);
      console.log(`Current Value ${currentValue}`);
      console.log(`First change ${firstChange}`);

      console.log('--------------------');

    }
  
  }
  ngOnInit() {
    console.log('ngOnInit called');
    this.postService.getPosts().subscribe(res => {
      console.log('from hook compo posts data', res);
    })

  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
    // api 
  }
 
 

}
