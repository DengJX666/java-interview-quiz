# Java 后端 · 面试刷题

参考常见面试刷题页面做的 Java 后端题库版本：交互、样式、快捷键保持一致，题库聚焦 Java 后端面试常考点。

共 **200 道题**，覆盖 15 个模块：

| 模块 | 题数 | 主要内容 |
|---|---:|---|
| Java 基础 | 28 | String、equals/hashCode、泛型、反射、注解、异常、Java 8 |
| 集合与泛型 | 14 | HashMap、ConcurrentHashMap、ArrayList/LinkedList、fail-fast |
| 并发编程 | 20 | 线程池、锁、volatile、CAS、AQS、ThreadLocal、死锁 |
| JVM | 16 | 内存区域、对象创建、GC、类加载、G1、OOM/泄漏排查 |
| Spring / Spring Boot | 18 | IoC、Bean 生命周期、循环依赖、AOP、**事务专项**、自动配置 |
| MyBatis | 8 | `#{}`/`${}`、缓存、插件、动态 SQL、PageHelper |
| MySQL 与 SQL 优化 | 20 | 索引、B+ 树、回表、MVCC、隔离级别、慢 SQL、分页 |
| Redis | 14 | 缓存三兄弟、一致性、分布式锁、持久化、大 key/热 key |
| RabbitMQ / 消息队列 | 10 | 交换机、不丢消息、幂等、死信、积压、选型 |
| Elasticsearch | 6 | 倒排索引、分片副本、深分页、数据同步 |
| 微服务 / K8s / DevOps | 10 | Nacos、K8s 组件、Pod 排障、滚动发布、灰度 |
| 场景与系统设计 | 8 | 秒杀、幂等、分布式 ID、短链接、大文件上传 |
| 手写代码与算法 | 6 | 反转链表、LRU、交替打印、二分、快排、判环 |
| 项目与 HR | 12 | 自我介绍、离职/空窗、项目难点、故障复盘、反问 |
| 计算机网络与操作系统 | 10 | TCP/UDP、HTTP、HTTPS、DNS、IO 多路复用 |

题型分布：

- 单选题 117 道
- 多选题 21 道
- 判断题 24 道
- 简答题（口述题）38 道

## 怎么打开

直接双击 `index.html`，用 Chrome / Edge 打开即可，不需要安装依赖、不需要联网。

如果浏览器限制本地文件存储，可以在当前目录执行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

想部署到网上、用手机随时访问，见 [DEPLOY.md](DEPLOY.md)。

## 功能

- **四种题型**：单选题、多选题、判断题、简答题（口述题）
- **概率标注**：每题显示“被问：高 / 中 / 低”，可筛选
- **难度标注**：每题显示“基础 / 进阶 / 高难”，可筛选
- **即时判分**：选择题提交后立即显示对错和解析
- **完整解析**：答对答错都展示正确答案和详细解析
- **简答题自评**：先自己口述，再看参考答案，点“记住了 / 没记住”，没记住的进错题
- **分类练习**：按 15 个模块筛选
- **状态筛选**：未做 / 错题 / 收藏
- **随机顺序**：打乱题目，避免背题号
- **错题本 + 收藏**：重点题集中复习
- **自动保存**：答题记录、收藏、筛选条件存在浏览器 localStorage
- **重做**：已提交的题可以重新作答
- **快捷键**：数字键 1-9 选项，Enter 提交/下一题/查看答案，← → 切题；简答题看答案后按 1 记住了、2 没记住

## 文件说明

```
面试刷题-Java后端/
├── index.html     页面结构
├── style.css      样式（含手机端适配）
├── questions.js   题库（200 题，含答案、解析、概率和难度）
├── app.js         答题逻辑
├── README.md      说明文档
├── DEPLOY.md      GitHub Pages 部署步骤
└── .nojekyll      关闭 GitHub Pages 的 Jekyll 处理
```

## 怎么添加或修改题目

编辑 `questions.js`，在数组里追加对象。

选择题示例：

```js
{
  id: 'java-29',                 // 唯一 id，不要重复
  level: '高',                   // 被问概率：高 / 中 / 低
  difficulty: '进阶',            // 难度：基础 / 进阶 / 高难
  category: 'Java 基础',         // 分类名，建议复用已有分类
  type: 'single',                // single 单选 / multiple 多选 / judge 判断 / open 简答
  question: '题干……',
  options: ['选项A', '选项B', '选项C', '选项D'],
  answer: [1],                   // 正确选项下标，从 0 开始；多选写多个
  explanation: '详细解析……'
}
```

判断题固定写法：

```js
{
  id: 'java-30',
  level: '中',
  difficulty: '基础',
  category: 'Java 基础',
  type: 'judge',
  question: '……',
  options: ['正确', '错误'],
  answer: [0],                   // 0 = 正确，1 = 错误
  explanation: '……'
}
```

简答题写法：

```js
{
  id: 'java-31',
  level: '高',
  difficulty: '高难',
  category: 'Java 基础',
  type: 'open',
  question: '……',
  options: [],
  answerText: '1. 第一点……\n2. 第二点……\n3. 第三点……',
  explanation: '记忆要点：……'
}
```

保存后刷新页面即可生效。如果改了题目 id，本地旧的答题记录会对不上，建议清空一次记录。

## 刷题建议

1. **第一遍按“高概率”刷**：先把 98 道高概率题过一遍，重点看解析。
2. **第二遍按分类补“中概率”**：Java 基础、并发、MySQL、Spring 四块是主干。
3. **第三遍刷“高难”**：只做 29 道高难题，练追问、排障和设计思路。
4. **简答题单独练**：先开口说，再看参考答案，最后用自己的话复述一遍。
5. **考前只看“错题”和“收藏”**：不要重新刷全部，重点看反复错的点。

## 设计说明

- 纯前端实现，不需要后端和数据库，可以直接部署到 GitHub Pages、Cloudflare Pages、Vercel 或任意 Nginx 静态目录。
- 答题记录保存在浏览器 localStorage，key 是 `java_backend_quiz_v1`，不会和其他题库互相覆盖。
- 题目内容面向 3-5 年 Java 后端岗位，偏重 Java 基础、并发、JVM、Spring 事务、MySQL、Redis、MQ 和线上排查。

## 说明

题库是按 Java 后端常见面试考点整理的**练习材料**，不是面试原题。答案里的项目例子和数字请换成你的真实经历；面试时用自己的话讲出来，比背答案更重要。
