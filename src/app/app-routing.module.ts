import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'accommodation', loadChildren: './pages/accommodation/accommodation.module#AccommodationPageModule' },
    { path: 'dining', loadChildren: './pages/dining/dining.module#DiningPageModule' },
    { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
    { path: 'offers', loadChildren: './pages/offers/offers.module#OffersPageModule' },
    { path: 'spa', loadChildren: './pages/spa/spa.module#SpaPageModule' },
    { path: 'adventure', loadChildren: './pages/adventure/adventure.module#AdventurePageModule' },
    { path: 'events', loadChildren: './pages/events/events.module#EventsPageModule' },
    { path: 'gallery', loadChildren: './pages/gallery/gallery.module#GalleryPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
