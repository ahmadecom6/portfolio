import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);

  tech = [
    { key: 'html5', label: 'HTML5', icon: 'html5' },
    { key: 'css3', label: 'CSS3', icon: 'css3' },
    { key: 'javascript', label: 'JavaScript', icon: 'javascript' },
    { key: 'jquery', label: 'jQuery', icon: 'jquery' },
    { key: 'python', label: 'Python', icon: 'python' },
    { key: 'django', label: 'Django', icon: 'django' },
    { key: 'sqlite', label: 'SQLite', icon: 'sqlite' },
    { key: 'git', label: 'Git', icon: 'git' },
    { key: 'github', label: 'GitHub', icon: 'github' },
    { key: 'vscode', label: 'VS Code', icon: 'vscode' },
    { key: 'bootstrap', label: 'Bootstrap', icon: 'bootstrap' },
    { key: 'angular-learning', label: 'Angular Learning', icon: 'text', short: 'NG' }
  ];

  ngAfterViewInit() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(this.el.nativeElement.querySelectorAll('.service-card'), {
      y: 30,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power3.out'
    });
  }
}
