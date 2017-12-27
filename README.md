# yoLoad
A flexible loader jQuery plugin.

### Use cases

* Enhancing the waiting of user with a flexible loader!
* Create a loader on multiple ajax calling to waiting the end of calls.
* Personalize your loader.
* Do anything after loading with the events.

An exemple of capability of this plugin:

```javascript
// Call a first ajax
$.ajax({
  url: "orders/listing.html",
  beforeSend: function() {
    $('body').yoload('show');
  }
}).always(function() {
  $('body').yoload('hide');
});
```
```javascript
// Call a second ajax
$.ajax({
  url: "orders/dashboard.html",
  beforeSend: function() {
    $('body').yoload('show');
  }
}).always(function() {
  $('body').yoload('hide');
});
```
```javascript
// Do something at the end of ajax calls
$('body').on('yoload.hide', function(event) {
  alert('Welcome in the new panel order');
});
```

## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
fade | integer or string | 0 | Display the matched elements by fading them to opaque. Use 'slow', 'fast' or a number of milliseconds.
template | string (html) | `<span class="yoload"></span>` | Customize the HTML loader.

### Exemple

You can use it like so:

```javascript
$('body').yoload({
  fade: 0,
  template: '<span class="yoload"></span>'
});
```

Or like this for all calling:

```javascript
$.fn.yoload.defaults.fade = 500;
```

## Events

Event | Params | Description
------ | -------- | -----------
yoload.hide | event | After loader completely hiding
yoload.counter | event, counter | When the counter is modify on "multiple" loader on element

### Exemple

```javascript
// On hiding loader
$('body').on('yoload.hide', function(event){
  console.log('The loader is hiding');
});
```
```javascript
// On counter change
$('body').on('yoload.counter', function(event, counter){
  console.log('Counter: '+counter);
});
```

## Methods

Method | Argument | Description
------ | -------- | -----------
`init` | options : object | Initializes yoload
`destroy` | | Destroy yoload
`show` | | Show the loader
`hide` | force : bool | Hide the loader. Possibility to force it with the parameter.

### Exemple

Methods are called on yoLoad instances:

```javascript
// Show the loader
$('body').yoload('show');
``` 

## Details

### Browser support

yoLoad works on IE9+ in addition to other modern browsers such as Chrome, Firefox, and Safari.


### Dependencies

jQuery 1.8


### License

Copyright (c) 2017-2018 Yohann Tilotti

Licensed under the MIT license.