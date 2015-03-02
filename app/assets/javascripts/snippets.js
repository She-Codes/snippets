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
  $.getJSON("/language.json", function(data){
    console.log(data["languages"]);
  });

  $.each(modesByName, function(k, v){
    $('#snippet_language_id')
      .append($('<option></option>')
      .attr('value', v.name)
      .attr('data-mode', v.mode)
      .text(v.caption))   
  });

  $('#snippet_language_id').on('change', function(){
    var newMode = $('#snippet_language_id :selected').attr('data-mode');
    editor.session.setMode(newMode);
  })

  $('body').prepend('<ul></ul>');
  $.each(modesByName, function(k, v){
    $('ul').prepend('<li>'+v.caption+'</li>');
  });
  
});