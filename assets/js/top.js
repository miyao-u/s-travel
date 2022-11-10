$(function(){

    //fade-InOut

    //画像の枚数
    var count = $(".slide li").length;

    //現在表示されている画像
    var current = 1;

    //次に表示する画像
    var next = 2;

    //フェードインアウトのインターバル(4000ミリ秒ごとに切り替える)
    var interval = 4000;

    //フェードインアウトのスピード
    var duration = 500;

    //タイマー用に変数
    var timer;

    //1番目の写真以外は非表示
    $(".slide li:not(:first-child)").hide();

    //変数intervalの値ごとにslideTimer()関数を実行
    timer = setInterval(slideTimer, interval);

    //slideTimer()関数
    function slideTimer(){

        //現在の画像をフェードアウト
        $(".slide li:nth-child(" + current + ")").fadeOut(duration);

        //次の画像をフェードイン
        $(".slide li:nth-child(" + next + ")").fadeIn(duration);

        //変数currentの新しい値：変数nextの元の値
        current = next;

        //変数nextの新しい値：変数currentの新しい値+1
        next = ++next;

        //変数nextの値が3を超える場合、1に戻す
        if(next > count){
            next = 1;
        }

        //slide_btnクラスを削除
        $(".mv_btn li a").removeClass("slide_btn");

        //現在のボタンにslide_btnクラスを追加
        $(".mv_btn li:nth-child("+ current +") a").addClass("slide_btn");
    }
    
    //ボタンをクリック
    $(".mv_btn li a").click(function(){

        //テキスト内容を変数nextに代入
        next = $(this).html();

        //タイマーを停止して再スタート
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        //初回の関数実行
        slideTimer();
        return false;
    });

});

