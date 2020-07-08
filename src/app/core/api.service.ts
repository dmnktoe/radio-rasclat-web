import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
/* import { Socket } from 'ngx-socket-io'; */

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient /*, public socket: Socket*/) {}

  getArtists() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/artists')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Artists konnten nicht geladen werden.'
          )
        )
      );
  }

  getArtist({ artistId }: { artistId: any }) {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/artists/artist/' + artistId)
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Der Interpret konnte nicht geladen werden.'
          )
        )
      );
  }

  getGenres() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/genres')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Genres konnten nicht geladen werden.'
          )
        )
      );
  }

  getRecordings() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/recordings')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Recordings konnten nicht geladen werden.'
          )
        )
      );
  }

  getRecording({ recordingId }: { recordingId: any }) {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/recordings/recording/' + recordingId)
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Aufnahme konnte nicht geladen werden.'
          )
        )
      );
  }

  getHotRecording() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/recordings/most-viewed')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Aufnahme konnte nicht geladen werden.'
          )
        )
      );
  }

  getHotRecordings() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/recordings/top-3-viewed')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Aufnahme konnte nicht geladen werden.'
          )
        )
      );
  }

  getShows() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/shows')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Shows konnten nicht geladen werden.'
          )
        )
      );
  }

  getShowsRecentlyUpdated() {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/shows/recently-updated')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Shows konnten nicht geladen werden.'
          )
        )
      );
  }

  getShow({ showId }: { showId: any }) {
    return this.httpClient
      .cache()
      .get(environment.serverUrl + '/shows/show/' + showId)
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
          )
        )
      );
  }

  getCurrentShow() {
    return this.httpClient
      .get(environment.serverUrl + '/meta/shows/current')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die aktuelle Show konnte nicht geladen werden.'
          )
        )
      );
  }

  getNextShow() {
    return this.httpClient.get(environment.serverUrl + '/meta/shows/next').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die nächste Show konnte nicht geladen werden.'
        )
      )
    );
  }

  getSchedule() {
    return this.httpClient
      .cache()
      .get('/meta/schedule')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
          )
        )
      );
  }

  getLiveInfo() {
    return this.httpClient
      .cache()
      .get('/meta/live-info')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
          )
        )
      );
  }

  /* getCurrentTrackLive() {
    return this.socket.fromEvent<any>('currentTrack').map(data => data);
  }

  getCurrentShowLive() {
    return this.socket.fromEvent<any>('currentShow').map(data => data);
  } */
}
