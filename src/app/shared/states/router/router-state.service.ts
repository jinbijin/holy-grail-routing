import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  PRIMARY_OUTLET,
  Router,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';
import { ActivatedUrl } from './activated-url.type';
import { RouterCommands } from './router-outlets.type';

@Injectable()
export class RouterStateService {
  constructor(private readonly router: Router) {}

  get urlTree(): UrlTree {
    return this.router.parseUrl(this.router.url);
  }

  activatedUrlTree(activatedRoute: ActivatedRouteSnapshot): UrlTree {
    const activatedUrl = this.getActivatedUrl(activatedRoute);
    const urlTree = this.urlTree;
    if (urlTree.root.children[activatedUrl.outlet]) {
      urlTree.root.children[activatedUrl.outlet] = new UrlSegmentGroup(activatedUrl.url, {});
    }
    return urlTree;
  }

  navigate(commands: RouterCommands, activatedRoute?: ActivatedRoute): Promise<boolean> {
    const urlTree = activatedRoute ? this.activatedUrlTree(activatedRoute.snapshot) : this.urlTree;
    for (const [outlet, outletCommands] of Object.entries(commands)) {
      if (outletCommands === null) {
        delete urlTree.root.children[outlet];
      }

      if (!outletCommands?.length) {
        break;
      }

      if (!urlTree.root.children[outlet]) {
        throw new Error(`Navigation commands cannot be performed on outlet ${outlet} with empty route.`);
      }

      const outletUrlSegmentGroup = urlTree.root.children[outlet];

      if (outletCommands[0] === '/') {
        outletCommands.shift();
        outletUrlSegmentGroup.segments = [];
      }

      if (outletCommands[0] === '.') {
        outletCommands.shift();
      }

      this.applyNavigationCommands(outletCommands, outlet, outletUrlSegmentGroup);

      if (outletUrlSegmentGroup.segments.length === 0) {
        delete urlTree.root.children[outlet];
      }
    }
    return this.router.navigateByUrl(urlTree);
  }

  private applyNavigationCommands(outletCommands: any[], outlet: string, outletUrlSegmentGroup: UrlSegmentGroup) {
    let allowParent = true;
    for (const outletCommand of outletCommands) {
      if (outletCommand === '..' && allowParent && outletUrlSegmentGroup.segments.length > 0) {
        outletUrlSegmentGroup.segments.pop();
      } else {
        allowParent = false;
        outletUrlSegmentGroup.segments.push(new UrlSegment(outletCommand.toString(), {}));
      }
    }
  }

  private getActivatedUrl(
    activatedRoute: ActivatedRouteSnapshot | null,
    url: UrlSegment[] = [],
    outlet: string = PRIMARY_OUTLET
  ): ActivatedUrl {
    if (!activatedRoute) {
      return { outlet, url };
    }

    return this.getActivatedUrl(
      activatedRoute.parent,
      [...activatedRoute.url, ...url],
      activatedRoute.outlet === PRIMARY_OUTLET ? outlet : activatedRoute.outlet
    );
  }
}
