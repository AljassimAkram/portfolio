
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  project: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Sahra Mueller',
      role: 'Project: DA Bubble',
      quote:
        'Claudia had to develop, format and deliver content in collaboration with the team. She was a reliable and friendly person.',
      project: 'Linked in Profile',
    },
    {
      name: 'James Rugman',
      role: 'Project: Join',
      quote:
        'Claudia is a reliable and friendly person. Works in a structured way and wrote a clear code. I recommend her as a colleague.',
      project: 'Linked in Profile',
    },
    {
      name: 'Evelyn Marx',
      role: 'Project: Sharkie',
      quote:
        'She is a trustworthy teamplayer and can work well within the stress of deadlines. Structured work and clear code.',
      project: 'Linked in Profile',
    },
  ];
}
