import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent   
  ],

  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ],

  entryComponents: [    
  ],

  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]

})
export class ComponentsModule { }
