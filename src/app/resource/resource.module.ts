import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { ResourceComponent } from "./resource.component";
import { ResourceListComponent } from "./components/resource-list/resource-list.component";
import { ResourceSearchComponent } from "./components/resource-search/resource-search.component";
import { ResourceUpdateComponent } from "./components/resource-update/resource-update.component";
import { ResourceDetailComponent } from "./components/resource-detail/resource-detail.component";

@NgModule({
    declarations: [
        ResourceListComponent,
        ResourceSearchComponent,
        ResourceUpdateComponent,
        ResourceDetailComponent,
        ResourceComponent

    ],
    exports: [
        ResourceComponent
    ],
    imports: [
        CommonModule  // note 如果此 module 中有组件想要使用 ngFor 指令，则必须引入 CommonModule 组件
    ]
    
})

export class ResourceModule {

}