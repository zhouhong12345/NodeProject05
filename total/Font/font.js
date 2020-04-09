var $setFont=(function(){
  var $html=$(''
        + '<div class="fontall">'
          + '<div class="fontinner">'
           + '<div class="fonttop">'
             + '<p class="title">字体</p>'
             + '<span class="close-btn">✖</span>'
           + '</div>'
           + '<div class="main">'
             + '<div class="font-family"><p>字体(F):</p></div>'
             + '<div class="font-style"><p>字形(Y):</p></div>'
             + '<div class="font-size"><p>大小(s):</p></div>'
             + '<fieldset class="example">'
               + '<legend>示例</legend>'
               + '<p class="txt">AaBbYyZz</p>'
             + '</fieldset>'
             + '<div class="foot">'
               + '<p>脚本(R):</p>'
               + '<select>'
                 + '<option value="西欧语言">西欧语言</option>'
                 + '<option value="中文 GB2312">中文 GB2312</option>'
               + '</select>'
             + '</div>'
             + '<input class="yes" type="button" value="确定"/>'
             + '<input class="no" type="button" value="取消"/>'
           + '</div>'
          + '</div>'
        + '<div>'),
        ok=-1;

  var arr=['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
      brr=['常规', '斜体', '粗体', '粗偏斜体'],
      crr=['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

  var cfg={
    font:'Arial',
    style:'常规',
    size:'16'
  }
      
  var $one=$('<input class="left" type="text" value="Algerian"/>'),
        $two=$('<input class="middle" type="text" value="粗偏斜体"/>'),
        $three=$('<input class="right" type="text" value="16"/>'),
        $onediv=$('<ul class="aa"></ul>'),
        $twodiv=$('<ul class="bb"></ul>'),
        $threediv=$('<ul class="cc"></ul>');

  function setStyle(){
   
    $('.font-family').append($one).append($onediv);
    $('.font-style').append($two).append($twodiv);
    $('.font-size').append($three).append($threediv);

    for(var i=0;i<arr.length;i++){
      var $oneinner=$('<li class="item"></li>');
      $oneinner.html(arr[i]);
      $onediv.append($oneinner);
      
      $($oneinner).css('font-family',arr[i])

      $oneinner.click(function(){
        $one.attr('value',$(this).context.innerHTML);        
        $(this).css({'background-color':'#0078D7','color':'white'}).siblings().css({'background-color':'white','color':'black'})
        $('.txt').css('font-family',$(this).context.innerHTML)
        cfg.font=$(this).context.innerHTML;
      }) 
    }

    for(var i=0;i<brr.length;i++){
      var $twoinner=$('<li class="item"></li>')
      $twoinner.html(brr[i]);
      $twodiv.append($twoinner);

      if($twoinner[0].innerHTML=='斜体'){
        $twoinner.css('font-style','italic')
      }
      else if($twoinner[0].innerHTML=='粗体'){
        $twoinner.css('font-weight','bold')
      }
      else if($twoinner[0].innerHTML=='粗偏斜体'){
        $twoinner.css({'font-weight':'bold','font-style':'italic'})
      }

      $twoinner.click(function(){
        $two.attr('value',$(this).context.innerHTML);  
        $(this).css({'background-color':'#0078D7','color':'white'}).siblings().css({'background-color':'white','color':'black'})  
        example($(this).context.innerHTML)
      })
    }

    for(var i=0;i<crr.length;i++){
      var $threeinner=$('<li class="item"></li>')
      $threeinner.html(crr[i]);
      $threediv.append($threeinner);
      $threeinner.click(function(){
        $three.attr('value',$(this).context.innerHTML);
        $(this).css({'background-color':'#0078D7','color':'white'}).siblings().css({'background-color':'white','color':'black'})
         $('.txt').css('font-size',$(this).context.innerHTML+'px');
         cfg.size=$(this).context.innerHTML;
      })
    } 
  }

  function example(sort){
    cfg.style=sort;
    if(sort=='斜体'){
        $('.txt').css('font-style','italic')
    }
    else if(sort=='粗体'){
        $('.txt').css('font-weight','bold')
    }
    else if(sort=='粗偏斜体'){
        $('.txt').css({'font-weight':'bold','font-style':'italic'})
    }
  }
  
  function close(){
    $html.remove();
  }

  function onclick(){
    if($('.aa').children().length!==0 && $('.bb').children().length!==0 && $('.cc').children().length!==0){
      $('.aa').children().click(function(){
        $one.attr('value',$(this).context.innerHTML);        
        $(this).css({'background-color':'#0078D7','color':'white'}).siblings().css({'background-color':'white','color':'black'})

        $('.txt').css('font-family',$(this).context.innerHTML);
        cfg.font=$(this).context.innerHTML;
      })

      $('.bb').children().click(function(){
        $two.attr('value',$(this).context.innerHTML);  
        $(this).css({'background-color':'#0078D7','color':'white'}).siblings().css({'background-color':'white','color':'black'})  
        example($(this).context.innerHTML)
      })

      $('.cc').children().click(function(){
        $three.attr('value',$(this).context.innerHTML);
        $(this).css({'background-color':'#0078D7','color':'white'}).siblings().css({'background-color':'white','color':'black'})
        $('.txt').css('font-size',$(this).context.innerHTML+'px');
        cfg.size=$(this).context.innerHTML;
      })
    }
  }

  function define(){
    $('.yes').click(function(){
      $editor.change(cfg); 
      close();
    })
  }

  function show(){
    $('body').append($html);
    define();
    onclick();
    if(ok==-1){
      setStyle();
    }
    $('.close-btn').click(function(){
      ok=1;
      close();
    })
    $('.no').click(function(){
      ok=1;
      close();
    })
  }
  return{
    show:show
  }
}())
