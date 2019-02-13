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
import { FoundProvider } from '../providers/crud/foundProvider';
import { DevelopersPage } from '../pages/developers/developers';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { LostTypePageModule } from '../pages/lost-type/lost-type.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { FoundTypePageModule } from '../pages/found-type/found-type.module';
import { AddLostPageModule } from '../pages/add-lost/add-lost.module';
import { AddFoundPageModule } from '../pages/add-found/add-found.module';
import { ShowLostPageModule } from '../pages/show-lost/show-lost.module';
import { ShowFoundPageModule } from '../pages/show-found/show-found.module';
import { DevelopersPageModule } from '../pages/developers/developers.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // LoginPage,
    // SignupPage,
    // LostTypePage,
    // FoundTypePage,
    // AddLostPage,
    // AddFoundPage,
    // ShowLostPage,
    // ShowFoundPage,
    // DevelopersPage,
    // SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: 'رجوع'},),
    IonicStorageModule.forRoot()  ,
    HttpModule ,
    LoginPageModule,
    SignupPageModule,
    LostTypePageModule,
    FoundTypePageModule,
    AddLostPageModule,
    AddFoundPageModule,
    ShowLostPageModule,
    ShowFoundPageModule,
    DevelopersPageModule,
    SettingsPageModule
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
    DevelopersPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} , 
    AuthProvider,
    FoundProvider,
    LostProvider
  ]
})
export class AppModule {}
