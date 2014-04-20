(function($){

// Namespace
jQuery.cat = function() {

};

/*
 * Element extensions
 *
 */

jQuery.fn.cat = function() {

  /*
   * Animation
   */

  this.anim = function() {

    // Smoothly slide down fix for height issue
    //
    // Usage: myDomElement.cat().anim().smoothSlideDown('slow', function() {});
    this.smoothSlideDown = function() {

      var args = arguments[0] || {};

      $(this).each(function() {

        $(this).show();
        $(this).css('height', $(this).height());
        $(this).hide();

        $(this).slideDown(args);

      });

    };

    return this;

  };

  this.ui = function() {

    /*
     * Applies rollover images to elements, and preloads the rollover image, if given
     * a selected class, if the image has that specified class, it will always show the
     * rollover image. The following attributes apply:
     *
     * rollover_transition="fade"
     *  instead of a direct swap, fades into the rollover, requires a parent div container
     *
     * Usage: $('.rollover-image').cat().ui().rolloverImage('rollover_src', '_hl', 'rollover');
     */
    this.rolloverImage = function() {

      var rolloverSrcAttrName = arguments[0];
      var rolloverSuffix = arguments[1];
      var rolloverAttrPrefix = arguments[2];

      $(this).each(function() {

        var src = $(this).attr('src');

        var ext = src.substr(src.lastIndexOf('.'));
        var name = src.substr(0, src.lastIndexOf('.'));
        var rolloverSrc = $(this).attr(rolloverSrcAttrName);

        if($.cat.string.isEmpty(rolloverSrc)) {
          rolloverSrc = name + rolloverSuffix + ext;
        }

        $.cat.dom.preloadImage(rolloverSrc);

        if($(this).data('src')) {
        }
        else {
          $(this).data('src', src);
          $(this).data('rolloversrc', rolloverSrc);
        }

        if($(this).cat().dom().hasAttr(rolloverAttrPrefix + '_transition')) {
          var transition = $(this).attr(rolloverAttrPrefix + '_transition');
        }

        if(transition == 'fade') {

          var containerEl = $(this).parent();
          containerEl.css('position', 'relative');

          var rolloverSrcImageEl = $('<img src="' + rolloverSrc + '"/>');
          $(this).after(rolloverSrcImageEl);
          rolloverSrcImageEl.css('position', 'absolute');
          rolloverSrcImageEl.css('top', 0);
          rolloverSrcImageEl.css('left', 0);
          rolloverSrcImageEl.hide();

          containerEl.hover(
            function() {
              rolloverSrcImageEl.stop(true, true).fadeIn();
            },
            function() {
              rolloverSrcImageEl.stop(true, true).fadeOut();
            });

        }
        else {

          $(this).hover(function() {
            $(this).attr('src', $(this).data('rolloversrc'));
          },
          function() {
            $(this).attr('src', $(this).data('src'));
          });

        }

      });

    };

    /*
     * Expands element to the size of the window
     *
     * Usage: $('.fullwindow').cat().ui().fullWindow(true, true, 0, 0, true);
     */
    this.fullWindow = function() {

      var expandWidth = arguments[0];
      var expandHeight = arguments[1];
      var widthOffset = arguments[2];
      var heightOffset = arguments[3];
      var positionAbsolute = arguments[4];
      if(jQuery.cat.dom.isUndefined(positionAbsolute)) {
        positionAbsolute = true;
      }

      $(this).each(function() {

        if(positionAbsolute) {
          $(this).css('position', 'absolute');
        }
        $(this).css('top', '0');
        $(this).css('left', '0');

        if(expandWidth) {
          $(this).width($(window).width() - widthOffset);
        }
        if(expandHeight) {
          $(this).height($(window).height() - heightOffset);
        }

      });

      return this;

    };


    /*
     * Expands element to size of the container
     *
     * Usage: $('.fullcontainer').cat().ui().fullContainer($('.container'), true, true, 0, 0);
     */
    this.fullContainer = function() {

      var container = arguments[0];
      var expandWidth = arguments[1];
      var expandHeight = arguments[2];
      var widthOffset = arguments[3];
      var heightOffset = arguments[4];

      $(this).each(function() {

        $(this).css('position', 'absolute');
        $(this).css('top', '0');
        $(this).css('left', '0');

        if(expandWidth) {
          $(this).width($(container).width() - widthOffset);
        }
        if(expandHeight) {
          $(this).height($(container).height() - heightOffset);
        }

      });

      return this;

    };

    /*
     * Expands element to size of the document
     *
     * Usage: $('.fulldocument').cat().ui().fullDocument(true, true, 0, 0);
     */
    this.fullDocument = function() {

      var expandWidth = arguments[0];
      var expandHeight = arguments[1];
      var widthOffset = arguments[2];
      var heightOffset = arguments[3];

      $(this).each(function() {

        $(this).css('position', 'absolute');
        $(this).css('top', '0');
        $(this).css('left', '0');

        if(expandWidth) {
          $(this).width($(window).width() - widthOffset);
        }

        if(expandHeight) {

          $(this).css('top', -999999); // Reposition, so self is not included in document height
          $(this).height($(document).height() - heightOffset);
          $(this).css('top', 0);
        }

      });

      return this;

    };

    /*
     * Positions the popup dialog in the center of the page above all other elements
     *
     * Usage:
     *
     * $('.popup-dialog').cat().ui().popupDialog(true, null, function(dialogEl, modalEl) { el.css('backgroundColor', '#FF0000'); });
     * $('.popup-dialog, .popup-dialog-overlay').show();
     *
     * Caller responsible for showing and hiding popup and overlay, this allows more flexibility
     * on if the caller wants to fade in, slide in etc. The second argument is a window resize callback,
     * at this point you may add styles to the modal overlay etc.
     *
     */
    this.popupDialog = function() {

      var modal = arguments[0];
      var onWindowResizeCallback = arguments[1];
      var onLoadCallback = arguments[2];

      $(this).each(function() {

        var el = $(this);

        el.addClass('popup-dialog-loaded');
        el.css('position', 'fixed');
        el.css('top', '50%');
        el.css('left', '50%');
        el.css('zIndex', 9999);

        function onWindowResize() {

          var width = el.width();
          var height = el.height();

          el.css('marginLeft', -(width/2));
          el.css('marginTop', -(height/2));

          var modalOverlay = $('.popup-dialog-modal-overlay');
          if(modalOverlay.length > 0) {

            modalOverlay.css('position', 'fixed');
            modalOverlay.height($(window).height());
            modalOverlay.width($(window).width());

            modalOverlay.css('zIndex', 9998);
            modalOverlay.css('top', 0);
            modalOverlay.css('left', 0);

          }

          if(onWindowResizeCallback) {
            onWindowResizeCallback(el, modalOverlay);
          }

        }

        if(modal) {
          $('.popup-dialog-modal-overlay').remove();
          var modalOverlay = $('<div class="popup-dialog-modal-overlay"></div>');
          $('body').append(modalOverlay);
        }

        if(onLoadCallback) {
          var modalOverlay = $('.popup-dialog-modal-overlay');
          onLoadCallback(el, modalOverlay);
        }

        // Events

        $(el).bind('center', function() { // Center the dialog
          var width = el.width();
          var height = el.height();
          el.css('marginLeft', -(width/2));
          el.css('marginTop', -(height/2));
        });


        $(el).bind('relayout', function() { // Resize the dialog, including the modal dialog

          el.trigger('center');

          var modalOverlay = $('.popup-dialog-modal-overlay');
          if(modalOverlay.length > 0) {

            modalOverlay.css('position', 'fixed');
            modalOverlay.height($(window).height());
            modalOverlay.width($(window).width());

            modalOverlay.css('zIndex', 9998);
            modalOverlay.css('top', 0);
            modalOverlay.css('left', 0);

          }

          if(onWindowResizeCallback) {
            onWindowResizeCallback(el, modalOverlay);
          }

        });


        $(el).bind('close', function() { // Close the dialog including the modal
          el.hide();
          el.empty();
          el.unbind('relayout');
          modalOverlay.remove();
        });


        el.trigger('relayout');

        $(window).resize(function() {
          el.trigger('relayout');
        });

      });

    };

    return this;

  };



  /*
   * DOM manipulation
   */

  this.dom = function() {

    // Fixed height method that accounts for issues with the hidden elements
    //
    // Usage: myDomElement.cat().dom().height();
    this.height = function() {
      var first = $(this).first();
      first.show();
      var height = first.height();
      first.hide();
      return height;
    };

    // Fixed width method that accounts for issues with the hidden elements
    //
    // Usage: myDomElement.cat().dom().width();
    this.width = function() {
      var first = $(this).first();
      first.show();
      var height = first.width();
      first.hide();
      return height;
    };

    // Same as hasClass but for attributes
    //
    // Usage: myDomElement.cat().dom().hasAttr(attr);
    this.hasAttr = function(attr) {
      if($.cat.string.isEmpty($(this).attr(attr)) == false) {
        return true;
      }
      return false;
    };

    /*
     * Center the element in the given container
     *
     * Usage: $('.section-content').cat().dom().center($(window), 'absolute', true, true);
     */
    this.center = function() {

      var container = arguments[0];
      var position = arguments[1];
      var centerHorizontally = arguments[2];
      var centerVertically = arguments[3];

      $(this).each(function() {

        $(this).css({
          position: position
        });

        if(centerHorizontally) {

          $(this).css({
            left : (container.width() - $(this).outerWidth()) / 2
          });

        }

        if(centerVertically) {

          $(this).css({
            top : (container.height() - $(this).outerHeight()) / 2
          });

        }

      });

    };

    /*
     * Determine if element has children or not
     */
    this.hasChildren = function() {

      if($(this).children().length > 0) {
        return true;
      }

      return false;

    };

    return this;

  };


  return this;

};

/*
 * JS
 */

jQuery.cat.js = function() {

};

/* Call using:
 * var myFunction = $.cat.js.functionFromString('myFunction')
 * myFunction(param);
 */
jQuery.cat.js.functionFromString = function(str) {
  return window[str];
};


/*
/*
 * String
 * Call using $.cat.string.isEmpty('test')
 */

jQuery.cat.string = function() {

};

jQuery.cat.string.isEmpty = function(str) {
  return (!str || 0 === str.length);
};

jQuery.cat.string.isBlank = function(str) {
  return (!str || /^\s*$/.test(str));
};

jQuery.cat.string.trim = function(str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

jQuery.cat.string.ltrim = function(str) {
  return str.replace(/^\s+/,'');
};

jQuery.cat.string.rtrim = function(str) {
  return str.replace(/\s+$/,'');
};

jQuery.cat.string.fulltrim=function(str) {
  return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
};

jQuery.cat.string.booleanValue = function(str) {
  return (str === 'true');
};

jQuery.cat.string.startsWith = function(str, needle) {
  return (str.indexOf(needle) == 0);
};

jQuery.cat.string.fromCamel = function(str, delimiter){
  return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1' + delimiter + '$2').toLowerCase();
};

/*
 * Browser Extended
 */

jQuery.cat.browser = function() {

};

jQuery.cat.browser.ie = function() {
  if($.browser.msie) {
    return true;
  }
  return false;
};

// Check if the browser is IE and a version less than
jQuery.cat.browser.versionGt = function(version) {

  var browserVersion = parseInt(jQuery.browser.version, 10);

  if(browserVersion > version) {
    return true;
  }
  else {
    return false;
  }

};

//Check if the browser is IE and a version less than
jQuery.cat.browser.versionLt = function(version) {

  var browserVersion = parseInt(jQuery.browser.version, 10);

  if(browserVersion < version) {
    return true;
  }
  else {
    return false;
  }

};

/*
 * UI
 */

jQuery.cat.ui = function() {


};

// Evenly spaces the items in the container
jQuery.cat.ui.evenlySpaceList = function(containerEl) {

  var itemEls = containerEl.find('li');
  var totalWidth = containerEl.width();
  var totalItemsWidth = 0;

  for(var i=0;i<itemEls.length;i++) {
    var itemEl = $(itemEls[i]);
    totalItemsWidth += itemEl.width();
  }

  if(totalItemsWidth < totalWidth) {
    var paddingRight = (totalWidth - totalItemsWidth)/itemEls.length;
    for(var i=0;i<itemEls.length;i++) {
      var itemEl = $(itemEls[i]);
      if(i!=itemEls.length-1) {
        itemEl.css('paddingRight', paddingRight);
      }
    }
  }

};

/*
 * DOM
 */

jQuery.cat.dom = function() {

};

jQuery.cat.dom.isUndefined = function(obj) {
  if (typeof obj === 'undefined') {
    return true;
  }
  return false;
}

jQuery.cat.dom.equals = function(el1, el2) {
  if(el1[0] === el2[0]) {
    return true;
  }
  return false;
};

// Returns cross-browser scrollTop for the entire page
jQuery.cat.dom.windowScrollTop = function() {
  return $(window).scrollTop();
};

jQuery.cat.dom.preloadImage = function(src) {
  var image = new Image();
  image.src = src;
};

/*
 * Scrolls to part of page.
 *
 * Usage: $.cat.dom.bodyScrollTopAnimate(100, 'fast', 'linear', function() {});
 *
 */
 jQuery.cat.dom.bodyScrollTopAnimate = function(scrollTop, duration, easing, callback) {

  $('html,body').animate(
      {scrollTop: scrollTop},
      duration,
      easing,
      callback
  );
};


/*
 * Datastructure
 */

jQuery.cat.datastructure = function() {

};

// Return the keys of an array sorted numerically
jQuery.cat.datastructure.getNumericSortedKeys = function(obj) {
  var keys = []; for(var key in obj) keys.push(key);
  return keys.sort(function(a,b){
    return a-b;
  });
};


/*
 * Math
 */

jQuery.cat.math = function() {

};

jQuery.cat.math.uuid = function() {

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });

  return uuid;

};

// Return a random number from 1 to max
jQuery.cat.math.randomInt = function(max) {
  return 1 + Math.floor(Math.random() * max);
};


jQuery.cat.plugin = function() {

};

jQuery.cat.plugin.attrPrefix = "cat_plugin_";
jQuery.cat.plugin.classPrefix = "cat-plugin-";

jQuery.cat.plugin.attrName = function(name) {
  return jQuery.cat.plugin.attrPrefix + name;
};

jQuery.cat.plugin.className = function(name, includeSelector) {
  return (includeSelector ? '.' : '') + jQuery.cat.plugin.classPrefix + name;
};

/*
 * Anystretch image
 *
 * Usage: add class anystretch-image to any div, then add an attribute
 * anystretch_image_url="http://pathtoimage". Anystretch will then be applied
 * using the specified image.
 */

jQuery.cat.plugin.anystretchImage = function() {

};

jQuery.cat.plugin.anystretchImage.layout = function() {

  $(jQuery.cat.plugin.className('anystretch-image', true)).each(function() {
    var el = $(this);

    if(el.cat().dom().hasAttr(jQuery.cat.plugin.attrName('anystretch_image_url'))) {

      var uuid = jQuery.cat.math.uuid();
      el.attr(jQuery.cat.plugin.attrName('anystretch_id'), uuid);
      var imageUrl = el.attr(jQuery.cat.plugin.attrName('anystretch_image_url'));
      $('[' + jQuery.cat.plugin.attrName('anystretch_id') + '="' + uuid + '"]').anystretch(imageUrl);

    }
  });

};

/*
 * Video swap
 *
 * Usage: add class video-swap to any div, then add an attribute
 * video_swap_url="http://pathtovideo". Video swap will then replace
 * with an iframe video on click of the div.
 */

jQuery.cat.plugin.videoSwap = function() {

};



jQuery.cat.plugin.videoSwap.layout = function() {

  $(jQuery.cat.plugin.className('video-swap', true)).each(function() {

    var containerEl = $(this);
    var buttonEl = containerEl;
    var videoPlayerUrl = containerEl.attr(jQuery.cat.plugin.attrName('video_swap_video_player_url'));

    if(containerEl.cat().dom().hasAttr(jQuery.cat.plugin.attrName('video_swap_button_selector'))) {
      buttonEl = $(containerEl.attr(jQuery.cat.plugin.attrName('video_swap_button_selector')));
    }

    buttonEl.click(function() {
      if(containerEl.cat().dom().hasAttr(jQuery.cat.plugin.attrName('video_swap_custom_embed'))) {
        containerEl.append($(containerEl.attr(jQuery.cat.plugin.attrName('video_swap_custom_embed'))));
      }
      else {
        containerEl.append('<iframe src="' + videoPlayerUrl + '" frameborder="0" style="width:' + '100%' + '; height:' + '100%' + ';"></iframe>');
      }

      jQuery.cat.plugin.videoSwap.onWindowResize();

    });

  });

};

jQuery.cat.plugin.videoSwap.onWindowResize = function() {

  // XXX Old Vimeo embeds need to be sized each time, as they don't support 100% width and heights
  $(jQuery.cat.plugin.className('video-swap object', true)).each(function() {
    var objectEl = $(this);
    var videoSwapEl = objectEl.closest(jQuery.cat.plugin.className('video-swap', true));
    objectEl.width(videoSwapEl.width());
    objectEl.height(videoSwapEl.height());
  });

};

/*
 * Stitch Animate
 *
 * Usage: Add class stitch-animate to a div, assumes a horizontal stitch,
 * the reason stitch is needed is to support devices that have maximum
 * sizes for background images, so this animates "stitched" background
 * images, that is a div with multiple background images stiched together
 * to look like one seamless one.
 *
 * This animation routine depends on multiple backgrounds supported in the browser:
 * http://caniuse.com/multibackgrounds
 *
 * Essentially for IE8 and lower, a placeholder should be used.
 */

jQuery.cat.plugin.stitchAnimate = function() {

};

jQuery.cat.plugin.stitchAnimate.layout = function() {

  $(jQuery.cat.plugin.className('stitch-animate', true)).each(function() {

    var containerEl = $(this);
    var seams = containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_seams'));
    var increment = parseInt(containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_increment')));
    var numFrames = parseInt(containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_frames'))) - 1;
    var animationDelay = parseInt(containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_delay')));

    var seamsSplit = seams.split(",");
    var numSeams = seamsSplit.length;

    for(var i=0;i<seamsSplit.length;i++) {
      containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_seam_' + i), seamsSplit[i]);
    }

    containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_frame'), 0);

    window.setInterval(function() {

      var newBackgroundPosition = "";
      for(var i=0;i<numSeams;i++) {
        var seam = parseInt(containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_seam_' + i)));
        seam -= increment;

        if(newBackgroundPosition != "") {
          newBackgroundPosition += ', ';
        }
        newBackgroundPosition += seam + 'px 0px';

        containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_seam_' + i), seam);
      }

      containerEl.css('backgroundPosition', newBackgroundPosition);

      var currentFrame = parseInt(containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_frame')));
      containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_frame'), currentFrame+1);

      // Loop back to start
      if(currentFrame + 1 > numFrames) {
        for(var i=0;i<seamsSplit.length;i++) {
          containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_seam_' + i), seamsSplit[i]);
          containerEl.attr(jQuery.cat.plugin.attrName('stitch_animate_frame'), 0);
        }
      }

    }, animationDelay);




  });

};



})(jQuery);
