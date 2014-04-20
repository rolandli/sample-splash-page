jQuery.goal_2025 = function() {

};

jQuery.goal_2025.onStartDomReadyFunctions = []; // Do setup and initialization here
jQuery.goal_2025.onEndDomReadyFunctions = [];

/**
 * Dom Ready
 */
jQuery.goal_2025.onDomReady = function() {

  jQuery.goal_2025.pageLoader.onStartDomReady();

  for(var i=0;i<jQuery.goal_2025.onStartDomReadyFunctions.length;i++) {
    var onStartDomReadyFunction = jQuery.goal_2025.onStartDomReadyFunctions[i];
    onStartDomReadyFunction();
  }

  jQuery.goal_2025.headerSlideshow.onDomReady();
  jQuery.goal_2025.fixedColumnGrid.onDomReady();
  jQuery.goal_2025.userLibrary.onDomReady();
  jQuery.goal_2025.rotatedText.onDomReady();
  jQuery.goal_2025.navMenu.onDomReady();
  jQuery.goal_2025.grid.onDomReady();
  jQuery.goal_2025.fitText.onDomReady();
  jQuery.goal_2025.customFrame.onDomReady();
  jQuery.goal_2025.anystretchHelper.onDomReady();
  jQuery.goal_2025.clickRedirect.onDomReady();
  jQuery.goal_2025.videoSwapper.onDomReady();
  jQuery.goal_2025.audioSwapper.onDomReady();
  jQuery.goal_2025.widgets.onDomReady();
  jQuery.goal_2025.customSelect.onDomReady();
  jQuery.goal_2025.customDivider.onDomReady();
  jQuery.goal_2025.evenlySpaceList.onDomReady();
  jQuery.goal_2025.breakpoint.onDomReady();
  jQuery.goal_2025.customListStyle.onDomReady();

  $('.top-logo img').attr('draggable', 'false');

  jQuery.cat.ui.evenlySpaceList($('.evenly-space-list'));

  // Custom checkbox
  $(".custom-tertiary-checkbox").CheckboxSwitch({'tertiary': true});

  // Custom text and textarea placeholders
  $(this).inputPlaceholder();

  // Rollovers
  $('.rollover-image').cat().ui().rolloverImage('rolloversrc', '_hl');

  // Preload images
  $.cat.dom.preloadImage(g_staticUrl + 'main/images/button_dropdown_hl.png');
  $.cat.dom.preloadImage(g_staticUrl + 'main/images/button_dropdown_hl@2x.png');

  // Styles submit
  $('.custom-submit').click(function() {
    var submitEl = $(this);
    var formEl = null;
    if(submitEl.cat().dom().hasAttr('custom_submit_form_dom_id')) {
      formEl = $('#' + submitEl.attr('custom_submit_form_dom_id'));
	  alert("2");
    }
    else {
      formEl = submitEl.parent();
	  alert(submitEl.parent().hasClass("test"));
    }
	
    formEl.submit();
  });

  jQuery.goal_2025.onWindowResize();

  for(var i=0;i<jQuery.goal_2025.onEndDomReadyFunctions.length;i++) {
    var onEndDomReadyFunction = jQuery.goal_2025.onEndDomReadyFunctions[i];
    onEndDomReadyFunction();
  }


  jQuery.goal_2025.pageLoader.onEndDomReady();

};

/**
 * Page loader
 */
jQuery.goal_2025.pageLoader = function() {

};

jQuery.goal_2025.pageLoader.onStartDomReady = function() {

  // Attach loading indicator to page
  $('.page-loader').cat().ui().popupDialog(true, null,
    function(dialogEl, modalEl) {
      modalEl.addClass('page-loader-modal');
      modalEl.css('background-color', '#252525');
    }
  );

};

jQuery.goal_2025.pageLoader.onEndDomReady = function() {

  $('.layout').css('visibility', 'visible');

  $('.page-loader, .page-loader-modal').fadeOut(1000);


};


/**
 * Window scroll
 */
jQuery.goal_2025.onWindowScroll = function() {

  jQuery.goal_2025.navMenu.onWindowScroll();

};

/**
 * Window resize
 */
jQuery.goal_2025.onWindowResize = function() {

  jQuery.goal_2025.grid.onWindowResize();
  jQuery.goal_2025.fixedColumnGrid.onWindowResize();
  jQuery.goal_2025.headerSlideshow.onWindowResize();
  jQuery.goal_2025.fitText.onWindowResize();
  jQuery.goal_2025.rotatedText.onWindowResize();
  jQuery.goal_2025.widgets.onWindowResize();
  jQuery.goal_2025.evenlySpaceList.onWindowResize();
  jQuery.goal_2025.breakpoint.onWindowResize();

};

jQuery.goal_2025.onWindowResizeFinish = function() {

  jQuery.goal_2025.fitText.onWindowResizeFinish();
  jQuery.goal_2025.customFrame.onWindowResizeFinish();
  jQuery.goal_2025.fixedColumnGrid.onWindowResizeFinish();
  jQuery.goal_2025.customDivider.onWindowResizeFinish();
  jQuery.goal_2025.customListStyle.onWindowResize();

  jQuery.goal_2025.rolloverFade.apply('.boxfitted a');

};

/**
 * Window load
 */
jQuery.goal_2025.onWindowLoad = function() {

  // Dynamic heights become defined at this point
  jQuery.goal_2025.grid.onWindowLoad();
  jQuery.goal_2025.fixedColumnGrid.onWindowLoad();
  jQuery.goal_2025.headerSlideshow.onWindowLoad();
  jQuery.goal_2025.fitText.onWindowLoad();
  jQuery.goal_2025.rolloverFade.onWindowLoad();
  jQuery.goal_2025.breakpoint.onWindowLoad();
};

/**
 * Rollover fade
 */
jQuery.goal_2025.customListStyle = function() {

};

jQuery.goal_2025.customListStyle.layout = function() {

  // Html widget content has custom image for lists, we need to vertically center it
  $('.custom-list-style').each(function() {

    var containerEl = $(this);
    var backgroundPositionTop = containerEl.attr('custom_list_style_background_position_top');

    containerEl.find('ul li').each(function() {
      var listItemEl = $(this);
      var lineHeight = parseInt(listItemEl.css('lineHeight'));
      if(backgroundPositionTop) {
        listItemEl.css('backgroundPosition', '0px ' + backgroundPositionTop + 'px');
      }
      else {
        listItemEl.css('backgroundPosition', '0px ' + lineHeight/2 + 'px');
      }
    });

  });



};

jQuery.goal_2025.customListStyle.onDomReady = function() {
  jQuery.goal_2025.customListStyle.layout();
};

jQuery.goal_2025.customListStyle.onWindowResize = function() {
  jQuery.goal_2025.customListStyle.layout();
};

/**
 * Breakpoints
 */
jQuery.goal_2025.breakpoint = function() {

};

jQuery.goal_2025.breakpoint.breakpointSmall = 640;
jQuery.goal_2025.breakpoint.breakpointMedium = 820;

jQuery.goal_2025.breakpoint.onDomReady = function() {
  jQuery.goal_2025.breakpoint.onWindowResize();
};

jQuery.goal_2025.breakpoint.onWindowLoad = function() {
  jQuery.goal_2025.breakpoint.onWindowResize();
};

jQuery.goal_2025.breakpoint.onWindowResize = function() {

  var windowWidth = $(window).width();

  $('body').removeClass('breakpoint-body-size-large');
  $('body').removeClass('breakpoint-body-size-medium');
  $('body').removeClass('breakpoint-body-size-small-medium');
  $('body').removeClass('breakpoint-body-size-small');

  if(windowWidth > jQuery.goal_2025.breakpoint.breakpointMedium) {
    $('body').addClass('breakpoint-body-size-large');
  }
  else if(windowWidth > jQuery.goal_2025.breakpoint.breakpointSmall) {
    $('body').addClass('breakpoint-body-size-medium');
    $('body').addClass('breakpoint-body-size-small-medium');
  }
  else {
    $('body').addClass('breakpoint-body-size-small');
    $('body').addClass('breakpoint-body-size-small-medium');
  }

};

/**
 * Rollover fade
 */
jQuery.goal_2025.customSelect = function() {

};

jQuery.goal_2025.customSelect.onDomReady = function() {

  jQuery.goal_2025.customSelect.layout();
};

jQuery.goal_2025.customSelect.layout = function() {

  $('.custom-select-input').selectbox({

    onChange: function(value, inst, sbSelector) {

      sbSelector.removeClass('unselected');
      if(value == "") {
        sbSelector.addClass('unselected');
      }

      // XXX for whatever reason, the value isn't ready on the change callback in Android, so we set this attribute instead to key off of
      $(inst.input).attr('selected_value', value);

    },
    onLoad: function(inst, input, sbSelector) {
      if($(input).val() == "") {
        sbSelector.addClass('unselected');
      }

    }
  });

  /*

  // Custom select CSS
  $('.custom-select-input').each(function() {

    var customSelectInput = $(this);
    if(customSelectInput.hasClass('customSelect') == false) {

      customSelectInput.customSelect();

      var val = customSelectInput.val();
      if(val) {
        customSelectInput.parent().find('.customSelectInner').addClass('custom-select-input-selected');
      }

      customSelectInput.change(function(){
        var val = $(this).val();
        if(val) {
          $(this).closest().find('.customSelectInner').addClass('custom-select-input-selected');
        }
        else {
          $(this).closest().find('.customSelectInner').removeClass('custom-select-input-selected');
        }

      });

    }

  });

  */

};

/**
 * Evenly space list
 */
jQuery.goal_2025.evenlySpaceList = function() {

};

jQuery.goal_2025.evenlySpaceList.layout = function() {
  jQuery.cat.ui.evenlySpaceList($('.evenly-space-list'));
};

jQuery.goal_2025.evenlySpaceList.onDomReady = function() {
  jQuery.goal_2025.evenlySpaceList.layout();
};

jQuery.goal_2025.evenlySpaceList.onWindowResize = function() {
  jQuery.goal_2025.evenlySpaceList.layout();
};

/**
 * Rollover fade
 */
jQuery.goal_2025.rolloverFade = function() {

};

jQuery.goal_2025.rolloverFade.onWindowLoad = function() {
  jQuery.goal_2025.rolloverFade.layout();
};

jQuery.goal_2025.rolloverFade.apply = function(selector) {

  // Fade on hover
  $(selector).each(function() {
    if($(this).hasClass('disable-rollover-fade') == false) {

      var opacity = 0.65;
      if($(this).cat().dom().hasAttr('rollover_fade_opacity')) {
        opacity = $(this).attr('rollover_fade_opacity');
      }

      var targetEl = $(this);
      if($(this).cat().dom().hasAttr('rollover_fade_target')) {
        targetEl = $($(this).attr('rollover_fade_target'));
      }

      $(this).hover(
          function() {
            targetEl.stop().animate({
              opacity: opacity
            }, 200);
          },
          function() {
            targetEl.stop().animate({
              opacity: 1
            }, 200, function() {
              targetEl.css('filter', 'none');
            });
          }
      );
    }
  });

};

jQuery.goal_2025.rolloverFade.layout = function() {

  // Fade on hover

  jQuery.goal_2025.rolloverFade.apply(
    '.rollover-fade, \
    a img, \
    .form-field-submit-input, \
    .box-button, \
    .faux-submit-input, \
    .boxfitted a, \
    .widget-partner-dashboard-resources a, \
    .header-slideshow-slide-content-caption a, \
    .audio-widget-grid .widget-attr-caption a, \
    .audio-widget-fixed-column-grid .widget-attr-caption a, \
    .file-widget-grid .widget-attr-caption a, \
    .file-widget-fixed-column-grid .widget-attr-caption a, \
    .image-widget-grid .widget-attr-caption a, \
    .image-widget-fixed-column-grid .widget-attr-caption a, \
    .statistic-widget-grid .widget-attr-caption a, \
    .statistic-widget-fixed-column-grid .widget-attr-caption a, \
    .html-widget-fixed-column-grid.widget-style-2 p a, \
    .html-widget-grid.widget-style-2 p a, \
    .html-widget-fixed-column-grid.widget-style-0 p a, \
    .html-widget-grid.widget-style-0 p a, \
    .html-widget-fixed-column-grid.widget-style-1 p a, \
    .html-widget-grid.widget-style-1 p a, \
    .html-widget-fixed-column-grid.widget-style-2 ul a, \
    .html-widget-grid.widget-style-2 ul a, \
    .html-widget-fixed-column-grid.widget-style-0 ul a, \
    .html-widget-grid.widget-style-0 ul a, \
    .html-widget-fixed-column-grid.widget-style-1 ul a, \
    .html-widget-grid.widget-style-1 ul a, \
    .twitter-widget-grid .twitter-widget-overlay a, \
    .quote-widget-fixed-column-grid .quote-widget-content-quote a, \
    .twitter-widget-fixed-column-grid .twitter-widget-overlay a'
  );

  $('.reverse-rollover-fade').each(function() {
    var el = $(this);
    el.css('opacity', el.attr('reverse_rollover_fade_opacity'));
  });

  $('.reverse-rollover-fade').hover(
      function() {
        $(this).stop().animate({
          opacity: 1
        }, 200);
      },
      function() {
        $(this).stop().animate({
          opacity: $(this).attr('reverse_rollover_fade_opacity')
        }, 200);
      }
  );

};



/**
 * Widgets
 */

jQuery.goal_2025.widgets = function() {


};

// Responsive sizes for non-collapsed grid
jQuery.goal_2025.widgets.gridResponsiveWidthSmall = 0;
jQuery.goal_2025.widgets.gridResponsiveWidthMedium = 200;
jQuery.goal_2025.widgets.gridResponsiveWidthLarge = 320;

// Responsive sizes for collapsed grid
jQuery.goal_2025.widgets.gridCollapsedResponsiveWidthSmall = 0;
jQuery.goal_2025.widgets.gridCollapsedResponsiveWidthMedium = 200;
jQuery.goal_2025.widgets.gridCollapsedResponsiveWidthLarge = 480;

// Responsive sizes for non-collapsed fixed column grid
jQuery.goal_2025.widgets.fixedColumnGridResponsiveWidthSmall = 0;
jQuery.goal_2025.widgets.fixedColumnGridResponsiveWidthMedium = 200;
jQuery.goal_2025.widgets.fixedColumnGridResponsiveWidthLarge = 320;

// Responsive sizes for collapsed fixed column grid
jQuery.goal_2025.widgets.fixedColumnGridCollapsedResponsiveWidthSmall = 0;
jQuery.goal_2025.widgets.fixedColumnGridCollapsedResponsiveWidthMedium = 200;
jQuery.goal_2025.widgets.fixedColumnGridCollapsedResponsiveWidthLarge = 480;

jQuery.goal_2025.widgets.layout = function() {

  // Add special classes to handle responsive sizing
  $('.grid, .fixed-column-grid').each(function() {

    var grid = $(this);

    var widthSmall = 0;
    var widthMedium = 0;
    var widthLarge = 0;

    // Use sizes based on whether collapsed or not
    if(grid.hasClass('grid')) {

      widthSmall = jQuery.goal_2025.widgets.gridResponsiveWidthSmall;
      widthMedium = jQuery.goal_2025.widgets.gridResponsiveWidthMedium;
      widthLarge = jQuery.goal_2025.widgets.gridResponsiveWidthLarge;

      if(grid.hasClass('grid-size-small')) {
        widthSmall = jQuery.goal_2025.widgets.gridCollapsedResponsiveWidthSmall;
        widthMedium = jQuery.goal_2025.widgets.gridCollapsedResponsiveWidthMedium;
        widthLarge = jQuery.goal_2025.widgets.gridCollapsedResponsiveWidthLarge;
      }

    }
    else if(grid.hasClass('fixed-column-grid')) {

      widthSmall = jQuery.goal_2025.widgets.fixedColumnGridResponsiveWidthSmall;
      widthMedium = jQuery.goal_2025.widgets.fixedColumnGridResponsiveWidthMedium;
      widthLarge = jQuery.goal_2025.widgets.fixedColumnGridResponsiveWidthLarge;

      if(grid.hasClass('grid-size-small-medium')) {
        widthSmall = jQuery.goal_2025.widgets.fixedColumnGridCollapsedResponsiveWidthSmall;
        widthMedium = jQuery.goal_2025.widgets.fixedColumnGridCollapsedResponsiveWidthMedium;
        widthLarge = jQuery.goal_2025.widgets.fixedColumnGridCollapsedResponsiveWidthLarge;
      }
    }

    grid.find('.widget').each(function() {

      var widget = $(this);
      var widgetWidth = widget.width();

      if(widget.hasClass('grid-item')) {
        var cols = parseInt(widget.attr('grid_cols_actual'));
        widgetWidth = widgetWidth/cols;
      }

      $(this).removeClass('widget-size-small');
      $(this).removeClass('widget-size-medium');
      $(this).removeClass('widget-size-large');
      $(this).removeClass('widget-size-small-medium');

      if(widgetWidth < widthMedium) {
        $(this).addClass('widget-size-small');
        $(this).addClass('widget-size-small-medium');
      }
      else if(widgetWidth < widthLarge) {
        $(this).addClass('widget-size-medium');
        $(this).addClass('widget-size-small-medium');
      }
      else {
        $(this).addClass('widget-size-large');
      }

    });

  });

};

