/*
 ____________________________________
|   _   _ __ _ _____   _  ____       |
|  \ \/ /_  | |  _  |/  \| _  |      |
|   \ / |_| | |_|_| | ^  \ _| |  _   |
|   |_|_____|___|___|/ \__\___| |_|  |
|____________________________________|

Version: 1.0.0-beta
Author: Yohann Tilotti
Website: http://yohanntilotti.com
Repo: https://github.com/ytilotti/yoload
Issues: https://github.com/ytilotti/yoload/issues

*/
(function (factory) {
    "use strict";
    //noinspection JSUnresolvedVariable
    if (typeof define === 'function' && define.amd) { // jshint ignore:line
        // AMD. Register as an anonymous module.
        define(['jquery'], factory); // jshint ignore:line
    } else { // noinspection JSUnresolvedVariable
        if (typeof module === 'object' && module.exports) { // jshint ignore:line
            // Node/CommonJS
            // noinspection JSUnresolvedVariable
            module.exports = factory(require('jquery')); // jshint ignore:line
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }
}(function ($) {
    "use strict";

    var yoLoad;

    yoLoad = function (element, options) {
        var self = this;
        self.$element = $(element);

        self._init(options);
    };

    yoLoad.prototype._init = function (options) {
        var self = this,
            $element = self.$element;

        self.options = options;
        self.counter = 0;
        self.cache = {
            css: {
                overflow: $element.css('overflow')
            }
        };

        self.$wrapper = $('<div/>').addClass('yoload-wrapper').html(options.template).hide().appendTo($element);
    };

    yoLoad.prototype.show = function () {
        var self = this,
            $element = self.$element,
            options = self.options;

        if (!self.counter) {
            $element.css('overflow', 'hidden');
            self.$wrapper.fadeIn(options.fade);
        }
        self.counter++;

        return $element;
    };

    yoLoad.prototype.hide = function (force) {
        if (typeof force === 'undefined') {
            force = false;
        }

        var self = this,
            $element = self.$element,
            options = self.options;

        if (self.counter) {
            if (self.counter <= 1 || force) {
                self.$wrapper.fadeOut(options.fade, function () {
                    $element.css('overflow', self.cache.css.overflow);
                    $element.trigger('yoload.hide');
                });
                self.counter = 0;
            } else {
                self.counter--;
            }
        }

        return $element;
    };

    yoLoad.prototype.destroy = function () {
        var self = this,
            $element = self.$element;

        $element.find('.yoload-wrapper').remove();
        $element.removeData('yoload');

        return $element;
    };

    $.fn.yoload = function (option) {
        var options = typeof option === 'object' && option,
            args = Array.prototype.slice.call(arguments, 1),
            ret;

        this.each(function () {
            var $self = $(this),
                instance = $self.data('yoload'),
                opt;

            if (!instance) {
                opt = $.extend(true, {}, $.fn.yoload.defaults, options, $self.data());
                instance = new yoLoad(this, opt);
                $self.data('yoload', instance);
            }

            if (typeof option === 'string') {
                if (typeof instance[option] === 'undefined') {
                    if(window.console && console.error) {
                        console.error("yoload.js - The '" + option + "' method doesn't exist.");
                    }
                } else {
                    ret = instance[option].apply(instance, args);
                }
            }
        });

        if (typeof ret === 'undefined') {
            ret = this;
        }

        return ret;
    };

    $.fn.yoload.defaults = {
        fade: 0,
        template: '<div class="yoload"></div>'
    };
}));