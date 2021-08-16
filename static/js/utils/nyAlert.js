;
dp.SyntaxHighlighter.config.clipboardSwf = '../../code/clipboard_new.swf';
dp.SyntaxHighlighter.config.copyIcon = '../../code/icon_copy.gif';
!function($,window,document){
  $.showCode = function(options){
    var opt = {
      type:'info',
      msg:'',
      closeTime:300000,
      onclose:null
    };
    opt = $.extend(opt,options);

    initDialog();

    function createDialog(){
      var id = 'nyAlert-'+Math.ceil(Math.random()*10000);
      var html = '';
      html += '<div class="simple-dialog" id="'+id+'" style="display:none;">';
      html += '<iframe class="simple-dialog-iframe" src="" frameborder="0"></iframe>';
//      html += '<span class="icon '+opt.type+'"></span>';
      html +='<div style ="height:100%;overflow:auto">'
  
 
      html += '<textarea name="code" id="" class="'+opt.type+'">'+opt.msg+' </textarea>';
      html +='</div>'
      html += '<i class="close"></i>';
      html += '</div>';
   
      $('body').append(html);
  	  
	  dp.SyntaxHighlighter.HighlightAll('code', true, true);
      return $('#'+id);
    }
    function initDialog(){
      var $dialog = createDialog();
      $dialog.show();
      $dialog.find('i.close').click(function(){
        closeDialog();
        clearTimeout(timeout)
      });
      var timeout = setTimeout(function(){
        closeDialog();
      },opt.closeTime);

      function closeDialog(){
        $dialog.hide();
        $dialog.remove();
        if(typeof opt.onclose == 'function'){
          opt.onclose();
        }
        
      }
    }
  }
}(jQuery,window,document);


