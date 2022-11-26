import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-otpverification',
    templateUrl: './otpverification.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class OtpVerificationComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    password2!: string;

    constructor(public layoutService: LayoutService) { }
}