jQuery.goal_2025.widgets.onWindowResize = function() {

  jQuery.goal_2025.widgets.layout();
  jQuery.goal_2025.widgets.htmlWidget.layout();
  jQuery.goal_2025.widgets.searchTextWidget.layout();

};

jQuery.goal_2025.widgets.onDomReady = function() {
  jQuery.goal_2025.widgets.onWindowResize();

  // Give some context to each widget about it's neighbors

  $('.grid, .fixed-column-grid').each(function() {

    var gridEl = $(this);
    gridEl.find('.widget').each(function() {

      var widgetEl = $(this);
      var nextWidgetEl = widgetEl.next();
      var prevWidgetEl = widgetEl.prev();

      var widgetCol = widgetEl.attr('fixed_column_grid_col');
      var nextWidgetCol = nextWidgetEl.attr('fixed_column_grid_col');
      var prevWidgetCol = prevWidgetEl.attr('fixed_column_grid_col');

      var nextWidgetClassName = nextWidgetEl.attr('class_name');
      var prevWidgetClassName = prevWidgetEl.attr('class_name');

      if(jQuery.cat.dom.isUndefined(nextWidgetClassName) == false) {
        if(widgetCol == nextWidgetCol) {
          widgetEl.addClass('widget-neighbor-next-' + jQuery.cat.string.fromCamel(nextWidgetClassName, '-'));
        }
      }
      if(jQuery.cat.dom.isUndefined(prevWidgetClassName) == false) {
        if(widgetCol == prevWidgetCol) {
          widgetEl.addClass('widget-neighbor-prev-' + jQuery.cat.string.fromCamel(prevWidgetClassName, '-'));
        }
      }

    });

  });



};

jQuery.goal_2025.widgets.searchTextWidget = function() {

};

jQuery.goal_2025.widgets.searchTextWidget.layout = function() {

  $('.search-text-widget-account-edit').each(function() {

    var contentViewEl = $(this).find('.widget-content-view');
    var contentEditEl = $(this).find('.widget-content-edit');
    var inputViewEl = contentViewEl.find('.widget-input-view');
    var inputEditEl = contentEditEl.find('.widget-input-edit');
    var saveButtonEl = contentEditEl.find('.widget-save-button');

    if(inputViewEl.find('div').length <= 0) { // If we haven't already converted

      // Convert the comma separated values into removable tags
      var text = inputViewEl.text();
      var textSplit = text.split(",");

      var processedText = [];
      for(var i=0;i<textSplit.length;i++) {
        var keyword = textSplit[i];
        var keyword = jQuery.cat.string.trim(keyword);

        if(jQuery.cat.string.isBlank(keyword) == false) {
          processedText.push('<div class="search-text-widget-keyword">' + keyword + '</div>');
        }
      }
      inputViewEl.html(processedText.join(""));
      if(jQuery.cat.string.isBlank(processedText)) {
        inputViewEl.html("&nbsp;");
      }

      // Allow the keywords to be individually deletable
      inputViewEl.find('.search-text-widget-keyword').click(function() {

        // Delete tag
        var keywordToDelete = $(this).text();

        var oldText = inputEditEl.val();
        var oldTextSplit = oldText.split(",");
        var newText = [];

        for(var i=0;i<oldTextSplit.length;i++) {
          var keyword = oldTextSplit[i];
          var keyword = jQuery.cat.string.trim(keyword);

          if(jQuery.cat.string.isBlank(keyword) == false) {

            if(keyword != keywordToDelete) {
              if(newText.join("") != "") {
                newText.push(", ");
              }
              newText.push(keyword);
            }

          }
        }

        inputEditEl.val(newText.join(""));
        saveButtonEl.trigger("click");

        return false;

      });

    }

  });

};


jQuery.goal_2025.widgets.htmlWidget = function() {


};

jQuery.goal_2025.widgets.htmlWidget.layout = function() {

  // Show the share widget on the last html widget depending on if collapsed or not
  $('.fixed-column-grid').each(function() {

    var gridEl = $(this);
    var htmlWidgetEls = gridEl.find('.html-widget-fixed-column-grid.fixed-column-grid-col-size-2');

    gridEl.find('.share-widget-html-widget').hide().removeClass('share-widget-enabled'); // Hide all share widgets

    var orderAttr = null;
    if(gridEl.hasClass('grid-size-small-medium')) { // collapsed
      orderAttr = 'fixed_column_grid_collapsed_order';
    }
    else { // uncollapsed
      orderAttr = 'fixed_column_grid_order';
    }

    lastHtmlWidgetEl = null;
    minOrder = 99999999999; // Set to an impossibly large order so the first widget at least is always selected

    // Iterate through and find the minimum order, that is the last html widget
    for(var i=0;i<htmlWidgetEls.length;i++) {
      var htmlWidgetEl = $(htmlWidgetEls[i]);
      var order = parseInt(htmlWidgetEl.attr(orderAttr));

      if(order <= minOrder) {
        lastHtmlWidgetEl = htmlWidgetEl;
      }

    }

    if(lastHtmlWidgetEl != null) {
      lastHtmlWidgetEl.find('.share-widget-html-widget').show(); // Show the last share widget
      lastHtmlWidgetEl.addClass('share-widget-enabled');
    }


  });




};


/**
 * Audio swapper
 */

jQuery.goal_2025.audioSwapper = function() {


};

jQuery.goal_2025.audioSwapper.onDomReady = function() {
  jQuery.goal_2025.audioSwapper.layout();
};

jQuery.goal_2025.audioSwapper.layout = function() {


  // Video
  $('.audio-swap').each(function() {

    if($(this).hasClass('audio-swap-loaded') == false) {

      $(this).addClass('audio-swap-loaded');
      var audioPlayerDomId = $(this).attr('audio_player_dom_id');

      var viewEl = $(this).find('.audio-swap-view');
      var playEl = $(this).find('.audio-swap-play');

      $(this).unbind('click');
      $(this).click(function() {

        $(this).find('.anystretch').remove();
        viewEl.hide();
        playEl.show();

        // initialize audio player
        var player = new MediaElementPlayer('#' + audioPlayerDomId);
        player.play();

      });

    }

  });


};

// Video
$('.audio-widget-grid').each(function() {

  var widgetEl = $(this);
  var viewingContentEl = $(this).find('.grid-content-overlay-viewing');
  var playingContentEl = $(this).find('.grid-content-overlay-playing');

  var pk = widgetEl.attr('pk');



});

/**
 * Video swapper
 */

jQuery.goal_2025.videoSwapper = function() {


};

jQuery.goal_2025.videoSwapper.onDomReady = function() {
  jQuery.goal_2025.videoSwapper.layout();
};

jQuery.goal_2025.videoSwapper.layout = function() {


  // Video
  $('.video-swap').each(function() {

    if($(this).hasClass('video-swap-loaded') == false) {

      $(this).addClass('video-swap-loaded');

      var videoPlayerUrl = $(this).attr('video_swap_video_player_url');

      $(this).unbind('click');
      $(this).click(function() {
        if($(this).find('iframe').length == 0) {
          $(this).append('<iframe class="video-player" src="' + videoPlayerUrl + '" frameborder="0" style="width:' + '100%' + '; height:' + '100%'+ ';"></iframe>');
        }
      });

    }

  });


};

/**
 * Anystretch helper
 */

jQuery.goal_2025.anystretchHelper = function() {


};

jQuery.goal_2025.anystretchHelper.onDomReady = function() {
  jQuery.goal_2025.anystretchHelper.layout();
};

jQuery.goal_2025.anystretchHelper.layout = function() {

  $('.anystretch-image').each(function() {
    var el = $(this);

    if(el.cat().dom().hasAttr('anystretch_image_url')) {

      var uuid = jQuery.cat.math.uuid();
      el.attr('anystretch_id', uuid);
      var imageUrl = el.attr('anystretch_image_url');
      $('[anystretch_id="' + uuid + '"]').anystretch(imageUrl);

    }
  });

};

/**
 * Click redirect
 */
jQuery.goal_2025.clickRedirect = function() {

};

jQuery.goal_2025.clickRedirect.onDomReady = function() {
  jQuery.goal_2025.clickRedirect.layout();
};

jQuery.goal_2025.clickRedirect.layout = function() {

  $('.click-redirect').each(function() {

    var clickRedirectEl = $(this);

    if(clickRedirectEl.hasClass('click-redirect-loaded') == false) {

      clickRedirectEl.addClass('click-redirect-loaded');

      // Click redirect
      clickRedirectEl.click(function() {

        var redirectUrl = clickRedirectEl.attr('click_redirect_url');
        var redirectTarget = clickRedirectEl.attr('click_redirect_target');
        if(redirectTarget == '_blank') {
          window.open(redirectUrl);
        }
        else {
          document.location.href = redirectUrl;
        }

      });

    }

  });

};



/**
 * Fit text
 */
jQuery.goal_2025.fitText = function() {

};

jQuery.goal_2025.fitText.layout = function() {

  $('.fit-text').css('font-family', 'inherit');
  $('.fit-text').each(function() {
    $(this).boxfit();
  });
  $('.fit-text').css('font-family',$('.fit-text').attr('fit_text_font_family'));

  // Add class to last paragraph so can set underline
  $('.fit-text').each(function() {
    var boxfitted = $(this).find('.boxfitted');

    if(boxfitted.length > 0) {

      var lastPEl = $(boxfitted.find('p')[0]);
      $(this).find('p').removeClass('boxfitted-last-paragraph');
      $(this).find('p').last().addClass('boxfitted-last-paragraph');

    }

  });


};

jQuery.goal_2025.fitText.onDomReady = function() {

  jQuery.goal_2025.fitText.layout();
  $('.fit-text').hide(); // Hide to prevent flicker on first load



};

jQuery.goal_2025.fitText.onWindowResize = function() {

};

jQuery.goal_2025.fitText.onWindowResizeFinish = function() {
  jQuery.goal_2025.fitText.layout();
};


jQuery.goal_2025.fitText.onWindowLoad = function() {
  $('.fit-text').hide(); // Hide to prevent flicker on first load
  jQuery.goal_2025.fitText.layout();
};


/**
 * Rotated text
 */
jQuery.goal_2025.rotatedText = function() {

};

jQuery.goal_2025.rotatedText.onWindowResize = function() {

  jQuery.goal_2025.rotatedText.layout();

};

jQuery.goal_2025.rotatedText.layout = function() {
  // Rotating text is not supported in IE < 8
  if(g_browser == 'IE' && g_browserVersion <= 8) {
    return; // It will resize the text to the wrong size if run on unsupported browsers
  }

  $('.rotated-text').each(function() {

    if($(this).hasClass('rotated') == false) {

      $(this).addClass('rotated');

      var degrees = parseInt($(this).attr('rotated_text_degrees'));

      $(this).css('rotate', degrees * Math.PI / 180);

    }

  });
};

jQuery.goal_2025.rotatedText.onDomReady = function() {

  jQuery.goal_2025.rotatedText.layout();


};

/**
 * Nav menu
 */
jQuery.goal_2025.navMenu = function() {

};

jQuery.goal_2025.navMenu.animationDuration = 300;
jQuery.goal_2025.navMenu.lastScrollLeft;
jQuery.goal_2025.navMenu.navMenuAnimating = false;

jQuery.goal_2025.navMenu.onWindowScroll = function() {

  var scrollLeft = $(document).scrollLeft();
  if(scrollLeft > 0 && scrollLeft != jQuery.goal_2025.navMenu.lastScrollLeft) {

    // User is scrolling horizontally, if the menu is out while they are scrolling, close the menu
    var headerNavMenu = $('.nav-menu');
    if(headerNavMenu.css('display') != 'none') {

      if(jQuery.goal_2025.navMenu.navMenuAnimating == false) {
        $('.nav-menu-button').trigger('click');
      }

    }


  }

  jQuery.goal_2025.navMenu.lastScrollLeft = scrollLeft;

};

jQuery.goal_2025.navMenu.onWindowResize = function() {

};

jQuery.goal_2025.navMenu.onDomReady = function() {

  // Expand the secondary menu if active on load
  $('.nav-menu-item-primary .has-secondary').each(function() {

    var primaryButtonEl = $(this);
    var navMenuItemPrimaryEl = primaryButtonEl.closest('.nav-menu-item-primary');
    var navMenuSecondaryEl = navMenuItemPrimaryEl.find('.nav-menu-secondary');
    var primaryButtonExpandImageEl = primaryButtonEl.find('.nav-menu-item-primary-expand-image');

    var secondaryButtonActive = false;
    var secondaryButtonEls = navMenuSecondaryEl.find('.nav-menu-item-secondary .nav-menu-item-link-wrapper');
    for(var i=0;i<secondaryButtonEls.length;i++) {
      var secondaryButtonEl = $(secondaryButtonEls[i]);
      if(secondaryButtonEl.hasClass('active')) {
        secondaryButtonActive = true;
        navMenuSecondaryEl.show();
        primaryButtonEl.addClass('expanded');

        if(g_browser == 'IE' && g_browserVersion <= 8) {
          primaryButtonExpandImageEl.attr('src', g_staticUrl + "main/images/menu_collapse@2x.png");
        }
        else {
          primaryButtonExpandImageEl.css('rotate', 180 * (Math.PI/180));
        }


        break;
      }
    }

  });

  // Display the secondary menu if click the primary item button
  $('.nav-menu-item-primary .has-secondary').click(function() {

    var primaryButtonEl = $(this);
    var navMenuItemPrimaryEl = primaryButtonEl.closest('.nav-menu-item-primary');
    var navMenuSecondaryEl = navMenuItemPrimaryEl.find('.nav-menu-secondary');
    var primaryButtonExpandImageEl = primaryButtonEl.find('.nav-menu-item-primary-expand-image');

    if(navMenuSecondaryEl.css('display') == 'none') {
      navMenuSecondaryEl.cat().anim().smoothSlideDown('fast', function() {});
      primaryButtonEl.addClass('expanded');

      if(g_browser == 'IE' && g_browserVersion <= 8) {
        primaryButtonExpandImageEl.attr('src', g_staticUrl + "main/images/menu_collapse@2x.png");
      }
      else {

        primaryButtonExpandImageEl.animate({
          rotate: 180 * (Math.PI/180)
        });

      }

    }
    else {
      navMenuSecondaryEl.slideUp('fast');
      primaryButtonEl.removeClass('expanded');

      if(g_browser == 'IE' && g_browserVersion <= 8) {
        primaryButtonExpandImageEl.attr('src', g_staticUrl + "main/images/menu_expand@2x.png");
      }
      else {

        primaryButtonExpandImageEl.animate({
          rotate: 0 * (Math.PI/180)
        });

      }
    }
  });

  $('.nav-menu-close-button').click(function() {

    $('.nav-menu-button').trigger('click');

  });

  $('.nav-search-button').click(function() {

    var headerNavSearch = $('.nav-search');
    var headerNavSearchTopOffset = headerNavSearch.outerHeight(true);
    var headerNavSearchDuration = jQuery.goal_2025.navMenu.animationDuration;

    if(headerNavSearch.css('display') == 'none') {

      headerNavSearch.css('top', -headerNavSearchTopOffset);
      headerNavSearch.show();
      headerNavSearch.animate({
        top:'0'
      }, headerNavSearchDuration);

      $('.layout, .header-bar').animate({
        top: headerNavSearchTopOffset
      }, headerNavSearchDuration);

      // Focus on nav input
      window.setTimeout(function() {
        headerNavSearch.find('input').focus();
      }, 250); // XXX Need to delay otherwise scrolls the page up a bit

    }
    else {

      headerNavSearch.animate({
        top:-headerNavSearchTopOffset
      }, headerNavSearchDuration, function() {
        headerNavSearch.hide();
      });

      $('.layout, .header-bar').animate({
        top: 0
      }, headerNavSearchDuration);


    }


  });

  $('.nav-menu-button').click(function() {

    jQuery.goal_2025.navMenu.navMenuAnimating = true;

    // Close search if open, if closing, delay the opening of the menu
    // until the search is fully closed to make it a smooth animation
    var delay = 0;
    if($('.nav-search').css('display') != 'none') {
      $('.nav-search-button').trigger('click');
      delay = jQuery.goal_2025.navMenu.animationDuration;
    }

    window.setTimeout(function() {

      var headerNavMenu = $('.nav-menu');
      var headerNavMenuLeftOffset = -headerNavMenu.outerWidth(true);
      var headerNavMenuDuration = jQuery.goal_2025.navMenu.animationDuration;

      // headerNavMenu.height($(document).height());

      if(headerNavMenu.css('display') == 'none') {

        headerNavMenu.css('left', headerNavMenuLeftOffset);
        headerNavMenu.show();
        headerNavMenu.animate({
          left:'0'
        }, headerNavMenuDuration);

        $('.layout, .header-bar').animate({
          left: -headerNavMenuLeftOffset
        }, headerNavMenuDuration, function() {
          jQuery.goal_2025.navMenu.navMenuAnimating = false;
        });

        // Sync nav menu position
        if($('.nav-menu').css('position') != 'fixed') {
          $('.nav-menu').css('top', jQuery.cat.dom.windowScrollTop());
        }

        /*
        // If the window height is smaller than menu itself, we set the height of the menu to the window height so it is scrollable
        if(headerNavMenu.height() > $(window).height()) {
          headerNavMenu.height($(window).height());
        }
        */

      }
      else {

        headerNavMenu.animate({
          left:headerNavMenuLeftOffset
        }, headerNavMenuDuration, function() {
          headerNavMenu.hide();
        });

        $('.layout, .header-bar').animate({
          left: 0
        }, headerNavMenuDuration, function() {
          jQuery.goal_2025.navMenu.navMenuAnimating = false;
        });

      }

    }, delay);

  });

};

