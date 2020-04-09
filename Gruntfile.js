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
        src:['js/*.js','./total/**/*.js'],
        dest:'dist/bundle.js'
      },
      css:{
        src:['js/*.css','./total/**/*.css'],
        dest:'dist/bundle.css'
      }
    },
    uglify:{
      'dist/bundle.min.js':'dist/bundle.js'
    },
    cssmin:{
      'dist/bundle.min.css':'dist/bundle.css'
    },
    useminPrepare:{
      html:'index.html',
      options:{
        dest:'dist'
      }
    },
    usemin:{
      html:['dist/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('release',['copy:html','concat','uglify','cssmin','usemin','htmlmin']);

};
