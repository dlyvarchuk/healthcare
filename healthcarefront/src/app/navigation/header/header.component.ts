import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  isAuthStaff = false;
  authSubscription: Subscription;
  staffAuthSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.staffAuthSubscription = this.authService.staffAuthChange.subscribe(authStatus => {
      this.isAuthStaff = authStatus;
    });
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.staffAuthSubscription.unsubscribe();
  }

}
