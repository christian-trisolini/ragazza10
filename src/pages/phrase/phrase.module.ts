import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PhrasePage} from './phrase';
import {PhraseService} from "../../providers/phrase-service";
import {GiphyService} from '../../providers/giphy-service';


@NgModule({
  declarations: [
    PhrasePage
  ],
  imports: [
    IonicPageModule.forChild(PhrasePage),
  ],
  providers: [
    PhraseService,
    GiphyService,
  ]
})
export class PhrasePageModule {
}
