import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from './subject';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  @Input() subject: Subject | null = null;
  @Output() edit = new EventEmitter<Subject>();
}
