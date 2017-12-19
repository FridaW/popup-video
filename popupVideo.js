$(document).ready(function() {
    $('.modal').on('hidden.bs.modal', function () {
        stopVideos();
    });

    function stopVideos() {
        $("iframe").each(function() {
            var src = $(this).attr('src');
            $(this).attr('src',src);  
        });
    }
});
