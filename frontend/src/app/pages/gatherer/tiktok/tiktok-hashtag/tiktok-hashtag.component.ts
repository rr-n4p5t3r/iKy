import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'ngx-tiktok-hashtag',
    templateUrl: './tiktok-hashtag.component.html',
    styleUrls: ['./tiktok-hashtag.component.scss'],
})
export class TiktokHashtagComponent implements OnInit, AfterViewInit {
    @ViewChild('nbCardTiktokHashtag', { static: false }) private cardContainer: ElementRef;
    @Input() private data: any;
    private tiktokHashtag: any;

    constructor(private dialogService: NbDialogService) {}

    ngOnInit() {
        this.tiktokHashtag = this.data.result[4].graphic[2].hashtags;
        console.log('Tiktok Hashtag Component');
        console.log(this.tiktokHashtag);
    }

    ngAfterViewInit() {
    }

    openDialog(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
    }
}
