import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { VideoService } from '../shared/video.service';
import { Video } from '../shared/video.model';

@Component({
    selector: 'video-list',
    templateUrl: './video-list.component.html'
})
export class VideoListComponent implements OnInit {
    public videos: Array<Video>;

    constructor(private videoService: VideoService) {
    }

    ngOnInit(): void {
        this.videoService.getVideos().subscribe(videos => {
            console.log(videos);
            this.videos = videos;
        });
    }

    delete(video) {
        let index: number = this.videos.indexOf(video);
        if (index !== -1) {
            this.videos.splice(index, 1);
            this.videoService.deleteVideo(video.id).subscribe();
        }
    }
    
}