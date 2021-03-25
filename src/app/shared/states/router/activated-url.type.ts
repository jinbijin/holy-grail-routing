import { UrlSegment } from '@angular/router';

export interface ActivatedUrl {
  outlet: string;
  url: UrlSegment[];
}