/**
 * Account Edit
 */
jQuery.goal_2025.accountEdit = function() {

};

jQuery.goal_2025.accountEdit.afterEditFunctions = [];
jQuery.goal_2025.accountEdit.afterSaveFunctions = [];
jQuery.goal_2025.accountEdit.afterSaveCancelFunctions = [];
jQuery.goal_2025.accountEdit.afterAddFunctions = [];
jQuery.goal_2025.accountEdit.afterRemoveFunctions = [];
jQuery.goal_2025.accountEdit.afterSubmitPreviewFunctions = [];
jQuery.goal_2025.accountEdit.afterSubmitSaveFunctions = [];
jQuery.goal_2025.accountEdit.afterValidationErrorFunctions = [];

jQuery.goal_2025.accountEdit.onDomReady = function() {

  jQuery.goal_2025.accountEdit.layout();

  // Initialize the editor for existing textareas, note to not add for empties as those will be added later
  $('.widget-actives').find('textarea').each(function() {
    var textareaEl = $(this);
    jQuery.goal_2025.accountEdit.initHtmlEditor(textareaEl.attr('id'));
  });


};

jQuery.goal_2025.accountEdit.initHtmlEditor = function(domId) {

  var editorConfig = $('#' + domId).attr('html_editor_config');

  // Initialize advanced tinymce for textareas
  if(editorConfig == 'advanced') {

    tinymce.init({
      mode : "exact",
      elements : domId,
      menubar: false,
      statusbar: true,
      toolbar: 'bold italic link unlink styleselect removeformat',
      plugins: [
      "link", "paste"
      ],
      resize: false,
      paste_auto_cleanup_on_paste : true,
      convert_urls : false,
      entity_encoding: "raw",
      apply_source_formatting: false,
      height: 400,
      style_formats : [
        {title : 'Lyon_H1_30', block : 'div', classes : 'editor-header-3 editor-style'},
        {title : 'Apercu_H1_15', inline : 'span', classes : 'editor-header-6 editor-style'},
        {title : 'Lyon_Q1_30', block : 'div', classes : 'editor-header-4 editor-style'},
        {title : 'Lyon_Q2_20', block : 'div', classes : 'editor-header-5 editor-style'}
      ],
      'content_css' : g_staticUrl + "main/css/editor.css"
    });

  }
  // Initialize simple tinymce for textareas
  else {

    tinymce.init({
      mode : "exact",
      elements : domId,
      menubar: false,
      statusbar: false,
      toolbar: 'link unlink',
      plugins: [
      "link", "paste"
      ],
      resize: false,
      paste_auto_cleanup_on_paste : true,
      convert_urls : false,
      entity_encoding: "raw",
      apply_source_formatting: false,
      height: 100,
      'content_css' : g_staticUrl + "main/css/editor.css"
    });

  }

};

jQuery.goal_2025.accountEdit.onFixedColumnGridDragDropOrderingDrop = function() {

  // Save the ordering
  var widgets = $('.widget');

  for(var i=0;i<widgets.length;i++) {
    var widget = $(widgets[i]);
    widget.attr('fixed_column_grid_order', i);
  }

};

jQuery.goal_2025.accountEdit.syncImageInput = function(inputViewEl, inputEl, imageUrl, thumbnailImageUrl, thumbnailImageWidth, thumbnailImageHeight) {

  var thumbnailForceWidth = '180'; // Force to appear at certain height

  var mThumbnailImageContainerEl = $('<div/>');
  var mThumbnailImageEl = $('<img width="' + thumbnailForceWidth + 'px"/>');
  mThumbnailImageEl.attr('src', thumbnailImageUrl);

  // XXX We need to set a container on it, otherwise the height is not correct
  //mThumbnailImageContainerEl.height(thumbnailImageHeight);
  mThumbnailImageContainerEl.height(thumbnailForceWidth * (thumbnailImageHeight/thumbnailImageWidth));
  mThumbnailImageContainerEl.append(mThumbnailImageEl);

  jQuery.goal_2025.accountEdit.syncFileInput(inputViewEl, inputEl, mThumbnailImageContainerEl, imageUrl, 'image');

};

jQuery.goal_2025.accountEdit.syncFileInput = function(inputViewEl, inputEl, inputViewInnerEl, file_url, file_type) {

  inputViewInnerEl.append('<input type="hidden" class="widget-input-edit" value="' + file_url + '" name="file_rel_path_' + inputEl.attr('name') + '"/>');
  inputViewInnerEl.append('<input type="hidden" class="widget-input-edit" value="' + file_type + '" name="file_rel_path_type_' + inputEl.attr('name') + '"/>');
  inputViewInnerEl.append('<input type="hidden" class="widget-input-edit" value="true" name="file_rel_path_name_' + inputEl.attr('name') + '"/>');
  inputViewInnerEl.append('<input type="hidden" class="widget-input-edit" value="true" name="file_rel_path_changed_' + inputEl.attr('name') + '"/>');

  inputViewEl.html(inputViewInnerEl);

};

// Get all the data for the dashboard for form submission
jQuery.goal_2025.accountEdit.getFormData = function() {

  // Create the form data in an associative array
  var formData = {};

  // If preview button clicked, we post all our data to the preview page, it saves in in-memory widgets
  var numWidgets = 0;
  $('.widget-actives .widget').each(function(index) {

    var widgetEl = $(this);
    var pk = widgetEl.attr('pk');
    var col = widgetEl.attr('fixed_column_grid_col');
    var order = index; // Order based on order in dom which is the visual order
    var className = widgetEl.attr('class_name');
    var widgetTitle = widgetEl.find('.widget-header-title').text();

    if(widgetEl.cat().dom().hasAttr('save_override_col')) {
      col = widgetEl.attr('save_override_col');
    }

    formData['pk-' + index] = pk;
    formData['order-' + index] = order;
    formData['col-' + index] = col;
    formData['class_name-' + index] = className;
    formData['inputs-' + index] = "";
    formData['title-' + index] = widgetTitle;

    var inputEls = widgetEl.find('.widget-input-edit');
    for(var i=0;i<inputEls.length;i++) {
      var inputEl = $(inputEls[i]);

      var name = inputEl.attr('name');
      var value = null;

      var editViewEl = widgetEl.find('.widget-input-edit-' + name);
      if(editViewEl.is("textarea")) {
        value = tinyMCE.get(editViewEl.attr('id')).getContent();
      }
      else {
        value = inputEl.val();
      }

      formData[name + '-' + index] = value;
      formData['inputs-' + index] += name + ",";

    }

    numWidgets++;

  });

  formData['num_widgets'] = numWidgets;
  return formData;

};

jQuery.goal_2025.accountEdit.layout = function() {

  $('.widget-edit-button').each(function() {

    var editButtonEl = $(this);
    var contentEl = editButtonEl.closest('.widget-content');
    var contentViewEl = contentEl.find('.widget-content-view');
    var contentEditEl = contentEl.find('.widget-content-edit');
    var formEl = contentEditEl.find('form');
    var saveButtonEl = contentEditEl.find('.widget-save-button');

    contentViewEl.unbind('click');
    contentViewEl.click(function() {

      // Focus on the input if it's a text
      var inputs = formEl.find('input:text');
      for(var i=0;i<inputs.length;i++) {
        var input = $(inputs[i]);

        // XXX Need to set timeout for focus to work
        setTimeout(function() {
          input.focus();
        }, 100);
        break;
      }

      // Handle textareas
      var textarea = formEl.find('textarea');
      if(textarea.length > 0) {

        // If textarea, generate a new tinymce instance each time
        // as when we drag drop, it will clone and break the existing tinymce
        // so we need to start fresh each time
        formEl.find('.mce-tinymce').remove();

        var uuid = jQuery.cat.math.uuid();
        textarea.attr('id', uuid);

        jQuery.goal_2025.accountEdit.initHtmlEditor(uuid);

        formEl.find('.mce-tinymce').show();

        // XXX Never use this focus command, breaks in IE so that the editor never appears
        // tinyMCE.execCommand("mceFocus", uuid);

      }

      // Handle file input
      var fileInputEls = formEl.find('input:file');
      if(fileInputEls.length > 0) {

        // Should only be one per edit
        var fileInput = $(fileInputEls[0]);
        var inputViewEl = contentViewEl.find('.widget-input-view-' + fileInput.attr('name'));
        var inputViewFileRelPathEl = inputViewEl.find("[name='file_rel_path_" + fileInput.attr('name') + "']");
        var uploadButtonEl = contentEditEl.find('.widget-header-save-actions-upload-file');
        var uploadRemoveButtonEl = contentEditEl.find('.widget-header-save-actions-upload-remove-file');

        var hasFile = false;
        if(jQuery.cat.string.isBlank(inputViewFileRelPathEl.val()) == false) {
          hasFile = true;
        }

        if(hasFile) {
          uploadButtonEl.hide();
          uploadRemoveButtonEl.show();
        }
        else {
          uploadButtonEl.show();
          uploadRemoveButtonEl.hide();
        }

      }

      contentViewEl.hide();
      contentEditEl.show();

      // Handle selects, we need to do it here, otherwise it doesn't get the heights correct until the div is shown
      var select = formEl.find('select');
      if(select.length > 0) {
        select.addClass('custom-select-input');
        jQuery.goal_2025.customSelect.layout();
      }

      for(var i=0;i<jQuery.goal_2025.accountEdit.afterEditFunctions.length;i++) {
        var afterEditFunction = jQuery.goal_2025.accountEdit.afterEditFunctions[i];
        afterEditFunction();
      }

    });

    // Absorb enter key, it will actually trigger a save
    formEl.find('.widget-input-edit').keypress(function(event){

      if(event.which == 13) {
        saveButtonEl.trigger('click');
        return false;
      }
    });



  });

  $('.widget-save-cancel-button').unbind('click');
  $('.widget-save-cancel-button').click(function() {
    var saveCancelButtonEl = $(this);
    var widgetEl = saveCancelButtonEl.closest('.widget');
    var contentEl = saveCancelButtonEl.closest('.widget-content');
    var contentViewEl = contentEl.find('.widget-content-view');
    var contentEditEl = contentEl.find('.widget-content-edit');
    contentEditEl.hide();
    contentViewEl.show();

    for(var i=0;i<jQuery.goal_2025.accountEdit.afterSaveFunctions.length;i++) {
      var afterSaveCancelFunction = jQuery.goal_2025.accountEdit.afterSaveCancelFunctions[i];
      afterSaveCancelFunction();
    }
  });

  $('.widget-save-button').each(function() {

    var saveButtonEl = $(this);
    var widgetEl = saveButtonEl.closest('.widget');
    var contentEl = saveButtonEl.closest('.widget-content');
    var contentViewEl = contentEl.find('.widget-content-view');
    var contentEditEl = contentEl.find('.widget-content-edit');
    var cancelButtonEl = contentEl.find('.widget-save-cancel-button');
    var formEl = contentEditEl.find('form');

    var widgetPk = widgetEl.attr('pk');

    saveButtonEl.unbind('click');
    saveButtonEl.click(function() {

      // Handle file input
      var fileInputEls = formEl.find('input:file');
      if(fileInputEls.length > 0) {

        // Set to activity indicator
        var fileUploadImageEl = contentEl.find('.widget-content-edit-file-upload-image');

        fileUploadImageEl.attr('src', g_staticUrl + 'main/images/widget_upload_load@2x.gif');
        cancelButtonEl.hide(); // Hide cancel button while loading

        // Should only be one per edit
        var fileInput = $(fileInputEls[0]);
        var inputViewEl = contentViewEl.find('.widget-input-view-' + fileInput.attr('name'));

        // Image upload
        if(fileInput.attr('file_type') == 'image') {

          var data = $(formEl).serializeArray();
          data.push({ name: "file_name_prefix", value: widgetPk });


          $.ajax('/image-upload-ajax/', {
            data: data,
            files: $(":file", formEl),
            iframe: true
          }).success(function(data) {

            result = $.parseJSON($(data).text()); // XXX Strip html tags

            if(result.errors.length <= 0) {

              mImageUrl = result.images['m_url'];
              mImageWidth = result.images['m_size'][0];
              mImageHeight = result.images['m_size'][1];

              jQuery.goal_2025.accountEdit.syncImageInput(inputViewEl, fileInput, result.images['o_url'], mImageUrl, mImageWidth, mImageHeight);

              contentEditEl.hide();
              contentViewEl.show();

              for(var i=0;i<jQuery.goal_2025.accountEdit.afterSaveFunctions.length;i++) {
                var afterSaveFunction = jQuery.goal_2025.accountEdit.afterSaveFunctions[i];
                afterSaveFunction(result);
              }

              widgetEl.trigger("afterSave", result);

              fileUploadImageEl.attr('src', g_staticUrl + 'main/images/button_choosefile@2x.png');
              cancelButtonEl.show();

            }
            else {

              fileUploadImageEl.attr('src', g_staticUrl + 'main/images/button_choosefile@2x.png');
              cancelButtonEl.show();

              for(var i=0;i<jQuery.goal_2025.accountEdit.afterSaveFunctions.length;i++) {
                var afterSaveFunction = jQuery.goal_2025.accountEdit.afterSaveFunctions[i];
                afterSaveFunction(result);
              }

            }

          });

        }
        // File upload
        else {

          var data = $(formEl).serializeArray();
          data.push({ name: "file_name_prefix", value: widgetPk });

          $.ajax('/file-upload-ajax/', {
            data: data,
            files: $(":file", formEl),
            iframe: true
          }).success(function(data) {

            result = $.parseJSON($(data).text()); // XXX Strip html tags

            // Add the hidden inputs that we can process later
            var fileContainerEl = $('<div>' + result.file.display_file_name + '</div>');
            jQuery.goal_2025.accountEdit.syncFileInput(inputViewEl, fileInput, fileContainerEl, result.file.url, 'file');

            contentEditEl.hide();
            contentViewEl.show();

            for(var i=0;i<jQuery.goal_2025.accountEdit.afterSaveFunctions.length;i++) {
              var afterSaveFunction = jQuery.goal_2025.accountEdit.afterSaveFunctions[i];
              afterSaveFunction();
            }

            fileUploadImageEl.attr('src', g_staticUrl + 'main/images/button_choosefile@2x.png');
            cancelButtonEl.show();

          });

        }

      }
      else {

        contentEditEl.hide();
        contentViewEl.show();

        var formInputs = $(formEl).serializeArray();

        for(var i=0;i<formInputs.length;i++) {

          var formInput = formInputs[i];
          var name = formInput.name;
          var value = formInput.value;
          var inputViewEl = contentViewEl.find('.widget-input-view-' + name);
          var editViewEl = contentEditEl.find('.widget-input-edit-' + name);

          if(editViewEl.is("textarea")) {
            value = tinyMCE.get(editViewEl.attr('id')).getContent();
            editViewEl.html(value); // Update the textarea to sync, as each edit a new tinymce is created
          }

          if(editViewEl.is("select")) {
            value = editViewEl.find('option[value="' + value + '"]').text();
          }

          if(jQuery.cat.string.isEmpty(value)) {
            inputViewEl.html('&nbsp;'); // Use a placeholder so the field doesn't look collapsed
          }
          else {
            inputViewEl.html(value);
          }

          widgetEl.trigger("afterSave", value);

        }

        for(var i=0;i<jQuery.goal_2025.accountEdit.afterSaveFunctions.length;i++) {
          var afterSaveFunction = jQuery.goal_2025.accountEdit.afterSaveFunctions[i];
          afterSaveFunction();
        }

      }

    });



  });

  $('.widget-header-actions-remove').unbind('click');
  $('.widget-header-actions-remove').click(function() {

    var removeButtonEl = $(this);
    var widgetEl = removeButtonEl.closest('.widget');
    widgetEl.remove();

    for(var i=0;i<jQuery.goal_2025.accountEdit.afterRemoveFunctions.length;i++) {
      var afterRemoveFunction = jQuery.goal_2025.accountEdit.afterRemoveFunctions[i];
      afterRemoveFunction();
    }

  });

  $('.widget-header-actions-add').unbind('click');
  $('.widget-header-actions-add').click(function() {

    var addButtonEl = $(this);
    var widgetEl = addButtonEl.closest('.widget');
    var widgetTitle = widgetEl.find('.widget-header-title').text();

    // Find the type of widget from the empties
    var widgetElClasses = widgetEl.attr("class").split(' ');
    var widgetElClass = null;
    for(var i=0;i<widgetElClasses.length;i++) {
      var testClass = widgetElClasses[i];
      var matches = testClass.match(/^[a-z0-9-]+-account-edit$/g);
      if(matches != null) {
        widgetElClass = matches[0];
        break;
      }
    }

    var emptyEl = $('.widget-empties').find('.' + widgetElClass);
    var cloneEl = emptyEl.clone();
    cloneEl.insertAfter(widgetEl);

    // Update the attributes
    cloneEl.removeClass(widgetElClass + '-' + widgetEl.attr('pk'));
    cloneEl.addClass(widgetElClass + '-' + '0');
    cloneEl.attr('pk', '0');

    cloneEl.attr('fixed_column_grid_col', widgetEl.attr('fixed_column_grid_col'));
    cloneEl.attr('fixed_column_grid_order', parseInt(widgetEl.attr('fixed_column_grid_order')) + 1);

    cloneEl.find('.widget-header-title').text(widgetTitle);

    for(var i=0;i<jQuery.goal_2025.accountEdit.afterAddFunctions.length;i++) {
      var afterAddFunction = jQuery.goal_2025.accountEdit.afterAddFunctions[i];
      afterAddFunction();
    }

  });

  $('.widget-submit-preview-button').unbind('click');
  $('.widget-submit-preview-button').click(function() {

    var formData = jQuery.goal_2025.accountEdit.getFormData();



    for(var i=0;i<jQuery.goal_2025.accountEdit.afterSubmitPreviewFunctions.length;i++) {
      var afterSubmitPreviewFunction = jQuery.goal_2025.accountEdit.afterSubmitPreviewFunctions[i];
      afterSubmitPreviewFunction(formData);
    }

  });

  $('.widget-submit-save-button').unbind('click');
  $('.widget-submit-save-button').click(function() {

    var formData = jQuery.goal_2025.accountEdit.getFormData();

    for(var i=0;i<jQuery.goal_2025.accountEdit.afterSubmitSaveFunctions.length;i++) {
      var afterSubmitSaveFunction = jQuery.goal_2025.accountEdit.afterSubmitSaveFunctions[i];
      afterSubmitSaveFunction(formData);
    }

  });

  // Use an image instead of a choose file system button
  $('.widget-content-edit-file-upload-image').file().choose(function(e, input) {

    var containerEl = $(this).closest('.widget-content-edit-file-upload-container');
    var contentEl = $(this).closest('.widget-content');
    var inputCloneEl = containerEl.find('.widget-content-edit-file-upload-input');
    var saveButtonEl = contentEl.find('.widget-save-button');

    input.attr('class', inputCloneEl.attr('class'));
    input.attr('name', inputCloneEl.attr('name'));
    input.removeAttr('multiple');

    containerEl.append(input);
    saveButtonEl.trigger('click');

  });

  // Remove a file
  $('.widget-header-save-actions-upload-remove-file').unbind('click');
  $('.widget-header-save-actions-upload-remove-file').click(function() {
    var removeFileButtonEl = $(this);
    var widgetEl = removeFileButtonEl.closest('.widget');
    var contentEl = removeFileButtonEl.closest('.widget-content');
    var contentViewEl = contentEl.find('.widget-content-view');
    var contentEditEl = contentEl.find('.widget-content-edit');
    var inputViewEl = contentViewEl.find('.widget-input-view');
    inputViewEl.empty();

    contentEditEl.hide();
    contentViewEl.show();

    for(var i=0;i<jQuery.goal_2025.accountEdit.afterSaveFunctions.length;i++) {
      var afterSaveFunction = jQuery.goal_2025.accountEdit.afterSaveFunctions[i];
      afterSaveFunction();
    }

    widgetEl.trigger("afterSave", null);

  });


};

