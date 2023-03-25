import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterControllerComponent } from './counter/controller/counter-controller.component';
import { CounterComponent } from './counter/counter.component';
import { CounterViewComponent } from './counter/view/counter-view.component';

@NgModule({
  declarations: [
    // 声明模块中的东西，只能声明组件 指令 管道
    AppComponent,
    CounterComponent,
    CounterViewComponent,
    counterControllerComponent
  ],
  imports: [
    // 声明该模块依赖的模块
    BrowserModule // 必须依赖此模块，否则无法运行项目
  ],
  providers: [],
  bootstrap: [
    // 声明主组件
    AppComponent
  ]
})
export class AppModule { }
