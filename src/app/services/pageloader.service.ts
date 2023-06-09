import { Injectable } from '@angular/core';
import { DataService } from './data.service';

declare var $: any;
@Injectable({
    providedIn: 'root'
})
export class pageLoaderService {
    constructor(private dataService: DataService) { }

    showLoader() {
        $('#pageLoader').fadeIn();
        $('#pageLoader').show();
        this.dataService.disableBack = true;
        // $('body').css({"height":"100vh", "overflow":"hidden"})

    }
    hideLoader() {
        $('#pageLoader').fadeOut();
        $('#pageLoader').hide();
        this.dataService.disableBack = false;
        // $('body').css({"height":"auto", "overflow":"auto"})
    }

    showCodePushLoader(message) {
        $('#pageLoader').fadeIn();
        $('body').css({ "height": "100vh", "overflow": "hidden" })
        $('#pageLoader p').text(message);

    }

    hideCodePushLoader() {
        $('#pageLoader').fadeOut();
        $('body').css({ "height": "auto", "overflow": "inherit" })

    }

    showSBLoader() {
        $('#sbLoader').fadeIn();
        $('#sbLoader').show();
        this.dataService.disableBack = true;
    }

    hideSBLoader() {
        $('#sbLoader').fadeOut();
        $('#sbLoader').hide();
        this.dataService.disableBack = false;
    }
}