/**
 * Partner map
 */
jQuery.goal_2025.partnerMap = function() {

};

jQuery.goal_2025.partnerMap.map = null;
jQuery.goal_2025.partnerMap.centerLatLng = [44.847593,-96.547852];
jQuery.goal_2025.partnerMap.fetching = false;
jQuery.goal_2025.partnerMap.filter = null;
jQuery.goal_2025.partnerMap.query = null;
jQuery.goal_2025.partnerMap.markersLayerGroup = null;
jQuery.goal_2025.partnerMap.fitMapDisabledMinWidth = 0;
jQuery.goal_2025.partnerMap.fitMapDisabledHeight = 480;

jQuery.goal_2025.partnerMap.onWindowResize = function() {
  jQuery.goal_2025.partnerMap.fitMap();
  jQuery.goal_2025.partnerMap.markerDialogFitHeight();
};

jQuery.goal_2025.partnerMap.onWindowLoad = function() {
  jQuery.goal_2025.partnerMap.fitMap();

};

jQuery.goal_2025.partnerMap.fetch = function() {

  jQuery.goal_2025.partnerMap.fetching = true;

  var url = '/partner-map-ajax/';
  var query = "?1=1";

  if(jQuery.goal_2025.partnerMap.filter != null) {
    query += '&filter=' + jQuery.goal_2025.partnerMap.filter;
  }
  if(jQuery.goal_2025.partnerMap.query != null) {
    query += '&query=' + jQuery.goal_2025.partnerMap.query;
  }
  url += query;

  $.ajax(url, {
  }).success(function(data) {

    // Clear all popups
    jQuery.goal_2025.partnerMap.map.closePopup();

    // Clear existing markers
    jQuery.goal_2025.partnerMap.markersLayerGroup.clearLayers();

    var accountTuples = jQuery.parseJSON(data).account_tuples;

    for(var i=0;i<accountTuples.length;i++) {
      var accountTuple = accountTuples[i];
      var username = accountTuple[0];
      var lat = accountTuple[1];
      var lng = accountTuple[2];
      var organizationIndustry = accountTuple[3];

      var coordinate = new L.LatLng(parseFloat(lat), parseFloat(lng));

      // Add markers for each account
      jQuery.goal_2025.partnerMap.markersLayerGroup.addLayer(jQuery.goal_2025.partnerMap.createMarker(username, coordinate, organizationIndustry));

      jQuery.goal_2025.partnerMap.fetching = false;

    }



  });

};

jQuery.goal_2025.partnerMap.searchItems = function(query) {

  jQuery.goal_2025.partnerMap.query = query;
  jQuery.goal_2025.partnerMap.fetch();

};

jQuery.goal_2025.partnerMap.filterItems = function(filter) {

  jQuery.goal_2025.partnerMap.filter = filter;
  jQuery.goal_2025.partnerMap.fetch();

};

jQuery.goal_2025.partnerMap.onDomReady = function() {

  if($('#partner-map-map').length > 0) {

    // Partner map help overlay
    $('.partner-map-help-background').css('opacity', 0.8);
    $('.partner-map-help-background').css('backgroundColor', '#000');

    // Set the map zooms based on the browser width
    var windowWidth = $(window).width();
    var mapInitialZoom = 0;
    var mapMaxZoom = 0;
    var mapMinZoom = 0;

    if(windowWidth > 0 && windowWidth < 600) {
      mapInitialZoom = 2;
      mapMaxZoom = 8;
      mapMinZoom = 1;
    }
    else if(windowWidth > 600 && windowWidth < 1000) {
      mapInitialZoom = 3;
      mapMaxZoom = 8;
      mapMinZoom = 1;
    }
    else if(windowWidth > 1000) {
      mapInitialZoom = 4;
      mapMaxZoom = 8;
      mapMinZoom = 3;
    }

    // Initialize map
    jQuery.goal_2025.partnerMap.map = L.map('partner-map-map', {
      attributionControl: false,
      zoomControl: false,
      closePopupOnClick: false
      }).setView(jQuery.goal_2025.partnerMap.centerLatLng, mapInitialZoom);

    L.tileLayer('http://a.tiles.mapbox.com/v3/winfieldco.django_goal_2025_25/{z}/{x}/{y}.png', {
      maxZoom: mapMaxZoom, minZoom: mapMinZoom
    }).addTo(jQuery.goal_2025.partnerMap.map);

    // Initialize marker groups
    jQuery.goal_2025.partnerMap.markersLayerGroup = new L.LayerGroup();
    jQuery.goal_2025.partnerMap.map.addLayer(jQuery.goal_2025.partnerMap.markersLayerGroup);

    // Handle hitareas
    jQuery.goal_2025.partnerMap.map.on('click', function(e) {

      // Close help if is showing
      if($('#partner-map-help').length > 0 && $('#partner-map-help').css('display') != 'none') {
        $('#partner-map-help').remove();
        return;
      }

      // Disable hitarea overlays for mobile
      if($('body').hasClass('breakpoint-body-size-small')) {
        return;
      }

      // Ignore clicks within the controls
      var controls = $('#partner-map-controls');
      var controlPosition = controls.position();
      var controlWidth = controls.outerWidth(true);
      var controlHeight = controls.outerHeight(true);

      var controlClick = false;

      if(e.containerPoint.x > controlPosition.left && e.containerPoint.x < (controlPosition.left + controlWidth)) {
        if(e.containerPoint.y > controlPosition.top && e.containerPoint.y < (controlPosition.top + controlHeight)) {
          controlClick = true;
        }
      }

      if(controlClick == false) {

        // Test for a hitarea via ajax
        var url = "/partner-map-hitarea-ajax/?lat=" + e.latlng.lat + "&lng=" + e.latlng.lng + "&zoom=" + jQuery.goal_2025.partnerMap.map.getZoom();

        $.ajax(url, {
        }).success(function(data) {

          if(jQuery.cat.string.isBlank(data) == false) {

            var slug = $(data).attr('slug');

            var partnerMapHitareaDialog = $('.partner-map-hitarea-dialog');
            var existingSlug = partnerMapHitareaDialog.find('.partner-map-hitarea-dialog-content').attr('slug');

            // Close if clicking the same hitarea
            if(slug == existingSlug && slug != undefined) {

              jQuery.goal_2025.partnerMap.hitareaDialogClose();

            }
            else {



              partnerMapHitareaDialog.html(data);

              // Fade in from bottom transition
              partnerMapHitareaDialog.show(); // Show again as was hidden if we closed it previously
              partnerMapHitareaDialog.css({y: 100, opacity: 0});
              partnerMapHitareaDialog.transition({y:0, opacity: 1}, 500, 'snap');

              partnerMapHitareaDialog.find('.partner-map-hitarea-dialog-state-slide-placeholder').html($('.partner-map-hitarea-dialog-state-slide-1').html());

              jQuery.goal_2025.slideshow.layout();
              partnerMapHitareaDialog.cat().ui().popupDialog(true, null, function(dialogEl, modalEl) {
                modalEl.css('backgroundColor', '#000');
                modalEl.css('opacity', 0.8);
                modalEl.addClass('partner-map-hitarea-dialog-modal');
                modalEl.click(function() {
                  jQuery.goal_2025.partnerMap.hitareaDialogClose();
                });

              });

            }

          }
          else {
            jQuery.goal_2025.partnerMap.hitareaDialogClose();
          }

        });
      }

    });

    /*
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(jQuery.goal_2025.partnerMap.map);
    */

    // Set the map boundaries dynamically
    /*
    var southWest = new L.LatLng(1.086849,-168.497314),
      northEast = new L.LatLng(74.316068,-55.997314),
      maxBounds = new L.LatLngBounds(southWest, northEast);
    jQuery.goal_2025.partnerMap.map.setMaxBounds(maxBounds);
    */


  }

  jQuery.goal_2025.partnerMap.setMapControls();
  jQuery.goal_2025.partnerMap.fitMap();

};

jQuery.goal_2025.partnerMap.hitareaDialogClose = function() {
  $('.partner-map-hitarea-dialog').trigger('close');
};

jQuery.goal_2025.partnerMap.hitareaDialogSlide = function(index, containerEl, button) {

  jQuery.goal_2025.slideshow.goTo(containerEl, index);
  $('.partner-map-hitarea-dialog-state-slide-button').find('img').attr('src', g_staticUrl + 'main/images/popup_dot_empty@2x.png');
  $(button).find('img').attr('src', g_staticUrl + 'main/images/popup_dot_fill@2x.png');


};

jQuery.goal_2025.partnerMap.polygonContainsLatLng = function(latLng, polygonLatLngs) {

  var nvert = polygonLatLngs.length;

  var i, j, c = 0;
  for (i = 0, j = nvert-1; i < nvert; j = i++) {

    var verti = polygonLatLngs[i];
    var vertj = polygonLatLngs[j];

    if ( ((verti.lng>latLng.lng) != (vertj.lng>latLng.lng)) &&
      (latLng.lat < (vertj.lat-verti.lat) * (latLng.lng-verti.lng) / (vertj.lng-verti.lng) + verti.lat) )
      c = !c;
  }
  return c;

};

jQuery.goal_2025.partnerMap.positionPopup = function(popupCoordinate) {

  // Manually pan to reposition if within the header or outside bounds of window
  var popupWrapperEl = $('.leaflet-popup-content-wrapper');
  var popupHeight = popupWrapperEl.height();
  var popupWidth = popupWrapperEl.width();
  popupWrapperEl.addClass('content-loaded');

  var coordinatePoint = jQuery.goal_2025.partnerMap.map.latLngToContainerPoint(popupCoordinate);

  var pageToolsHeaderEls = $('.page-tools-header');
  var pageToolsHeaderEl = null;
  for(var i=0;i<pageToolsHeaderEls.length;i++) {
    if($(pageToolsHeaderEls[i]).css('display') != 'none') {
      pageToolsHeaderEl = $(pageToolsHeaderEls[i]);
    }
  }

  var popupTopPadding = 60;
  var popupLeftPadding = 60;
  var popupRightPadding = 60;
  var popupTop = coordinatePoint.y - popupHeight - popupTopPadding;
  var popupLeft = coordinatePoint.x - popupWidth/2 - popupLeftPadding;
  var popupRight = coordinatePoint.x + popupWidth/2 + popupRightPadding;

  var popupPanX = 0;
  var popupPanY = 0;

  // If popup is high enough to be obscured by the header
  if(popupTop < pageToolsHeaderEl.height()) {
    popupPanY = -(pageToolsHeaderEl.height() - popupTop);
  }

  // If the popup is left enough to be obscured by the zoom
  if(popupLeft < 0) {
    var popupLeftOffset = 40; // Offset a bit more to the right
    popupPanX = popupLeft - popupLeftOffset;
  }

  // If the popup is right enough to go outside the window
  if(popupRight > $(window).width()) {
    var popupRightOffset = 40; // Offset a bit more to the right
    popupPanX = -($(window).width() - popupRight);
  }

  jQuery.goal_2025.partnerMap.map.panBy([popupPanX, popupPanY]);

};

