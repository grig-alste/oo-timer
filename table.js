(function (window, undefined) {

    window.Asc.plugin.init = function () {

                this.callCommand(function() {
       Api.GetActiveSheet().GetRange('B1').SetValue(2);
                    }, true);

    };
    window.Asc.plugin.button = function (id) {

        if (id == 0) {
            if (sum != 0)
            {
                this.callCommand(function() {
                //    Api.GetActiveSheet().GetRange('B1').SetValue();
                    Api.GetActiveSheet().GetRange('B2').SetValue('2');
                }, true);
            }
            else {
                this.callCommand(function() {
                    Api.GetActiveSheet().GetRange('B1').SetValue('nosum');
                }, true);
            }
            }
        else
        {
            this.executeCommand("close", "");
        }

        };
})(window, undefined);