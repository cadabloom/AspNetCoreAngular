import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { VideoService } from './components/video-catalog/shared/video.service';
//import { RouterModule } from '@angular/router';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        HttpModule,
        ...sharedConfig.imports,
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin }, VideoService
    ]
})
export class AppModule {
}
