
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillItem {
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
   skills: SkillItem[] = [
    { name: 'Angular' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'REST-API' },
    { name: 'Firebase' },
    { name: 'Git' },
    { name: 'Material Design' },
    { name: 'Scrum' },
  ];

  learning: SkillItem[] = [
    { name: 'React' },
    { name: 'Vue.js' },
  ];
}
