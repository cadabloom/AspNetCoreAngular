import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { VideoService } from '../shared/video.service';
import { Video } from '../shared/video.model';

@Component({
    selector: 'video-detail',
    templateUrl: './video-detail.component.html'
})
export class VideoDetailComponent implements OnInit {

    video: Video = new Video();

    constructor(private videoService: VideoService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            let routeIdParam: string = params['id'];
            let videoId: number = parseInt(routeIdParam);
            if (!isNaN(videoId)) {
                this.videoService.getVideo(videoId).subscribe(video => {
                    this.video = video;
                });
            }
        });
    }

    save(video) {
        console.log(video);
        if (video.id !== undefined) {
            this.videoService.updateVideo(video).subscribe(isUpdateSuccess => {
                this.postSubmitSaveEvent(isUpdateSuccess);
            });
        } else {
            this.videoService.createVideo(video).subscribe(result => {
                console.log(result);
                let isUpdateSuccess: boolean = result > 0;
                this.postSubmitSaveEvent(isUpdateSuccess);
            });
        }
    }

    postSubmitSaveEvent(isUpdateSuccess: boolean) {
        if (isUpdateSuccess)
            this.router.navigate(['/videos']);
    }

}