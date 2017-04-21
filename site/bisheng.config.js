const path = require('path');

module.exports = {
  port: 8001,
  root: '/antv-doc/',
  source: {
    components: './components',
    docs: './docs'
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    categoryOrder: {
      设计原则: 2,
      Principles: 2,
    },
    typeOrder: {
      General: 0,
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
      Feedback: 5,
      Localization: 6,
      Other: 7,
    }
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
    config.resolve.alias = {
      // 'antd/lib': path.join(process.cwd(), 'components'),
      // antd: path.join(process.cwd(), 'index'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
      'vue$': 'vue/dist/vue',
      // 'antv': '/Users/ak/work/js/antv-dev'
    };

    config.babel.plugins.push([
        require.resolve('babel-plugin-transform-runtime'),
        {
          polyfill: false,
          regenerator: true,
        },
      ]);
    config.module.loaders.push({
      test: /\.vue$/,
      loader: 'vue'
    })
    config.vue = {
      preserveWhitespace: false
    }
    return config;
  }
  // webpackConfig(config) {
  //   config.resolve.alias = {
  //     antd: 'antd',
  //     site: path.join(process.cwd(), 'site'),
  //   };
  //
  //   /*config.babel.plugins.push([
  //    require.resolve('babel-plugin-antd'),
  //    {
  //    style: true,
  //    libraryName: 'antd',
  //    libDir: 'lib',
  //    },
  //    ]);*/
  //
  //   return config;
  // },
};
