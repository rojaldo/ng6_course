import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit, OnChanges {

  @Input() date: any;
  result: any;
  responded: boolean = false;

  constructor(public service: RequestService, private embedService: EmbedVideoService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleSelect();
  }

  handleSelect() {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
    url += '&date=' + this.date.year + '-' +
      this.date.month + '-' +
      this.date.day;
    console.log(url);
    this.getApiInfo(url);
  }


  getVideo(url: string) {
    return this.embedService.embed(url);
  }

  getURL(url: string): string {
    let videoID: string = url.split('v=')[0];
    const ampersandPosition = videoID.indexOf('&');
    if (ampersandPosition !== -1) {
      videoID = videoID.substring(0, ampersandPosition);
    }
    return videoID;
  }

  getApiInfo(url?: string) {
    if (!url) {
      url = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
    }
    this.service.getRequest(url).subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.responded = true;
  }

  processError(error: any) {
  }

  processFinal() { }

}
