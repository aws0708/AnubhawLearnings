import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { AppComponent } from './app.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForcontrolComponent } from './components/controlFlow/forcontrol/forcontrol.component';
import { SwitchControlComponent } from './components/controlFlow/switch-control/switch-control.component';
import { PipesComponent } from './components/pipes/pipes/pipes.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { LifecycleComponent } from './components/life-cycle-events/lifecycle/lifecycle.component';
import { GetApiComponent } from './components/api/get-api/get-api.component';
import { PostApiComponent } from './components/api/post-api/post-api.component';
import { ParentComponent } from './components/parent-child-comm/parent/parent.component';
import { TempContComponent } from './components/ng-temp-cont/temp-cont/temp-cont.component';
import { Component1Component } from './components/ng-temp-cont/content/component1/component1.component';

export const routes: Routes = [
    // ROUTING
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'struct-directive',
        component:StructuralDirectiveComponent
    },
    {
        path:'attrDirective',
        component:AttributeDirectiveComponent
    },
    {
        path:'ifelseControl',
        component:IfelseComponent
    },
    {
        path:'forControl',
        component:ForcontrolComponent
    },
    {
        path:'switchControl',
        component:SwitchControlComponent
    },
    {
        path:'pipesInAngular',
        component:PipesComponent
    },
    {
        path:'templateform',
        component:TemplateComponent
    },
    {
        path:'reactive',
        component:ReactiveComponent
    },
    {
        path:'lifecycle',
        component:LifecycleComponent
    },
    {
        path:'getApi',
        component:GetApiComponent
    },
    {
        path:'postApi',
        component:PostApiComponent
    },
    {
        path:'template-forms',
        component:TemplateComponent
    },
    {
        path:'parentComp',
        component:ParentComponent
    },
    {
        path:'temp-cont',
        component:TempContComponent
    },
    {
        path:'parent-reuse',
        component:Component1Component
    }

   
];
