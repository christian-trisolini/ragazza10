import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PhraseService} from "../../providers/phrase-service";
import {GiphyService} from '../../providers/giphy-service';

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

  public phrase: any;
  public yesPercentage: number;
  public noPercentage: number;
  public buttonActive: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public phraseService: PhraseService, public giphyService: GiphyService) {
  }



  ionViewWillEnter (){

    this.phraseService.getPhrase().subscribe(phrase => {
      this.phrase = phrase;
      this.giphyService.get(phrase.content).subscribe(url => {
        phrase.giphyUrl = url
      });

    })
  }

  next(){
    this.phraseService.getPhrase().subscribe(phrase => {
      this.phrase = phrase;
      this.buttonActive = true;
      this.giphyService.get(phrase.content).subscribe(url => {
        phrase.giphyUrl = url
      });

    })
  }

  sendAnswer(answer: string){
    this.phraseService.sendAnswer(answer, this.phrase.id).subscribe(phrase => {
      this.phrase = phrase;
      this.buttonActive = false;
      this.giphyService.get(phrase.content).subscribe(url => {
        phrase.giphyUrl = url
      });

      console.log("yesPercentage: "+(this.phrase.yes/(this.phrase.no+this.phrase.yes)));
      console.log("noPercentage: "+(this.phrase.no/(this.phrase.no+this.phrase.yes)));
      this.yesPercentage = (this.phrase.yes/(this.phrase.no+this.phrase.yes));
      this.noPercentage = (this.phrase.no/(this.phrase.no+this.phrase.yes));
    })

  }


}
