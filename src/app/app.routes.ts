import { Routes } from '@angular/router';
import { ComponentLifecycle } from './features/component-lifecycle/component-lifecycle';
import { CountryViewer } from './features/country-viewer/country-viewer';
import { BackgroundColorChanger } from './features/background-color-changer/background-color-changer';
import { Error404 } from './shared/components/error404/error404';
import { LandingPage } from './features/landing-page/landing-page';
import { Error403 } from './shared/components/error403/error403';
import { Users } from './features/users/users';
import { UserDetails } from './features/user-details/user-details';
import { GreeceMap } from './features/greece-map/greece-map';
import { Thessaloniki } from './features/greece-map/components/thessaloniki/thessaloniki';
import { Patra } from './features/greece-map/components/patra/patra';
import { Athens } from './features/greece-map/components/athens/athens';
import { CrossComponentCommunication } from './features/cross-component-communication/cross-component-communication';
import {Bugs} from './features/bugs/bugs.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "landing-page",
        pathMatch: 'full'
    },
    {
        path: "landing-page",
        component: LandingPage
    },
    {
        path: "users",
        component: Users
    },
    {
        path: "users/:id",
        component: UserDetails
    },
    {
        path: "lifecycle",
        component: ComponentLifecycle
    },
    {
        path: "country-viewer",
        component: CountryViewer
    },
    {
        path: "background-color-changer",
        component: BackgroundColorChanger
    },
     {
        path: "cross-component-communication",
        component: CrossComponentCommunication
    },
    {
        path: "bugs",
        component: Bugs
    },
    {
       path: "greece-map",
       component: GreeceMap,
       children: [
        {path: 'athens', component: Athens},
        {path: 'thessaloniki', component: Thessaloniki},
        {path: 'patra', component: Patra},
       ]
    },
    {
        path: "403",
        component: Error403
    },
    {
        path: "**",
        component: Error404
    },
];
