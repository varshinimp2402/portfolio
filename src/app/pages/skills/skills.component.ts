import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    java: string = 'assets/java.jpg';
    python: string = 'assets/python.jpeg';
    angular: string = 'assets/angular.jpgf';
    ts: string = 'assets/typescriot.png';
    cpp: string = 'assets/cpp.png';
    js: string = 'assets/javascript.png';
    css: string = 'assets/css.jpeg';
    sql: string = 'assets/sql.png';
    mongodb: string = 'assets/mongodb.png';
    git: string = 'assets/git.png';
    github: string = 'assets/github.png';
    jira: string = 'assets/jira.png';
    postman: string = 'assets/postman.png';
    azure: string = 'assets/azure.png';
    aws: string = 'assets/aws.webp';
    cybersecurity: string = 'assets/cybersecurity.webp';
    sdlc: string = 'assets/sdlc.webp';
    osdu: string = 'assets/osdu.png';
}
