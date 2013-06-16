// SlideshowGallery constructor function. This will instantiate a new
// object of type SlideShowGallery.
var SlideshowGallery = function() {
  // The distance the gallery has been translated (slid) so far in pixels. 
  this.currentTranslation = 0;
  
  // The width of a single slide (image) in pixels.
  this.slideWidth = 300;
  
  // A reference to the child DIV in the HTML.
  this.childStrip = document.getElementById('child');
  
  // We didn't cover this in class, but this line of code will
  // call slideNext() when the user clicks on the child strip.
  // We use bind to set the "this" reference within the slideNext function.
  this.childStrip.addEventListener('click', this.slideNext.bind(this));
};

// Slide the gallery next by one image width.
SlideshowGallery.prototype.slideNext = function() {
  // Decrease the current translation by one slide (image) width.
  this.currentTranslation -= this.slideWidth;
  
  // We can count the number of images currently in the gallery using
  // element.children.length.
  var numSlides = this.childStrip.children.length;
  
  // Wrap around.
  if (this.currentTranslation == numSlides * -this.slideWidth) {
    this.currentTranslation = 0;
  }
  
  // Actually perform the animation by setting CSS transform style.
  this.childStrip.style.webkitTransform =
      'translate3d(' + this.currentTranslation + 'px, 0 ,0)';
};

// Slide the gallery previous by one image width.
SlideshowGallery.prototype.slidePrev = function() {
  this.currentTranslation += this.slideWidth;
  var numSlides = this.childStrip.children.length;
  
  if (this.currentTranslation == this.slideWidth) {
    this.currentTranslation = (numSlides - 1) * -this.slideWidth;
  }
  
  this.childStrip.style.webkitTransform =
      'translate3d(' + this.currentTranslation + 'px, 0 ,0)';
};


var gallery;
// Point of entry.
window.onload = function() {
  gallery = new SlideshowGallery();
  
  // Either here in the code or in the browser console,
  // call gallery.slideNext() or gallery.slidePrev().
}

