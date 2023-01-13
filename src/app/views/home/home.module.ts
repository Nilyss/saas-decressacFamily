// ********** MODULES **********
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// ********** COMPONENTS **********
import { HomeComponent } from './home.component'
import { FormComponent } from '../components/form/form.component'

const homeRoutes: Routes = [{ path: 'home', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FormsModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
