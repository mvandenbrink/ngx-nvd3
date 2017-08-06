# ngx-nvd3

[![NPM Version](https://img.shields.io/npm/v/ngx-nvd3.svg?style=flat)](https://www.npmjs.org/package/ngx-nvd3)
[![NPM license](http://img.shields.io/npm/l/ngx-nvd3.svg?style=flat)](https://www.npmjs.org/package/ngx-nvd3)

Create nvd3 with angular2+ directive or as a component.
This project has tested latest angular2 `v2.4.1` and can be used in ionic 3+ which uses angular 4+.
This project is reincarnation from [ng2-nvd3](https://github.com/krispo/ng2-nvd3) and [angular2-nvd3](https://github.com/hendrathings/angular2-nvd3).
If you are using nvd3 for angular2.RC take a look [ng2-nvd3](https://github.com/krispo/ng2-nvd3).

## Install

```
npm install ngx-nvd3
```

## Usage

Hopefully you already know how to use decorator, module, component, directive, input on angular2+.

Include module in your root module of your target component declaration via `NgModule`.

```js
import { NvD3Module } from 'ngx-nvd3';
....

@NgModule({
  ...
  imports: [ // import Angular's modules
    ...
    NvD3Module
    ...
  ],
  declarations: [
    ... // your component target to implement nvd3
  ]
  ...
})
```

then lets do awesome chart...

### Use as component

```js
@Component({
  ...
  template: `<div><nvd3 [options]="options" [data]="data"></nvd3></div>`
  ...
})
```

### Use as directive

In case you want to use as directive `nvd3`.

```js
@Component({
  ...
  template: `<app-chart nvd3 [options]="options" [data]="data"></app-chart>`
  ...
})
```

### Set option and data

all chaining function use ase json...

```js
    this.options = {
      chart: {
        type: 'lineChart',
        useInteractiveGuideline: true,
        height: 450,
        transitionDuration: 350,
        showLegend: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: (d) => { return d.x; },
        y: (d) => { return d.y; },
        xScale: d3.time.scale(),
        xAxis: {
          ticks: d3.time.months,
          tickFormat: (d) => {
              return d3.time.format('%b')(new Date(d));
          }
        },
        yAxis: {
          axisLabel: 'Gross volume',
          tickFormat: (d) => {
              if (d == null) {
                  return 0;
              }
              return d3.format('.02f')(d);
          },
          axisLabelDistance: 400
        }
      }
    }

    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
        ]
      }
    ];
```

you can set your callback:

```js
    this.options = {
      chart: {
        ...
        callback: () => {
          // do something maybe change background
        }
      }
    }
```
