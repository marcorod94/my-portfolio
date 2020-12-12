import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
        {
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
            enableTracing: true,
            scrollPositionRestoration: 'enabled'
        }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
