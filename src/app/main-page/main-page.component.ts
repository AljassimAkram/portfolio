import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { WhyMeComponent } from '../components/why-me/why-me.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    WhyMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSection?: ElementRef<HTMLElement>;
  showHeader = false;

  ngAfterViewInit(): void {
    this.updateHeaderVisibility();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateHeaderVisibility();
  }

  private updateHeaderVisibility(): void {
    const heroHeight = this.heroSection?.nativeElement.offsetHeight ?? 0;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    this.showHeader = scrollTop > heroHeight * 0.6;
  }
}