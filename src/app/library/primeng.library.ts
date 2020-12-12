import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
    exports: [
        ButtonModule,
        CardModule,
        CarouselModule,
        ChartModule,
        MenubarModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        RatingModule,
        ScrollPanelModule,
        SidebarModule,
        ToastModule,
        TooltipModule
    ]
})
export class PrimeNgModule {}
