import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <div class="ui-body ui-body-a ui-corner-all year-block" *ngFor="let year of viewDatas();">
    <h2>{{year.key}}年</h2>
    <dl *ngFor="let month of year.datas">
        <dt>{{month.key}}月</dt>
        <dd *ngFor="let date of month.datas">
            {{date.key}}日
            <div *ngFor="let detail of date.datas">
                {{detail.title}}
            </div>
        </dd>
    </dl>
  </div>
  `
})

export class AppComponent {
    private historyDatas : Array<HistoryData> = [
        {title: 'event1', year: 2008, month:8, date:31},
        {title: 'event2', year: 2008, month:9, date:1},
        {title: 'event3', year: 2010, month:2, date:1}
    ];

    private viewDatas () {
        var list = this.groupBy(this.historyDatas, "year");
        var self = this;
        list.forEach(function(data,index,array){
            var monthList = self.groupBy(data.datas, "month");
            monthList.forEach(function(data,index,array){
                array[index].datas = self.groupBy(data.datas, "date");
            });
            array[index].datas = monthList;
        });

        console.log(list);
        return list;
    }

    private groupBy(arr:Array<any>, key:string) {
        var newArr:Array<GroupData> = [],
            types = {},
            newItem,
            i:number,
            j:number,
            cur;　
        for (i = 0, j = arr.length; i < j; i++) {
            cur = arr[i];
            if (!(cur[key] in types)) {
                types[cur[key]] = { key: cur[key], datas: [] };
                newArr.push(types[cur[key]]);
            }
            types[cur[key]].datas.push(cur);
        }
        return newArr;
    }
}

interface HistoryData {
    title: string;
    year: number;
    month: number;
    date: number;
}

class GroupData {
    key: string;
    datas: any[] = [];
}