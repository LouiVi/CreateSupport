var lay,img,btn,txts={tr:{install:"\u0059\u00fc\u006b\u006c\u0065",error:"\u0048\u0061\u0074\u0061"},en:{install:"\u0049\u006e\u0073\u0074\u0061\u006c\u006c",error:"\u0045\u0072\u0072\u006f\u0072"}},txt=txts["\u0074\u0072"==app._54()?"\u0074\u0072":"\u0065\u006e"],pfldr="\u002f\u0073\u0064\u0063\u0061\u0072\u0064\u002f\u0044\u0072\u006f\u0069\u0064\u0053\u0063\u0072\u0069\u0070\u0074\u002f\u0050\u006c\u0075\u0067\u0069\u006e\u0073",isPortrait="\u0050\u006f\u0072\u0074\u0072\u0061\u0069\u0074"==app._145();const APP_FOLDER=app._194("","\u0045\u0078\u0074\u0065\u0072\u006e\u0061\u006c");function OnStart(){(lay=app._272("\u004c\u0069\u006e\u0065\u0061\u0072","\u0056\u0043\u0065\u006e\u0074\u0065\u0072\u002c\u0046\u0069\u006c\u006c\u0058\u0059")).SetBackColor("\u0023\u0046\u0041\u0046\u0041\u0046\u0041"),layTop=app._183(lay,"\u004c\u0069\u006e\u0065\u0061\u0072","\u0056\u0043\u0065\u006e\u0074\u0065\u0072\u002c\u0046\u0069\u006c\u006c\u0058"),layTop.SetSize(1,.5),img=app._275(layTop,"\u0049\u006d\u0067\u002f\u0053\u0075\u0070\u0070\u006f\u0072\u0074\u0020\u0050\u006c\u0075\u0067\u0069\u006e\u002e\u0070\u006e\u0067",isPortrait?.5:.25),layBot=app._183(lay,"\u004c\u0069\u006e\u0065\u0061\u0072","\u0056\u0043\u0065\u006e\u0074\u0065\u0072\u002c\u0046\u0069\u006c\u006c\u0058"),layBot.SetSize(1,.5),(btn=app._278(layBot,txt.install,isPortrait?.7:.4,null,"\u0043\u0075\u0073\u0074\u006f\u006d\u002c\u004d\u006f\u006e\u006f\u0053\u0070\u0061\u0063\u0065")).SetOnTouch(btn_OnTouch),app._183(lay)}function btn_OnTouch(){app._198(APP_FOLDER+"\u002f\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e\u0070\u0070\u006b")||app._217("\u004d\u0069\u0073\u0063\u002f\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e\u0070\u0070\u006b",APP_FOLDER+"\u002f\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e\u0070\u0070\u006b"),app._209(APP_FOLDER+"\u002f\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e\u0070\u0070\u006b","","\u0053\u0065\u006c\u0065\u0063\u0074\u0020\u0044\u0072\u006f\u0069\u0064\u0053\u0063\u0072\u0069\u0070\u0074"),img.Animate("\u004e\u0065\u0077\u0073\u0050\u0061\u0070\u0065\u0072"),img.SetMargins(0,0,0,0),btn.Gone(),img.SetImage("\u0049\u006d\u0067\u002f\u006f\u006b\u0068\u0061\u006e\u0064\u002e\u0070\u006e\u0067")}