import { Component, EventEmitter, Output } from "@angular/core";

@Component(
    {
        selector:'app-header',
        templateUrl:'./header.component.html'
    }
)
export class HeaderComponet
{
 @Output() featureselected= new EventEmitter<string>();

onselect(feature:string)
{
this.featureselected.emit(feature);
}

}