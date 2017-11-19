import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class USMService {  

    private api_host: string = 'https://api.usmontagnarde.fr/v3/';

    static get parameters() {
        return [[Http]];
    }
  
    constructor(
        private http:Http
    ) {}

    // Request API REST
    // with correct headers data
    private request(url) {

        // Set Authorization header for USM Android app
        let opt: RequestOptions
        let USMHeaders: Headers = new Headers
        USMHeaders.set('Authorization', 'USM 8fe8966188fb79a335f0397428a9ca10c72a4816');

        opt = new RequestOptions({
            headers: USMHeaders
        });

        return this.http.get(url, opt).map(res => res.json());
   
    }


    //
    // API ENDPOINTS
    //
  
    // Get all posts
    // @param page : number page number
    searchPosts(q: any) {
        let url = this.api_host + 'search?q=' + q;
        return this.request(url);
    }

    // Get all posts
    // @param page : number page number
    getPosts(page: number = 1) {
        let url = this.api_host + 'posts?page=' + page;
        return this.request(url);
    }

    // Get post
    // @param id : number post id
    getPost(id) {
        let url = this.api_host + 'posts/' + id;
        return this.request(url);
    }


    // Get post related posts
    // @param id : number post id
    getPostRelatedPosts(id) {
        let url = this.api_host + 'posts/' + id + '/relateds';
        return this.request(url);
    }

    // Get all galleries
    // @param page : number page number
    getGalleries(page: number = 1) {
        let url = this.api_host + 'galleries?page=' + page;
        return this.request(url);
    }

    // Get gallery
    // @param id : number Gallery ID
    getGallery(id: number) {
        let url = this.api_host + 'galleries/' + id;
        return this.request(url);
    }

    // Get social posts
    getSocial() {
        let url = this.api_host + 'social';
        return this.request(url);
    }

    // Get teams
    getTeams() {
        let url = this.api_host + 'teams';
        return this.request(url);
    }

    // Get season
    getSeason(id, season = null) {
        let url = this.api_host + 'teams/' + id + '/season?season=' + (season ? season : '');
        return this.request(url);
    }

    // Get ranks
    getRanks(id, season = null) {
        let url = this.api_host + 'teams/' + id + '/ranking?season=' + (season ? season : '');
        return this.request(url);
    }

    // Get season
    getSeasons() {
        let url = this.api_host + 'seasons';
        return this.request(url);
    }

    // Get teams
    getRecap(id) {
        let url = this.api_host + 'teams/' + id + '/recap';
        return this.request(url);
    }

    // Send encouragement
    sendEncouragement(id) {
        let url = this.api_host + 'live/encouragement?match=' + id;
        return this.request(url);
    }


}