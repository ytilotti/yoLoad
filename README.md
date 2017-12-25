# yoload
A flexible loader jQuery plugin.

#### Use cases

* Enhancing the waiting of user with a loader!
* Create a loader on multiple ajax calling to waiting the end of calls.
* Personalize your loader.

#### Package Managers

```sh
# Bower
bower install --save yoload

# NPM
npm install yoload
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
fade | integer | 0 | Display the matched elements by fading them to opaque.
template | string (html) | `<span class="yoload"></span>` | Customize the HTML loader.

You can use it like so:

```javascript
$('body').yoload({
  fade: 0,
  template: '<span class="yoload"></span>'
});
```

### Events

```javascript
// On hiding loader
$('body').on('yoload.hide', function(event){
  console.log('The loader is hiding');
});
```

Event | Params | Description
------ | -------- | -----------
yoload.hide | event | After loader completely hiding
yoload.counter | event, counter | When the counter is modify on "multiple" loader on element

### Methods

Methods are called on yoload instances:

```javascript
// Show the loader
$('body').yoload('show');
```

Method | Argument | Description
------ | -------- | -----------
`init` | options : object | Initializes yoload
`destroy` | | Destroy yoload
`show` | | Show the loader
`hide` | force : bool | Hide the loader
 
### Browser support

Yoload works on IE8+ in addition to other modern browsers such as Chrome, Firefox, and Safari.

### Dependencies

jQuery 1.8

### License

Copyright (c) 2018 Yohann Tilotti

Licensed under the MIT license.