import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './pages/music/music.component';
import { VideoComponent } from './pages/video/video.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtisteComponent } from './pages/artiste/artiste.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'music', component: MusicComponent },
  { path: 'video', component: VideoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'artiste', component: ArtisteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
