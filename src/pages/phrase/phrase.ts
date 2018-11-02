import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {PhraseService} from "../../providers/phrase-service";
import { GiphyService } from '../../providers/giphy-service';

/**
 * Generated class for the PhrasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phrase',
  templateUrl: 'phrase.html',
})
export class PhrasePage {

  private phrases: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public phraseService: PhraseService, public giphyService: GiphyService) {
  }

  ionViewDidLoad() {
    this.phraseService.getPhrases().subscribe(phrases => {
      this.phrases = phrases;
      for (const phrase of this.phrases) {
        this.giphyService.get(phrase.content).subscribe(url => {
          phrase.giphyUrl = url
        });
      }
    })
  }



}
