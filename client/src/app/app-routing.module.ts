import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoFavComponent } from './components/todo-fav/todo-fav.component';
import { TodoComponent } from './components/todo/todo.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Route } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// { path: '', component: HomeComponent },
const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuardService],
  }, 
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'add', component: TodoFormComponent, canActivate: [AuthGuardService],},
  {path: 'list', component: TodoListComponent, canActivate: [AuthGuardService],},
  {path: 'favorite', component: TodoFavComponent, canActivate: [AuthGuardService],},
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
