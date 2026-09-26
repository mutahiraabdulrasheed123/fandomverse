import { RenderMode, ServerRoute } from '@angular/ssr';

// FandomVerse is a front-end project with its content stored in public JSON.
// Keep route rendering on the browser so the JSON is fetched from the same
// origin as the page instead of trying to fetch it during prerender/SSR.
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
