import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: 'app/list/list.component.html',
  styleUrls: ['app/list/list.component.css'],
  host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
     '[style.position]': "'absolute'",
     '[style.width]': "'100%'"
  },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => void', animate(200, style({transform: 'translateX(-100%)'})))
    ])
  ]
})

export class ListComponent {
    private historyDatas : Array<HistoryData> = [
        {title: 'event1', year: 2008, month:8, date:31},
        {title: 'event2', year: 2008, month:9, date:1},
        {title: 'event1', year: 2009, month:8, date:31},
        {title: 'event2', year: 2009, month:9, date:1},
        {title: 'event3', year: 2010, month:2, date:1},
        {title: 'event1', year: 2011, month:8, date:31},
        {title: 'event2', year: 2011, month:9, date:1}
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
        return list;
    }

    private groupBy(arr:Array<any>, key:string) {
        var newArr:Array<GroupData> = [],
            types = {},
            newItem:any,
            i:number,
            j:number,
            cur:any;　
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
