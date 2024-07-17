import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'ngx-tiktok-posts',
    templateUrl: './tiktok-posts.component.html',
    styleUrls: ['./tiktok-posts.component.scss']
})
export class TiktokPostsComponent implements OnInit, AfterViewInit {
    @ViewChild('nbCardTiktokPosts', { static: false }) private cardContainer: ElementRef;
    @Input() private data: any;
    private tiktokPosts: any;

    private card: any;
    private width: number;
    private height: number;
    // options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = false;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = '';
    yAxisLabel: string = '';
    legendPosition: string = 'below';
    timeline: boolean = false;
    colorScheme = {
      domain: [
          '#80deea',
          '#4dd0e1',
          '#26c6da',
          '#00bcd4',
          '#00acc1',
          '#0097a7',
          '#00838f',
          '#006064',
      ],
    };

    constructor(private dialogService: NbDialogService) {}

    ngOnInit() {
        this.card = this.cardContainer.nativeElement;
    }

    ngAfterViewInit() {
        this.width = this.cardContainer.nativeElement.parentNode.parentNode.clientWidth;
        this.height = this.cardContainer.nativeElement.parentNode.parentNode.clientHeight - 55;
        console.log('Tiktok Posts Component');

        this.tiktokPosts = this.data.result[4].graphic[1].postslist;
        console.log('Tiktok Posts Data', this.tiktokPosts);
    }

    openDialog(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
    }
}
