import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PhraseService} from "../../providers/phrase-service";

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
  public yesPercentage: string;
  public noPercentage: string;
  public buttonActive: boolean = true;
  public submitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public phraseService: PhraseService) {
  }



  ionViewWillEnter (){

    this.phraseService.getPhrase().subscribe(phrase => {
      this.phrase = phrase;

    })
  }

  next(){
    this.phraseService.getPhrase().subscribe(phrase => {
      this.phrase = phrase;
      this.buttonActive = true;
      this.submitted = false;


    })
  }

  sendAnswer(answer: string){
    this.phraseService.sendAnswer(answer, this.phrase.id).subscribe(phrase => {
      this.phrase = phrase;
      this.buttonActive = false;

      console.log("yesPercentage: "+(this.phrase.yes/(this.phrase.no+this.phrase.yes)));
      console.log("noPercentage: "+(this.phrase.no/(this.phrase.no+this.phrase.yes)));
      this.yesPercentage = (this.phrase.yes/(this.phrase.no+this.phrase.yes)*100).toFixed(1) + "%";
      this.noPercentage = (this.phrase.no/(this.phrase.no+this.phrase.yes)*100).toFixed(1) + "%";

      this.submitted = true;

    })

  }


}
