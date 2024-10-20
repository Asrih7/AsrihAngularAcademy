# Forms

Angular provides two types of forms:

- **Template-driven forms**
- **Reactive forms**

### Template-driven Forms

Template-driven forms are created using directives in the template. Angular automatically tracks the value and validity of the form controls.

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
```

### Reactive Forms

Reactive forms are created programmatically using form controls and form groups. They provide more control and flexibility compared to template-driven forms.

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```



Set Value in Template Driven forms in Angular

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  onSubmit(form: NgForm) {
    form.setValue({ name: 'John' });
  }
}
```



FormBuilder in Reactive Forms
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

SetValue & PatchValue in Angular
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.setValue({
      name: 'John',
      email: 'john.doe@gmail.com',
    });

    this.form.patchValue({
      name: 'Jane',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

StatusChanges in Angular Forms
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

ValueChanges in Angular Forms

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

FormControl

```ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = new FormControl('');

  onSubmit() {
    console.log(this.name.value);
  }
}
```

FormGroup

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

FormArray Example

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      emails: this.fb.array([]),
    });
  }

  get emails() {
    return this.form.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="emails">
    <div *ngFor="let email of emails.controls; let i = index">
      <input type="email" [formControlName]="i" />
      <button type="button" (click)="removeEmail(i)">Remove</button>
    </div>
  </div>
  <button type="button" (click)="addEmail()">Add Email</button>
  <button type="submit">Submit</button>
</form>
```

Build Dynamic or Nested Forms using FormArray

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      addresses: this.fb.array([]),
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="addresses">
    <div *ngFor="let address of addresses.controls; let i = index">
      <div [formGroupName]="i">
        <input type="text" formControlName="street" />
        <input type="text" formControlName="city" />
        <input type="text" formControlName="state" />
        <input type="text" formControlName="zip" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      </div>
    </div>
  </div>
  <button type="button" (click)="addAddress()">Add Address</button>
  <button type="submit">Submit</button>
</form>
```

SetValue & PatchValue in FormArray

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      addresses: this.fb.array([]),
    });

    this.form.setValue({
      name: 'John',
      addresses: [
        { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
        { street: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' },
      ],
    });

    this.form.patchValue({
      name: 'Jane',
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="addresses">
    <div *ngFor="let address of addresses.controls; let i = index">
      <div [formGroupName]="i">
        <input type="text" formControlName="street" />
        <input type="text" formControlName="city" />
        <input type="text" formControlName="state" />
        <input type="text" formControlName="zip" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      </div>
    </div>
  </div>
  <button type="button" (click)="addAddress()">Add Address</button>
  <button type="submit">Submit</button>
</form>
```

Select Options Dropdown

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      gender: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <select formControlName="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

Typed Forms in Angular

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group<User>({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

FormRecord in Angular

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```