import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'ngx-tiktok-resume',
    templateUrl: './tiktok-resume.component.html',
    styleUrls: ['./tiktok-resume.component.scss'],
})
export class TiktokResumeComponent implements OnInit, AfterViewInit {

    @ViewChild('nbCardTiktokResume', { static: true }) private cardContainer: ElementRef;
    @Input() private data: any;
    private tiktokResume: any;

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

    private card: any;
    private width: number;
    private height: number;

    constructor(private dialogService: NbDialogService) {}

    ngOnInit() {
        this.card = this.cardContainer.nativeElement;
        console.log('Tiktok Resume data', this.tiktokResume);
    }

    ngAfterViewInit() {
        this.width = this.cardContainer.nativeElement.parentNode.parentNode.clientWidth;
        this.height = this.cardContainer.nativeElement.parentNode.clientHeight;
        console.log('Tiktok Resume Component');

        this.tiktokResume = this.data.result[4].graphic[8].resume.children.map(this.arrayAdecuate);
        console.log('Tiktok Resume data', this.tiktokResume);
    }

    arrayAdecuate(item: any, index: any, array: any) {
        if (array[index]['total']) {
            array[index].value = array[index]['total'];
            delete array[index].total;
        }
        return item;
    }

    openDialog(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
    }
}
