import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCatalogRoutingModule } from "./video-catalog-routing.module";
import { VideoDetailComponent } from './video-detail/video-detail.component';


@NgModule({
    declarations: [
        VideoListComponent,
        VideoDetailComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        VideoCatalogRoutingModule
    ]
})
export class VideoCatalogModule {
}