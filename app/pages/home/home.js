import {Page} from 'ionic/ionic';
import {Http} from 'angular2/http';

@Page({
 	templateUrl: 'build/pages/home/home.html',
})

export class HomePage {
  	constructor(http: Http) {
        this.data = {};
        this.data.username = '';
        this.data.response = '';

        this.http = http;
    }

  	submit() {
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        var data = JSON.stringify({username: this.data.username});
        
        this.http.post(link, data)
        .subscribe(data => {
        	this.data.response = data._body;
        }, error => {
            console.log("Oooops!");
        });
  }
}
