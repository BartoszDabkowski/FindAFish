import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FishComponent } from './components/fish/fish.component';
import { CoralsComponent } from './components/corals/corals.component';
import { InvertebratesComponent } from './components/invertebrates/invertebrates.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { FishListComponent } from './components/fish/fish.subcomponents/fish-list/fish-list.component';
import { LivestockThumbnailComponent } from './components/livestock-thumbnail/livestock-thumbnail.component';
import { FishSingleComponent } from './components/fish/fish.subcomponents/fish-single/fish-single.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        SideBarComponent,
        NavBarComponent,
        ShoppingCartComponent,
        FishComponent,
        CoralsComponent,
        InvertebratesComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        FishListComponent,
        LivestockThumbnailComponent,
        FishSingleComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fish', component: FishComponent },
            { path: 'fish-single/:id/:species', component: FishSingleComponent },
            { path: 'corals', component: CoralsComponent },
            { path: 'invertebrates', component: InvertebratesComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'check-out', component: CheckOutComponent },
            { path: 'login', component: LoginComponent },
            { path: 'my/orders', component: MyOrdersComponent },
            { path: 'order-success', component: OrderSuccessComponent },
            { path: 'admin/products', component: AdminProductsComponent },
            { path: 'admin/orders', component: AdminOrdersComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
