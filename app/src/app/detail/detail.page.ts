import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MoviesAPIService } from '../services/movies-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  movies: any;
  movie: any = {};

  constructor(public api: MoviesAPIService, public loadingController: LoadingController,
                      public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    //this.getMovies();
    this.getMovie();
  }

  async getMovies() {
    const loading = await this.loadingController.create({});
    await loading.present();
    await this.api.getMovies()
      .subscribe(res => {
        console.log(res);
        this.movies = res;
        this.movie = this.movies[this.route.snapshot.paramMap.get('id')];
        console.log(this.movie)
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getMovie() {
    const loading = await this.loadingController.create({});
    await loading.present();
    await this.api.getMovieById(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.movie = res[0];
        console.log(this.movie)
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async delete(id) {
    alert("This movie will be deleted.");
    const loading = await this.loadingController.create({});
    await loading.present();
    await this.api.deleteMovie(id)
      .subscribe(res => {
        loading.dismiss();
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
