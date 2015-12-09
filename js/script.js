(function(){
    $('#popupform')
        .find('input')
        .each(function(){

            $(this).on('change', function(){
                $this = $(this);
                if (this.value !== "") {
                    $this.addClass('filled');
                }
                else {
                    $this.removeClass('filled');
                }
            });
        });

    $('#popupform')
        .find('select')
        .each(function(){

            $(this).on('change', function(){
                $this = $(this);
                if (this.value !== "" || this.value !== "") {
                    $this.addClass('filled');
                }
                else {
                    $this.removeClass('filled');
                }
            });
        });
})();