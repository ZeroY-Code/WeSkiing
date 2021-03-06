export default {
  pages: [
    'pages/index/index',
    'pages/circle/circle',
    'pages/tutorial/tutorial',
    'pages/shop/shop',
    'pages/me/me',
    'pages/sub-page/article/article',
    'pages/sub-page/product-list/product-list',
    'pages/sub-page/search/search',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#000000',
    list: [
      {
        iconPath: 'assets/img/icon/home.png',
        selectedIconPath: 'assets/img/icon/home-active.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'assets/img/icon/circle.png',
        selectedIconPath: 'assets/img/icon/circle-active.png',
        pagePath: 'pages/circle/circle',
        text: '圈子',
      },
      {
        iconPath: 'assets/img/icon/tutorial.png',
        selectedIconPath: 'assets/img/icon/tutorial-active.png',
        pagePath: 'pages/tutorial/tutorial',
        text: '教学',
      },
      {
        iconPath: 'assets/img/icon/shop.png',
        selectedIconPath: 'assets/img/icon/shop-active.png',
        pagePath: 'pages/shop/shop',
        text: '商城',
      },
      {
        iconPath: 'assets/img/icon/me.png',
        selectedIconPath: 'assets/img/icon/me-active.png',
        pagePath: 'pages/me/me',
        text: '我的',
      },
    ],
  },
};
