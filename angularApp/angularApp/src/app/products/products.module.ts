import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopComponent } from '../product/laptop/laptop.component';
import { ProductComponent } from '../product/product.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { TvComponent } from '../product/tv/tv.component';
import { WashingmachineComponent } from '../product/washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { UltilityModule } from '../ultility.module';

const prodcustsRoutes : Routes = [
  {path: '', component: ProductComponent, children: [
    {path: 'laptop', component: LaptopComponent},
    { path: 'tv', component: TvComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ] },
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodcustsRoutes)
  ]
})
export class ProductsModule { 
/**
   *
   */
  constructor() {
  console.log('ProductsModule called');
  
}

}
