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
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { FishSpeciesComponent } from './components/fish/fish.subcomponents/fish-species/fish-species.component';
import { GenusFormComponent } from './components/genus-form/genus-form.component';
import { SpeciesFormComponent } from './components/species-form/species-form.component';
import { FishSpeciesListComponent } from './components/fish/fish.subcomponents/fish-species-list/fish-species-list.component';
import { FishGenusListComponent } from './components/fish/fish.subcomponents/fish-genus-list/fish-genus-list.component';
import { FishGenusThumbnailComponent } from './components/fish/fish-genus-thumbnail/fish-genus-thumbnail.component';

import { SpeciesService } from './services/species.service';
import { GenusService } from './services/genus.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        SideBarComponent,
        NavBarComponent,
        ShoppingCartComponent,
        FishComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        FishGenusListComponent,
        FishGenusThumbnailComponent,
        FishSpeciesListComponent,
        FishSpeciesComponent,
        GenusFormComponent,
        SpeciesFormComponent,
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
            { path: 'genus/new', component: GenusFormComponent },
            { path: 'genus/species/new', component: SpeciesFormComponent },
            { path: 'fish/:speciesId/:species/:id', component: FishSpeciesComponent },
            { path: 'fish/:id/:species', component: FishSpeciesListComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'check-out', component: CheckOutComponent },
            { path: 'login', component: LoginComponent },
            { path: 'my/orders', component: MyOrdersComponent },
            { path: 'order-success', component: OrderSuccessComponent },
            { path: 'admin/products', component: AdminProductsComponent },
            { path: 'admin/orders', component: AdminOrdersComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        GenusService,
        SpeciesService
    ]
})
export class AppModuleShared {
}
