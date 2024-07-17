import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'ngx-tiktok-videos',
    templateUrl: './tiktok-videos.component.html',
    styleUrls: ['./tiktok-videos.component.scss']
})
export class TiktokVideosComponent implements OnInit {
    @ViewChild('nbCardGraphs', { static: false }) private nbCardContainer: ElementRef;
    @Input() private data: any;
    private tiktokVideos: any;
    private validation: any;

    constructor(private dialogService: NbDialogService) {}
  
    ngOnInit() {
        console.log('Tiktok Posts Component');
        this.tiktokVideos = this.data.result[4].graphic[7].videos;
        this.validation = this.data.result[2].validation;
    }

    openDialog(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
    }
}
