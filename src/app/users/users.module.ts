import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';


@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule ],
    declarations: [RegisterComponent, SignInComponent],
    exports: [],
    providers:[],
 
})
export class UsersModule { }
