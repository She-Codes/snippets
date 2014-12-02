$(document).ready(function(){
  var editor = ace.edit("editor_div");
  // from 'ext-modelist.js'
  var modelist = ace.require("ace/ext/modelist");
  var modesByName = modelist.modesByName;
  editor.setTheme("ace/theme/github");
  editor.getSession().setMode("ace/mode/javascript");
  // $.each(modesByName, function(k, v){
  //   console.log(v.caption);
  //   console.log(v.mode);
  // });
  // console.log(modesByName);

  // 
  $.each(modesByName, function(k, v){
    $('#snippet_language')
      .append($('<option></option>')
      .attr('value', v.name)
      .attr('data-mode', v.mode)
      .text(v.caption))   
  });

  $('#snippet_language').on('change', function(){
    var newMode = $('#snippet_language :selected').attr('data-mode');
    editor.session.setMode(newMode);
  })
  
});