import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { DigitOnlyDirective, NumberDirective, NumbersOnlyDirective } from '../directives/numbers-only.directive';
import { alphaNumericDirective,AlphaNumericAllowedSpecialChars, NotAllowSpace } from '../directives/aplha-numeric.directive';
import { DatePatternDirective } from '../directives/date-pattern.directive';
import { passwordDirective } from '../directives/password.directive';
import { AlphabetsOnlyDirective,AlphabetsNSpaceOnlyDirective, AlphaNumericOnlyDirective,AlphaSpecialCharOnlyDirective,AlphabetNNumberOnlyDirective,UpidOnlyDirective, } from '../directives/alphabets-only.directive';
import { AppConstants } from '../app.constant';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CustomCurrencyPipe,DynamicCurrencyPipe,FilterPipe } from '../pipes/custom-currency.pipe';
import { TranslatePipe } from '../pipes/translate.pipe';
import { AmountOnlyDirective } from '../directives/numbers-only.directive';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { DatePipe } from '@angular/common';
import { DateFormatPipe, FormatDatePipe, FormatTimerPipe, TimeFormatPipe } from '../pipes/date-formatter.pipe';
import { OwlDateTimeModule, OWL_DATE_TIME_LOCALE  } from 'ng-pick-datetime';
@NgModule({
  declarations: [DatePatternDirective, 
    NumbersOnlyDirective,
    NumberDirective,
    alphaNumericDirective,
    AlphabetsNSpaceOnlyDirective,
    AlphabetsOnlyDirective,
    CustomCurrencyPipe,
    TranslatePipe,
    AlphaNumericOnlyDirective,
    FilterPipe,
    AlphaSpecialCharOnlyDirective,
    AlphabetNNumberOnlyDirective,
    UpidOnlyDirective,
    passwordDirective,
    AmountOnlyDirective,
    DigitOnlyDirective,
    DateAgoPipe,
    AlphaNumericAllowedSpecialChars,
    NotAllowSpace,
    DynamicCurrencyPipe,
    FormatDatePipe,
    DateFormatPipe,
    TimeFormatPipe,
    FormatTimerPipe],
  imports: [
    CommonModule,
    OwlDateTimeModule,
  ],
  exports: [
    DatePatternDirective,
    NumbersOnlyDirective,
    NumberDirective,
    alphaNumericDirective,
    AlphabetsOnlyDirective,
    AlphabetsNSpaceOnlyDirective,
    CustomCurrencyPipe,
    TranslatePipe,
    AlphaNumericOnlyDirective,
    FilterPipe,
    AlphaSpecialCharOnlyDirective,
    AlphabetNNumberOnlyDirective,
    UpidOnlyDirective,
    passwordDirective,
    DynamicCurrencyPipe,
    AmountOnlyDirective,
    DigitOnlyDirective,
    DateAgoPipe,
    AlphaNumericAllowedSpecialChars,
    NotAllowSpace,
    DatePipe,
    FormatDatePipe,
    DateFormatPipe,
    TimeFormatPipe,
    FormatTimerPipe
  ],
  providers:[AppConstants,CustomCurrencyPipe,TranslatePipe,FilterPipe,TitleCasePipe,DateAgoPipe,DatePipe,DynamicCurrencyPipe, {provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB'}]
})
export class SharedModule { }

