# Imports

Angular Core

```typescript
import { Component } from '@angular/core'; // Component decorator
import { NgModule } from '@angular/core'; // NgModule decorator
import { RouterModule, Routes } from '@angular/router'; // Routing module
import { FormsModule } from '@angular/forms'; // Forms module
import { ReactiveFormsModule } from '@angular/forms'; // Reactive forms module
import { HttpClientModule } from '@angular/common/http'; // HTTP client module
import { BrowserModule } from '@angular/platform-browser'; // Browser module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animations module
import { CommonModule } from '@angular/common'; // Common module
import { NgModel } from '@angular/forms'; // NgModel directive
import { NgForm } from '@angular/forms'; // NgForm directive
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Form group, form control, validators
import { HttpClient } from '@angular/common/http'; // HTTP client
import { ActivatedRoute } from '@angular/router'; // Route parameters
import { Router } from '@angular/router'; // Router service
import { Title } from '@angular/platform-browser'; // Title service
import { Meta } from '@angular/platform-browser'; // Meta service
import { Renderer2 } from '@angular/core'; // Renderer2 service
import { ElementRef } from '@angular/core'; // ElementRef service
import { ViewChild } from '@angular/core'; // ViewChild decorator
import { ViewContainerRef } from '@angular/core'; // ViewContainerRef service
import { ComponentFactoryResolver } from '@angular/core'; // ComponentFactoryResolver service
import { ChangeDetectorRef } from '@angular/core'; // ChangeDetectorRef service
import { Pipe, PipeTransform } from '@angular/core'; // Pipe decorator, PipeTransform interface
import { Injectable } from '@angular/core'; // Injectable decorator
import { EventEmitter } from '@angular/core'; // EventEmitter class
import { Output } from '@angular/core'; // Output decorator
import { Input } from '@angular/core'; // Input decorator
import { HostListener } from '@angular/core'; // HostListener decorator
import { HostBinding } from '@angular/core';  // HostBinding decorator
import { ContentChild } from '@angular/core'; // ContentChild decorator
import { ContentChildren } from '@angular/core';  // ContentChildren decorator
import { QueryList } from '@angular/core';  // QueryList class
import { AfterContentInit } from '@angular/core'; // AfterContentInit interface
import { AfterContentChecked } from '@angular/core';  // AfterContentChecked interface
import { AfterViewInit } from '@angular/core';  // AfterViewInit interface
import { AfterViewChecked } from '@angular/core'; // AfterViewChecked interface
import { OnInit } from '@angular/core'; // OnInit interface
import { OnDestroy } from '@angular/core';  // OnDestroy interface
import { OnChanges } from '@angular/core';  // OnChanges interface
import { SimpleChanges } from '@angular/core';  // SimpleChanges class
import { DoCheck } from '@angular/core';  // DoCheck interface
import { KeyValueDiffers } from '@angular/core';  // KeyValueDiffers service
import { KeyValueDiffer } from '@angular/core'; // KeyValueDiffer interface
import { KeyValueChanges } from '@angular/core';  // KeyValueChanges interface
import { KeyValueChangeRecord } from '@angular/core'; // KeyValueChangeRecord interface 
import { IterableDiffers } from '@angular/core';  // IterableDiffers service
import { IterableDiffer } from '@angular/core'; // IterableDiffer interface
import { IterableChanges } from '@angular/core';  // IterableChanges interface
import { IterableChangeRecord } from '@angular/core'; // IterableChangeRecord interface
import { ChangeDetectionStrategy } from '@angular/core';  // ChangeDetectionStrategy enum
import { ChangeDetectorRef } from '@angular/core';  // ChangeDetectorRef service
import { NgZone } from '@angular/core'; // NgZone service
import { ApplicationRef } from '@angular/core'; // ApplicationRef service
import { ComponentRef } from '@angular/core'; // ComponentRef class
import { ComponentFactory } from '@angular/core'; // ComponentFactory class
import { ComponentFactoryResolver } from '@angular/core'; // ComponentFactoryResolver service
import { ViewContainerRef } from '@angular/core'; // ViewContainerRef service
import { TemplateRef } from '@angular/core';  // TemplateRef class
import { EmbeddedViewRef } from '@angular/core';  // EmbeddedViewRef class
```

Angular Material

```typescript
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
```

RxJS

```typescript
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subscription } from 'rxjs/Subscription';
import { from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { merge } from 'rxjs';
import { zip } from 'rxjs';
import { combineLatest } from 'rxjs';
import { concat } from 'rxjs';
import { forkJoin } from 'rxjs';
import { race } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { reduce } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { scan } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { exhaustMap } from 'rxjs/operators';
import { concatMap } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { share } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import { buffer } from 'rxjs/operators';
import { bufferCount } from 'rxjs/operators';
import { bufferTime } from 'rxjs/operators';
import { bufferToggle } from 'rxjs/operators';
import { bufferWhen } from 'rxjs/operators';
import { combineAll } from 'rxjs/operators';
import { concatAll } from 'rxjs/operators';
import { count } from 'rxjs/operators';
import { endWith } from 'rxjs/operators';
import { every } from 'rxjs/operators';
import { exhaust } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { groupBy } from 'rxjs/operators';
import { ignoreElements } from 'rxjs/operators';
import { isEmpty } from 'rxjs/operators';
import { last } from 'rxjs/operators';
import { max } from 'rxjs/operators';
import { mergeAll } from 'rxjs/operators';
import { min } from 'rxjs/operators';
import { pairwise } from 'rxjs/operators';
import { partition } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';
```

Firebase

```typescript
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireRemoteConfigModule } from '@angular/fire/remote-config';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
```