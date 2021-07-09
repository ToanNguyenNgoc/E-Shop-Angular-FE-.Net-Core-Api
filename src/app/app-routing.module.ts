import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Admin/auth/auth.guard';
import { HomeComponent } from './Admin/home/home.component';
import { ImageUploadFirebaseComponent } from './Admin/home/product-create-form/image-upload-firebase/image-upload-firebase.component';
import { ProductViewDetailComponent } from './Admin/home/product-view-detail/product-view-detail.component';
import { ProductsComponent } from './Admin/home/products/products.component';
import { RegistrationComponent } from './Admin/home/registration/registration.component';
import { TestSidenavComponent } from './Admin/test-sidenav/test-sidenav.component';
import { UserLoginComponent } from './Admin/user-login/user-login.component';
import { ChiTietComponent } from './clients/chi-tiet/chi-tiet.component';
import { ClientsComponent } from './clients/clients.component';
import { DangKyComponent } from './clients/dang-ky/dang-ky.component';
import { DangNhapComponent } from './clients/dang-nhap/dang-nhap.component';
import { GioHangComponent } from './clients/gio-hang/gio-hang.component';
import { ThanhToanComponent } from './clients/thanh-toan/thanh-toan.component';

import { TrangChuComponent } from './clients/trang-chu/trang-chu.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';

const routes: Routes = [
  // Admin
  {path:'admin-login', component:UserLoginComponent},

  {path:'admin', component: HomeComponent,children:[
    {path:'products', component: ProductsComponent},
    {path:'registration', component: RegistrationComponent}
  ], canActivate:[AuthGuard]},
  {path:'payment', component: ThanhToanComponent},

  // {path:'admin/products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'admin/products/detail', component: ProductViewDetailComponent},
  
  //Client
  {path:'client', component: ClientsComponent, children:[
    
  ]},
  {path:'client/chi-tiet-san-pham/:id', component:ChiTietComponent},
  {path:'client/gio-hang', component: GioHangComponent},
  {path:'dang-nhap', component: DangNhapComponent},
  {path:'dang-ky', component: DangKyComponent},
  {path:'test', component:TestSidenavComponent},

  //Not found
  {path:'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
