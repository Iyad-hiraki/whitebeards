import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner.component';


@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [LoadingSpinnerComponent],
    exports: [LoadingSpinnerComponent, CommonModule],
    providers:[],
 
})
export class SharedModule { }
