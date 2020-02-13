Pace.on('done', function(){
    $('.wrap').fadeIn();
    $('.main-text').textillate({
        selector: '.texts',	// 要素を指定
        loop: false,	// ループ繰り返し
        minDisplayTime: 3000,	// アニメーションの間隔時間
        initialDelay: 1000,	// アニメーション開始までの遅延時間
        autoStart: true,	// アニメーションの自動スタート
        inEffects: [],	// エフェクト開始時のアニメーション設定
        outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定
    
        in: {
            effect: 'fadeInLeftBig',	// エフェクトの指定
            delayScale: 1.5,	// 遅延時間の指数
            delay: 50,	// 文字ごとの遅延時間
            sync: false,	// アニメーションをすべての文字に同時に適用
            shuffle: false, // 文字のランダム表示
            reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
            callback: function () {}	// コールバック関数
        },
    
        out: {
            effect: 'hinge',  
            delayScale: 1.5,  
            delay: 50,  
            sync: false,  
            shuffle: false,
            reverse: false,
            callback: function () {}
        }
    });
    

    
    let swipeOption = {
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
      new Swiper('.swiper-container', swipeOption);
    
      (function($) {
        var $nav   = $('#navArea');
        var $btn   = $('.toggle_btn');
        var $mask  = $('#mask');
        var open   = 'open'; // class
        // menu open close
        $btn.on( 'click', function() {
          if ( ! $nav.hasClass( open ) ) {
            $nav.addClass( open );
          } else {
            $nav.removeClass( open );
          }
        });
        // mask close
        $mask.on('click', function() {
          $nav.removeClass( open );
        });
      } )(jQuery);
      AOS.init();
      (function(){
        // #で始まるアンカーをクリックした場合に処理
        $('a[href^=#]').click(function() {
           // スクロールの速度
           var speed = 400; // ミリ秒
           // アンカーの値取得
           var href= $(this).attr("href");
           // 移動先を取得
           var target = $(href == "#" || href == "" ? 'html' : href);
           // 移動先を数値で取得
           var position = target.offset().top;
           // スムーススクロール
           $('body,html').animate({scrollTop:position}, speed, 'swing');
           return false;
        });
     });
     
 
});


// $(function () {
//     $('.main-text').textillate({
//         selector: '.texts',	// 要素を指定
//         loop: false,	// ループ繰り返し
//         minDisplayTime: 3000,	// アニメーションの間隔時間
//         initialDelay: 1000,	// アニメーション開始までの遅延時間
//         autoStart: true,	// アニメーションの自動スタート
//         inEffects: [],	// エフェクト開始時のアニメーション設定
//         outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定
    
//         in: {
//             effect: 'fadeInLeftBig',	// エフェクトの指定
//             delayScale: 1.5,	// 遅延時間の指数
//             delay: 50,	// 文字ごとの遅延時間
//             sync: false,	// アニメーションをすべての文字に同時に適用
//             shuffle: false, // 文字のランダム表示
//             reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
//             callback: function () {}	// コールバック関数
//         },
    
//         out: {
//             effect: 'hinge',  
//             delayScale: 1.5,  
//             delay: 50,  
//             sync: false,  
//             shuffle: false,
//             reverse: false,
//             callback: function () {}
//         }
//     });
// });

//   let swipeOption = {
//     loop: true,
//     effect: 'fade',
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     speed: 2000,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     }
//   }
//   new Swiper('.swiper-container', swipeOption);

//   (function($) {
//     var $nav   = $('#navArea');
//     var $btn   = $('.toggle_btn');
//     var $mask  = $('#mask');
//     var open   = 'open'; // class
//     // menu open close
//     $btn.on( 'click', function() {
//       if ( ! $nav.hasClass( open ) ) {
//         $nav.addClass( open );
//       } else {
//         $nav.removeClass( open );
//       }
//     });
//     // mask close
//     $mask.on('click', function() {
//       $nav.removeClass( open );
//     });
//   } )(jQuery);

  
  