// 告诉angular使用哪个模块启动整个应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // 整个应用的主模块


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
