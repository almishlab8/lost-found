import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http'; 
import { AddFoundPage } from '../pages/add-found/add-found';
import { AddLostPage } from '../pages/add-lost/add-lost';
import { FoundTypePage } from '../pages/found-type/found-type';
import { LostTypePage } from '../pages/lost-type/lost-type';
import { LostProvider } from '../providers/crud/lostProvider';
import { ShowLostPage } from '../pages/show-lost/show-lost';
import { ShowFoundPage } from '../pages/show-found/show-found';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    LostTypePage,
    FoundTypePage,
    AddLostPage,
    AddFoundPage,
    ShowLostPage,
    ShowFoundPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()  ,
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    LostTypePage,
    FoundTypePage,
    AddLostPage,
    AddFoundPage,
    ShowLostPage,
    ShowFoundPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} , 
    AuthProvider,
    LostProvider
  ]
})
export class AppModule {}
