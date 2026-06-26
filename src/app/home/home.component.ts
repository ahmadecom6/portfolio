import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { HoverGalleryComponent } from '../shared/hover-gallery/hover-gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HoverGalleryComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);

  gallery = [
    'assets/images/work-1.jpg',
    'assets/images/work-2.jpg',
    'assets/images/work-3.jpg',
    'assets/images/work-4.jpg',
    'assets/images/work-5.jpg',
    'assets/images/bike-profile.jpg'
  ];

  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit() {
    const root = this.el.nativeElement;

    if (this.reduced) {
      root.querySelectorAll('.reveal').forEach((e: Element) => e.classList.add('shown'));
      return;
    }

    gsap.timeline().from(root.querySelectorAll('.hero .anim'), {
      y: 42,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out'
    });

    if (!('IntersectionObserver' in window)) {
      root.querySelectorAll('.reveal').forEach((e: Element) => e.classList.add('shown'));
      return;
    }

    const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((ent: IntersectionObserverEntry) => {
        if (ent.isIntersecting) {
          ent.target.classList.add('shown');
          gsap.from(ent.target.querySelectorAll('.stagger'), {
            y: 34,
            opacity: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out'
          });
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.28 });

    root.querySelectorAll('.reveal').forEach((s: Element) => io.observe(s));
  }
}
