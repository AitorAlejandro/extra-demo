import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstantsService } from './config/app-constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css'],
})
export class AppComponent {

  constructor(
    private readonly translate: TranslateService,
    private readonly appConstatns: AppConstantsService
  ) {
    translate.setDefaultLang(appConstatns.DEFAULT_LANGUAGE);
    translate.use('es');
  }
}
