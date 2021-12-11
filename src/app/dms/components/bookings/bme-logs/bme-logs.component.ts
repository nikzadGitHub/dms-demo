import { Component, OnInit } from '@angular/core';


@Component ({
    selector: 'app-bme-logs',
    templateUrl: './bme-logs.component.html',
    styles: [

    ]
})
export class BmeLogsComponent implements OnInit{
    onSaveForm(data)
    {
        console.warn(data);
    }
    
    ngOnInit(): void {}
}