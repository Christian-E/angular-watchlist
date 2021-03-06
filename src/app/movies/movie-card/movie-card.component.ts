import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie|undefined = undefined;

  public isOnWatchlist = false;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    if(this.movie !== undefined) {
      this.watchlistService.getIsOnWatchlist(this.movie).subscribe({
        next: data => this.isOnWatchlist = data,
        error: e => console.error(e)
      }
      )
    }
  }

  public addToWatchlist() {
    if(this.movie !== undefined) {
      this.watchlistService.addToWatchlist(this.movie);
    }
  }

  public removeFromWatchlist() {
    if(this.movie !== undefined) {
      this.watchlistService.removeFromWatchlist(this.movie);
    }
  }
}
