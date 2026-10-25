import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'douyin',
    label: '抖音',
    href: 'https://v.douyin.com/H9k1NPD_m6Y/ 9@3.com',
  },
  {
    id: 'bilibili',
    label: 'B站',
    href: 'https://b23.tv/EIcJMWg',
  },
  {
    id: 'xiaohongshu',
    label: '小红书',
    href: '  ',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2013 – 2017',
        place: 'Sun Yat-sen University',
        role: 'B.S. in Software Engineering',
      },
      {
        period: '2017 – 2020',
        place: 'HOTSAR Studio · Shanghai',
        role: 'Co-founder',
        logo: { src: `${import.meta.env.BASE_URL}images/hotsar.jpg`, alt: 'HOTSAR' },
        points: [
          'Co-founder · team of 20+',
          'Clients: Alibaba brands, Tencent, NetEase, DiDi, China Resources, McDonald’s…',
          'Work: development / creative direction / animation / team management',
        ],
      },
      {
        period: '2020 – 2025',
        place: 'Bad Printer Studio · Shenzhen',
        role: 'Founder',
        logo: { src: `${import.meta.env.BASE_URL}images/bp.png`, alt: 'Bad Printer Studio' },
        points: [
          'Founder · team of 14',
          'Clients: Honor of Kings / Trip.com / ByteDance / Kuaishou / VIVO / Tecno / Xiaomi / IM Motors…',
          'Work: team management / creative direction / animation / development',
        ],
      },
      {
        period: '2025 – Now',
        place: 'Content Creator',
        groups: [
          {
            heading: '怀安',
            logoImg: `${import.meta.env.BASE_URL}images/IMG_3856.JPG`,
            sub: 'tech-DIY creator',
            items: ['120K on Douyin · 87K on Bilibili · 23K on Xiaohongshu'],
            links: SOCIAL_LINKS,
          },
        ],
      },
      {
        period: '2026 – Now',
        place: 'Indie Developer',
        groups: [{ logo: 'zooop', sub: 'AI creation platform', link: 'https://zooop.ai/' }],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2013 – 2017',
        place: '湖南科技学院',
        role: '电子信息工程 · 本科',
      },
      {
        period: '202506 – 202511',
        place: '湖南慧通商务有限公司 · 长沙',
        role: '技术顾问',
        logo: {src: `${import.meta.env.BASE_URL}images/OIP.webp`,alt: '湖南慧通商务有限公司',},
        points: [
          '专业技能：熟练使用维修工具，可独立对华为手机、平板、智能穿戴等数码产品进行故障诊断、硬件更换与整机调试；',
          '服务客户：华为终端到店消费客户',
          '负责：依照华为官方维修规范完成设备检修、功能复测、工单录入与备件管理，向客户讲解故障情况、维修方案以及售后政策，妥善解答客户疑问，把控维修质量、维护客户满意度。',
        ],
      },
      {
        period: '202511 – 202610',
        place: '广东朗科智能有限公司 · 东莞',
        role: '硬件工程师',
        logo: { src: `${import.meta.env.BASE_URL}images/d4f2116a42bc11d7cda09be06acfee03.jpg`, alt: '广东朗科智能有限公司' },
        points: [
          '专业技能：熟练使用 Altium Designer 等硬件设计软件，可独立操作示波器、万用表、恒温箱等测试仪器，开展硬件电路设计、参数验证与可靠性测试；',
          '服务客户：九阳、比亚迪、惠而浦、松下、TTI（创科实业）、SharkNinja、Snowa 等国内外家电、电动工具头部厂商；',
          '负责：参与硬件产品研发调试、试产跟进与量产问题闭环，对接客户同步硬件方案、测试报告，解决产品生产与测试阶段的硬件相关问题。',
        ],
      },
      {
        period: '202611 – 至今',
        place: '自媒体博主',
        groups: [
          {
            heading: '小雨转晴',
            logoImg: `${import.meta.env.BASE_URL}images/IMG_3856.JPG`,
            sub: '综合性博主',
            items: ['抖音 xx 万 · B站 xx 万 · 小红书 xx 万 关注'],
            links: SOCIAL_LINKS,
          },
        ],
      },
      {
        period: '2026 – 至今',
        place: ' ',
        groups: [{ logo: '更多经历', sub: '待补充', link: ' 链接 ' }],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading =
    group.logo === 'zooop' ? (
      <a
        className="zooop-logo-link"
        href={group.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZOOOP"
      >
        <ZooopLogo className="zooop-logo" animated />
      </a>
    ) : group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
