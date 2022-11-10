//TOPページのリンクから飛んできたときの表示位置調整
$(window).on('load', function () {
    var headerHeight = 20; //ずらしたいheightを指定
    if (document.URL.match('#')) {
        var str = location.href;
        var cut_str = "#";
        var index = str.indexOf(cut_str);
        var href = str.slice(index);
        var target = href;
        var position = $(target).offset().top - headerHeight;
        $("html, body").scrollTop(position);
        return false;
    }
});


$(function () {

    //スムーススクロール
    $('a[href^="#"]').click(function () {

        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;

    });


    //ToTopボタンここから

    //スクロールした際の動きを関数でまとめる
    function PageTopAnime() {

        var scroll = $(window).scrollTop(); //スクロール値を取得
        if (scroll >= 100) {//100pxスクロールしたら
            $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
            $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
        } else {//それ以外は
            if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名が既に付与されていたら
                $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
                $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
            }
        }

        var wH = window.innerHeight; //画面の高さを取得
        var footerPos = $('#footer').offset().top; //footerの位置を取得
        if (scroll + wH >= (footerPos + 120)) {
            var pos = (scroll + wH) - footerPos - 120 //スクロールの値＋画面の高さからfooterの位置＋120pxを引いた場所を取得し
            $('#page-top').css('bottom', pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
        } else {//それ以外は
            if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名がついていたら
                $('#page-top').css('bottom', '20px');// 下から20pxの位置にページリンクを指定
            }
        }
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });

    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });

    // #page-topをクリックした際の設定
    $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
    });
    //ToTopボタンここまで


    //文字サイズ変更ここから
    $(".size_btn a").click(function () {

        $("body").removeClass();

        var size = $(this).html();

        if (size == "小") {
            $("body").addClass("font_small");
        } else if (size == "中") {
            $("body").addClass("font_medium");
        } else {
            $("body").addClass("font_large");
        }
        return false;
    });
    //文字サイズ変更ここまで
/*
    //ハンバーガーメニュー
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });
*/
    //トグルメニュー
    $(".openbtn").click(function(){
        $("nav").slideToggle(200);
    });

    //
    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
          $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      });
      
      $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
          $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
          $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
      });
});