jQuery.goal_2025.partnerMap.createMarker = function(username, coordinate, organizationIndustry) {

  var markerIconName = null;
  switch(organizationIndustry) {
  case 1:
    markerIconName = "education";
    break;
  case 2:
    markerIconName = "non-profit";
    break;
  case 5:
    markerIconName = "business";
    break;
  case 6:
    markerIconName = "faith-based";
    break;
  case 7:
    markerIconName = "funder";
    break;
  }

  // Test custom marker icons
  var customMarkerIcon = L.icon({
    iconUrl: g_staticUrl + 'main/images/map_marker_' + markerIconName + '.png',
    iconRetinaUrl: g_staticUrl + 'main/images/map_marker_' + markerIconName + '@2x.png',
    iconSize: [27, 27],
    iconAnchor: [13, 13]
  });

  var customMarker = L.marker(coordinate, {icon: customMarkerIcon});
  customMarker.username = username;

  var customMarkerEvent = 'click';
  if(Modernizr.touch) {
    customMarkerEvent = 'click';
  }

  customMarker.on(customMarkerEvent, function(event) {

    var partnerMapMarkerDialogEl = $('.partner-map-marker-dialog');
    partnerMapMarkerDialogEl.html('<div class="partner-map-marker-dialog-content"><table class="partner-map-marker-dialog-loading"><tr><td><img src="' + g_staticUrl + 'main/images/loader_white@2x.gif" width="24px"/></td></tr></table></div>');

    // Fade in from bottom transition
    partnerMapMarkerDialogEl.show(); // Show again as was hidden if we closed it previously
    partnerMapMarkerDialogEl.css({y: 100, opacity: 0});
    partnerMapMarkerDialogEl.transition({y:0, opacity: 1}, 500, 'snap');

    partnerMapMarkerDialogEl.cat().ui().popupDialog(true, null, function(dialogEl, modalEl) {

      modalEl.css('backgroundColor', '#000');
      modalEl.css('opacity', 0.8);
      modalEl.click(function() {
        jQuery.goal_2025.partnerMap.markerDialogClose();
      });

      // Load via Ajax
      var target = event.target;
      var username = target.username;
      var url = "/partner-map-marker-ajax/?username=" + username;

      $.ajax(url, {
      }).success(function(data) {
        dialogEl.html(data);
        jQuery.goal_2025.partnerMap.markerDialogFitHeight();

      });

    });

  });

  return customMarker;

};

jQuery.goal_2025.partnerMap.markerDialogConnect = function(buttonEl, relatedAccountUsername) {

  var buttonEl = $(buttonEl);
  buttonEl.html('<img src="' + g_staticUrl + 'main/images/loader_popup@2x.gif" width="24px"/>');

  var data = {
      'csrfmiddlewaretoken': g_csrfToken,
      'related_account_username': relatedAccountUsername,
      'action': 'connect'
    };

  $.ajax({
    type: "POST",
    url: "/account-relation-ajax/",
    data: data,
    success: function(data) {

      buttonEl.text('Invitation Sent!');
      buttonEl.addClass('inactive');
      buttonEl.unbind('click');

    }

  });

};

jQuery.goal_2025.partnerMap.markerDialogFitHeight = function() {

  // Update the scrollable area of the inner content to match the outer, minus the footer actions
  var contentHeight = $('.partner-map-marker-dialog-content').height();
  var actionsHeight = $('.partner-map-marker-dialog-actions').height();
  $('.partner-map-marker-dialog-content-inner').height(contentHeight - actionsHeight);
};


jQuery.goal_2025.partnerMap.markerDialogClose = function() {
  $('.partner-map-marker-dialog').trigger('close');
};

// Fit map into window so it is the maximum size available with no scrolling
jQuery.goal_2025.partnerMap.fitMap = function() {

  if($(window).width() > jQuery.goal_2025.partnerMap.fitMapDisabledMinWidth) {

    var headerBarHeight = $('.header-bar').outerHeight();
    var headerHeight = $('.page-tools-header').outerHeight();
    var footerHeight = $('.footer').outerHeight();
    var windowHeight = $(window).height();

    var mapHeight = windowHeight - footerHeight - headerBarHeight;
    $('#partner-map-map').height(mapHeight);
    jQuery.goal_2025.partnerMap.map.invalidateSize();

  }
  else {

    $('#partner-map-map').height(jQuery.goal_2025.partnerMap.fitMapDisabledHeight);
    jQuery.goal_2025.partnerMap.map.invalidateSize();

  }

};

jQuery.goal_2025.partnerMap.setMapControls = function() {

  // Add custom zoom controls to map
  var CustomControl = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        // create the control container with a particular class name
        var container = L.DomUtil.create('div', 'custom-controls');
        $(container).append($('#partner-map-controls'));

        // ... initialize other DOM elements, add listeners, etc.

        return container;
    }
  });

  jQuery.goal_2025.partnerMap.map.addControl(new CustomControl());


};


/**
 * User Library
 */
jQuery.goal_2025.userLibrary = function() {

};

jQuery.goal_2025.userLibrary.onDomReady = function() {
  jQuery.goal_2025.userLibrary.layout();
};

jQuery.goal_2025.userLibrary.remove = function(widgetPk, widgetEl, removeEl) {

  var removeEl = $(removeEl);

  var data = {
    'widget_pk': widgetPk,
    'csrfmiddlewaretoken': g_csrfToken
  };

  $.ajax({
    type: "POST",
    url: "/user-library-remove-ajax/",
    data: data,
    success: function(data){

      result = $.parseJSON(data);

      if(result.errors.length != 0) {
        removeEl.text(result.errors);
      }
      else {

        widgetEl.fadeOut(function() {
          widgetEl.remove();
          $(".grid-item").addClass('grid-item-animate');
          jQuery.goal_2025.grid.layout();
        });



      }

    }

  });

};

jQuery.goal_2025.userLibrary.add = function(pk, type, afterAddSuccess, afterAddError) {

  var data = {
    'pk': pk,
    'csrfmiddlewaretoken': g_csrfToken,
    'type': type
  };

  $.ajax({
    type: "POST",
    url: "/user-library-add-ajax/",
    data: data,
    success: function(data){

      result = $.parseJSON(data)

      if(result.errors.length != 0) {
        afterAddError(result.errors);
      }
      else {
        afterAddSuccess();
      }

    }

  });

};

jQuery.goal_2025.userLibrary.onGridDragDropOrderingDrop = function() {

  // Save the ordering via ajax
  var orderedWidgetPks = [];

  var widgets = $('.widget');
  for(var i=0;i<widgets.length;i++) {
    var widget = $(widgets[i]);
    orderedWidgetPks.push(widget.attr('pk'));
  }

  var data = {
    'csrfmiddlewaretoken': g_csrfToken,
    'ordered_widget_pks': JSON.stringify(orderedWidgetPks)
  };

  $.ajax({
    type: "POST",
    url: "/user-library-order-ajax/",
    data: data,
    success: function(data){

      result = $.parseJSON(data);

      if(result.errors.length != 0) {
        alert(result.errors);
      }
      else {

      }

    }

  });

};

jQuery.goal_2025.userLibrary.enableRemoveWidgetsFromUserLibrary = function() {

  // Show the remove overlay if exists for each widget on hover
  $('.widget').each(function() {

    var pk = $(this).attr('pk');
    var widgetEl = $(this);

    $(this).hover(
      function() {

        // Do not show another share if already showing
        if($(this).find('.user-library-widget-remove').length != 0) {
          return;
        }

        // Create remove link
        var removeEl = $('<div class="user-library-widget-remove"><a href="javascript:void(0);"><img draggable="false" class="rollover-image" rolloversrc="' + g_staticUrl + 'main/images/button_library_remove_hl@2x.png"' + ' src="' + g_staticUrl + 'main/images/button_library_remove@2x.png"/></a></div>');
        removeEl.click(function(event) {
          jQuery.goal_2025.userLibrary.remove(pk, widgetEl, removeEl);
          return false; // Return false to stop propogation of click event

        });
        removeEl.css('zIndex', 5);
        removeEl.hide();
        $(this).append(removeEl);
        removeEl.fadeIn();

        // Create move image
        var moveEl = $('<div class="user-library-widget-move"><img draggable="false" src="' + g_staticUrl + 'main/images/button_library_move@2x.png" width="18px;"/></div>');
        moveEl.css('zIndex', 4);
        moveEl.hide();
        $(this).append(moveEl);
        moveEl.fadeIn();

      },
      function() {

        // Remove share link
        $(this).find('.user-library-widget-remove').fadeOut(function() {
          $(this).remove();
        });
        $(this).find('.user-library-widget-move').fadeOut(function() {
          $(this).remove();
        });
      }
    );

  });
};

jQuery.goal_2025.userLibrary.disableAddWidgetsToUserLibrary = function() {

  $('.widget').each(function() {

    $(this).unbind('mouseenter mouseleave');

  });

};

jQuery.goal_2025.userLibrary.layout = function() {

  // Activate sharing for share widget
  $('.user-library-share-widget-add').each(function() {

    var addEl = $(this);
    var addTextEl = addEl.find('.user-library-share-widget-add-text');
    addEl.unbind('click');
    addEl.click(function() {

      var type = addEl.attr('user_library_add_type');
      var pk = addEl.attr('user_library_add_pk');
      jQuery.goal_2025.userLibrary.add(pk, type,
          function() {
            addEl.width(addEl.width()); // Update the width so text is just replaced, no shifting
            addTextEl.text('Added');
          },
          function(errors) {
            addEl.width(addEl.width()); // Update the width so text is just replaced, no shifting
            addTextEl.text(errors);
          }
        );

    });

  });

  // Show the sharing overlay if exists for each widget on hover
  $('.grid .widget').each(function() {

    var widgetEl = $(this);
    var pk = widgetEl.attr('pk');

    $(this).hover(
      function() {

        // Do not show another share if already showing
        if($(this).find('.user-library-widget-add').length != 0) {
          return;
        }

        // Do not show if already added
        if(widgetEl.attr('added') == 'true') {
          return;
        }

        // Create share link
        var addEl = $('<div class="user-library-widget-add"><a href="javascript:void(0);"><img draggable="false" src="' + g_staticUrl + 'main/images/button_library_add@2x.png"/></a></div>');
        addEl.click(function(event) {

          var type = 'widget';

          // Special case, if adding a partner, which doesn't have a backing widget
          if(pk == 'None') {
            type = widgetEl.attr('user_library_add_type');
            pk = widgetEl.attr('user_library_add_pk');
          }

          jQuery.goal_2025.userLibrary.add(pk, type,
            function() {

              var addedEl = $('<div class="user-library-widget-added">Added</div>');
              addEl.replaceWith(addedEl);
              window.setTimeout(function() {
                addedEl.fadeOut();
              }, 2000);

            }, function(errors) {

              var addedEl = $('<div class="user-library-widget-added">' + errors + '</div>');
              addEl.replaceWith(addedEl);
              window.setTimeout(function() {
                addedEl.fadeOut();
              }, 2000);
            }

          );

          widgetEl.attr('added', 'true');
          return false; // Return false to stop propogation of click event

        });
        addEl.hide();
        $(this).append(addEl);
        addEl.fadeIn();
      },
      function() {

        // Remove share link
        $(this).find('.user-library-widget-add').remove();
      }
    );

  });

};

/**
 * Slideshow
 */
jQuery.goal_2025.slideshow = function() {

};

jQuery.goal_2025.slideshow.onDomReady = function() {
  jQuery.goal_2025.slideshow.layout();
};

jQuery.goal_2025.slideshow.layout = function() {

  $('.slideshow').each(function() {

    $(this).find('.slideshow-slide').each(function(i) {

      var slideEl = $(this);
      slideEl.css('zIndex', 1);

      if(i == 0) {
        slideEl.addClass('active');
        slideEl.css('zIndex', 3);
      }

    });

  });

};

jQuery.goal_2025.slideshow.goTo = function(slideshowEl, index) {

  // Find the slide after the active slide
  var activeSlide = slideshowEl.find('.slideshow-slide.active');
  var slides = slideshowEl.find('.slideshow-slide');

  // Find the target slide
  var nextSlide = $(slides[index]);

  if(jQuery.cat.dom.equals(nextSlide, activeSlide) == false) {

    nextSlide.css('zIndex', 2);
    activeSlide.fadeOut(1000, function() {
      activeSlide.css('zIndex', 1);
      activeSlide.removeClass('active');
      activeSlide.show();
      nextSlide.addClass('active');
      nextSlide.css('zIndex', 3);
    });

  }

};

jQuery.goal_2025.slideshow.next = function(slideshowEl, reverse) {

  // Find the slide after the active slide
  var activeSlide = slideshowEl.find('.slideshow-slide.active');
  var nextSlide = null;
  var slides = slideshowEl.find('.slideshow-slide');

  if(reverse) {
    nextSlide = activeSlide.prev('.slideshow-slide');

    // Loop around to first
    if(nextSlide.length == 0) {
      nextSlide = $(slides[slides.length-1]);
    }
  }
  else {

    nextSlide = activeSlide.next('.slideshow-slide');

    // Loop around to first
    if(nextSlide.length == 0) {
      nextSlide = $(slides[0]);
    }
  }

  nextSlide.css('zIndex', 2);
  activeSlide.fadeOut(1000, function() {
    activeSlide.css('zIndex', 1);
    activeSlide.removeClass('active');
    activeSlide.show();
    nextSlide.addClass('active');
    nextSlide.css('zIndex', 3);
  });

};


/**
 * Header slideshow
 */
jQuery.goal_2025.headerSlideshow = function() {

};

jQuery.goal_2025.headerSlideshow.slideshowMinHeight = 540;
jQuery.goal_2025.headerSlideshow.headerSlideshowHeightOffset = 44; // Offset for height sizing, to account for header bar etc.

jQuery.goal_2025.headerSlideshow.onWindowResize = function() {
  $('.subscriber').css('bottom','0px');
  $('.header-slideshow-slide-button').cat().dom().center($('.header-slideshow'), 'absolute', false, true);

  $('.header-slideshow').each(function() {

    if($(window).height() > jQuery.goal_2025.headerSlideshow.slideshowMinHeight) {
      $('.header-slideshow').height($(window).height()-50);
    }
    else {
      $('.header-slideshow').height(jQuery.goal_2025.headerSlideshow.slideshowMinHeight-50);
    }
  });

  // XXX Old Vimeo embeds need to be sized each time, as they don't support 100% width and heights
  $('.header-slideshow object').each(function() {
    var objectEl = $(this);
    var headerSlideshowEl = objectEl.closest('.header-slideshow');
    objectEl.width(headerSlideshowEl.width());
    objectEl.height(headerSlideshowEl.height());
  });

};

jQuery.goal_2025.headerSlideshow.onWindowLoad = function() {
  $('.header-slideshow-slide-button').cat().dom().center($('.header-slideshow'), 'absolute', false, true);
  $('.header-slideshow-slide-button').show();
};

