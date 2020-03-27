import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MoviesAPIService } from '../services/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  movies: any;

  constructor(public api: MoviesAPIService, public loadingController: LoadingController) {}

  ngOnInit() {
    this.getMovies();
  }

  async getMovies() {
    const loading = await this.loadingController.create({});
    await loading.present();
    await this.api.getMovies()
      .subscribe(res => {
        console.log(res);
        this.movies = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
