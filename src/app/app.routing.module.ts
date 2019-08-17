import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Users/Register/register.component';


const appRoutes: Routes = [
    { path: 'register', 'component': RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRouting { }
