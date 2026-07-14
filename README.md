# MyBlog

林子航 (Tazmi) 的个人技术博客与作品集站点，基于 **Astro v6 + Tailwind CSS v4** 构建。

## 搭建思路

### 1. 技术选型

选择 **Astro** 静态站点生成器而非传统 CMS（如 Halo），主要考量：

- **性能**：Astro 默认输出纯静态 HTML，首屏加载极快，Lighthouse 评分优秀
- **灵活性**：完全控制页面结构与样式，不受 CMS 模板限制
- **内容管理**：博客文章以 Markdown 文件存储，可直接用 Git 管理版本
- **部署成本**：静态文件可部署到任意托管服务（Vercel、Netlify、Nginx 等），无需服务器端运行时

技术栈：

| 层面 | 选型 |
|------|------|
| 框架 | Astro v6 |
| 样式 | Tailwind CSS v4（CSS-first 配置） |
| 内容 | Markdown / MDX |
| 图标 | astro-icon（Tabler Icons） |
| 图片 | Sharp（本地优化）+ Unpic（CDN 远程） |
| 部署 | Nginx 反向代理，静态文件托管 |

### 2. 模板改造

本站基于开源模板 [AstroWind](https://github.com/arthelokyo/astrowind) 进行深度定制，改造原则：

- **极简化**：去除原模板中面向 SaaS/Startup 的商业化页面（定价、服务、落地页等 14 个页面），将导航从多层下拉菜单精简为 3 个直链
- **中文化**：全站内容翻译为中文，配置 `lang="zh"`，调整 SEO 元数据
- **保留架构**：不修改任何 UI 组件和工具函数，仅改动页面内容、配置文件和导航结构，确保可无缝同步上游模板更新
- **压缩信息密度**：缩小博客列表间距、标题与正文字号，提升单屏可读内容量

### 3. 项目结构

```
src/
├── assets/              # 静态资源
│   ├── favicons/        # 网站图标
│   ├── images/          # 图片
│   └── styles/          # Tailwind CSS 配置
├── components/
│   ├── blog/            # 博客组件（列表、详情、标签等）
│   ├── common/          # 通用组件（SEO、图片、主题切换）
│   ├── ui/              # UI 基础组件（按钮、表单、布局）
│   └── widgets/         # 页面组件（Header、Footer、Hero 等）
├── data/post/           # 博客文章（Markdown）
├── layouts/             # 页面布局
├── pages/               # 路由页面
├── utils/               # 工具函数
├── config.yaml          # 站点配置（名称、SEO、语言等）
├── content.config.ts    # 内容集合 Schema
└── navigation.ts        # 导航结构
```

### 4. 部署流程

```
本地开发 → Git Push → 服务器拉取 → npm run build → Nginx 静态托管
```

- 本地通过 `npm run dev` 实时预览
- 推送至 GitHub 后，服务器通过 webhook 或手动拉取最新代码
- 执行 `npm run build` 生成 `dist/` 静态文件
- Nginx 直接托管 `dist/` 目录，配合反向代理和 SSL 提供 HTTPS 访问

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

> 要求 Node.js >= 22.12.0

## 许可

基于 MIT 协议开源。原始模板 [AstroWind](https://github.com/arthelokyo/astrowind) © Arthelokyo。
