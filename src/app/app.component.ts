import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 属性
  title = 'hello，大家好~~~';

  // 方法
  getAge() {
    return 18
  }

}



