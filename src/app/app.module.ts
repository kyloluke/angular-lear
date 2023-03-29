import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResourceModule } from './resource/resource.module';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    // 声明模块中的东西，只能声明组件 指令 管道
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    // 声明该模块依赖的模块
    BrowserModule, // 必须依赖此模块，否则无法运行项目
    ResourceModule
  ],
  providers: [],
  bootstrap: [
    // 声明主组件
    AppComponent
  ]
})
export class AppModule { }
