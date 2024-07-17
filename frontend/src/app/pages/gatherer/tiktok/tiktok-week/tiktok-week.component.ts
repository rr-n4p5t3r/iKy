import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'ngx-tiktok-week',
    templateUrl: './tiktok-week.component.html',
    styleUrls: ['./tiktok-week.component.scss'],
})
export class TiktokWeekComponent implements OnInit, AfterViewInit {
    @ViewChild('nbCardTiktokWeek', { static: true }) private cardContainer: ElementRef;
    @Input() private data: any;
    private tiktokWeek: any;

    private card: any;
    private width: number;
    private height: number;
    showLegend = false;
    showLabels = true;

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
        console.log('Tiktok Week Component');

        this.tiktokWeek = this.data.result[4].graphic[6].week;
        console.log('TiktokWeek', this.tiktokWeek);
    }

    openDialog(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
    }
}
