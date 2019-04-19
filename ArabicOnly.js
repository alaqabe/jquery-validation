jQuery.validator.addMethod("ArabicOnly", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[\u0621-\u064A- ]+$/.test(value);
    }, 'Please enter Arabic characteristics only.');
