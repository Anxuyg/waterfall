start()
$(window).on('scroll', function() {
    start()
})

function start() {
    $('main img').each(function() {
        if (isShow($(this))) {
            loadImg($(this))
        }
    })
}

function isShow($node) {
    return $node.offset().top <= $(window).height() + $(window).scrollTop()
}

function loadImg($img) {
    $img.attr('src', $img.attr('data-src'))
}