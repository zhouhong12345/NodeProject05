var $menubar=(function(){
  var $up=$("<div class='topall'></div>"),
      $all=$('.all'),
      menuData,
      arr=[],//term
      brr=[],//heads
      state='false'//false为未展开，true为展开


  function createHtmlHead(){
    var $head=$("<ul class='headall'></ul>");

    for(var i=0;i<menuData.length;i++){
      var $heads=$("<li class='headsall'></li>");
      
      $heads.html(menuData[i].title);
      $head.append($heads);
      brr.push($heads);

      (function(j){
        $heads.click(function(e){
          if(state === 'false'){
            arr[j].css('display','inline-block')
            state=j;
          }
          else if(state === j){
            arr[j].css('display','none');
            state='false';
          }
          else if(state !== j){
            arr[j].css('display','inline-block');
            arr[state].css('display','none');
            state=j;
          }
          e.stopPropagation();
        })
        $('body').click(function(){
          arr[j].css('display','none')
          state='false'
        })

        $heads.hover(function(){
          brr[j].css('background-color','#d2e9ff')
          if(state!=='false'){
            arr[j].css('display','inline-block')
            arr[state].css('display','none')
            state=j;
          }
        },function(){
          brr[j].css('background-color','white')
        })
       })(i)
    }
    $up.append($head);
    $('.all').append($up);  
  }

  function createHtmlTerm(){
    for(var m=0;m<menuData.length;m++){
      var $term=$("<ul class='termall'></div>"),
          ex=menuData[m].expands;

        for(var n=0;n<ex.length;n++){
          if(ex[n].title == 'hr'){
            var $line=$("<li class='lineall'></li>");
            $term.append($line);
          }
          else{
            var $terms=$("<li class='termsall'></li>");
            $terms.html(ex[n].title);

            if(ex[n].shortcut !==''){
              var $short=$("<span class='add'><span>");
              $short.html(ex[n].shortcut);
              $terms.append($short); 
            }
            if(ex[n].enabled ==false){
              $terms.attr('disabled',true)
              $terms.css('color','gray')
            }

            if(m==2&n==1){
             $terms.click(function(){
                $setFont.show();
             })
            }

            $term.append($terms);
            
            (function(j){
              $terms.hover(function(){
                if($(this).attr('disabled')){
                  $(this).css('background-color','#E0E0E0')
                }
                else{
                  $(this).css('background-color','#84c1ff')
                }
              },function(){
                $(this).css('background-color','#F0F0F0')
              })
            })(n)
          }
         
        }

      $term.css('left',menuData[m].left)
      $up.append($term);
      arr.push($term);
    }
  }

  function show(data){
    menuData=data;
  }

  function init(){
    createHtmlHead();
    createHtmlTerm();
  }

  return{
    show:show,
    init:init
  }
}());
