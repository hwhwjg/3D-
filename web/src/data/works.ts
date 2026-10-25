// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: '个人技能',
        tagline: '自己自学或在学校期间熟练掌握的各种技能',
        items: [
          { name: '熟练使用各种仪器设备', meta: '电子向', slug: 'guqin' },
          { name: '熟练使用各种办公软件', meta: '文档向', slug: 'time-machine' },
          { name: '熟练使用各种ai工具', meta: '包括各种海外AI，以及各种高阶用法', slug: 'animation-collection' },
          { name: '熟练使用各种编程语言', slug: 'other-works' },
        ],
        awards: ['湖南省电子设计大赛一等奖', '', ''],
      },
      {
        id: 'maker',
        no: '02',
        title: '自媒体',
        tagline: '待补充成绩 ｜ 综合性博主',
        items: [
          {
            name: '口播类',
            meta: '待补充',
            tags: ['待补充', '待补充'],
            slug: 'glass-wall-arcade',
          },
          {
            name: '游戏视频',
            meta: '待补充',
            tags: ['待补充'],
            slug: 'dog-code-clothes',
          },
          {
            name: '科普教学类',
            meta: '待补充',
            tags: ['待补充'],
            slug: 'switch-cat-house',
          },
          { name: '杂谈类', slug: '待补充' },
        ],
        footer: '口播 · 游戏视频 · 教学 · 科普教学 · 杂谈 · 动画',
      },
      {
        id: 'product',
        no: '03',
        title: '作品集',
        tagline: '3D个人简历',
        items: [
          { name: '3d个人简历', meta: '  ', link: 'https://hwhwjg.github.io/3D-/' },
        ],
      },
      {
        id: 'graphics',
        no: '04',
        title: '个人业余作品以及获奖证书',
        tagline: 'Raymarching · WebGL · Blender',
        items: [
          { name: '英语四六级证书', slug: '英语四六级证书' },
          { name: '计算机二级证书', slug: '计算机二级证书' },
          { name: '湖南省电子设计大赛获奖证书', slug: '湖南省电子设计大赛获奖证书' },
          { name: '其他业余作品', slug: 'other-side-works' },
        ],
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: 'Advertising',
        tagline: 'HOTSAR · Bad Printer',
        items: [
          { name: 'Who’s Talking About Guqin', meta: 'Interactive', slug: 'guqin' },
          { name: 'Lianhe Zaobao · Campus Time Machine', meta: 'Interactive', slug: 'time-machine' },
          { name: 'Animation Reel', meta: 'Animation', slug: 'animation-collection' },
          { name: 'Other works', slug: 'other-works' },
        ],
        awards: ['Tiger Roar', 'FWA', 'Awwwards'],
      },
      {
        id: 'maker',
        no: '02',
        title: 'Content Creator',
        tagline: '230K followers',
        items: [
          {
            name: '“I Turned the Studio’s Glass Wall into a Game Console”',
            meta: '17M views',
            tags: ['Bilibili Weekly Picks', 'Bilibili Trending'],
            slug: 'glass-wall-arcade',
          },
          {
            name: '“I Wrote Code into My Dog’s Clothes”',
            meta: '9M views',
            tags: ['Trending on Weibo / Douyin / Bilibili'],
            slug: 'dog-code-clothes',
          },
          {
            name: '“I Made a 10× Switch into a Smart Cat House”',
            meta: '5M views',
            tags: ['Bilibili Weekly Picks'],
            slug: 'switch-cat-house',
          },
          { name: '“We Got Married in an 80s Famicom Game!!”', slug: 'retro-game-wedding' },
        ],
        footer: 'Tech: 3D modeling · 3D printing · PCB design · embedded · software · motion graphics',
      },
      {
        id: 'product',
        no: '03',
        title: 'Products',
        tagline: 'ZOOOP',
        items: [
          { name: 'ZOOOP', meta: 'AI-native creation platform', link: 'https://zooop.ai/', slug: 'zooop' },
        ],
      },
      {
        id: 'graphics',
        no: '04',
        title: 'Side Projects',
        tagline: 'Raymarching · WebGL · Blender',
        items: [
          { name: 'Raymarching', slug: 'raymarching' },
          { name: 'WebGL', slug: 'webgl' },
          { name: 'Blender', slug: 'blender' },
          { name: 'Other side projects', slug: 'other-side-works' },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  ad: `${import.meta.env.BASE_URL}works/covers/示波器.jpg`,
  maker: `${import.meta.env.BASE_URL}works/covers/大头照.jpg`,
  product: `${import.meta.env.BASE_URL}works/covers/3D简历.png`,
  graphics: `${import.meta.env.BASE_URL}works/covers/小羊.png`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
