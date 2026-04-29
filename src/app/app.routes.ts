import { Routes } from '@angular/router';
import { ComponentLifecycle } from './features/component-lifecycle/component-lifecycle';
import { CountryViewer } from './features/country-viewer/country-viewer';
import { BackgroundColorChanger } from './features/background-color-changer/background-color-changer';
import { Error404 } from './shared/components/error404/error404';

export const routes: Routes = [
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
        path: "404",
        component: Error404
    }
];
