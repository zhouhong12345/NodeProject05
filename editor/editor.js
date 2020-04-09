var $editor=(function(){
  var $ed=$(''
      +'<div class="big">'
        +'<textarea class="textArea"></textarea>'
      +'</div>'),
      $all=$('.all'),
      $t=$ed.find('.textArea');

  var cfg={
    font:'Arial',
    style:'常规',
    size:'16'
  }

  function init(){
    $t.css({'font-family':'Arial','font-size':'16px'})
    //$('.textArea').append($('<p>hhh</p>'))
  }
 
  function change(conf){
    console.log(conf.style)
    if(conf.style=='斜体'){
      $t.css({'font-family':conf.font,'font-style':'italic','font-size':conf.size+'px'})
    }
    else if(conf.style=='粗体'){
      $t.css({'font-family':conf.font,'font-weight':'bold','font-size':conf.size+'px'})
    }
    else if(conf.style=='粗偏斜体'){
      $t.css({'font-family':conf.font,'font-weight':'bold','font-style':'italic','font-size':conf.size+'px'})
    }
  }

  function show(){
    init();
    $all.append($ed);
  } 

  return{
    change:change,
    show:show
  }
}())
