!function(window, document, $, undefined) {
            $.fn.imgscroller = function() {
                this.each(function() {
                    var $this = $(this);
                    // console.log($this)
                    var $scrollerUl = $this.find('.scroller-ul'),
                        $scrollerInner =$this.find('.scroller-inner'),
                        sLeft = $scrollerInner.scrollLeft(),
                        ulWidth = $scrollerUl.width(),
                        timer,
                        speed = 20;

                    console.log(ulWidth)
                    $scrollerUl.after($scrollerUl.clone()).after($scrollerUl.clone());

                    $this.hover(function() {  // hover 等同于JS中的 onmouseover() 和 onmouseout()
                        clearInterval(timer)
                    }, function() {
                        scroller();
                    });

                    function scroller() {
                        timer = setInterval(function() {
                            if(sLeft > ulWidth) {
                                sLeft = 0;
                            };

                            $scrollerInner.scrollLeft(sLeft++);
                        }, speed)
                    }
                    scroller();
                });
            }
}(window, document, jQuery);