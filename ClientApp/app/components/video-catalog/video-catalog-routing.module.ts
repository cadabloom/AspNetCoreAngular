import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const videoCatalogRoutes: Routes = [
    { path: 'videos', component: VideoListComponent },
    { path: 'videos/:id', component: VideoDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(videoCatalogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class VideoCatalogRoutingModule { }