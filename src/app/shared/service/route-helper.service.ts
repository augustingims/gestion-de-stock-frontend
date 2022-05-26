import { Injectable } from '@angular/core';
import { SeoSocialShareService } from 'ngx-seo';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteHelperService {

  constructor(
    private seoService: SeoSocialShareService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(r => r.outlet === 'primary')
      )
      .subscribe(activeRoute => {
        const seo = activeRoute.snapshot.data.seo;
        this.seoService.setData({
          title: seo?.title,
          description: seo?.description,
          author: 'Team Dev Tech',
          type: 'website',
          image: 'https://farm66.staticflickr.com/65535/52058907065_b0eaf911a1_z.jpg',
          url: 'https://' + this.router.routerState.snapshot.url,
        });
      });
  }
}