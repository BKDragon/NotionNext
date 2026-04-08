const CONFIG = {
  // 首屏信息栏按钮文字
  MAGZINE_HOME_BANNER_ENABLE: true, // 首屏右上角的宣传位
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/subscription',
  MAGZINE_HOME_BUTTON_TEXT: '订阅',

  MAGZINE_HOME_HIDDEN_CATEGORY: '', //不希望在首页展示的文章分类，用英文逗号隔开

  MAGZINE_HOME_TITLE: '成立于 2014',
  MAGZINE_HOME_DESCRIPTION:
    ' 一个面向自己写作的自媒体。',
  MAGZINE_HOME_TIPS: '',

  MAGZINE_HERO_SUB_POST_COUNT: 2, // 首屏英雄区次要文章数量，通常2篇，如果关闭Banner，推荐改为3篇

  // 首页底部推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  MAGZINE_RECOMMEND_POST_TAG: '推荐',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: '推荐文章',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || true, // 右侧面板深色模式

  MAGZINE_POST_LIST_COVER: true, // 文章列表显示图片封面
  MAGZINE_POST_LIST_PREVIEW: true, // 列表显示文章预览
  MAGZINE_POST_LIST_CATEGORY: true, // 列表显示文章分类
  MAGZINE_POST_LIST_TAG: true, // 列表显示文章标签

  MAGZINE_POST_DETAIL_CATEGORY: false, // 文章显示分类
  MAGZINE_POST_DETAIL_TAG: true, // 文章显示标签

  // 文章页面联系卡
  MAGZINE_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  MAGZINE_SOCIAL_CARD_TITLE_1: '交流频道',
  MAGZINE_SOCIAL_CARD_TITLE_2: '加入社群讨论分享',
  MAGZINE_SOCIAL_CARD_TITLE_3: '点击加入社群',
  MAGZINE_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/chat-community',

  // 页脚菜单
  MAGZINE_FOOTER_LINKS: [
    {
      name: '链接',
      menus: [
        {
          title: '赤潮',
          href: 'https://akashio.com'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: '作者',
      menus: [
        { title: '评论尸', href: 'https://web.okjike.com/u/6d3698d6-0970-49a6-a19d-f8d3cfa33a6f' },
        {
          title: '汐笺',
          href: 'https://web.okjike.com/u/bb9f32a4-a2ee-40a7-af01-a9b4949cd365'
        },
        {
          title: '天使不投资人',
          href: 'https://weibo.com/u/1243528305'
        }
      ]
    }
  ],

  // 旧版本顶部菜单
  MAGZINE_MENU_CATEGORY: false, // 显示分类
  MAGZINE_MENU_TAG: true, // 显示标签
  MAGZINE_MENU_ARCHIVE: true, // 显示归档
  MAGZINE_MENU_SEARCH: true, // 显示搜索

  MAGZINE_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
