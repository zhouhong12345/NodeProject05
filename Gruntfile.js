/*global module:true*/
module.exports=function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        collapseWhitespace:true,
        preservelLineBreaks:false
      },
      files:{
        src:'dist/index.html',
        dest:'dist/index.html'
      }
    },
    copy:{
      html:{
        src:'./index.html',
        dest:'./dist/index.html'
      }
    },
    concat:{
      js:{
        src:['./menubar/menubar.js','./Font/font.js','./editor/editor.js','./all.js'],
        dest:'dist/bundle.js'
      },
      css:{
        src:['./all.css','./menubar/menubar.css','./editor/editor.css','./Font/font.css'],
        dest:'dist/bundle.css'
      }
    },
    uglify:{
      'dist/afterbundle.js':'bundle.js'
    },
    cssmin:{
      'dist/afterbundle.css':'bundle.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('release',['copy:html','concat','uglify','cssmin','htmlmin']);

};
