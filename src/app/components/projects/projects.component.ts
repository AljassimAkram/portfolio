
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectItem {
  title: string;
  timeline: string;
  description: string;
  learnings: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectItem[] = [
    {
      title: 'DA Bubble',
      timeline: 'Duration: 3 weeks',
      description:
        'This app is a Slack clone with intuitive interface, real-time messaging, and robust channel organization.',
      learnings: [
        'How have you organised your work process',
        'How have you tracked and analysed your work',
        'How have you shared your work experience',
      ],
      technologies: ['Angular', 'Firebase'],
    },
    {
      title: 'Sharkie',
      timeline: 'Duration: 2 weeks',
      description: 'A playful jump-and-run game built for the browser.',
      learnings: ['Built game loop and collision logic', 'Implemented sprite animations', 'Balanced fun with accessibility'],
      technologies: ['JavaScript'],
    },
    {
      title: 'Join',
      timeline: 'Duration: 3 weeks',
      description: 'A kanban board inspired by Trello for collaborative task management.',
      learnings: ['Modular component design', 'Drag-and-drop interactions', 'Team workflow planning'],
      technologies: ['TypeScript'],
    },
    {
      title: 'Ongoing Project',
      timeline: 'In progress',
      description: 'Building a modern web experience with reusable UI components and strong documentation.',
      learnings: ['Design system thinking', 'Documentation-first approach', 'Responsive testing'],
      technologies: ['Angular'],
    },
  ];
}
