import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Video } from './video.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService
{
    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string){ }

    getVideos(): Observable<Video[]>
    {
        let videosUrl: string = `${this.originUrl}/api/videos`;
        return this.http.get(videosUrl).map(this.extractArrayData);
    }

    getVideo(id: number): Observable<Video> {
        let detailVideolUrl: string = `${this.originUrl}/api/videos/${id}`;
        return this.http.get(detailVideolUrl).map(this.extractData);
    }

    updateVideo(video: Video): Observable<boolean> {
        let updateVideosUrl: string = `${this.originUrl}/api/videos/${video.id}`;
        let body = JSON.stringify(video);
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        return this.http.put(updateVideosUrl, body, options).map(res => res.json());
    }

    createVideo(video: Video): Observable<number> {
        let saveVideosUrl: string = `${this.originUrl}/api/videos`;
        let body = JSON.stringify(video);
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        return this.http.post(saveVideosUrl, body, options).map(res => res.json());
    }

    deleteVideo(id: number): Observable<boolean> {
        let deleteVideoUrl: string = `${this.originUrl}/api/videos/${id}`;
        return this.http.delete(deleteVideoUrl).map(res => res.json());
    }

    private extractArrayData(res: Response) {
        let body = res.json();
        let returnObj: any;
        if (body) {
            returnObj = body.map(vid => {
                return new Video(vid.id, vid.title, vid.description); 
            });
        }
        return returnObj || {};
    }

    private extractData(res: Response) {
        let body = res.json();
        let returnObj: any;
        if (body) {
            returnObj = new Video(body.id, body.title, body.description);
        }
        return returnObj || {};
    }
}