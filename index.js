/**
 * Modules
 */

var notify = require('gulp-notify');

/**
 * Exports
 */

module.exports = error;


/**
 * Create error handler
 * @param  {string} title
 * @return {function}
 */
function error(title) {
  return function() {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
      title: title,
      message: "<%= error %>"
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
  };
}
    