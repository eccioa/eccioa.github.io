; (function ($, window, document, undefined) {
    window.method = null;

    $(document).ready(function () {
        var input = $('#input');
        var output = $('#output');
        var dropzone = $('#droppable-zone');
        var option = $('[data-option]');
        var compare = $('#compare');
        var isHashing = false;
        var comapreResult = $('#compare_result');

        var execute = function () {
            try {
                output.val(method(input.val(), option.val()));
            } catch (e) {
                output.val(e);
            }
        }

        function autoUpdate() {
            execute();
        }

        output.bind('input propertychange change', function () {
            if(!isHashing){
                compareText();
            }
        });

        compare.bind('input propertychange change', function () {
            compareText();
        });

        function compareText() {
            if(output.val() != '' && compare.val() != ''){
                var result = ( output.val().toUpperCase() === compare.val().toUpperCase() );
                // console.log(result);
                // if(result == false){
                //     console.log(output.val() + ' ' + compare.val());
                // }
                if(result == true){
                    comapreResult.text("Correct! (*ﾟ∀ﾟ*)");
                }else if(result == false){
                    comapreResult.text("Wrong! ｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡");
                }
            }else{
                comapreResult.text("");
            }
        }

        if (dropzone.length > 0) {
            var dropzonetext = $('#droppable-zone-text');

            $(document.body).bind('dragover drop', function (e) {
                e.preventDefault();
                return false;
            });

            if (!window.FileReader) {
                dropzonetext.text('Your browser dose not support.');
                $('input').attr('disabled', true);
                return;
            }

            dropzone.bind('dragover', function () {
                dropzone.addClass('hover');
            });

            dropzone.bind('dragleave', function () {
                dropzone.removeClass('hover');
            });

            dropzone.bind('drop', function (e) {
                dropzone.removeClass('hover');
                file = e.originalEvent.dataTransfer.files[0];
                dropzonetext.text(file.name);
                autoUpdate();
            });

            input.bind('change', function () {
                file = input[0].files[0];
                dropzonetext.text(file.name);
                autoUpdate();
            });

            var file;
            execute = function () {
                reader = new FileReader();
                var value = option.val();
                if (method.update) {
                    var batch = 1024 * 1024 * 2;
                    var start = 0;
                    var total = file.size;
                    var current = method;
                    reader.onload = function (event) {
                        try {
                            current = current.update(event.target.result, value);
                            asyncUpdate();
                        } catch (e) {
                            output.val(e);
                        }
                    };
                    var asyncUpdate = function () {
                        if (start < total) {
                            isHashing = true;
                            comapreResult.text("");
                            output.val('hashing...' + (start / total * 100).toFixed(2) + '%');
                            var end = Math.min(start + batch, total);
                            reader.readAsArrayBuffer(file.slice(start, end));
                            start = end;
                        } else {
                            output.val(current.hex());
                            isHashing = false;
                            compareText();
                        }
                    };
                    asyncUpdate();
                } else {
                    isHashing = true;
                    comapreResult.text("");
                    output.val('hashing...');
                    reader.onload = function (event) {
                        try {
                            output.val(method(event.target.result, value));
                        } catch (e) {
                            output.val(e);
                        }
                    };
                    reader.readAsArrayBuffer(file);
                }
            };
        }


        var parts = location.pathname.split('/');
        $('a[href="' + parts[parts.length - 1] + '"]').addClass('active');
    });
})(jQuery, window, document);
