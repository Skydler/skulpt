var $builtinmodule = function(name)
{
    var mod = {};
    
    var STOCK_REPORTS = {
        'FB':   [  1.1,   1.0,   0.7, 0.12,  -0.3, -0.34,  -0.1, -0.45, -0.74],
        'AAPL': [ 0.47,  0.53,  0.42, 0.41,  0.30,  0.10, -0.46, -0.84, -1.13],
        'MSFT': [ 0.75,  0.80,  0.71, 0.67,   0.5,  0.15,  0.09,  0.03,  0.31],
        'GOOG': [-0.27, -0.15, -0.11, 0.12,   0.3,   0.1, -0.3,   -0.1, -0.09]};
        
    function normalize_ticker(ticker) {
        switch (ticker.toLowerCase()) {
            case "facebook": case "fb":
                return "FB";
            case "apple": case "aapl":
                return "AAPL";
            case "microsoft": case "msft":
                return "MSFT";
            case "google": case "goog":
                return "GOOG";
            default: return null;
        }
    }

    mod.get_current = new Sk.builtin.func(function(ticker) {
        Sk.builtin.pyCheckArgs("get_current", arguments, 1, 1);
        Sk.builtin.pyCheckType("ticker", "string", Sk.builtin.checkString(ticker));
        ticker = normalize_ticker(ticker.v);
        if (ticker === null) {
            throw new Sk.builtin.ValueError("Stock data is only available for the following companies: Facebook, Apple, Microsoft, Google.");
        }
        return Sk.ffi.remapToPy(STOCK_REPORTS[ticker][0]);
    });
    
    mod.get_past = new Sk.builtin.func(function(ticker) {
        Sk.builtin.pyCheckArgs("get_past", arguments, 1, 1);
        Sk.builtin.pyCheckType("ticker", "string", Sk.builtin.checkString(ticker));
        ticker = normalize_ticker(ticker.v);
        if (ticker === null) {
            throw new Sk.builtin.ValueError("Stock data is only available for the following companies: Facebook, Apple, Microsoft, Google.");
        }
        return Sk.ffi.remapToPy(STOCK_REPORTS[ticker]);
    });

    return mod;
}