jQuery.goal_2025.headerSlideshow.onDomReady = function() {

  $('.header-slideshow-slide-content').each(function(i) {

    var pk = $(this).attr('pk');
    var imageUrl = $(this).attr('image_url');

    var widget = $('.header-slideshow-slide-content-' + pk);
    var slide = widget.parent();
    widget.anystretch(imageUrl); // anystretch can't use $(this) for some reason...
    slide.css('zIndex', 1);

    if(i == 0) {
      slide.addClass('active');
      slide.css('zIndex', 3);
    }

  });

  $('.header-slideshow-read-more').click(function() {

    var contentTop = $('.header-slideshow').height();

    $('html, body').animate({
      scrollTop: contentTop
    }, 500);

  });

  $('.header-slideshow-slide-video').each(function() {
    var videoPlayerUrl = $(this).attr('video_player_url');
    var videoId = $(this).attr('video_id');
    var videoService = $(this).attr('video_service');

    var videoSlideEl = $(this);
    videoSlideEl.find('.header-slideshow-slide-content-video-title, .header-slideshow-slide-content-video-subtitle, .header-slideshow-slide-content-video-play-button img').click(function() {
      if(videoSlideEl.find('iframe').length == 0 && videoSlideEl.find('object').length == 0) {

        // XXX IE Vimeo plays slowly large iframe video embeds, so instead we use the old embed tag, which seems to work better
        if(g_browser == 'IE' && g_browserVersion <= 9 && videoService == '1') {
          videoSlideEl.prepend('<object class="video-player"><param name="wmode" value="opaque"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + videoId + '&amp;force_embed=1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=1&amp;loop=0&amp;" /><embed wmode="opaque" src="http://vimeo.com/moogaloop.swf?clip_id=' + videoId + '&amp;force_embed=1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=1&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%"></embed></object>');
        }
        else {
          videoSlideEl.append('<iframe class="video-player" src="' + videoPlayerUrl + '" frameborder="0" style="width:' + '100%' + '; height:' + '100%' + ';"></iframe>');
        }

        jQuery.goal_2025.headerSlideshow.onWindowResize();

        // Hide anything obstructing the video playing
        $('.header-slideshow-read-more').fadeOut();
        $('.header-slideshow-slide-logo').fadeOut();
        $('.header-slideshow-badge').fadeOut();

      }
    });

  });

  jQuery.goal_2025.headerSlideshow.onWindowResize();

  imagesLoaded('.header-slideshow-image-preloader', function() {
    $('.header-slideshow-slide').css('visibility', 'visible');
    $('.header-slideshow').css('background', 'none');
  });

};

jQuery.goal_2025.headerSlideshow.layout = function() {



};

jQuery.goal_2025.headerSlideshow.next = function(reverse) {

  // Reshow anything hidden when the video was playing
  $('.header-slideshow-read-more').fadeIn();
  $('.header-slideshow-slide-logo').fadeIn();
  $('.header-slideshow-badge').fadeIn();

  // Find the slide after the active slide
  var activeSlide = $('.header-slideshow-slide.active');
  var nextSlide = null;
  var slides = $('.header-slideshow-slide');

  if(reverse) {
    nextSlide = $(activeSlide.prev('.header-slideshow-slide'));

    // Loop around to first
    if(nextSlide.length == 0) {
      nextSlide = $(slides[slides.length-1]);
    }
  }
  else {

    nextSlide = $(activeSlide.next('.header-slideshow-slide'));

    // Loop around to first
    if(nextSlide.length == 0) {
      nextSlide = $(slides[0]);
    }
  }

  nextSlide.css('zIndex', 2);

  activeSlide.fadeOut(1000, function() {
    activeSlide.css('zIndex', 1);
    activeSlide.removeClass('active');
    activeSlide.show();
    activeSlide.find('.video-player').remove();
    nextSlide.addClass('active');
    nextSlide.css('zIndex', 3);
  });

};

/**
 * Infinity grid fetcher
 */
jQuery.goal_2025.infinityGridFetcher = function() {

};

jQuery.goal_2025.infinityGridFetcher.beforeFilterFunctions = [];
jQuery.goal_2025.infinityGridFetcher.afterFetchFunctions = [];

jQuery.goal_2025.infinityGridFetcher.page = -1;
jQuery.goal_2025.infinityGridFetcher.filter = null;
jQuery.goal_2025.infinityGridFetcher.query = null;
jQuery.goal_2025.infinityGridFetcher.maxPagesReached = false;
jQuery.goal_2025.infinityGridFetcher.gridContainer = null;
jQuery.goal_2025.infinityGridFetcher.fetching = false;
jQuery.goal_2025.infinityGridFetcher.fetchingUrl = null;
jQuery.goal_2025.infinityGridFetcher.flatPageSlug = null;

jQuery.goal_2025.infinityGridFetcher.infinityRunnerBottomOffsetThreshold = 200;

jQuery.goal_2025.infinityGridFetcher.infinityRunner = function() {

  if(jQuery.goal_2025.infinityGridFetcher.maxPagesReached == false &&
      jQuery.goal_2025.infinityGridFetcher.fetching == false &&
      jQuery.goal_2025.infinityGridFetcher.infinityRunnerBottomOffsetThreshold >= ($(document).height() - ($(window).scrollTop() + $(window).height()))) {
    jQuery.goal_2025.infinityGridFetcher.fetch();
  }
};

jQuery.goal_2025.infinityGridFetcher.fetch = function() {

  jQuery.goal_2025.infinityGridFetcher.fetching = true;
  $('.infinity-grid-loading').show();

  var url = jQuery.goal_2025.infinityGridFetcher.fetchingUrl;
  query = '?page=' + jQuery.goal_2025.infinityGridFetcher.page;

  if(jQuery.goal_2025.infinityGridFetcher.flatPageSlug != null) {
    query += '&flat_page_slug=' + jQuery.goal_2025.infinityGridFetcher.flatPageSlug;
  }

  if(jQuery.goal_2025.infinityGridFetcher.filter != null) {
    query += '&filter=' + jQuery.goal_2025.infinityGridFetcher.filter;
  }
  if(jQuery.goal_2025.infinityGridFetcher.query != null) {
    query += '&query=' + jQuery.goal_2025.infinityGridFetcher.query;
  }
  url += query;

  //history.pushState(null, null, /media/ + query);

  $.ajax(url, {
  }).success(function(data) {

    if(jQuery.cat.string.isBlank(data) == false) {

      for(var i=0;i<jQuery.goal_2025.infinityGridFetcher.afterFetchFunctions.length;i++) {
        var afterFetchFunction = jQuery.goal_2025.infinityGridFetcher.afterFetchFunctions[i];
        afterFetchFunction(data);
      }

      // Append the content
      jQuery.goal_2025.infinityGridFetcher.gridContainer.find('.widget').addClass('appended');
      jQuery.goal_2025.infinityGridFetcher.gridContainer.append(data);

      jQuery.goal_2025.infinityGridFetcher.gridContainer.find('.widget').each(function() {

        var widgetEl = $(this);
        if(widgetEl.hasClass('appended') == false) {
          widgetEl.css('visibility', 'hidden');

          setTimeout(function(){
            widgetEl.css('visibility', 'visible');

            //widgetEl.hide();
            //widgetEl.fadeIn(500);

            widgetEl.css({y: 100, opacity: 0});
            widgetEl.transition({y:0, opacity: 1}, 500, 'snap');

          },250);
        }

      });

      jQuery.goal_2025.infinityGridFetcher.page++;

    }
    else {
      jQuery.goal_2025.infinityGridFetcher.maxPagesReached = true;
    }

    // Initialize the grid items that are likely just appended
    jQuery.goal_2025.grid.reload();


    jQuery.goal_2025.infinityGridFetcher.fetching = false;
    $('.infinity-grid-loading').hide();

  });

};

jQuery.goal_2025.infinityGridFetcher.searchItems = function(query) {

  for(var i=0;i<jQuery.goal_2025.infinityGridFetcher.beforeFilterFunctions.length;i++) {
    var beforeFilterFunction = jQuery.goal_2025.infinityGridFetcher.beforeFilterFunctions[i];
    beforeFilterFunction();
  }

  // Empty the grid
  jQuery.goal_2025.infinityGridFetcher.gridContainer.find('.widget').remove();

  jQuery.goal_2025.infinityGridFetcher.maxPagesReached = false;
  jQuery.goal_2025.infinityGridFetcher.page = 1;
  jQuery.goal_2025.infinityGridFetcher.query = query;
  //jQuery.goal_2025.infinityGridFetcher.filter = null;
  jQuery.goal_2025.infinityGridFetcher.fetch();

};

jQuery.goal_2025.infinityGridFetcher.filterItems = function(filter) {

  for(var i=0;i<jQuery.goal_2025.infinityGridFetcher.beforeFilterFunctions.length;i++) {
    var beforeFilterFunction = jQuery.goal_2025.infinityGridFetcher.beforeFilterFunctions[i];
    beforeFilterFunction();
  }

  // Empty the grid
  jQuery.goal_2025.infinityGridFetcher.gridContainer.find('.widget').remove();

  jQuery.goal_2025.infinityGridFetcher.maxPagesReached = false;
  jQuery.goal_2025.infinityGridFetcher.page = 1;
  //jQuery.goal_2025.infinityGridFetcher.query = null;
  jQuery.goal_2025.infinityGridFetcher.filter = filter;
  jQuery.goal_2025.infinityGridFetcher.fetch();

};

jQuery.goal_2025.infinityGridFetcher.onDomReady = function() {
  jQuery.goal_2025.infinityGridFetcher.page = 2;
};

jQuery.goal_2025.infinityGridFetcher.onWindowScroll = function() {
  jQuery.goal_2025.infinityGridFetcher.infinityRunner();
};


/**
 * Custom divider
 */
jQuery.goal_2025.customDivider = function() {

};

jQuery.goal_2025.customDivider.onDomReady = function() {
  jQuery.goal_2025.customDivider.layout();
};

jQuery.goal_2025.customDivider.onWindowResizeFinish = function() {
  jQuery.goal_2025.customDivider.layout();
};


jQuery.goal_2025.customDivider.layout = function() {

  $('.grid, .fixed-column-grid').each(function() {

    var container = $(this);
    container.find('.custom-divider').each(function() {

      var customDividerImageWidth = $(this).attr('custom_divider_image_width');
      var customDividerCollapsedImageWidth = $(this).attr('custom_divider_collapsed_image_width');

      var imageUrl = null;
      var imageWidth = 0;

      // Fixed column grid
      if(container.hasClass('fixed-column-grid')) {

        if(container.hasClass('grid-size-small') || container.hasClass('grid-size-medium')) {
          imageUrl = $(this).attr('custom_divider_collapsed_image_url');
          imageWidth = customDividerCollapsedImageWidth;
        }
        else {
          imageUrl = $(this).attr('custom_divider_image_url');
          imageWidth = customDividerImageWidth;
          if($(this).hasClass('fixed-column-grid-col-size-2')) {
            imageUrl = $(this).attr('custom_divider_collapsed_image_url');
            imageWidth = customDividerCollapsedImageWidth;
          }
        }

      }
      // Grid
      else if(container.hasClass('grid')) {

        if(container.hasClass('grid-size-small')) {
          imageUrl = $(this).attr('custom_divider_collapsed_image_url');
          imageWidth = customDividerCollapsedImageWidth;
        }
        else {
          imageUrl = $(this).attr('custom_divider_image_url');
          imageWidth = customDividerImageWidth;
        }

      }

      $(this).find('img').attr('src', imageUrl);
      $(this).find('img').width(imageWidth);

    });

  });

};

/**
 * Custom frame
 */
jQuery.goal_2025.customFrame = function() {

};

jQuery.goal_2025.customFrame.onDomReady = function() {
  jQuery.goal_2025.customFrame.layout();
};

jQuery.goal_2025.customFrame.onWindowResizeFinish = function() {
  jQuery.goal_2025.customFrame.layout();
};

jQuery.goal_2025.customFrame.layout = function() {

  $('.grid, .fixed-column-grid').each(function() {

    var container = $(this);
    container.find('.custom-frame').each(function() {

      if($(this).cat().dom().hasAttr('custom_frame_image_url')) {

        var uuid = jQuery.cat.math.uuid();
        $(this).attr('custom_frame_id', uuid);
        var imageUrl = null;

        // Fixed column grid
        if(container.hasClass('fixed-column-grid')) {

          if(container.hasClass('grid-size-small') || container.hasClass('grid-size-medium')) {
            imageUrl = $(this).attr('custom_frame_collapsed_image_url');
          }
          else {
            imageUrl = $(this).attr('custom_frame_image_url');
            if($(this).hasClass('fixed-column-grid-col-size-2')) {
              imageUrl = $(this).attr('custom_frame_collapsed_image_url');
            }
          }

        }
        // Grid
        else if(container.hasClass('grid')){

          if(container.hasClass('grid-size-small')) {
            imageUrl = $(this).attr('custom_frame_collapsed_image_url');
          }
          else {
            imageUrl = $(this).attr('custom_frame_image_url');
          }

        }

        $('[custom_frame_id="' + uuid + '"]').anystretch(imageUrl); // anystretch can't use $(this) for some reason...

      }

    });

  });


};


/**
 * Grid
 */
jQuery.goal_2025.grid = function() {

};

jQuery.goal_2025.grid.maxColsPerRow = 3; // Max columns per row
jQuery.goal_2025.grid.gridItemColHeightAspectRatio = 1.14; // Aspect ratio for width to height for a single column

jQuery.goal_2025.grid.top = 0; // Top position of current item
jQuery.goal_2025.grid.left = 0; // Left position of current item
jQuery.goal_2025.grid.rowHeight = 0; // The current row height

jQuery.goal_2025.grid.gridSizeLargePadding = 10;
jQuery.goal_2025.grid.gridSizeMediumPadding = 5;
jQuery.goal_2025.grid.gridSizeSmallPadding = 5;

jQuery.goal_2025.grid.gridMaxWidth = 1250; // Maximum width before begins centering content
jQuery.goal_2025.grid.gridSizeSmallWidth = 640; // Width at which grid collapses everything to single cols
jQuery.goal_2025.grid.gridSizeMediumWidth = 820; // Width at which grid collapses everything to single cols
jQuery.goal_2025.grid.gridSizeMediumMaxColsPerRow = 2;
jQuery.goal_2025.grid.afterGridLayoutFunctions = []; // Functions that will be called on each layout
jQuery.goal_2025.grid.perfectGridEnabled = true; // Removes any fractional borders between grid items, make sure to set overflow-x to hidden for the grid
jQuery.goal_2025.grid.perfectGridWidthOffset = 10; // Offset for the grid width to allow widgets to still appear on same line even though 1px or 2px beyond grid widget, should not be changed

jQuery.goal_2025.grid.onWindowLoad = function() {

  jQuery.goal_2025.grid.layout();

};

jQuery.goal_2025.grid.onDomReady = function() {

  jQuery.goal_2025.grid.layout();

};

jQuery.goal_2025.grid.onWindowResize = function() {

  // Animate will screw up the resizing, so disable it here in case it was enabled during dragging
  $(".grid-item").removeClass('grid-item-animate');

  jQuery.goal_2025.grid.layout();

};

jQuery.goal_2025.grid.reload = function() {

  jQuery.goal_2025.grid.layout();
  jQuery.goal_2025.rotatedText.layout();
  jQuery.goal_2025.customFrame.layout();
  jQuery.goal_2025.fixedColumnGrid.layout();
  jQuery.goal_2025.clickRedirect.layout();
  jQuery.goal_2025.fitText.layout();
  jQuery.goal_2025.anystretchHelper.layout();
  jQuery.goal_2025.videoSwapper.layout();
  jQuery.goal_2025.audioSwapper.layout();
  jQuery.goal_2025.rolloverFade.layout();
  jQuery.goal_2025.userLibrary.layout();
  jQuery.goal_2025.customDivider.layout();
  jQuery.goal_2025.widgets.layout();

};

jQuery.goal_2025.grid.layout = function() {

  $('.grid').each(function() {

    jQuery.goal_2025.grid.top = 0;
    jQuery.goal_2025.grid.left = 0;
    jQuery.goal_2025.grid.rowHeight = 0;

    var grid = $(this);
    var padding = 0;

    // Wrap in a grid container so we can preserve the width of the grid, the
    // container will always return the actual space the grid takes up
    if(grid.closest('.grid-container').length <= 0) {
      grid.wrap('<div class="grid-container"/>');
    }
    var gridContainer = grid.closest('.grid-container');

    // Constrain the grid if beyond the max width, note this is based
    // on the container width, not the window width
    var gridWidth = gridContainer.width();
    if(gridWidth > jQuery.goal_2025.grid.gridMaxWidth) {
      gridWidth = jQuery.goal_2025.grid.gridMaxWidth;
    }
    grid.width(gridWidth);

    var gridItems = $(this).find('.grid-item');
    for(var i=0;i<gridItems.length;i++) {

      var gridItem = $(gridItems[i]);

      var cols = 0;
      var rows = 0;

      var colWidth = gridWidth / jQuery.goal_2025.grid.maxColsPerRow;
      var gridItemWidth = 0;
      var gridItemHeight = 0;

      // Large
      if(gridWidth > jQuery.goal_2025.grid.gridSizeMediumWidth) {

        grid.removeClass('grid-size-small');
        grid.removeClass('grid-size-medium');
        grid.removeClass('grid-size-small-medium');
        grid.addClass('grid-size-large');

        padding = jQuery.goal_2025.grid.gridSizeLargePadding;

        cols = gridItem.attr('grid_cols');
        rows = gridItem.attr('grid_rows');

        gridItem.attr('grid_cols_actual', cols);

        gridItemWidth = cols * colWidth;

        gridItemHeight = rows * (colWidth * jQuery.goal_2025.grid.gridItemColHeightAspectRatio);

      }
      // Medium
      else if(gridWidth > jQuery.goal_2025.grid.gridSizeSmallWidth) {

        grid.removeClass('grid-size-large');
        grid.removeClass('grid-size-small');
        grid.addClass('grid-size-medium');
        grid.addClass('grid-size-small-medium');

        padding = jQuery.goal_2025.grid.gridSizeMediumPadding;

        var colWidth = gridWidth / jQuery.goal_2025.grid.gridSizeMediumMaxColsPerRow;

        cols = gridItem.attr('grid_cols');
        rows = gridItem.attr('grid_rows');

        if(cols <= jQuery.goal_2025.grid.gridSizeMediumMaxColsPerRow) {
          cols = jQuery.goal_2025.grid.gridSizeMediumMaxColsPerRow/2;
        }

        gridItem.attr('grid_cols_actual', cols);

        gridItemWidth = cols * colWidth;
        if(gridItemWidth > gridWidth) { // Cannot be larger than the grid itself
          gridItemWidth = gridWidth;
        }
        else {

        }

        gridItemHeight = rows * (colWidth * jQuery.goal_2025.grid.gridItemColHeightAspectRatio);


      }
      // Small
      else {

        grid.removeClass('grid-size-large');
        grid.removeClass('grid-size-medium');
        grid.addClass('grid-size-small');
        grid.addClass('grid-size-small-medium');

        padding = jQuery.goal_2025.grid.gridSizeSmallPadding;

        cols = jQuery.goal_2025.grid.maxColsPerRow;
        rows = gridItem.attr('grid_rows');

        uncollapsedCols = gridItem.attr('grid_cols');
        if(uncollapsedCols == 1) {
          uncollapsedCols = 2;
        }

        gridItem.attr('grid_cols_actual', 1);

        gridItemWidth = cols * colWidth;

        // To preserve aspect ratio, we need to calculate what percentage of cols it used to be when uncollapsed
        var uncollapsedColsHeightAspectRatioFactor = (1 / (uncollapsedCols / jQuery.goal_2025.grid.maxColsPerRow));
        gridItemHeight = rows * (colWidth * jQuery.goal_2025.grid.gridItemColHeightAspectRatio) * uncollapsedColsHeightAspectRatioFactor;

      }

      // Perfect grid uses integer widths and heights
      if(jQuery.goal_2025.grid.perfectGridEnabled) {
        gridItemWidth = Math.ceil(gridItemWidth);
        gridItemHeight = Math.ceil(gridItemHeight);
      }

      gridItem.width(gridItemWidth - padding*2);
      gridItem.height(gridItemHeight - padding*2);

      // Move to the next line
      if(jQuery.goal_2025.grid.left + gridItemWidth > gridWidth + (jQuery.goal_2025.grid.perfectGridEnabled ? jQuery.goal_2025.grid.perfectGridWidthOffset : 0)) {

        jQuery.goal_2025.grid.top = jQuery.goal_2025.grid.top + jQuery.goal_2025.grid.rowHeight;
        jQuery.goal_2025.grid.left = 0;

        gridItem.css('left', jQuery.goal_2025.grid.left + padding);
        gridItem.css('top', jQuery.goal_2025.grid.top + padding); // Do not add padding to top if first row

        jQuery.goal_2025.grid.left += gridItemWidth;
        jQuery.goal_2025.grid.rowHeight = 0;
        jQuery.goal_2025.grid.rowHeight = Math.max(jQuery.goal_2025.grid.rowHeight, gridItemHeight); // Do not add padding to height if first row

      }
      // Continue appending to current line
      else {

        gridItem.css('left', jQuery.goal_2025.grid.left + padding);
        gridItem.css('top', jQuery.goal_2025.grid.top + padding);
        jQuery.goal_2025.grid.left += gridItemWidth;

        jQuery.goal_2025.grid.rowHeight = Math.max(jQuery.goal_2025.grid.rowHeight, gridItemHeight); // Do not add padding to height if first row

      }

    }

    grid.height(jQuery.goal_2025.grid.top + jQuery.goal_2025.grid.rowHeight);

  });

  for(var i=0;i<jQuery.goal_2025.grid.afterGridLayoutFunctions.length;i++) {
    var afterGridLayoutFunction = jQuery.goal_2025.grid.afterGridLayoutFunctions[i];
    afterGridLayoutFunction();
  }

};

jQuery.goal_2025.grid.enableDragDropOrdering = function(onDrop) {

  $( ".grid-item" ).draggable({
    start: function( event, ui ) {

      $(this).css('zIndex', 2);

      $(".grid-item").removeClass('grid-item-animate');

      // Create a placeholder for the item we are dragging for the user
      var gridItemPlaceholder = $(this).clone();
      gridItemPlaceholder.html("");

      $(this).parent().append(gridItemPlaceholder);
      gridItemPlaceholder.addClass('grid-item-dragging-placeholder');

      gridItemPlaceholder.css('zIndex', 0);

      $(this).addClass('grid-item-dragging');

    },

    stop: function(event, ui) {

      // Prevent clicking on item while dragging
      // http://stackoverflow.com/questions/3486760/how-to-avoid-jquery-ui-draggable-from-also-triggering-click-event/13973319#13973319
      $( event.toElement ).one('click', function(e){ e.stopImmediatePropagation(); } );

    }

  });

  $( ".grid-item" ).droppable({
    drop: function(event, ui) {

      var dropping = $(this);
      var dragging = $(ui.draggable);

      // If direct sibling, reverse
      if(dragging.next().get(0) === dropping.get(0)) {
        jQuery(dragging).before(dropping);
      }
      else {
        jQuery(dropping).before(dragging);
      }

      $(".grid-item").addClass('grid-item-animate');

      $(".grid-item").css('zIndex', 1);
      $(".grid-item").find('.grid-item-dropping').remove();
      jQuery.goal_2025.grid.layout();

      $('.grid-item-dragging-placeholder').remove();
      onDrop();

      $(".grid-item").removeClass('grid-item-dragging');

      event.stopPropagation();

    },
    over: function(event, ui) {

      var dropping = $(this);
      var dragging = $(ui.draggable);

      // If direct sibling, reverse, apply some styling so we know where we are dropping
      if(dragging.next().get(0) === dropping.get(0)) {
        dropping.append('<div class="grid-item-dropping grid-item-dropping-right"><img src="' + g_staticUrl + 'main/images/reorder_highlight@2x.png" width="9px;"/></div>');
      }
      else {
        dropping.append('<div class="grid-item-dropping grid-item-dropping-left"><img src="' + g_staticUrl + 'main/images/reorder_highlight@2x.png" width="9px;"/></div>');
      };

    },

    out: function( event, ui ) {

      var dropping = $(this);
      dropping.find('.grid-item-dropping').remove();

    },

    deactivate: function( event, ui ) {

      // If didn't drop anywhere, just relayout
      jQuery.goal_2025.grid.layout();

      $('.grid-item-dragging-placeholder').remove();

      $(".grid-item").removeClass('grid-item-dragging');


    }

  });

};

/**
 * Partner activity widget
 */
jQuery.goal_2025.partnerActivityWidget = function() {

};

jQuery.goal_2025.partnerActivityWidget.onDomReady = function() {

  $('.partner-activity-widget-account-edit .widget-content-view-pending-account-button-reject').click(function() {

    var buttonEl = $(this);
    var rowEl = $(this).closest('tr');
    var relatedAccountUsername = rowEl.attr('related_account_username');

    buttonEl.html('<img width="24px" src="' + g_staticUrl + 'main/images/network_widget_load@2x.gif' + '"/>');

    var data = {
        'csrfmiddlewaretoken': g_csrfToken,
        'related_account_username': relatedAccountUsername,
        'action': 'reject_connect'
      };

    $.ajax({
      type: "POST",
      url: "/account-relation-ajax/",
      data: data,
      success: function(data){

        // Alert to user, then hide row
        rowEl.hide();
        jQuery.goal_2025.partnerNetworkWidget.accountEdit.search();
        jQuery.goal_2025.fixedColumnGrid.layout();

      }

    });

  });

  $('.partner-activity-widget-account-edit .widget-content-view-pending-account-button-approve').click(function() {

    var buttonEl = $(this);
    var rowEl = $(this).closest('tr');
    var relatedAccountUsername = rowEl.attr('related_account_username');

    buttonEl.html('<img width="24px" src="' + g_staticUrl + 'main/images/network_widget_load_green@2x.gif' + '"/>');

    var data = {
        'csrfmiddlewaretoken': g_csrfToken,
        'related_account_username': relatedAccountUsername,
        'action': 'approve_connect'
      };

    $.ajax({
      type: "POST",
      url: "/account-relation-ajax/",
      data: data,
      success: function(data){

        // Alert to user, then hide row
        rowEl.hide();
        jQuery.goal_2025.partnerNetworkWidget.accountEdit.search();
        jQuery.goal_2025.fixedColumnGrid.layout();



      }

    });

  });

}

/**
 * Partner network widget
 */

jQuery.goal_2025.partnerNetworkWidget = function() {

};

jQuery.goal_2025.partnerNetworkWidget.fixedColumnGrid = function() {

};

jQuery.goal_2025.partnerNetworkWidget.fixedColumnGrid.onDomReady = function() {

  $('.partner-network-widget-details-container').each(function() {
    var containerEl = $(this);
    containerEl.find('.partner-network-widget-details-page').each(function(i) {
      $(this).hide();

      if(i==0) {
        $(this).show();
        $(this).addClass('active');
      }

    });
  });



};

jQuery.goal_2025.partnerNetworkWidget.fixedColumnGrid.next = function(el, reverse) {

  var containerEl = $(el).closest('.partner-network-widget-details-container');

  // Find the slide after the active slide
  var activeSlide = $('.partner-network-widget-details-page.active');
  var nextSlide = null;
  var slides = $('.partner-network-widget-details-page');

  if(reverse) {
    nextSlide = activeSlide.prev('.partner-network-widget-details-page');

    // Loop around to first
    if(nextSlide.length == 0) {
      nextSlide = $(slides[slides.length-1]);
    }
  }
  else {

    nextSlide = activeSlide.next('.partner-network-widget-details-page');

    // Loop around to first
    if(nextSlide.length == 0) {
      nextSlide = $(slides[0]);
    }
  }


  activeSlide.fadeOut(200, function() {
    activeSlide.removeClass('active');
    nextSlide.addClass('active');
    nextSlide.fadeIn(200);
  });



};

jQuery.goal_2025.partnerNetworkWidget.accountEdit = function() {

};

jQuery.goal_2025.partnerNetworkWidget.accountEdit.syncViewToModel = function() {

  var contentListEl = $('.partner-network-widget-account-edit .widget-content-list');
  contentListEl.find('.partner-network-widget-partner-row').each(function() {

    var rowEl = $(this);

    var relatedAccountUsername = rowEl.attr('related_account_username');

    var disconnectActionEl = rowEl.find('.partner-network-widget-partner-action-disconnect');
    var connectActionEl = rowEl.find('.partner-network-widget-partner-action-connect');
    var connectedActionEl = rowEl.find('.partner-network-widget-partner-action-connected');
    var pendingActionEl = rowEl.find('.partner-network-widget-partner-action-pending');

    disconnectActionEl.hide();
    connectActionEl.hide();
    connectedActionEl.hide();
    pendingActionEl.hide();

    var relationStatus = parseInt(rowEl.attr('account_relation_status'));
    if(relationStatus == 0) {
      connectActionEl.show();
    }
    if(relationStatus == 1) {
      pendingActionEl.show();
    }
    if(relationStatus == 2) {
      connectedActionEl.show();
      disconnectActionEl.show();
    }

    connectActionEl.click(function() {

      var data = {
          'csrfmiddlewaretoken': g_csrfToken,
          'related_account_username': relatedAccountUsername,
          'action': 'connect'
        };

      connectActionEl.html('<img width="24px" src="' + g_staticUrl + 'main/images/network_widget_load@2x.gif' + '"/>');

      $.ajax({
        type: "POST",
        url: "/account-relation-ajax/",
        data: data,
        success: function(data){

          jQuery.goal_2025.partnerNetworkWidget.accountEdit.search();

        }

      });

    });

    disconnectActionEl.click(function() {

      var data = {
          'csrfmiddlewaretoken': g_csrfToken,
          'related_account_username': relatedAccountUsername,
          'action': 'disconnect'
        };

      $.ajax({
        type: "POST",
        url: "/account-relation-ajax/",
        data: data,
        success: function(data){

          jQuery.goal_2025.partnerNetworkWidget.accountEdit.search();

        }

      });

    });

  });

};

jQuery.goal_2025.partnerNetworkWidget.accountEdit.search = function() {

  $('.partner-network-widget-account-edit').each(function() {

    var widgetEl = $(this);
    var contentListEl = widgetEl.find('.widget-content-list');
    var searchInputEl = widgetEl.find('.widget-content-search-input');

    var data = {
        'csrfmiddlewaretoken': g_csrfToken,
        'query': searchInputEl.val()
      };

    $.ajax({
      type: "POST",
      url: "/partner-network-widget-account-edit-search-ajax/",
      data: data,
      success: function(data){
        contentListEl.html(data);
        jQuery.goal_2025.rolloverFade.layout();
        jQuery.goal_2025.partnerNetworkWidget.accountEdit.syncViewToModel();
      }

    });


  });

};

jQuery.goal_2025.partnerNetworkWidget.accountEdit.onDomReady = function() {

  jQuery.goal_2025.partnerNetworkWidget.accountEdit.search();

  $('.partner-network-widget-account-edit').each(function() {

    var widgetEl = $(this);
    var contentListEl = widgetEl.find('.widget-content-list');
    var searchInputEl = widgetEl.find('.widget-content-search-input');

    searchInputEl.on("keyup", function(event){
      jQuery.goal_2025.partnerNetworkWidget.accountEdit.search();
    });

  });


};

/**
 * Fixed column grid
 */
jQuery.goal_2025.fixedColumnGrid = function() {

};

jQuery.goal_2025.fixedColumnGrid.numCols = 2;
jQuery.goal_2025.fixedColumnGrid.colSizes = {1:1, 2:2};
jQuery.goal_2025.fixedColumnGrid.colMaxSize = 3;
jQuery.goal_2025.fixedColumnGrid.topByCol = {1:0, 2:0};
jQuery.goal_2025.fixedColumnGrid.leftByCol = {1:0, 2:0};
jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol = {1:0, 2:0}

jQuery.goal_2025.fixedColumnGrid.gridMaxWidth = 1250; // Maximum width before begins centering content
jQuery.goal_2025.fixedColumnGrid.gridSizeMediumWidth = 820; // Width at which grid collapses everything to single cols
jQuery.goal_2025.fixedColumnGrid.gridSizeSmallWidth = 640; // Width at which it just adds a class, already collapsed into single cols at this point
jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop = 0;

// Padding does not add to the top or bottom of the grid itself
jQuery.goal_2025.fixedColumnGrid.gridSizeLargePadding = 10;
jQuery.goal_2025.fixedColumnGrid.gridSizeMediumPadding = 5;
jQuery.goal_2025.fixedColumnGrid.gridSizeSmallPadding = 5;

jQuery.goal_2025.fixedColumnGrid.fixedColumnGridItemColHeightAspectRatio = 1.14; // Aspect ratio for width to height for a single column
jQuery.goal_2025.fixedColumnGrid.shouldDragDropOrderingFunctions = []; // Functions that will return whether or not should drag drop an element, if any returns false, dragging is disabled for that element

jQuery.goal_2025.fixedColumnGrid.onWindowResize = function() {

  jQuery.goal_2025.fixedColumnGrid.layout();

};

jQuery.goal_2025.fixedColumnGrid.onWindowResizeFinish = function() {

  jQuery.goal_2025.fixedColumnGrid.layout();

};

jQuery.goal_2025.fixedColumnGrid.onWindowLoad = function() {
  jQuery.goal_2025.fixedColumnGrid.layout();
};

jQuery.goal_2025.fixedColumnGrid.onDomReady = function() {

  jQuery.goal_2025.fixedColumnGrid.layout();

};

jQuery.goal_2025.fixedColumnGrid.droppingAbove = function(ui, droppable) {

  var $draggable = ui.draggable || ui.helper;
  return (ui.offset.top + $draggable.outerHeight() / 2 <= droppable.offset().top + droppable.outerHeight() / 2);

};

jQuery.goal_2025.fixedColumnGrid.layout = function() {

  $('.fixed-column-grid').each(function() {

    var grid = $(this);

    // Wrap in a grid container so we can preserve the width of the grid, the
    // container will always return the actual space the grid takes up
    if(grid.closest('.fixed-column-grid-container').length <= 0) {
      grid.wrap('<div class="fixed-column-grid-container"/>');
    }
    var gridContainer = grid.closest('.fixed-column-grid-container');

    // Constrain the grid if beyond the max width, note this is based
    // on the container width, not the window width
    var gridWidth = gridContainer.width();
    if(gridWidth > jQuery.goal_2025.fixedColumnGrid.gridMaxWidth) {
      gridWidth = jQuery.goal_2025.fixedColumnGrid.gridMaxWidth;
    }
    grid.width(gridWidth);

    var gridItems = $(this).find('.fixed-column-grid-item');

    // Reset vars
    jQuery.goal_2025.fixedColumnGrid.topByCol = {1:0, 2:0};
    jQuery.goal_2025.fixedColumnGrid.leftByCol = {1:0, 2:0};
    jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol = {1:0, 2:0};

    function leftOffsetCols(padding) {
      // Left offset each column
      for(var i=0;i<jQuery.goal_2025.fixedColumnGrid.numCols;i++) {
        var col = i+1;
        var colOffsetLeft = 0;
        if(col > 1) {
          var lastColWidth = (jQuery.goal_2025.fixedColumnGrid.colSizes[col-1] / jQuery.goal_2025.fixedColumnGrid.colMaxSize) * gridWidth;
          colOffsetLeft = lastColWidth;
        }
        jQuery.goal_2025.fixedColumnGrid.leftByCol[col] = colOffsetLeft + padding;
        jQuery.goal_2025.fixedColumnGrid.topByCol[col] = padding;
      }
    }

    var padding = 0;

    // Collapsed, display in single scaling column
    if(gridWidth < jQuery.goal_2025.fixedColumnGrid.gridSizeMediumWidth) {

      grid.removeClass('grid-size-large');
      grid.removeClass('grid-size-small');

      grid.addClass('grid-size-medium');
      grid.addClass('grid-size-small-medium');

      padding = jQuery.goal_2025.fixedColumnGrid.gridSizeMediumPadding;

      if(gridWidth < jQuery.goal_2025.fixedColumnGrid.gridSizeSmallWidth) {

        grid.removeClass('grid-size-medium');
        grid.addClass('grid-size-small');

        padding = jQuery.goal_2025.fixedColumnGrid.gridSizeSmallPadding;

      }

      leftOffsetCols(padding);

      // Reset vars
      jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop = padding;

      // Order by display order
      var gridItemsByOrder = [];
      for(var i=0;i<gridItems.length;i++) {
        var gridItem = $(gridItems[i]);

        var order = gridItem.attr('fixed_column_grid_collapsed_order');
        order = parseInt(order);

        if(order in gridItemsByOrder) {
        }
        else {
          gridItemsByOrder[order] = [];
        }

        gridItemsByOrder[order].push(gridItem);

      }

      var sortedKeys = jQuery.cat.datastructure.getNumericSortedKeys(gridItemsByOrder);

      sortedKeys.reverse(); // Higher order appears first
      for(var i=0;i<sortedKeys.length;i++) {
        var sortedKey = sortedKeys[i];
        var gridItemsForOrder = gridItemsByOrder[sortedKey];

        // Append grid items
        for(var j=0;j<gridItemsForOrder.length;j++) {

          var col = 1;
          var gridItem = gridItemsForOrder[j];

          // Skip hidden grid itemsn
          if(gridItem.css('display') == 'none') {
            continue;
          }

          var disablePadding = gridItem.attr('fixed_column_disable_padding') == 'true' ? true : false;
          var disablePaddingTopOnly = gridItem.attr('fixed_column_disable_padding_top_only') == 'true' ? true : false;

          var gridItemWidth = grid.width() - (padding * 2);
          gridItem.width(gridItemWidth);

          var autoscale = gridItem.attr('fixed_column_grid_autoscale');
          if(autoscale) {
            // XXX Not sure why we divide by 2...
            gridItem.height((gridItemWidth * jQuery.goal_2025.fixedColumnGrid.fixedColumnGridItemColHeightAspectRatio) / 2);
          }

          // Set the col size, this is in respect to the grid item column irrespective of being collapsed
          for(var colSize in jQuery.goal_2025.fixedColumnGrid.colSizes) {
            gridItem.removeClass('fixed-column-grid-col-size-' + colSize);
          }
          gridItem.addClass('fixed-column-grid-col-size-' + jQuery.goal_2025.fixedColumnGrid.colSizes[gridItem.attr('fixed_column_grid_col')]);

          // Set the position
          gridItem.css('left', padding);

          if(disablePaddingTopOnly) { // Only disable top padding, note does not work in all cases

            // XXX Wierd offset only in IE8 where a single pixel gap appears between the widget with disabled top padding, we hack the difference
            var ieDeprecatedOffset = 0;
            if(g_browser == 'IE' && g_browserVersion <= 8) {
              ieDeprecatedOffset = 1;
            }

            gridItem.css('top', jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop + (disablePadding ? -padding*2 : 0) - ieDeprecatedOffset);
            jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop += gridItem.height() + (disablePadding ? 0 : padding*2) + ieDeprecatedOffset;

          }
          else {

            // First row behaves differently for disabled padding
            var firstRow = jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop == padding ? true : false;

            // Use conditional logic if disabled padding, depending on if its first row or has something before it
            gridItem.css('top', jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop + (disablePadding && !firstRow && !jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol[col] ? -padding*2 : 0));
            jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop += (gridItem.height() + (disablePadding ? (firstRow || jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol[col] ? 0 : -padding*2) : padding * 2));

          }

          jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol[col] = disablePadding;

        }

      }

      grid.height(jQuery.goal_2025.fixedColumnGrid.gridSizeSmallMediumTop - padding);


    }
    // Uncollapsed, display in fixed scaling columns
    else {

      grid.removeClass('grid-size-small');
      grid.removeClass('grid-size-medium');
      grid.removeClass('grid-size-small-medium');
      grid.addClass('grid-size-large');

      padding = jQuery.goal_2025.fixedColumnGrid.gridSizeLargePadding;

      leftOffsetCols(padding);

      for(var i=0;i<gridItems.length;i++) {

        var gridItem = $(gridItems[i]);

        // Skip hidden grid items
        if(gridItem.css('display') == 'none') {
          continue;
        }

        // Find the column the item belongs in and place it
        var col = gridItem.attr('fixed_column_grid_col');
        var autoscale = gridItem.attr('fixed_column_grid_autoscale');
        var disablePadding = gridItem.attr('fixed_column_disable_padding') == 'true' ? true : false;
        var disablePaddingTopOnly = gridItem.attr('fixed_column_disable_padding_top_only') == 'true' ? true : false;
        var uncollapsedAspectRatio = gridItem.attr('fixed_column_grid_uncollapsed_aspect_ratio'); // Set the aspect ratio when autoscaling
        var uncollapsedAspectRatioColSizes = gridItem.attr('fixed_column_grid_uncollapsed_aspect_ratio_col_sizes'); // Set which column sizes this aspect ratio should be applied to

        var colWidth = (jQuery.goal_2025.fixedColumnGrid.colSizes[col] / jQuery.goal_2025.fixedColumnGrid.colMaxSize) * gridWidth;
        var colWidthPercentage = jQuery.goal_2025.fixedColumnGrid.colSizes[col] / jQuery.goal_2025.fixedColumnGrid.colMaxSize;

        var top = jQuery.goal_2025.fixedColumnGrid.topByCol[col];
        var left = jQuery.goal_2025.fixedColumnGrid.leftByCol[col];

        var gridItemWidth = colWidth - (padding * 2);
        gridItem.width(gridItemWidth);

        if(autoscale) {

          var aspectRatio = jQuery.goal_2025.fixedColumnGrid.fixedColumnGridItemColHeightAspectRatio;
          if(jQuery.cat.dom.isUndefined(uncollapsedAspectRatio) == false && jQuery.cat.dom.isUndefined(uncollapsedAspectRatioColSizes) == false) {

            // Set to the custom aspect ratio if this is a determined column size
            if(uncollapsedAspectRatioColSizes.indexOf((jQuery.goal_2025.fixedColumnGrid.colSizes[col] + '')) >= 0) {
              aspectRatio = uncollapsedAspectRatio;
            }

          }

          gridItem.height((gridItemWidth * aspectRatio) / jQuery.goal_2025.fixedColumnGrid.colSizes[col]);

        }

        var gridItemHeight = gridItem.height();

        // Set the col size
        for(var colSize in jQuery.goal_2025.fixedColumnGrid.colSizes) {
          gridItem.removeClass('fixed-column-grid-col-size-' + colSize);
        }
        gridItem.addClass('fixed-column-grid-col-size-' + jQuery.goal_2025.fixedColumnGrid.colSizes[col]);

        // Set position of item
        gridItem.css('left', jQuery.goal_2025.fixedColumnGrid.leftByCol[col]);

        if(disablePaddingTopOnly) { // Only disable top padding, note does not work in all cases

          // XXX Wierd offset only in IE8 where a single pixel gap appears between the widget with disabled top padding, we hack the difference
          var ieDeprecatedOffset = 0;
          if(g_browser == 'IE' && g_browserVersion <= 8) {
            ieDeprecatedOffset = 1;
          }

          gridItem.css('top', jQuery.goal_2025.fixedColumnGrid.topByCol[col] + (disablePadding ? -padding*2 : 0) - ieDeprecatedOffset);
          jQuery.goal_2025.fixedColumnGrid.topByCol[col] += (gridItemHeight + (disablePadding ? 0 : padding*2 ) + ieDeprecatedOffset);

        }
        else {

          // First row behaves differently for disabled padding
          var firstRow = jQuery.goal_2025.fixedColumnGrid.topByCol[col] == padding ? true : false;

          // Use conditional logic if disabled padding, depending on if its first row or has something before it
          gridItem.css('top', jQuery.goal_2025.fixedColumnGrid.topByCol[col] + (disablePadding && !firstRow && !jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol[col] ? -padding*2 : 0));
          jQuery.goal_2025.fixedColumnGrid.topByCol[col] += (gridItemHeight + (disablePadding ? (firstRow || jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol[col] ? 0 : -padding*2) : padding * 2));

        }

        jQuery.goal_2025.fixedColumnGrid.paddingDisabledByCol[col] = disablePadding;

      }

      var maxTop = 0;
      for (var col in jQuery.goal_2025.fixedColumnGrid.topByCol) {
        maxTop = Math.max(jQuery.goal_2025.fixedColumnGrid.topByCol[col], maxTop);
      }

      grid.height(maxTop - padding);

    }

  });

};

jQuery.goal_2025.fixedColumnGrid.enableDragDropOrdering = function(onDrop) {

  $( ".fixed-column-grid-item").each(function() {

    var gridItem = $(this);

    if(gridItem.hasClass('undraggable') == false) {

      gridItem.draggable({
        start: function( event, ui ) {

          for(var i=0;i<jQuery.goal_2025.fixedColumnGrid.shouldDragDropOrderingFunctions.length;i++) {
            var shouldDragDropOrderingFunction = jQuery.goal_2025.fixedColumnGrid.shouldDragDropOrderingFunctions[i];
            if(shouldDragDropOrderingFunction($(this)) == false) {
              return false;
            }
          }

          $(this).css('zIndex', 3);

          $(".fixed-column-grid-item").removeClass('fixed-column-grid-item-animate');

          // Create a placeholder for the item we are dragging for the user
          var gridItemPlaceholder = $('<div/>');
          gridItemPlaceholder.html("");

          $(this).parent().append(gridItemPlaceholder);
          gridItemPlaceholder.addClass('fixed-column-grid-item-dragging-placeholder');
          gridItemPlaceholder.css('zIndex', 0);


        },
        drag: function(event, ui) {



          var droppable = $($(this).data("droppable"));

          if(droppable.length > 0) {

            droppable.find('.fixed-column-grid-item-dropping').remove();
            var dragging = $(this);

            if(dragging.hasClass('drag-drop-column-restricted') && droppable.attr('fixed_column_grid_col') != dragging.attr('fixed_column_grid_col')) {
              // Do not allow drop if column restricted
            }
            else {

              if(droppable.hasClass('droppable-anchor')) { // only droppable above the anchor
                droppable.append('<div class="fixed-column-grid-item-dropping fixed-column-grid-item-dropping-top"></div>');
              }
              else {

                if(jQuery.goal_2025.fixedColumnGrid.droppingAbove(ui, droppable)) {
                  droppable.append('<div class="fixed-column-grid-item-dropping fixed-column-grid-item-dropping-top"></div>');
                }
                else {
                  droppable.append('<div class="fixed-column-grid-item-dropping fixed-column-grid-item-dropping-bottom"></div>');
                }

              }

            }

          }

        }

      });

    }

    if(gridItem.hasClass('undroppable') == false) {

      gridItem.droppable({
        drop: function(event, ui) {

          var dropping = $(this);
          var dragging = $(ui.draggable);

          if(dragging.hasClass('drag-drop-column-restricted') && dropping.attr('fixed_column_grid_col') != dragging.attr('fixed_column_grid_col')) {
            // Do not allow drop if column restricted

          }
          else {

            dragging.attr('fixed_column_grid_col', dropping.attr('fixed_column_grid_col'));

            if(dropping.hasClass('droppable-anchor')) {
              jQuery(dropping).before(dragging); // Only droppable above the anchor
            }
            else {

              if(jQuery.goal_2025.fixedColumnGrid.droppingAbove(ui, dropping)) {
                jQuery(dragging).insertBefore(dropping);
              }
              else {
                jQuery(dragging).insertAfter(dropping);
              }

            }

            $(".fixed-column-grid-item").addClass('fixed-column-grid-item-animate');
            $(".fixed-column-grid-item").css('zIndex', 1);
            $(".fixed-column-grid-item").find('.fixed-column-grid-item-dropping').remove();
            jQuery.goal_2025.fixedColumnGrid.layout();

            $('.fixed-column-grid-item-dragging-placeholder').remove();

          }

          onDrop();

          dragging.removeData("droppable");

        },
        over: function(event, ui) {

          var dropping = $(this);
          var dragging = $(ui.draggable);

          // Because over is only called once, we add data and then detect in drag event instead
          dragging.data("droppable", dropping);

        },

        out: function( event, ui ) {

          var dropping = $(this);
          var dragging = $(ui.draggable);

          dropping.find('.fixed-column-grid-item-dropping').remove();

          dragging.removeData("droppable");

        },

        deactivate: function( event, ui ) {

          // If didn't drop anywhere, just relayout
          jQuery.goal_2025.fixedColumnGrid.layout();

          $('.fixed-column-grid-item-dragging-placeholder').remove();

        }

      });

    }

  });



};


$(window).load(function() {
  jQuery.goal_2025.onWindowLoad();
});

$(function() {
  jQuery.goal_2025.onDomReady();
});

$(window).scroll(function() {
  jQuery.goal_2025.onWindowScroll();
});

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
$(window).resize(function() {

  jQuery.goal_2025.onWindowResize();

  // Create a callback for when the resize ends, for cpu pegging calls
  waitForFinalEvent(function(){
    jQuery.goal_2025.onWindowResizeFinish();
    //...
  }, 500, "onWindowResizeFinishId");

});
