import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HomeComponent } from './Admin/home/home.component';
import { ProductsComponent } from './Admin/home/products/products.component';
import { RegistrationComponent } from './Admin/home/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductViewDetailComponent } from './Admin/home/product-view-detail/product-view-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ProductCreateFormComponent } from './Admin/home/product-create-form/product-create-form.component';
import { UserLoginComponent } from './Admin/user-login/user-login.component';
import { TestSidenavComponent } from './Admin/test-sidenav/test-sidenav.component';
import { ClientsComponent } from './clients/clients.component';
import { TrangChuComponent } from './clients/trang-chu/trang-chu.component';
import { ChiTietComponent } from './clients/chi-tiet/chi-tiet.component';
import { TaiKhoanNguoiDungComponent } from './clients/tai-khoan-nguoi-dung/tai-khoan-nguoi-dung.component';
import { GioHangComponent } from './clients/gio-hang/gio-hang.component';
import { DangNhapComponent } from './clients/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './clients/dang-ky/dang-ky.component';
import { AddCartSuccessComponent } from './clients/gio-hang/add-cart-success/add-cart-success.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { FooterComponent } from './clients/footer/footer.component';
import { HeaderComponent } from './clients/header/header.component';
import { SanPhamComponent } from './clients/san-pham/san-pham.component';
import { ImageUploadFirebaseComponent } from './Admin/home/product-create-form/image-upload-firebase/image-upload-firebase.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { ThanhToanComponent } from './clients/thanh-toan/thanh-toan.component';
import { TimKiemComponent } from './clients/tim-kiem/tim-kiem.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    RegistrationComponent,
    TrangChuComponent,
    ChiTietComponent,
    ProductViewDetailComponent,
    ProductCreateFormComponent,
    UserLoginComponent,
    TestSidenavComponent,
    TaiKhoanNguoiDungComponent,
    ClientsComponent,
    GioHangComponent,
    DangNhapComponent,
    DangKyComponent,
    AddCartSuccessComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SanPhamComponent,
    ImageUploadFirebaseComponent,
    ThanhToanComponent,
    TimKiemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    MatIconModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
