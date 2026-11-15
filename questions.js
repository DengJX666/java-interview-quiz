/*
 * Java 后端 · 面试题库
 * 题型：single（单选）、multiple（多选）、judge（判断）、open（简答）
 * answer：正确选项的下标数组（从 0 开始）
 * 判断题 options 固定为 ["正确", "错误"]，answer 0 = 正确，1 = 错误
 * 简答题用 answerText 存参考答案，用 \n 换行；explanation 存记忆要点
 */
window.QUESTION_BANK = [
  /* ==================== 一、Java 基础 ==================== */
  {
    id: 'java-01',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: 'String 为什么设计成不可变？',
    options: [
      '内部是 final 修饰的字符数组/字节数组，且类本身 final，所有修改方法都返回新对象',
      'JVM 会给 String 自动加锁',
      'String 每次赋值都会创建新线程',
      'String 不能被拼接'
    ],
    answer: [0],
    explanation: '不可变带来四个好处：可以安全复用字符串常量池、天然线程安全、hashCode 可以缓存、作为 HashMap 的 key 不会被篡改。'
  },
  {
    id: 'java-02',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '常量池里还没有 "abc" 时，执行 new String("abc") 会创建几个对象？',
    options: ['1 个', '2 个：常量池一个，堆上一个', '3 个', '0 个'],
    answer: [1],
    explanation: '字面量 "abc" 会先在常量池创建（或复用）一个对象，new 再在堆上创建一个。如果池里已有 "abc"，只创建堆上那一个。'
  },
  {
    id: 'java-03',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '重写 equals 却不重写 hashCode，最直接的后果是什么？',
    options: [
      '编译不通过',
      'HashSet 去重失效，HashMap 用等价的 key 取不到值',
      '对象无法序列化',
      '对象自动变成线程安全'
    ],
    answer: [1],
    explanation: 'HashMap/HashSet 先用 hashCode 定位桶，再用 equals 比较。equals 相等但 hashCode 不同，两个“相等”的对象会落到不同桶里，去重和查找都会出问题。'
  },
  {
    id: 'java-04',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: 'Integer a = 127, b = 127; Integer c = 128, d = 128; 下列结果正确的是？',
    options: [
      'a == b 为 true，c == d 为 true',
      'a == b 为 true，c == d 为 false',
      'a == b 为 false，c == d 为 false',
      '编译报错'
    ],
    answer: [1],
    explanation: 'Integer 默认缓存 -128~127，这个范围内自动装箱复用同一个对象；128 超出范围，会 new 两个不同对象，== 比较地址为 false。包装类比较一律用 equals。'
  },
  {
    id: 'java-05',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '循环里大量拼接字符串，应该优先用哪个？',
    options: ['String', 'StringBuilder', 'StringBuffer', '三者性能完全一样'],
    answer: [1],
    explanation: 'String 不可变，每次 + 都会产生新对象；StringBuilder 可变、非线程安全、单线程最快；StringBuffer 方法加了 synchronized，线程安全但更慢。'
  },
  {
    id: 'java-06',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '关于重载（Overload）和重写（Override），说法正确的是？',
    options: [
      '重载是运行时多态，重写是编译期绑定',
      '重写要求方法签名相同、运行时动态绑定；重载是方法名相同参数列表不同、编译期绑定',
      '只有返回值不同也能构成重载',
      '重写可以把父类方法的访问权限改小'
    ],
    answer: [1],
    explanation: '重写遵循两同两小一大：签名相同、返回值和异常不更宽、访问权限不能更小。重载只看参数列表，返回值不同不构成重载。'
  },
  {
    id: 'java-07',
    level: '中',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '接口和抽象类怎么选？',
    options: [
      '抽象类可以多继承，接口只能单实现',
      '接口可以定义构造器',
      '描述“能做什么”用接口，描述“是什么/模板流程”用抽象类',
      '接口不能有 default 方法'
    ],
    answer: [2],
    explanation: '接口是行为契约，可以多实现；抽象类适合复用代码和定义模板方法，只能单继承。Java 8 后接口可以有 default/static 方法。'
  },
  {
    id: 'java-08',
    level: '中',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'multiple',
    question: '关于 final、finally、finalize，正确的有？',
    options: [
      'final 修饰类不可被继承，修饰方法不可被重写，修饰变量不可重新赋值',
      'finally 块通常用于释放连接、关闭流等收尾工作',
      'finalize 已废弃且不可靠，不应该依赖它释放资源',
      'finally 里写 return 会覆盖 try 里的返回值'
    ],
    answer: [0, 1, 2, 3],
    explanation: '四个说法都正确。资源释放优先用 try-with-resources；finally 里不要写 return，也不要抛异常，否则会掩盖原始异常。'
  },
  {
    id: 'java-09',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '下面关于 Java 异常体系的说法，正确的是？',
    options: [
      'RuntimeException 必须显式 catch',
      'IOException 是受检异常，编译期必须处理',
      'Error 应该由业务代码捕获并恢复',
      '所有异常都继承自 RuntimeException'
    ],
    answer: [1],
    explanation: 'Throwable 分 Error 和 Exception；Exception 又分受检异常和 RuntimeException。Error 是 JVM 层面问题，业务不应捕获处理。'
  },
  {
    id: 'java-10',
    level: '中',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'judge',
    question: 'try-with-resources 会在代码块结束时自动调用资源的 close()，即使中途抛出异常。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: '只要资源实现了 AutoCloseable，try-with-resources 就会自动关闭，关闭顺序与声明顺序相反，异常会被压制（suppressed）而不是丢失。'
  },
  {
    id: 'java-11',
    level: '高',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: '什么是泛型擦除？',
    options: [
      '运行时可以拿到 List<String> 的真实类型参数',
      '编译后类型参数被擦除，List<String> 和 List<Integer> 运行时都是 List',
      '泛型数组可以直接 new T[]',
      '泛型可以用 instanceof 判断'
    ],
    answer: [1],
    explanation: '泛型是编译期特性，擦除后类型参数变成 Object 或上界，所以不能 new T[]、不能 instanceof、静态成员不能用类级类型参数。'
  },
  {
    id: 'java-12',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: '泛型通配符的 PECS 原则是指？',
    options: [
      '只读用 ? super T，只写用 ? extends T',
      '只读用 ? extends T，只写用 ? super T',
      '两者可以随意替换',
      '? extends T 既能读也能写'
    ],
    answer: [1],
    explanation: 'Producer Extends, Consumer Super：生产数据（读取）用 extends，消费数据（写入）用 super。extends 能取不能存，super 能存但取出来是 Object。'
  },
  {
    id: 'java-13',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'multiple',
    question: '反射在框架里的典型应用有哪些？',
    options: [
      'Spring IoC 通过反射创建 Bean、注入依赖',
      'MyBatis 把结果集映射成对象',
      'JDK/CGLIB 动态代理',
      '替代所有单元测试'
    ],
    answer: [0, 1, 2],
    explanation: '反射的代价是性能开销和编译期无法检查，可以缓存 Method/Field 缓解。它不能替代测试。'
  },
  {
    id: 'java-14',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: '注解的本质是什么？',
    options: [
      '注解是运行时自动执行的代码',
      '注解本质是元数据，靠反射读取并由处理器/切面执行逻辑',
      '注解必须继承 Thread 类',
      '注解只能加在类上'
    ],
    answer: [1],
    explanation: '注解本身不做事，需要 @Retention(RUNTIME) 保留到运行时，再由反射 + AOP/拦截器/编译器处理器读取并执行。'
  },
  {
    id: 'java-15',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: '下面哪种方式可以实现深拷贝？',
    options: [
      'Object.clone() 默认就是深拷贝',
      '把对象 JSON 序列化后再反序列化',
      '浅拷贝会复制引用指向的对象',
      '深拷贝不需要实现 Cloneable'
    ],
    answer: [1],
    explanation: 'clone 默认是浅拷贝；JSON/Java 序列化可以深拷贝但有性能开销，且要求字段可序列化；手动 new 并逐字段赋值最可控。'
  },
  {
    id: 'java-16',
    level: '低',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'judge',
    question: '序列化时如果不显式声明 serialVersionUID，类结构一改，反序列化就可能抛 InvalidClassException。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: '不显式声明时 JVM 会根据类结构自动生成 UID，类一改 UID 就变。建议显式写死，兼容旧数据。'
  },
  {
    id: 'java-17',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: 'SPI 的工作机制是？',
    options: [
      '只能用于 JDBC，其他场景不能用',
      '接口方定义规范，实现方在 META-INF/services 下配置实现类，ServiceLoader 负责加载',
      '是 Spring 独有的机制',
      '会破坏封装，所以 JDK 禁止使用'
    ],
    answer: [1],
    explanation: 'JDBC 的 Driver 就是典型 SPI。它需要线程上下文类加载器反向委派，因为接口在核心库、实现在应用 classpath。'
  },
  {
    id: 'java-18',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'multiple',
    question: '下列属于 Java 8 新特性的有？',
    options: ['Lambda 表达式', 'Stream API', '新的日期时间 API（LocalDateTime 等）', 'Metaspace 替代永久代'],
    answer: [0, 1, 2, 3],
    explanation: '另外还有 Optional、接口 default/static 方法、方法引用、CompletableFuture。注意 Metaspace 属于 JVM 内存结构变化，常和 Java 8 一起问。'
  },
  {
    id: 'java-19',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: '使用 Stream 时，下面哪个是真实存在的坑？',
    options: [
      'Collectors.toMap 遇到重复 key 会抛异常',
      'parallelStream 适合所有 IO 密集场景',
      'Stream 会自动关闭数据库连接',
      'filter 会修改原集合'
    ],
    answer: [0],
    explanation: 'toMap 默认不处理冲突，需要传合并函数；parallelStream 默认用 ForkJoinPool.commonPool，IO 密集场景不合适；Stream 不修改源集合。'
  },
  {
    id: 'java-20',
    level: '高',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: 'Java 的参数传递方式是什么？',
    options: [
      '基本类型传值，引用类型传引用本身',
      '只有值传递：基本类型传值，引用类型传的是地址值的副本',
      '基本类型传引用，引用类型传值',
      '取决于方法是不是 static'
    ],
    answer: [1],
    explanation: 'Java 只有值传递。引用类型传的是引用的副本，方法里可以让副本指向新对象，但不能让外面的变量改指向；修改对象内容则双方可见。'
  },
  {
    id: 'java-21',
    level: '中',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'judge',
    question: 'static 方法可以直接访问同一个类的实例变量。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'static 方法属于类，不持有 this，不能直接访问实例变量和实例方法，只能通过对象引用访问。'
  },
  {
    id: 'java-22',
    level: '中',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'single',
    question: '类初始化和实例化的顺序，正确的是？',
    options: [
      '静态变量/静态块 → 实例变量/实例块 → 构造器',
      '构造器 → 静态块 → 实例块',
      '实例块 → 静态块 → 构造器',
      '顺序由 JVM 随机决定'
    ],
    answer: [0],
    explanation: '父类静态 → 子类静态 → 父类实例 → 父类构造器 → 子类实例 → 子类构造器。静态代码块只执行一次。'
  },
  {
    id: 'java-23',
    level: '中',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'multiple',
    question: 'Java 中创建对象的方式包括哪些？',
    options: ['new', '反射 getDeclaredConstructor().newInstance()', 'clone()', '反序列化'],
    answer: [0, 1, 2, 3],
    explanation: '另外还有工厂/建造者等模式（本质仍是 new）和动态代理生成代理对象。'
  },
  {
    id: 'java-24',
    level: '中',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: 'Integer 的自动装箱缓存范围是？',
    options: ['所有整数', '-128 ~ 127', '0 ~ 255', '只缓存 0'],
    answer: [1],
    explanation: 'Integer 默认缓存 -128~127（可通过 -XX:AutoBoxCacheMax 调整上界）。Long 也有类似缓存，但范围固定。'
  },
  {
    id: 'java-25',
    level: '低',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'judge',
    question: 'String 是 Java 的基本数据类型。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'String 是引用类型（类），Java 的基本类型只有 8 种：byte、short、int、long、float、double、char、boolean。'
  },
  {
    id: 'java-26',
    level: '低',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: '关于抽象类，说法正确的是？',
    options: ['不能有构造器', '可以有构造器，但不能直接实例化', '只能包含抽象方法', '不能有成员变量'],
    answer: [1],
    explanation: '抽象类的构造器是给子类调用完成父类初始化的；它可以有普通方法、成员变量，也可以一个抽象方法都没有。'
  },
  {
    id: 'java-27',
    level: '低',
    difficulty: '基础',
    category: 'Java 基础',
    type: 'single',
    question: 'JDK、JRE、JVM 三者的关系是？',
    options: ['JRE 包含 JDK', 'JDK 包含 JRE，JRE 包含 JVM', 'JVM 包含 JDK', '三者完全等价'],
    answer: [1],
    explanation: 'JDK 是开发工具包，包含 JRE 和编译器等；JRE 是运行环境，包含 JVM 和核心类库；JVM 负责执行字节码。'
  },
  {
    id: 'java-28',
    level: '高',
    difficulty: '进阶',
    category: 'Java 基础',
    type: 'open',
    question: '说说 == 和 equals 的区别，以及包装类比较时容易踩的坑。',
    options: [],
    answerText: '1. == 对基本类型比较值，对引用类型比较对象地址。\n2. equals 是 Object 的方法，默认也是比较地址，String、Integer 等重写后比较内容。\n3. 包装类缓存：Integer 在 -128~127 内复用同一对象，超出范围每次装箱都 new，所以 == 结果会不一样。\n4. 结论：包装类、String 比较内容一律用 equals；判断是否为 null 用 ==。\n5. 自定义对象要比较内容，必须同时重写 equals 和 hashCode。',
    explanation: '记忆要点：基本类型比值，引用类型比地址；包装类缓存区间；equals 看是否重写；重写 equals 必重写 hashCode。'
  },

  /* ==================== 二、集合与泛型 ==================== */
  {
    id: 'coll-01',
    level: '高',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'single',
    question: 'ArrayList 和 LinkedList 的区别，说法正确的是？',
    options: [
      'ArrayList 随机访问 O(1)，LinkedList 头尾插入删除 O(1)',
      'ArrayList 的插入删除永远比 LinkedList 快',
      'LinkedList 随机访问是 O(1)',
      '两者都是线程安全的'
    ],
    answer: [0],
    explanation: 'ArrayList 是动态数组，随机访问快、中间插入要移动元素；LinkedList 是双向链表，头尾操作快但寻址慢、内存开销大。实际开发大多数场景优先 ArrayList。'
  },
  {
    id: 'coll-02',
    level: '高',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'single',
    question: 'JDK 1.8 的 HashMap 底层结构是？',
    options: ['数组 + 链表', '数组 + 链表 + 红黑树', '纯红黑树', '分段锁 + 链表'],
    answer: [1],
    explanation: '默认容量 16、负载因子 0.75，用 (n-1)&hash 定位桶；链表长度 ≥ 8 且数组长度 ≥ 64 时转红黑树，红黑树节点 ≤ 6 时退化回链表。'
  },
  {
    id: 'coll-03',
    level: '高',
    difficulty: '进阶',
    category: '集合与泛型',
    type: 'single',
    question: 'HashMap 链表转红黑树的条件是？',
    options: [
      '链表长度 ≥ 8，且数组长度 ≥ 64',
      '链表长度 ≥ 6 即可',
      '数组长度 ≥ 8 即可',
      '只要链表长度 ≥ 8，不看数组长度'
    ],
    answer: [0],
    explanation: '如果链表到 8 但数组长度不足 64，HashMap 会先扩容而不是树化，因为小数组下扩容能更有效地打散碰撞。'
  },
  {
    id: 'coll-04',
    level: '高',
    difficulty: '进阶',
    category: '集合与泛型',
    type: 'single',
    question: 'HashMap 扩容时，元素的新位置怎么确定？',
    options: [
      '容量扩为 1.5 倍，所有元素重新计算 hash',
      '容量扩为 2 倍，元素要么留在原位置，要么移动到“原位置 + 原容量”',
      '容量扩为 2 倍，所有元素重新 hash',
      '容量不变，只增加链表长度'
    ],
    answer: [1],
    explanation: '1.8 用高低位拆分：用 hash 与原容量做与运算，为 0 留原位，否则移到原位置 + 原容量，避免全部重新计算。'
  },
  {
    id: 'coll-05',
    level: '中',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'single',
    question: 'HashMap 的负载因子为什么默认是 0.75？',
    options: [
      '负载因子越大冲突越少',
      '是空间利用率和哈希冲突概率的折中',
      '必须设置为 1',
      '和性能没有关系'
    ],
    answer: [1],
    explanation: '0.75 下桶的占用率和链表长度比较均衡；调大省空间但冲突多，调小冲突少但浪费空间且扩容更频繁。'
  },
  {
    id: 'coll-06',
    level: '高',
    difficulty: '进阶',
    category: '集合与泛型',
    type: 'single',
    question: 'ConcurrentHashMap 1.8 怎么保证线程安全？',
    options: [
      'Segment 分段锁',
      'CAS + synchronized 锁住桶的头节点',
      '整个 Map 一把全局锁',
      '读写都加同一把可重入锁'
    ],
    answer: [1],
    explanation: '数组为空时 CAS 初始化；桶为空时 CAS 放入；桶不为空时 synchronized 锁头节点。扩容支持多线程协助迁移，size 用 baseCount + CounterCell 分散计数。'
  },
  {
    id: 'coll-07',
    level: '中',
    difficulty: '进阶',
    category: '集合与泛型',
    type: 'single',
    question: 'HashMap 在并发 put 时可能出现什么问题？',
    options: [
      '1.8 下可能丢数据、覆盖别人的写入',
      '一定会抛 ConcurrentModificationException',
      '会自动变成线程安全',
      '只会影响读性能'
    ],
    answer: [0],
    explanation: '1.7 头插法并发扩容还可能形成环形链表导致 CPU 100%；1.8 改尾插后成环问题没了，但仍会丢数据。并发场景用 ConcurrentHashMap。'
  },
  {
    id: 'coll-08',
    level: '低',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'judge',
    question: 'HashSet 内部是基于 HashMap 实现的，元素作为 key，value 是一个固定的 Object。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: '所以 HashSet 的去重能力依赖元素的 hashCode 和 equals；要放自定义对象，必须正确重写这两个方法。'
  },
  {
    id: 'coll-09',
    level: '中',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'single',
    question: 'TreeMap 的底层结构和特点是？',
    options: [
      '哈希表，查找 O(1)',
      '红黑树，按 key 排序，查找/插入/删除 O(log n)',
      '数组，支持随机访问',
      '链表，插入 O(1)'
    ],
    answer: [1],
    explanation: 'TreeMap 按自然顺序或 Comparator 排序，支持 firstKey、subMap 等范围操作；key 必须可比较，自然排序下不能放 null。'
  },
  {
    id: 'coll-10',
    level: '中',
    difficulty: '进阶',
    category: '集合与泛型',
    type: 'single',
    question: 'CopyOnWriteArrayList 适合什么场景？',
    options: ['读多写少，读操作完全不加锁', '写多读少', '需要强一致迭代器', '需要频繁中间插入'],
    answer: [0],
    explanation: '写时复制：写操作加锁并复制整个数组，读不加锁。适合配置、监听器列表这类读多写少的场景，写多时内存和复制开销很大。'
  },
  {
    id: 'coll-11',
    level: '中',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'multiple',
    question: '下列属于线程安全集合的有？',
    options: ['ConcurrentHashMap', 'CopyOnWriteArrayList', 'Vector', 'ArrayList'],
    answer: [0, 1, 2],
    explanation: 'ArrayList 非线程安全；Vector 方法加了 synchronized，线程安全但性能差，已不推荐；并发场景优先 ConcurrentHashMap、CopyOnWriteArrayList 或 BlockingQueue。'
  },
  {
    id: 'coll-12',
    level: '低',
    difficulty: '基础',
    category: '集合与泛型',
    type: 'judge',
    question: 'ArrayList 的扩容倍数是 1.5 倍。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: 'ArrayList 扩容为原容量的 1.5 倍（oldCapacity + (oldCapacity >> 1)），并拷贝到新数组；如果能预估大小，构造时指定容量可以避免多次扩容。'
  },
  {
    id: 'coll-13',
    level: '中',
    difficulty: '进阶',
    category: '集合与泛型',
    type: 'single',
    question: '什么是 fail-fast（快速失败）？',
    options: [
      '迭代过程中集合结构被修改，会尽快抛 ConcurrentModificationException',
      '集合操作失败时自动重试',
      '多线程下一定安全',
      '一种线程池拒绝策略'
    ],
    answer: [0],
    explanation: 'ArrayList、HashMap 的迭代器通过 modCount 检测结构修改，发现不一致就抛异常。它是“尽力而为”的检测，不是线程安全保证；并发修改要用并发容器或显式加锁。'
  },
  {
    id: 'coll-14',
    level: '高',
    difficulty: '高难',
    category: '集合与泛型',
    type: 'open',
    question: 'HashMap 的容量为什么必须是 2 的幂？',
    options: [],
    answerText: '1. 定位下标用 (n - 1) & hash，只有 n 是 2 的幂时，n-1 的低位才全是 1，等价于对 n 取模，但位运算比取模快得多。\n2. 扩容为 2 倍后，元素新位置要么不变，要么是“原位置 + 原容量”，不需要重新计算 hash，迁移效率高。\n3. 低位全 1 能让 hash 的低位充分参与运算，减少碰撞。\n4. 所以初始化时 tableSizeFor 会把传入容量向上取到最近的 2 的幂。',
    explanation: '记忆要点：位运算取模、扩容高低位拆分、散列均匀、tableSizeFor 向上取整。'
  },
  /* ==================== 三、并发编程 ==================== */
  {
    id: 'conc-01',
    level: '高',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: '下列哪个不是 Java Thread.State 定义的线程状态？',
    options: ['NEW', 'BLOCKED', 'SUSPENDED', 'TIMED_WAITING'],
    answer: [2],
    explanation: 'Java 线程只有 6 种状态：NEW、RUNNABLE、BLOCKED、WAITING、TIMED_WAITING、TERMINATED。SUSPENDED 是 Thread.suspend() 的老概念，已废弃，不属于状态枚举。'
  },
  {
    id: 'conc-02',
    level: '高',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: 'Thread.sleep 和 Object.wait 的关键区别是？',
    options: [
      'sleep 释放锁，wait 不释放锁',
      'sleep 不释放锁，wait 释放锁',
      '两者都释放锁',
      '两者都不释放锁'
    ],
    answer: [1],
    explanation: 'wait 必须在 synchronized 块里调用，调用后释放锁并进入等待队列，需要 notify/notifyAll 唤醒；sleep 是 Thread 静态方法，不释放锁。'
  },
  {
    id: 'conc-03',
    level: '高',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: '下列哪个不是 ThreadPoolExecutor 的核心参数？',
    options: ['corePoolSize', 'maximumPoolSize', 'workQueue', 'connectionTimeout'],
    answer: [3],
    explanation: '七个参数是 corePoolSize、maximumPoolSize、keepAliveTime、unit、workQueue、threadFactory、handler。connectionTimeout 是 Tomcat/HTTP 客户端参数。'
  },
  {
    id: 'conc-04',
    level: '高',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: 'ThreadPoolExecutor 提交任务后的执行流程是？',
    options: [
      '核心线程 → 任务队列 → 非核心线程 → 拒绝策略',
      '核心线程 → 非核心线程 → 任务队列 → 拒绝策略',
      '任务队列 → 核心线程 → 非核心线程 → 拒绝策略',
      '核心线程 → 拒绝策略 → 任务队列'
    ],
    answer: [0],
    explanation: '核心线程未满先建核心线程；核心满了进队列；队列满了再建非核心线程直到 maximumPoolSize；还满才触发拒绝策略。'
  },
  {
    id: 'conc-05',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'single',
    question: '哪种拒绝策略会让提交任务的线程自己执行任务，从而形成反压？',
    options: ['AbortPolicy', 'CallerRunsPolicy', 'DiscardPolicy', 'DiscardOldestPolicy'],
    answer: [1],
    explanation: 'CallerRunsPolicy 用调用者线程执行，提交速度自然被拖慢，形成背压；AbortPolicy 默认抛 RejectedExecutionException；Discard 系列会静默丢任务。'
  },
  {
    id: 'conc-06',
    level: '高',
    difficulty: '进阶',
    category: '并发编程',
    type: 'single',
    question: '为什么生产上不建议直接用 Executors 创建线程池？',
    options: [
      'Executors 创建的线程不能复用',
      'FixedThreadPool 用无界队列、CachedThreadPool 最大线程数无界，都可能 OOM',
      'Executors 不支持拒绝策略',
      '只有 Spring 环境才能用线程池'
    ],
    answer: [1],
    explanation: 'FixedThreadPool 和 SingleThreadPool 的队列长度是 Integer.MAX_VALUE，任务堆积会 OOM；CachedThreadPool 和 ScheduledThreadPool 最大线程数是 Integer.MAX_VALUE，线程过多也会 OOM。应手动 new ThreadPoolExecutor 并指定有界队列。'
  },
  {
    id: 'conc-07',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'single',
    question: 'synchronized 的锁升级顺序是？',
    options: [
      '无锁 → 偏向锁 → 轻量级锁 → 重量级锁',
      '无锁 → 重量级锁 → 轻量级锁',
      '偏向锁 → 无锁 → 重量级锁',
      '轻量级锁 → 偏向锁 → 重量级锁'
    ],
    answer: [0],
    explanation: '偏向锁适合同一线程反复进入；有竞争时升级为轻量级锁（CAS 自旋）；自旋失败升级为重量级锁（Monitor 阻塞）。JDK 15 后偏向锁默认禁用，JDK 18 移除。'
  },
  {
    id: 'conc-08',
    level: '高',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: 'volatile 的两个核心作用是？',
    options: [
      '原子性和有序性',
      '可见性和禁止指令重排',
      '可见性和原子性',
      '只保证原子性'
    ],
    answer: [1],
    explanation: 'volatile 通过内存屏障保证可见性并禁止重排，典型应用是双重检查锁单例；它不保证复合操作的原子性。'
  },
  {
    id: 'conc-09',
    level: '高',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: '用 volatile 修饰 int i，多线程执行 i++ 安全吗？',
    options: ['安全，volatile 保证原子性', '不安全，i++ 是读-改-写三步', '安全，因为 int 是基本类型', '只在单核下安全'],
    answer: [1],
    explanation: 'i++ 包含读取、加一、写回，volatile 只保证每一步读到最新值，不能保证三步不被打断。要用 AtomicInteger、synchronized 或 LongAdder。'
  },
  {
    id: 'conc-10',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'single',
    question: 'CAS 的 ABA 问题怎么解决？',
    options: [
      '加 synchronized',
      '用 AtomicStampedReference 增加版本号',
      '把变量改成 volatile',
      '用 ThreadLocal 隔离'
    ],
    answer: [1],
    explanation: 'ABA 是值从 A 改成 B 又改回 A，CAS 误以为没变。AtomicStampedReference 用版本号标记每次修改；AtomicMarkableReference 用布尔标记。'
  },
  {
    id: 'conc-11',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'single',
    question: 'AQS 的核心组成是？',
    options: [
      '一个 volatile int state + 一个 CLH 双向等待队列',
      '一个 HashMap + 一个线程池',
      '分段锁 + 红黑树',
      'ThreadLocal + 计数器'
    ],
    answer: [0],
    explanation: '获取锁失败把线程包装成 Node 入队并 park，释放时唤醒后继节点；子类通过 CAS 修改 state 实现独占（ReentrantLock）或共享（CountDownLatch、Semaphore）模式。'
  },
  {
    id: 'conc-12',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'multiple',
    question: 'ReentrantLock 相比 synchronized 额外支持哪些能力？',
    options: ['公平锁', 'lockInterruptibly 可中断获取锁', 'tryLock 超时获取锁', '多个 Condition 条件变量'],
    answer: [0, 1, 2, 3],
    explanation: 'synchronized 更简单、由 JVM 优化、异常自动释放锁；ReentrantLock 更灵活，但必须手动 unlock（写在 try-finally 里）。'
  },
  {
    id: 'conc-13',
    level: '高',
    difficulty: '进阶',
    category: '并发编程',
    type: 'single',
    question: 'ThreadLocal 为什么会内存泄漏？',
    options: [
      'key 是强引用，value 是弱引用',
      'key 是弱引用，value 是强引用，线程池线程长期存活导致 Entry 无法回收',
      'ThreadLocal 会无限创建新线程',
      '因为 ThreadLocal 不支持泛型'
    ],
    answer: [1],
    explanation: 'ThreadLocal 对象被回收后 key 变 null，但 value 仍被 Entry 强引用；如果线程来自线程池且一直存活，value 就泄漏。用完必须在 finally 里 remove()。'
  },
  {
    id: 'conc-14',
    level: '中',
    difficulty: '基础',
    category: '并发编程',
    type: 'single',
    question: '下列哪个不属于死锁的四个必要条件？',
    options: ['互斥', '持有并等待', '不可剥夺', '超时重试'],
    answer: [3],
    explanation: '四个条件是互斥、持有并等待、不可剥夺、循环等待。超时重试是破坏死锁的手段，不是条件。'
  },
  {
    id: 'conc-15',
    level: '高',
    difficulty: '进阶',
    category: '并发编程',
    type: 'multiple',
    question: '保证线程安全的常见手段有哪些？',
    options: [
      '使用不可变对象',
      '用 ThreadLocal 做线程隔离',
      '用 synchronized、Lock、原子类',
      '用 ConcurrentHashMap、BlockingQueue 等并发容器'
    ],
    answer: [0, 1, 2, 3],
    explanation: '还有无状态设计（Service 不存可变成员变量）。核心是原子性、可见性、有序性三个问题。'
  },
  {
    id: 'conc-16',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'multiple',
    question: 'CompletableFuture 中常用的方法有？',
    options: ['supplyAsync 提交有返回值的异步任务', 'thenApply 转换结果', 'thenCombine 合并两个任务结果', 'allOf 等待多个任务完成'],
    answer: [0, 1, 2, 3],
    explanation: 'IO 密集任务要传自定义线程池，避免拖垮 ForkJoinPool.commonPool；异常用 exceptionally/handle 处理，超时用 orTimeout。'
  },
  {
    id: 'conc-17',
    level: '中',
    difficulty: '基础',
    category: '并发编程',
    type: 'judge',
    question: '默认情况下，父线程设置的 ThreadLocal 变量可以在子线程中直接读取。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '普通 ThreadLocal 不能跨线程；需要用 InheritableThreadLocal（线程创建时复制）或阿里 TransmittableThreadLocal（线程池场景）。'
  },
  {
    id: 'conc-18',
    level: '中',
    difficulty: '进阶',
    category: '并发编程',
    type: 'judge',
    question: '用线程池的 submit 提交任务，任务内部抛出的异常会被封装进 Future，不调用 get() 就看不到。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: 'execute 提交的异常会走到线程的 UncaughtExceptionHandler；submit 会包成 FutureTask，异常被吞在 Future 里。生产上建议自定义线程工厂统一记录异常，或对 submit 的结果做处理。'
  },
  {
    id: 'conc-19',
    level: '高',
    difficulty: '高难',
    category: '并发编程',
    type: 'open',
    question: '线程池的核心参数怎么定？说说你的思路。',
    options: [],
    answerText: '1. 先判断任务类型：CPU 密集、IO 密集型，还是混合型。\n2. CPU 密集型一般 N+1；IO 密集型可以按“CPU 核数 × (1 + 等待时间/计算时间)”估算，常见到 2N 甚至更高。\n3. 队列必须有界，长度按峰值任务量和允许的延迟来定；拒绝策略按业务选，核心链路可用 CallerRunsPolicy 形成反压。\n4. 线程工厂要起有意义的线程名，方便 jstack 排查；最好设置 UncaughtExceptionHandler。\n5. 最终一定要压测验证，看 QPS、RT、队列积压、拒绝次数和 CPU/内存。\n6. 多个业务不要共用一个线程池，避免互相拖垮；可以按业务隔离并配监控。',
    explanation: '记忆要点：任务类型 → 估算公式 → 有界队列 → 拒绝策略 → 命名和异常 → 压测 → 隔离。没有万能公式，压测说了算。'
  },
  {
    id: 'conc-20',
    level: '高',
    difficulty: '高难',
    category: '并发编程',
    type: 'open',
    question: '线上一台 Java 服务 CPU 100%，你会怎么排查？',
    options: [],
    answerText: '1. top 找到占用高的 Java 进程 PID。\n2. top -Hp PID 找到占用高的线程 TID，printf "%x\\n" TID 转成十六进制。\n3. jstack PID > stack.log，搜这个十六进制线程号看线程栈；也可以用 Arthas 的 thread -n 3。\n4. 常见原因：死循环、正则回溯、频繁 Full GC（看 jstat）、大量线程自旋/锁竞争、序列化大对象。\n5. 如果高的是 GC 线程，转去排查内存和 GC 日志；如果是业务线程，结合日志和请求链路定位代码。\n6. 先止血（回滚、限流、扩容），再保留现场（jstack、heap dump、GC 日志）做根因分析。',
    explanation: '记忆要点：top → top -Hp → 转十六进制 → jstack/Arthas → 区分 GC 线程和业务线程 → 止血 + 留现场。'
  },

  /* ==================== 四、JVM ==================== */
  {
    id: 'jvm-01',
    level: '高',
    difficulty: '基础',
    category: 'JVM',
    type: 'single',
    question: '下列哪个区域是线程私有的？',
    options: ['堆', '方法区/元空间', '程序计数器', '直接内存'],
    answer: [2],
    explanation: '线程私有：程序计数器、虚拟机栈、本地方法栈；线程共享：堆、方法区（JDK 8 后是元空间，使用本地内存）。直接内存不属于 JVM 运行时数据区。'
  },
  {
    id: 'jvm-02',
    level: '高',
    difficulty: '基础',
    category: 'JVM',
    type: 'single',
    question: '堆内存的新生代通常由哪几部分组成？',
    options: ['Eden + Survivor0 + Survivor1', 'Eden + Old', 'Survivor + Old', 'Metaspace + Old'],
    answer: [0],
    explanation: '新生代 = Eden + 两块 Survivor（默认 8:1:1），对象优先在 Eden 分配，Minor GC 后存活对象在 Survivor 之间复制，年龄够了晋升老年代。'
  },
  {
    id: 'jvm-03',
    level: '中',
    difficulty: '进阶',
    category: 'JVM',
    type: 'single',
    question: '对象创建的正确顺序是？',
    options: [
      '类加载检查 → 分配内存 → 零值初始化 → 设置对象头 → 执行构造方法',
      '分配内存 → 类加载检查 → 构造方法 → 设置对象头',
      '执行构造方法 → 分配内存 → 零值初始化',
      '设置对象头 → 类加载检查 → 分配内存'
    ],
    answer: [0],
    explanation: '分配内存时堆规整用指针碰撞，不规整用空闲列表；并发分配通过 TLAB 或 CAS 保证安全；成员变量先赋默认值，再执行构造方法。'
  },
  {
    id: 'jvm-04',
    level: '高',
    difficulty: '进阶',
    category: 'JVM',
    type: 'single',
    question: '下列哪项通常不能作为 GC Roots？',
    options: ['虚拟机栈中局部变量引用的对象', '方法区静态属性引用的对象', '常量引用的对象', '堆中两个普通对象互相引用'],
    answer: [3],
    explanation: 'GC 用可达性分析，从 GC Roots 出发遍历引用链；堆内对象互相引用但都不可达时，仍然会被回收。'
  },
  {
    id: 'jvm-05',
    level: '中',
    difficulty: '基础',
    category: 'JVM',
    type: 'single',
    question: '新生代最适合的垃圾回收算法是？',
    options: ['标记-清除', '复制算法', '标记-整理', '分代收集'],
    answer: [1],
    explanation: '新生代对象存活率低，复制算法只复制少量存活对象，速度快且无碎片；老年代存活率高，适合标记-整理或标记-清除。'
  },
  {
    id: 'jvm-06',
    level: '高',
    difficulty: '进阶',
    category: 'JVM',
    type: 'single',
    question: 'G1 回收器的核心特点是什么？',
    options: [
      '把堆划分为大小相等的 Region，按回收收益优先回收，可设置目标停顿时间',
      '单线程回收，适合客户端',
      '固定使用标记-清除，不产生碎片',
      '只回收新生代，不管理老年代'
    ],
    answer: [0],
    explanation: 'G1 逻辑上仍分代，物理上是 Region；用 Remembered Set 记录跨 Region 引用；通过 -XX:MaxGCPauseMillis 设置目标停顿，整体是标记-整理，Region 之间复制。JDK 9 起默认。'
  },
  {
    id: 'jvm-07',
    level: '中',
    difficulty: '进阶',
    category: 'JVM',
    type: 'single',
    question: 'CMS 回收器的主要缺点是什么？',
    options: [
      '只能单线程工作',
      '标记-清除产生内存碎片，可能出现并发模式失败，JDK 14 已移除',
      '不支持老年代',
      '必须配合 Serial 使用'
    ],
    answer: [1],
    explanation: 'CMS 追求低停顿，但用标记-清除会产生碎片，碎片过多时触发 Full GC（并发模式失败）；JDK 9 废弃，JDK 14 移除。新项目一般直接用 G1。'
  },
  {
    id: 'jvm-08',
    level: '高',
    difficulty: '基础',
    category: 'JVM',
    type: 'single',
    question: '类加载的正确顺序是？',
    options: [
      '加载 → 验证 → 准备 → 解析 → 初始化',
      '加载 → 初始化 → 验证 → 准备 → 解析',
      '验证 → 加载 → 解析 → 准备 → 初始化',
      '加载 → 准备 → 验证 → 初始化 → 解析'
    ],
    answer: [0],
    explanation: '准备阶段给静态变量赋零值，初始化阶段才执行静态变量赋值和静态代码块；解析是把符号引用转成直接引用。'
  },
  {
    id: 'jvm-09',
    level: '高',
    difficulty: '基础',
    category: 'JVM',
    type: 'single',
    question: '双亲委派机制的主要作用是？',
    options: [
      '让每个类都加载两次',
      '避免核心类被篡改，避免类重复加载',
      '加快所有类的加载速度',
      '让子加载器优先加载'
    ],
    answer: [1],
    explanation: '加载类时先委派父加载器，父加载不了才自己加载。这样自己写的 java.lang.String 不会生效，核心类库安全；同一个类也只被加载一次。'
  },
  {
    id: 'jvm-10',
    level: '中',
    difficulty: '进阶',
    category: 'JVM',
    type: 'single',
    question: '下列哪个场景会打破双亲委派？',
    options: [
      '加载自己写的普通业务类',
      'Tomcat 的 WebAppClassLoader 为每个应用做类隔离',
      '使用 new 创建对象',
      '使用 ArrayList'
    ],
    answer: [1],
    explanation: '典型场景：SPI（JDBC 驱动，父加载器看不到子加载器的实现）、Tomcat WebAppClassLoader（应用优先自己加载）、OSGi 热部署。'
  },
  {
    id: 'jvm-11',
    level: '中',
    difficulty: '进阶',
    category: 'JVM',
    type: 'multiple',
    question: '排查内存问题时，常用的工具有哪些？',
    options: ['jmap 生成堆快照', 'jstat 观察 GC 和老年代变化', 'MAT 分析 heap dump', 'Arthas 在线诊断'],
    answer: [0, 1, 2, 3],
    explanation: 'jstack 主要看线程栈和死锁；内存泄漏通常用 jstat 看趋势、jmap dump、MAT 找支配树和 GC Roots 引用链，Arthas 可以在线看对象和类加载。'
  },
  {
    id: 'jvm-12',
    level: '中',
    difficulty: '进阶',
    category: 'JVM',
    type: 'multiple',
    question: '下列属于常用 JVM 参数的有？',
    options: ['-Xms / -Xmx', '-XX:MetaspaceSize', '-XX:+HeapDumpOnOutOfMemoryError', '-Xlog:gc*'],
    answer: [0, 1, 2, 3],
    explanation: '-Xms 和 -Xmx 建议设成一样，避免堆动态扩缩；OOM 时自动 dump 便于事后分析；JDK 9+ 用 -Xlog:gc* 输出 GC 日志。'
  },
  {
    id: 'jvm-13',
    level: '低',
    difficulty: '基础',
    category: 'JVM',
    type: 'judge',
    question: 'JDK 8 的元空间（Metaspace）位于 Java 堆内存中。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '元空间使用本地内存（Native Memory），不在堆里，所以不会再报 PermGen space，但可能报 Metaspace OOM。'
  },
  {
    id: 'jvm-14',
    level: '低',
    difficulty: '基础',
    category: 'JVM',
    type: 'judge',
    question: '可以依赖 finalize() 方法可靠地释放数据库连接等资源。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'finalize 执行时机不确定、可能不被执行，JDK 9 起已标记废弃。资源释放用 try-with-resources、finally 或显式 close。'
  },
  {
    id: 'jvm-15',
    level: '高',
    difficulty: '高难',
    category: 'JVM',
    type: 'open',
    question: '线上服务抛出 OutOfMemoryError，你会怎么排查？',
    options: [],
    answerText: '1. 先确认是哪种 OOM：Java heap space、Metaspace、Direct buffer memory、unable to create new native thread，不同区域排查方向不同。\n2. 保留现场：启动参数加 -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath，拿到 heap dump 和 GC 日志。\n3. 看 GC 日志和 jstat：老年代是否持续上涨、Full GC 后是否回收不掉，判断是泄漏还是真的不够用。\n4. 用 MAT 打开 dump，看 Leak Suspects、Dominator Tree，找最大对象和 GC Roots 引用链。\n5. 常见根因：一次性查全量数据、缓存无界、ThreadLocal 没 remove、连接/流没关、大文件上传、堆参数过小。\n6. 处理：先扩容/重启止血，再改代码或调参数，最后补监控和压测。',
    explanation: '记忆要点：分辨 OOM 类型 → 留 dump → 看 GC 趋势 → MAT 找引用链 → 常见根因 → 止血 + 修复 + 预防。'
  },
  {
    id: 'jvm-16',
    level: '中',
    difficulty: '高难',
    category: 'JVM',
    type: 'open',
    question: '内存泄漏和内存溢出有什么区别？内存泄漏怎么定位？',
    options: [],
    answerText: '1. 内存泄漏：对象已经不再使用，但仍被 GC Roots 引用，无法回收，内存逐渐被吃掉。\n2. 内存溢出：申请内存超过可用上限，直接抛 OutOfMemoryError；泄漏长期积累最终会导致溢出。\n3. 定位：jstat -gcutil 看老年代是否持续上涨且 Full GC 后不下降；jmap -histo:live 看对象数量 TOP；jmap dump 后用 MAT 看支配树和引用链。\n4. 常见泄漏点：静态集合只增不减、ThreadLocal 没 remove、监听器/回调没注销、连接和流没关闭、缓存没有过期策略、线程池队列堆积。\n5. 修复后要压测验证内存曲线是否平稳。',
    explanation: '记忆要点：泄漏是“该回收的没回收”，溢出是“内存不够用”；定位靠 GC 趋势 + dump + MAT；记住六个高频泄漏点。'
  },
  /* ==================== 五、Spring / Spring Boot ==================== */
  {
    id: 'spring-01',
    level: '高',
    difficulty: '基础',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: 'IoC 和 DI 的关系，说法正确的是？',
    options: [
      'IoC 是设计思想，DI 是它的主要实现方式',
      'DI 是设计思想，IoC 是它的实现方式',
      '两者完全无关',
      'IoC 只能通过 XML 实现'
    ],
    answer: [0],
    explanation: 'IoC（控制反转）把对象创建和依赖管理交给容器；DI（依赖注入）通过构造器、setter 或字段把依赖注入进来，是 IoC 的实现手段。'
  },
  {
    id: 'spring-02',
    level: '高',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: 'Bean 生命周期中，AOP 代理通常在哪个阶段生成？',
    options: [
      '实例化之前',
      '属性填充时',
      '初始化方法执行后，BeanPostProcessor 的 postProcessAfterInitialization 阶段',
      'Bean 销毁时'
    ],
    answer: [2],
    explanation: '完整顺序：实例化 → 属性填充 → Aware 回调 → postProcessBeforeInitialization → @PostConstruct/afterPropertiesSet/init-method → postProcessAfterInitialization（AOP 代理在这里生成）→ 使用 → 销毁。'
  },
  {
    id: 'spring-03',
    level: '高',
    difficulty: '高难',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: 'Spring 用三级缓存解决循环依赖，其中 singletonFactories 存放的是？',
    options: [
      '成品 Bean',
      '提前暴露的早期引用',
      '用于生成早期引用的 ObjectFactory',
      'Bean 的销毁方法'
    ],
    answer: [2],
    explanation: '一级 singletonObjects 放成品；二级 earlySingletonObjects 放提前暴露的引用；三级 singletonFactories 放 ObjectFactory，需要 AOP 时在这里提前生成代理。'
  },
  {
    id: 'spring-04',
    level: '中',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '为什么构造器注入无法解决循环依赖？',
    options: [
      '构造器注入性能更差',
      '对象还没实例化完就需要依赖，无法提前暴露引用',
      '构造器注入不支持 AOP',
      'Spring 不支持构造器注入'
    ],
    answer: [1],
    explanation: 'A 的构造器需要 B，B 的构造器又需要 A，双方都卡在实例化阶段，三级缓存也没有东西可暴露。prototype 作用域同样解决不了。'
  },
  {
    id: 'spring-05',
    level: '高',
    difficulty: '基础',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: 'Spring AOP 默认使用哪种代理方式？',
    options: [
      '有接口用 JDK 动态代理，无接口用 CGLIB；Spring Boot 2.x 默认强制 CGLIB',
      '只使用 JDK 动态代理',
      '只使用 CGLIB',
      '使用字节码插桩'
    ],
    answer: [0],
    explanation: 'Spring Boot 2.x 起 proxyTargetClass 默认 true，优先 CGLIB；Spring 6/Boot 3 也默认 CGLIB。所以 @Transactional 等注解建议加在实现类上。'
  },
  {
    id: 'spring-06',
    level: '高',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '为什么在同一个类里调用 @Transactional 或 @Async 方法会失效？',
    options: [
      '因为方法不是 public',
      '因为 this 调用的是原始对象，没有经过代理',
      '因为 Spring 不支持同类方法',
      '因为注解会被编译器删除'
    ],
    answer: [1],
    explanation: '注解增强逻辑在代理对象里，this.method() 直接调原始对象，拦截器根本没执行。解决：拆到另一个 Bean、注入自身代理、AopContext.currentProxy() 或改用编程式事务。'
  },
  {
    id: 'spring-07',
    level: '高',
    difficulty: '基础',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '下列哪个不是 @Transactional 的常用属性？',
    options: ['propagation', 'isolation', 'rollbackFor', 'threadName'],
    answer: [3],
    explanation: '常用属性：propagation、isolation、rollbackFor/noRollbackFor、readOnly、timeout、value/transactionManager。threadName 是线程池参数。'
  },
  {
    id: 'spring-08',
    level: '高',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '事务传播行为 REQUIRED 的含义是？',
    options: [
      '每次都新建事务',
      '有外层事务就加入，没有就新建一个',
      '必须在外层事务中运行，否则抛异常',
      '不支持事务'
    ],
    answer: [1],
    explanation: 'REQUIRED 是默认传播行为，内外层共用一个事务，一起提交或回滚。REQUIRES_NEW 才是挂起外层、新建独立事务；MANDATORY 要求必须有外层事务。'
  },
  {
    id: 'spring-09',
    level: '高',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '写操作日志、审计记录，希望业务回滚时日志仍然保留，应该用哪种传播行为？',
    options: ['REQUIRED', 'REQUIRES_NEW', 'SUPPORTS', 'NOT_SUPPORTED'],
    answer: [1],
    explanation: 'REQUIRES_NEW 会挂起外层事务、新建独立事务，日志提交后不受外层回滚影响。要注意它会额外占用一个数据库连接，连接池小的时候谨慎嵌套。'
  },
  {
    id: 'spring-10',
    level: '高',
    difficulty: '基础',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '@Transactional 默认对哪些异常回滚？',
    options: ['所有 Exception', 'RuntimeException 和 Error', '只有 IOException', '只有自定义异常'],
    answer: [1],
    explanation: '默认只回滚运行时异常和 Error，受检异常不回滚。所以通常显式写 rollbackFor = Exception.class，业务异常继承 RuntimeException。'
  },
  {
    id: 'spring-11',
    level: '高',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '事务提交后才发 MQ 或清缓存，最合适的做法是？',
    options: [
      '在事务方法第一行就发',
      '在事务方法最后一行发',
      '用 TransactionSynchronization 的 afterCommit 或 @TransactionalEventListener(AFTER_COMMIT)',
      '在 catch 块里发'
    ],
    answer: [2],
    explanation: '事务未提交就发消息，消费方可能查不到数据；事务回滚了消息也已发出。afterCommit/事件监听可以保证提交成功后再执行副作用，失败还能重试。'
  },
  {
    id: 'spring-12',
    level: '中',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'single',
    question: '关于 @Transactional 失效，下面哪个说法是正确的？',
    options: [
      '加在 private 方法上也不影响',
      '异常被 catch 吞掉后，事务拦截器感知不到，会正常提交',
      '只要加在接口上就一定生效',
      '只要方法被调用就一定生效'
    ],
    answer: [1],
    explanation: 'private 方法不被代理拦截；接口注解在 CGLIB 下不生效；自调用不走代理。异常被吞掉时拦截器认为方法成功，直接提交。'
  },
  {
    id: 'spring-13',
    level: '高',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'multiple',
    question: '下列哪些会导致事务失效？',
    options: [
      '同类内部 this 调用事务方法',
      '异常被 try-catch 吞掉',
      '抛出受检异常但没有配置 rollbackFor',
      '在子线程里执行事务方法'
    ],
    answer: [0, 1, 2, 3],
    explanation: '还有：类不是 Spring Bean、方法 private/static/final、数据库引擎不支持事务、多数据源没指定 transactionManager、传播行为配错。'
  },
  {
    id: 'spring-14',
    level: '中',
    difficulty: '进阶',
    category: 'Spring / Spring Boot',
    type: 'multiple',
    question: 'Spring 中用到了哪些设计模式？',
    options: ['工厂模式（BeanFactory）', '代理模式（AOP）', '模板方法（JdbcTemplate）', '观察者模式（ApplicationEvent）'],
    answer: [0, 1, 2, 3],
    explanation: '还有单例（Bean 默认单例）、适配器（HandlerAdapter）、策略（HandlerMapping）、责任链（拦截器链）、装饰器（BeanWrapper）。'
  },
  {
    id: 'spring-15',
    level: '中',
    difficulty: '基础',
    category: 'Spring / Spring Boot',
    type: 'judge',
    question: 'readOnly = true 会强制阻止事务中的写操作，可以当作权限控制使用。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'readOnly 只是给驱动/ORM 的提示，用于优化和减少 flush，不是强制拦截。某些数据库会拒绝写，但不能依赖它做权限控制。'
  },
  {
    id: 'spring-16',
    level: '中',
    difficulty: '基础',
    category: 'Spring / Spring Boot',
    type: 'judge',
    question: '@Transactional 加在 private 方法上，事务也能正常生效。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '代理无法拦截 private 方法。Spring 6 起类代理支持 protected 和包可见方法，但 private、static、final 仍然不行。事务方法应保持 public 且从外部调用。'
  },
  {
    id: 'spring-17',
    level: '高',
    difficulty: '高难',
    category: 'Spring / Spring Boot',
    type: 'open',
    question: 'Spring 里写事务常用什么注解？有哪些属性？要注意哪些问题？',
    options: [],
    answerText: '1. 最常用 @Transactional，可加在方法或类上；需要先开启事务管理，Spring Boot 会自动配置事务管理器。\n2. 核心属性：propagation（默认 REQUIRED）、isolation（默认跟随数据库）、rollbackFor（建议 Exception.class）、readOnly、timeout、transactionManager（多数据源必填）。\n3. 注意代理失效：同类 this 调用、private/final/static 方法、类不是 Spring Bean、接口注解配 CGLIB 都可能不生效。\n4. 注意回滚规则：默认只回滚 RuntimeException 和 Error；异常被 catch 后要 setRollbackOnly 或继续抛出。\n5. 注意传播行为：主流程用 REQUIRED；日志/审计用 REQUIRES_NEW；要部分回滚用 NESTED（保存点）。\n6. 注意大事务：事务里不要调 RPC/MQ/HTTP，范围尽量小，批量分批提交，设置 timeout。\n7. 注意副作用：发消息、清缓存、加分布式锁要放到提交后，锁必须在事务提交后释放。',
    explanation: '记忆口诀：注解属性 → 代理生效 → 异常回滚 → 传播行为 → 大事务 → 提交后副作用。'
  },
  {
    id: 'spring-18',
    level: '高',
    difficulty: '高难',
    category: 'Spring / Spring Boot',
    type: 'open',
    question: 'Spring Boot 自动配置的原理是什么？',
    options: [],
    answerText: '1. @SpringBootApplication 由 @SpringBootConfiguration、@EnableAutoConfiguration、@ComponentScan 组成。\n2. @EnableAutoConfiguration 通过 @Import(AutoConfigurationImportSelector.class) 导入自动配置类。\n3. 自动配置类清单从 META-INF/spring.factories 读取（2.7 之后是 META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports）。\n4. 自动配置类上大量使用 @ConditionalOnClass、@ConditionalOnMissingBean、@ConditionalOnProperty 等条件注解，按需装配。\n5. 用户自己定义的 Bean 优先，因为 @ConditionalOnMissingBean 会在已有 Bean 时跳过自动配置。\n6. 自定义 starter 的套路：写 @ConfigurationProperties 属性类 + 自动配置类 + 在 imports 文件登记。',
    explanation: '记忆要点：组合注解 → ImportSelector → 清单文件 → 条件注解 → 用户 Bean 优先 → starter 三件套。'
  },

  /* ==================== 六、MyBatis ==================== */
  {
    id: 'myb-01',
    level: '高',
    difficulty: '基础',
    category: 'MyBatis',
    type: 'single',
    question: 'MyBatis 中 #{} 和 ${} 的核心区别是？',
    options: [
      '#{} 是字符串拼接，${} 是预编译占位符',
      '#{} 生成 ? 用 PreparedStatement 赋值，能防注入；${} 直接拼接字符串',
      '两者完全等价',
      '${} 只能用于数字'
    ],
    answer: [1],
    explanation: '${} 只用于表名、列名、排序字段这类不能参数化的地方，并且必须做白名单校验，否则有 SQL 注入风险。'
  },
  {
    id: 'myb-02',
    level: '中',
    difficulty: '进阶',
    category: 'MyBatis',
    type: 'single',
    question: 'MyBatis 一级缓存的作用范围是？',
    options: ['SqlSession 级别', 'Mapper/namespace 级别', 'JVM 全局', 'Redis 级别'],
    answer: [0],
    explanation: '一级缓存默认开启，同一个 SqlSession 内相同 SQL 和参数会命中；执行增删改或 commit/rollback 后清空。Spring 整合后通常一次请求一个 SqlSession。'
  },
  {
    id: 'myb-03',
    level: '中',
    difficulty: '进阶',
    category: 'MyBatis',
    type: 'single',
    question: '关于 MyBatis 二级缓存，说法正确的是？',
    options: [
      '默认开启，跨 SqlSession 共享',
      '需要 cacheEnabled 和 <cache/> 开启，多表关联容易脏读，分布式下各节点不一致',
      '只缓存 update 语句',
      '和 Redis 缓存是同一回事'
    ],
    answer: [1],
    explanation: '二级缓存是 namespace 级别，实体要可序列化；写操作会清空对应 namespace。多表关联和分布式环境下容易出现不一致，很多项目直接关闭，统一用 Redis。'
  },
  {
    id: 'myb-04',
    level: '中',
    difficulty: '进阶',
    category: 'MyBatis',
    type: 'single',
    question: 'MyBatis 插件的实现原理是？',
    options: [
      '责任链 + 动态代理，拦截 Executor、StatementHandler、ParameterHandler、ResultSetHandler',
      '编译期注解处理器',
      '直接修改 SQL 字符串',
      '基于 Spring AOP 拦截 Controller'
    ],
    answer: [0],
    explanation: '实现 Interceptor 并用 @Intercepts + @Signature 指定拦截点，MyBatis 用 Plugin.wrap 生成代理，调用时先走 intercept。PageHelper 就是拦截 Executor.query 改写分页。'
  },
  {
    id: 'myb-05',
    level: '中',
    difficulty: '基础',
    category: 'MyBatis',
    type: 'judge',
    question: '在 MyBatis 中用 ${} 拼接用户输入是安全的，因为它会做预编译。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '${} 是直接字符串替换，不做预编译，用户输入会原样拼进 SQL，存在注入风险。排序字段等必须用白名单校验。'
  },
  {
    id: 'myb-06',
    level: '中',
    difficulty: '基础',
    category: 'MyBatis',
    type: 'multiple',
    question: '下列属于 MyBatis 动态 SQL 标签的有？',
    options: ['<if>', '<choose>/<when>/<otherwise>', '<foreach>', '<where>/<set>'],
    answer: [0, 1, 2, 3],
    explanation: '还有 <trim>、<bind>。<where> 会自动去掉多余的 AND/OR，<set> 会自动去掉多余的逗号。'
  },
  {
    id: 'myb-07',
    level: '中',
    difficulty: '基础',
    category: 'MyBatis',
    type: 'single',
    question: 'ResultMap 和 resultType 怎么选？',
    options: [
      'resultType 自动映射，要求列名和属性名一致；ResultMap 手动映射，适合关联查询和字段不一致',
      'ResultMap 只能用于单表',
      'resultType 不能用于复杂对象',
      '两者完全一样'
    ],
    answer: [0],
    explanation: '简单单表用 resultType（可开启 mapUnderscoreToCamelCase）；列名不一致、一对多/多对一关联、需要类型转换时用 ResultMap。'
  },
  {
    id: 'myb-08',
    level: '高',
    difficulty: '高难',
    category: 'MyBatis',
    type: 'open',
    question: 'PageHelper 的分页原理是什么？使用时要注意什么？',
    options: [],
    answerText: '1. PageHelper 是一个 MyBatis 插件，拦截 Executor.query。\n2. 先根据原 SQL 查一次 count，再把原 SQL 改写成带 limit 的分页 SQL。\n3. 分页参数存在 ThreadLocal 里，只对紧随其后的第一次查询生效。\n4. 常见坑：两次查询之间插了别的查询会串页；多数据源要配置正确的 dialect；count SQL 复杂时可能很慢，可以自定义 count 查询。\n5. 简单场景也可以手写 limit/rownum，避免插件带来的隐式行为；深分页要用延迟关联或书签分页。',
    explanation: '记忆要点：拦截 Executor → count + limit → ThreadLocal → 只对下一次查询生效 → 多数据源和 count 优化。'
  },

  /* ==================== 七、MySQL 与 SQL 优化 ==================== */
  {
    id: 'mysql-01',
    level: '高',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'InnoDB 和 MyISAM 的关键区别是？',
    options: [
      'InnoDB 支持事务、行级锁、外键和崩溃恢复，MyISAM 只支持表锁、不支持事务',
      'MyISAM 支持事务，InnoDB 不支持',
      '两者索引结构完全不同，MyISAM 用哈希索引',
      'InnoDB 不支持外键'
    ],
    answer: [0],
    explanation: '两者索引都是 B+ 树，但 InnoDB 是聚簇索引（叶子存整行），MyISAM 是非聚簇（叶子存数据地址）。MySQL 5.5 起默认 InnoDB。'
  },
  {
    id: 'mysql-02',
    level: '高',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'B+ 树适合做 MySQL 索引的主要原因不包括？',
    options: [
      '非叶子节点只存键，同样大小的页能放更多键，树更矮',
      '叶子节点用链表相连，范围查询和排序高效',
      '所有查询都走到叶子节点，性能稳定',
      '等值查询复杂度是 O(1)'
    ],
    answer: [3],
    explanation: 'B+ 树等值查询是 O(log n)，不是 O(1)；O(1) 是哈希索引的特点，但哈希索引不支持范围和排序。'
  },
  {
    id: 'mysql-03',
    level: '高',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'InnoDB 的聚簇索引是指？',
    options: [
      '叶子节点直接存储整行数据，通常就是主键索引',
      '叶子节点只存主键值',
      '一种哈希索引',
      '只能在 MyISAM 中使用'
    ],
    answer: [0],
    explanation: 'InnoDB 表数据按主键组织，主键索引叶子就是整行；二级索引叶子存主键值，查非索引列需要回表。所以主键建议用自增 bigint，避免 UUID 导致页分裂。'
  },
  {
    id: 'mysql-04',
    level: '高',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: '什么是回表？',
    options: [
      '二级索引查到主键后，再回主键索引取整行数据',
      '把表数据导回内存',
      '把 SQL 回滚',
      '把数据写回磁盘'
    ],
    answer: [0],
    explanation: '回表会多一次随机 IO；查询列都在索引里时不需要回表，叫覆盖索引。所以尽量避免 SELECT *，把常用查询列放进联合索引。'
  },
  {
    id: 'mysql-05',
    level: '高',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: '覆盖索引是指？',
    options: [
      '查询的列全部在索引中，不需要回表',
      '索引覆盖了整张表的所有列',
      '把多个索引合并成一个',
      '用索引覆盖住主键'
    ],
    answer: [0],
    explanation: '例如索引 (a,b)，查询 SELECT a,b FROM t WHERE a=? 就可以只扫索引。覆盖索引能减少回表，但索引变宽会增加写入和维护成本，要权衡。'
  },
  {
    id: 'mysql-06',
    level: '高',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: '联合索引 (a,b,c)，下列哪个查询能用上索引？',
    options: [
      'WHERE b=? AND c=?',
      'WHERE a=? AND c=?',
      'WHERE a=? AND b=?',
      'WHERE c=?'
    ],
    answer: [2],
    explanation: '最左前缀原则：必须从最左列开始连续匹配。WHERE a=? AND c=? 只能用到 a，c 用不上索引排序；范围条件后面的列也用不上索引排序。'
  },
  {
    id: 'mysql-07',
    level: '高',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: '下列哪种写法最可能导致索引失效？',
    options: [
      "WHERE create_time >= '2026-01-01'",
      "WHERE DATE_FORMAT(create_time,'%Y-%m') = '2026-01'",
      "WHERE name LIKE '张%'",
      'WHERE id = 100'
    ],
    answer: [1],
    explanation: '索引列上做函数或运算会导致失效，应改成范围条件 create_time >= ? AND create_time < ?。前缀 LIKE 可以走索引，前置 % 不行。'
  },
  {
    id: 'mysql-08',
    level: '高',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'MySQL InnoDB 的默认事务隔离级别是？',
    options: ['读未提交', '读已提交', '可重复读', '串行化'],
    answer: [2],
    explanation: 'InnoDB 默认 RR（可重复读），Oracle 默认 RC（读已提交）。RR 下普通 SELECT 用 MVCC 快照读，当前读用 Next-Key Lock 防幻读。'
  },
  {
    id: 'mysql-09',
    level: '高',
    difficulty: '高难',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'RC 和 RR 在 ReadView 上的区别是？',
    options: [
      'RC 每次查询都重新生成 ReadView；RR 只在第一次查询时生成并一直复用',
      'RR 每次查询都重新生成，RC 只生成一次',
      '两者都不生成 ReadView',
      'ReadView 只和锁有关'
    ],
    answer: [0],
    explanation: '这就是 RC 能看到别人新提交的数据、RR 整个事务看到同一份快照的原因。MVCC 通过 DB_TRX_ID、DB_ROLL_PTR 和 undo log 版本链实现。'
  },
  {
    id: 'mysql-10',
    level: '中',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'InnoDB 在 RR 级别下主要靠什么防幻读？',
    options: ['表锁', 'Next-Key Lock（记录锁 + 间隙锁）', '只靠 MVCC', '只靠唯一索引'],
    answer: [1],
    explanation: '快照读靠 MVCC 看不到新插入的行；当前读（SELECT ... FOR UPDATE、UPDATE、DELETE）用 Next-Key Lock 锁住记录和间隙，阻止别人插入。'
  },
  {
    id: 'mysql-11',
    level: '高',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'redo log、undo log、binlog 的作用，匹配正确的是？',
    options: [
      'redo 保证持久性，undo 用于回滚和 MVCC，binlog 用于主从复制和数据恢复',
      'redo 用于回滚，undo 用于复制，binlog 用于持久化',
      '三者都是 InnoDB 的物理日志',
      'binlog 在 InnoDB 引擎层，redo 在 Server 层'
    ],
    answer: [0],
    explanation: 'redo 是 InnoDB 物理日志、循环写；undo 是逻辑日志、记录反向操作；binlog 是 Server 层逻辑日志、追加写。两阶段提交保证 redo 和 binlog 一致。'
  },
  {
    id: 'mysql-12',
    level: '中',
    difficulty: '高难',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: 'MySQL 两阶段提交的顺序是？',
    options: [
      '写 redo 为 prepare → 写 binlog → 提交 redo 为 commit',
      '写 binlog → 写 redo prepare → 提交 redo commit',
      '写 undo → 写 redo → 写 binlog',
      '先提交 redo，再写 binlog'
    ],
    answer: [0],
    explanation: '崩溃恢复时根据 binlog 是否完整决定回滚还是提交，目的是保证主从数据和事务数据一致。'
  },
  {
    id: 'mysql-13',
    level: '高',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'multiple',
    question: '定位线上慢 SQL，常用的手段有哪些？',
    options: ['慢查询日志 + pt-query-digest 找 TOP', 'EXPLAIN 看执行计划和索引', 'SHOW PROFILE / performance_schema 看耗时', 'SHOW ENGINE INNODB STATUS 看锁等待'],
    answer: [0, 1, 2, 3],
    explanation: 'Oracle 侧用 AWR/ASH、v$sql、EXPLAIN PLAN + DBMS_XPLAN，并检查统计信息是否过期。'
  },
  {
    id: 'mysql-14',
    level: '中',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'multiple',
    question: '索引设计和优化，正确的做法有？',
    options: [
      '优先建联合索引覆盖多个高频查询',
      '等值列放前面，范围列放后面，区分度高的列靠前',
      '只为高频查询建索引，定期清理无用索引',
      '为了避免回表，给每个列都建单列索引'
    ],
    answer: [0, 1, 2],
    explanation: '索引不是越多越好：占空间、拖慢写入、增加优化器选择成本。单列索引过多并不能覆盖联合查询，反而浪费。'
  },
  {
    id: 'mysql-15',
    level: '低',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'judge',
    question: 'COUNT(列名) 一定比 COUNT(*) 快，所以统计行数应该用 COUNT(列名)。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'COUNT(*) 由优化器选择最小的索引扫描；COUNT(列名) 还要判断该列是否为 NULL，通常不会更快。统计大表行数应使用计数表、缓存或近似值。'
  },
  {
    id: 'mysql-16',
    level: '低',
    difficulty: '基础',
    category: 'MySQL 与 SQL 优化',
    type: 'judge',
    question: '索引越多，查询一定越快。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '索引会增加存储空间和写入维护成本，优化器选择成本也会变高。只为高频查询建索引，优先联合索引和覆盖索引。'
  },
  {
    id: 'mysql-17',
    level: '中',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: '大表分页 LIMIT 1000000, 20 很慢，最有效的优化思路是？',
    options: [
      '加 ORDER BY',
      '延迟关联（先用覆盖索引取 id）或书签分页（WHERE id > last_id）',
      '把 LIMIT 改成 OFFSET',
      '给所有列建索引'
    ],
    answer: [1],
    explanation: 'LIMIT 大偏移会先扫描丢弃前面所有行。延迟关联让子查询只扫索引拿 id，再回表取 20 行；书签分页适合“下一页”场景。'
  },
  {
    id: 'mysql-18',
    level: '中',
    difficulty: '进阶',
    category: 'MySQL 与 SQL 优化',
    type: 'single',
    question: '数据库乐观锁的正确实现方式是？',
    options: [
      'SELECT 出来判断 version 后再 UPDATE',
      'UPDATE ... SET version = version + 1 WHERE id = ? AND version = ?，判断影响行数',
      'SELECT ... FOR UPDATE',
      '给表加表锁'
    ],
    answer: [1],
    explanation: '必须在 UPDATE 的 WHERE 里带版本条件，由数据库保证原子性；影响行数为 0 说明被改过，重试或报错。先查后判断存在并发窗口。'
  },
  {
    id: 'mysql-19',
    level: '高',
    difficulty: '高难',
    category: 'MySQL 与 SQL 优化',
    type: 'open',
    question: '线上一条 SQL 突然变慢，你会怎么定位和优化？',
    options: [],
    answerText: '1. 先确认影响面：哪个接口、QPS/RT、是否伴随锁等待或主从延迟。\n2. 从慢查询日志或 APM 找到具体 SQL 和参数，用 EXPLAIN 看 type、key、rows、Extra。\n3. 重点看：是否全表扫描、是否没走索引、是否索引失效（函数、隐式转换、前置 %、OR）、回表是否过多、是否 filesort/临时表。\n4. 检查数据量和统计信息，必要时 ANALYZE TABLE；检查是否锁等待（SHOW ENGINE INNODB STATUS）。\n5. 优化：改 SQL 写法、加/改联合索引、覆盖索引、延迟关联、分区裁剪、预聚合或异步导出。\n6. 上线前对比执行计划和耗时，观察 CPU、IO、锁等待和主从延迟，确认没有影响其他查询。',
    explanation: '记忆要点：影响面 → 找到 SQL → EXPLAIN → 索引/回表/排序/锁 → 改写或加索引 → 验证。'
  },
  {
    id: 'mysql-20',
    level: '高',
    difficulty: '高难',
    category: 'MySQL 与 SQL 优化',
    type: 'open',
    question: '讲一个你做过的 SQL 优化案例（按 STAR 说）。',
    options: [],
    answerText: '1. 背景：某报表按地市和时间统计，表千万级，页面 20 多秒甚至超时。\n2. 定位：EXPLAIN 显示全表扫描，SQL 里对时间列用了 DATE_FORMAT 导致索引失效，还有 SELECT * 回表多。\n3. 优化一：时间条件改成范围查询，避免在索引列上做函数。\n4. 优化二：建联合索引 (city_code, create_time, status)，尽量走覆盖索引。\n5. 优化三：报表不要求实时，按小时预聚合到统计表，页面查汇总表；导出改异步 + 流式写。\n6. 结果：从 20 多秒降到 1 秒内。\n7. 复盘：上线后用慢查询日志和监控持续观察，避免数据量增长后再次退化。',
    explanation: '记忆要点：背景数据量 → EXPLAIN 证据 → 三条优化 → 量化结果 → 复盘。数字换成你的真实值。'
  },
  /* ==================== 八、Redis ==================== */
  {
    id: 'redis-01',
    level: '高',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: 'Redis 为什么快？下列说法错误的是？',
    options: [
      '纯内存操作，避免磁盘 IO',
      '单线程执行命令，避免锁竞争和上下文切换',
      '使用 IO 多路复用处理大量连接',
      '所有命令都是 O(1) 复杂度'
    ],
    answer: [3],
    explanation: 'Redis 快主要靠内存、单线程命令执行、epoll IO 多路复用和高效数据结构；并不是所有命令都是 O(1)，比如 KEYS、大集合的 SMEMBERS 可能是 O(n)。'
  },
  {
    id: 'redis-02',
    level: '高',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: '实现排行榜（按分数排序、取 TOP N），最合适的数据类型是？',
    options: ['String', 'Hash', 'List', 'ZSet'],
    answer: [3],
    explanation: 'ZSet 底层是跳表 + 字典，支持按 score 排序和范围查询，ZADD/ZREVRANGE/ZRANK 非常适合排行榜、延时队列。'
  },
  {
    id: 'redis-03',
    level: '高',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: '缓存穿透是指什么？',
    options: [
      '查询大量缓存和数据库都不存在的 key',
      '热点 key 过期瞬间大量请求打库',
      '大量 key 同时过期',
      'Redis 宕机'
    ],
    answer: [0],
    explanation: '穿透是查不存在的数据，缓存永远不命中，请求全打到数据库。解决：缓存空值（短过期）、布隆过滤器、参数校验。'
  },
  {
    id: 'redis-04',
    level: '高',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: '缓存击穿是指什么？',
    options: [
      '大量 key 同时过期',
      '某个热点 key 过期的瞬间，大量并发请求打到数据库',
      '查询不存在的数据',
      '缓存和数据库数据不一致'
    ],
    answer: [1],
    explanation: '击穿针对单个热点 key。解决：互斥锁重建、逻辑过期异步刷新、热点 key 永不过期。'
  },
  {
    id: 'redis-05',
    level: '高',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: '缓存雪崩的常见解决方案是？',
    options: [
      '只给一个 key 加过期时间',
      '过期时间加随机值、多级缓存、高可用集群、限流降级',
      '关闭缓存',
      '把所有 key 设成永不过期'
    ],
    answer: [1],
    explanation: '雪崩是大量 key 同时过期或 Redis 整体不可用。核心是打散过期时间、做多级缓存和熔断降级，保证缓存故障不拖垮数据库。'
  },
  {
    id: 'redis-06',
    level: '高',
    difficulty: '进阶',
    category: 'Redis',
    type: 'single',
    question: 'Cache Aside 模式下，写操作的正确顺序是？',
    options: [
      '先删缓存，再更新数据库',
      '先更新数据库，再删除缓存',
      '先更新缓存，再更新数据库',
      '只更新缓存，不更新数据库'
    ],
    answer: [1],
    explanation: '先更新数据库再删缓存，避免并发写时旧值覆盖新值；删除后下次读会回填最新值。极端并发下仍有旧值回填窗口，可用延迟双删、binlog 订阅或分布式锁。'
  },
  {
    id: 'redis-07',
    level: '高',
    difficulty: '进阶',
    category: 'Redis',
    type: 'single',
    question: '用 Redis 实现分布式锁，正确的加锁方式是？',
    options: [
      'SET key value NX PX 30000，value 用唯一标识',
      'SET key value',
      '先 GET 判断不存在再 SET',
      '用 INCR 实现'
    ],
    answer: [0],
    explanation: 'NX 保证互斥，PX 设置过期防止死锁，value 用 UUID/线程标识；释放时用 Lua 比对 value 再删除，避免误删别人的锁。'
  },
  {
    id: 'redis-08',
    level: '中',
    difficulty: '进阶',
    category: 'Redis',
    type: 'single',
    question: 'Redisson 的看门狗（watch dog）机制是做什么的？',
    options: [
      '监控 Redis 内存',
      '锁过期前自动续期，避免业务没执行完锁就失效',
      '自动删除所有 key',
      '实现主从切换'
    ],
    answer: [1],
    explanation: '默认锁 30 秒，看门狗每 10 秒续期一次，直到业务释放锁。只有不显式指定 leaseTime 时才生效，业务卡死时仍要配合超时和幂等兜底。'
  },
  {
    id: 'redis-09',
    level: '中',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: '关于 Redis 持久化，说法正确的是？',
    options: [
      'RDB 恢复快但可能丢最后一次快照后的数据；AOF 更完整但文件大、恢复慢',
      'RDB 记录每条写命令',
      'AOF 默认 always 刷盘',
      'Redis 不支持混合持久化'
    ],
    answer: [0],
    explanation: '生产常用 AOF everysec + RDB 定期备份；4.0+ 支持混合持久化，AOF 重写时前半部分用 RDB 格式，兼顾恢复速度和完整性。'
  },
  {
    id: 'redis-10',
    level: '中',
    difficulty: '基础',
    category: 'Redis',
    type: 'single',
    question: '纯缓存场景，内存淘汰策略通常选？',
    options: ['noeviction', 'allkeys-lru 或 allkeys-lfu', 'volatile-ttl', '禁止淘汰'],
    answer: [1],
    explanation: 'noeviction 内存满时写操作报错；allkeys-lru/lfu 对所有 key 做淘汰，适合纯缓存。volatile-* 只淘汰设置了过期时间的 key。'
  },
  {
    id: 'redis-11',
    level: '中',
    difficulty: '进阶',
    category: 'Redis',
    type: 'multiple',
    question: '大 key 和热 key 的处理方式，正确的有？',
    options: [
      '大 key 拆分、压缩、只存必要字段，删除用 UNLINK',
      '热 key 用本地缓存 + Redis 两级缓存',
      '热 key 加随机后缀分散到多个实例',
      '大 key 直接用 DEL 同步删除，越快越好'
    ],
    answer: [0, 1, 2],
    explanation: 'DEL 大 key 会阻塞主线程，应该用 UNLINK 异步删除。大 key 和热 key 都可能打满单分片，要提前用 --bigkeys、MEMORY USAGE 和监控发现。'
  },
  {
    id: 'redis-12',
    level: '中',
    difficulty: '进阶',
    category: 'Redis',
    type: 'judge',
    question: 'Redis 事务（MULTI/EXEC）支持回滚，某条命令失败会自动撤销前面已执行的命令。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'Redis 事务只保证命令连续执行、中间不插入其他客户端命令，但没有回滚：某条命令失败，其他命令照常执行。复杂原子逻辑用 Lua。'
  },
  {
    id: 'redis-13',
    level: '中',
    difficulty: '基础',
    category: 'Redis',
    type: 'judge',
    question: 'Redis 命令执行是单线程的，所以业务里“先 GET 再 SET”的复合操作天然线程安全。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '单条命令原子，但多条命令之间可能插入其他客户端请求。需要原子性的复合逻辑用 Lua、WATCH/MULTI 或分布式锁。'
  },
  {
    id: 'redis-14',
    level: '高',
    difficulty: '高难',
    category: 'Redis',
    type: 'open',
    question: '缓存和数据库的一致性怎么保证？',
    options: [],
    answerText: '1. 常用 Cache Aside：读先读缓存，未命中读库并回填；写先更新数据库，再删除缓存。\n2. 为什么删不更新：并发写时更新缓存可能旧值覆盖新值；删除后下次读会加载最新值。\n3. 极端并发下仍有窗口：删缓存后、读请求回填旧值。可用延迟双删、Canal 订阅 binlog 异步删、分布式锁串行化。\n4. 强一致要求高的场景，不要让缓存承担强一致，读走数据库或用锁；缓存只做加速。\n5. 无论哪种方案，都要给缓存设置过期时间作为兜底，并监控不一致和回源压力。',
    explanation: '记忆要点：Cache Aside → 先更新库再删缓存 → 延迟双删/binlog → 过期兜底 → 强一致场景读库。'
  },

  /* ==================== 九、RabbitMQ 与消息中间件 ==================== */
  {
    id: 'mq-01',
    level: '高',
    difficulty: '基础',
    category: 'RabbitMQ / 消息队列',
    type: 'single',
    question: 'RabbitMQ 的四种交换机类型不包括？',
    options: ['direct', 'topic', 'fanout', 'roundrobin'],
    answer: [3],
    explanation: '四种是 direct（精确匹配）、topic（通配符）、fanout（广播）、headers（按消息头匹配）。roundrobin 是消费者分发方式，不是交换机类型。'
  },
  {
    id: 'mq-02',
    level: '高',
    difficulty: '进阶',
    category: 'RabbitMQ / 消息队列',
    type: 'single',
    question: '保证消息不丢失，需要覆盖哪三个环节？',
    options: [
      '生产者确认、Broker 持久化、消费者手动 ack',
      '只做消费者 ack 就够了',
      '只做生产者确认就够了',
      '把消息存到 Redis 就够了'
    ],
    answer: [0],
    explanation: '生产端开启 confirm/return；Broker 队列和消息都持久化；消费端处理成功后手动 ack。任何一环缺失都可能丢消息。'
  },
  {
    id: 'mq-03',
    level: '高',
    difficulty: '进阶',
    category: 'RabbitMQ / 消息队列',
    type: 'single',
    question: '消息重复消费最常见的解决方案是？',
    options: [
      '关闭自动 ack',
      '消费端做幂等：唯一业务键、去重表、状态机或 Redis 标识',
      '增加消费者数量',
      '把消息改成持久化'
    ],
    answer: [1],
    explanation: '消息中间件通常保证至少一次（at-least-once），重复不可避免。幂等要基于业务唯一键，比如订单号 + 操作类型，或用状态机限制重复流转。'
  },
  {
    id: 'mq-04',
    level: '中',
    difficulty: '进阶',
    category: 'RabbitMQ / 消息队列',
    type: 'single',
    question: '死信队列（DLX）通常用来处理什么？',
    options: [
      '正常业务消息',
      '被拒绝、过期或超过长度限制的消息',
      '所有广播消息',
      '生产者的确认消息'
    ],
    answer: [1],
    explanation: '消息被 nack/reject 且不重新入队、过期、队列超长时会进入死信交换机。常用于失败重试、延迟处理和人工排查。'
  },
  {
    id: 'mq-05',
    level: '中',
    difficulty: '进阶',
    category: 'RabbitMQ / 消息队列',
    type: 'single',
    question: '消息大量积压时，最先应该做什么？',
    options: [
      '直接删除队列',
      '先定位消费变慢的原因，再扩消费者、优化消费逻辑、临时分流或限流',
      '把消息全部丢弃',
      '重启 Broker'
    ],
    answer: [1],
    explanation: '积压可能是消费逻辑慢、下游故障、消费者挂掉或生产突增。先查消费速率和错误日志，再扩消费者/优化批量处理；盲目重启可能加重问题。'
  },
  {
    id: 'mq-06',
    level: '中',
    difficulty: '进阶',
    category: 'RabbitMQ / 消息队列',
    type: 'multiple',
    question: 'RabbitMQ 和 Kafka 的对比，正确的有？',
    options: [
      'RabbitMQ 路由灵活、延迟低，适合业务消息；Kafka 吞吐高，适合日志/流式数据',
      'Kafka 按分区顺序写磁盘，支持回溯消费',
      'RabbitMQ 的队列在消费后通常删除消息，Kafka 依赖 offset 保留消息',
      '两者都只能保证 exactly-once'
    ],
    answer: [0, 1, 2],
    explanation: '两者默认都是 at-least-once，exactly-once 需要业务幂等或事务配合。选型看吞吐、延迟、路由复杂度和团队运维成本。'
  },
  {
    id: 'mq-07',
    level: '中',
    difficulty: '基础',
    category: 'RabbitMQ / 消息队列',
    type: 'judge',
    question: '消费者开启自动 ack 更可靠，因为 Broker 会在消息发出后立即删除消息。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '自动 ack 在消息发出后就确认，消费者处理失败或宕机时消息已经丢了。业务消息应手动 ack，处理成功再确认。'
  },
  {
    id: 'mq-08',
    level: '中',
    difficulty: '进阶',
    category: 'RabbitMQ / 消息队列',
    type: 'judge',
    question: '同一个队列开多个消费者，仍然能严格保证消息按发送顺序被消费。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '多消费者并发消费无法保证顺序。要顺序就单队列单消费者，或按业务键路由到同一分区/队列，并在消费端串行处理。'
  },
  {
    id: 'mq-09',
    level: '高',
    difficulty: '高难',
    category: 'RabbitMQ / 消息队列',
    type: 'open',
    question: '如何保证 RabbitMQ 消息不丢失？',
    options: [],
    answerText: '1. 生产端：开启 publisher confirm 和 return 回调，失败重试；重要消息配合本地消息表。\n2. Broker 端：交换机、队列、消息都设置持久化，避免重启丢消息。\n3. 消费端：关闭自动 ack，处理成功后手动 ack；失败 nack 并限制重试次数，超过进死信队列。\n4. 补偿：定时任务扫描本地消息表或死信队列，做重试和对账。\n5. 注意“不丢”通常意味着至少一次，消费端必须幂等；不要为了不丢而无限重试，避免消息风暴。',
    explanation: '记忆要点：生产确认 → Broker 持久化 → 手动 ack → 死信/补偿 → 幂等。'
  },
  {
    id: 'mq-10',
    level: '高',
    difficulty: '高难',
    category: 'RabbitMQ / 消息队列',
    type: 'open',
    question: '消息重复消费怎么保证幂等？请给出几种方案。',
    options: [],
    answerText: '1. 数据库唯一索引：用业务唯一键（订单号 + 操作类型）建唯一索引，重复插入直接失败。\n2. 去重表：消费前先插入消息 ID，插入成功才处理，同一事务保证。\n3. 状态机：只允许从“待支付”流转到“已支付”，重复消息因状态不匹配被忽略。\n4. Redis 标识：SETNX 消息 ID 做短期去重，注意过期和可靠性。\n5. 版本号/乐观锁：更新时带版本条件，重复更新影响行数为 0。\n6. 关键业务配合对账和补偿，不能只依赖一种手段。',
    explanation: '记忆要点：唯一索引、去重表、状态机、Redis SETNX、乐观锁、对账。先问清楚业务幂等键是什么。'
  },

  /* ==================== 十、Elasticsearch ==================== */
  {
    id: 'es-01',
    level: '高',
    difficulty: '基础',
    category: 'Elasticsearch',
    type: 'single',
    question: 'Elasticsearch 实现全文检索的核心结构是？',
    options: ['B+ 树', '倒排索引', '哈希表', '跳表'],
    answer: [1],
    explanation: '倒排索引记录“词项 → 文档列表”，配合分词器把文本拆成词项，所以能快速做全文检索；正排索引（doc values）用于排序和聚合。'
  },
  {
    id: 'es-02',
    level: '中',
    difficulty: '进阶',
    category: 'Elasticsearch',
    type: 'single',
    question: 'ES 的分片（shard）和副本（replica）的作用是？',
    options: [
      '分片用于水平扩展和并行查询，副本用于高可用和读吞吐',
      '分片用于备份，副本用于扩容',
      '两者都只用于存储',
      '副本越多写入越快'
    ],
    answer: [0],
    explanation: '主分片数在索引创建后不能改（除非 reindex），副本数可以动态调整。分片过多会增加集群元数据和查询开销，不能乱设。'
  },
  {
    id: 'es-03',
    level: '高',
    difficulty: '进阶',
    category: 'Elasticsearch',
    type: 'single',
    question: 'ES 深分页（from + size 很大）的正确解决方案是？',
    options: [
      '把 from 调得更大',
      '用 scroll 或 search_after',
      '增加副本数',
      '把 size 设成 10000'
    ],
    answer: [1],
    explanation: 'from + size 默认上限 10000，深分页会让每个分片都取大量数据再协调，内存和 CPU 开销大。scroll 适合导出，search_after 适合实时翻页。'
  },
  {
    id: 'es-04',
    level: '中',
    difficulty: '进阶',
    category: 'Elasticsearch',
    type: 'single',
    question: 'ES 被称为“准实时”搜索，原因是？',
    options: [
      '数据写入后默认每秒 refresh 一次生成 segment，之后才能被搜到',
      'ES 只支持离线数据',
      'ES 写入必须等待一小时',
      'ES 不支持更新'
    ],
    answer: [0],
    explanation: '写入先到内存 buffer 和 translog，refresh 后生成可搜索的 segment；flush 才真正刷盘并清理 translog。translog 保证宕机恢复。'
  },
  {
    id: 'es-05',
    level: '低',
    difficulty: '基础',
    category: 'Elasticsearch',
    type: 'judge',
    question: 'ES 索引的分片数越多越好，因为可以并行查询。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '分片过多会增加集群状态、文件句柄和查询协调开销，反而降低性能。按数据量和节点数合理规划，单分片建议控制在几十 GB 以内。'
  },
  {
    id: 'es-06',
    level: '高',
    difficulty: '高难',
    category: 'Elasticsearch',
    type: 'open',
    question: 'MySQL 和 Elasticsearch 的数据怎么同步？',
    options: [],
    answerText: '1. 同步双写：业务写 MySQL 的同时写 ES，简单但耦合高，容易不一致。\n2. 定时任务全量/增量同步：按 update_time 拉取，简单但有延迟，适合不敏感场景。\n3. Canal 订阅 MySQL binlog，解析后写 ES：准实时、对业务侵入小，最常用。\n4. 消息队列：业务发消息，消费者写 ES，配合本地消息表保证可靠。\n5. 无论哪种方案，都要处理失败重试、补偿和对账；ES 侧要设计好 mapping、分词器和唯一 ID，保证幂等。',
    explanation: '记忆要点：双写、定时、Canal/binlog、MQ、补偿对账。面试时说明你们项目实际用哪种，以及延迟和一致性怎么接受。'
  },

  /* ==================== 十一、微服务 / K8s / DevOps ==================== */
  {
    id: 'micro-01',
    level: '高',
    difficulty: '基础',
    category: '微服务 / K8s / DevOps',
    type: 'single',
    question: 'Nacos 的核心作用是什么？',
    options: [
      '只做数据库连接池',
      '服务注册发现 + 配置中心',
      '只做消息队列',
      '只做网关'
    ],
    answer: [1],
    explanation: 'Nacos 同时提供注册中心和配置中心：服务启动注册实例，消费者按服务名发现；配置支持动态刷新、命名空间隔离和灰度。'
  },
  {
    id: 'micro-02',
    level: '中',
    difficulty: '进阶',
    category: '微服务 / K8s / DevOps',
    type: 'single',
    question: 'Nacos 配置修改后，Spring Boot 应用怎么动态刷新？',
    options: [
      '必须重启应用',
      '用 @RefreshScope 或 Nacos 的配置监听器，刷新对应 Bean',
      '修改数据库连接池即可',
      '只能重新打包'
    ],
    answer: [1],
    explanation: 'Nacos 2.x 通过长连接推送变更；@RefreshScope 让 Bean 在配置变化时重新创建，@ConfigurationProperties 也能自动绑定。注意不是所有 Bean 都适合刷新。'
  },
  {
    id: 'micro-03',
    level: '高',
    difficulty: '基础',
    category: '微服务 / K8s / DevOps',
    type: 'single',
    question: 'Kubernetes 控制面的核心组件不包括？',
    options: ['kube-apiserver', 'etcd', 'kube-scheduler', 'Dockerfile'],
    answer: [3],
    explanation: '控制面：apiserver、etcd、scheduler、controller-manager；节点上：kubelet、kube-proxy、容器运行时。Dockerfile 是镜像构建文件。'
  },
  {
    id: 'micro-04',
    level: '高',
    difficulty: '进阶',
    category: '微服务 / K8s / DevOps',
    type: 'single',
    question: 'Pod 一直重启，最先应该执行哪个命令排查？',
    options: [
      'kubectl delete pod',
      'kubectl describe pod 和 kubectl logs（含 --previous）',
      'kubectl scale deployment',
      '直接重装集群'
    ],
    answer: [1],
    explanation: 'describe 看事件、状态、探针失败、OOMKilled、调度失败；logs --previous 看上一个容器崩溃前的日志。再结合 resources、探针和配置排查。'
  },
  {
    id: 'micro-05',
    level: '中',
    difficulty: '进阶',
    category: '微服务 / K8s / DevOps',
    type: 'single',
    question: 'K8s 滚动发布中，maxSurge 和 maxUnavailable 控制什么？',
    options: [
      '副本数上下限和不可用比例',
      '镜像大小',
      '节点数量',
      'CPU 配额'
    ],
    answer: [0],
    explanation: 'maxSurge 控制最多超出期望副本数多少，maxUnavailable 控制最多允许多少 Pod 不可用。配合 readinessProbe 保证新 Pod 就绪后再接流量。'
  },
  {
    id: 'micro-06',
    level: '中',
    difficulty: '基础',
    category: '微服务 / K8s / DevOps',
    type: 'multiple',
    question: '下列属于 Kubernetes 资源对象的有？',
    options: ['Deployment', 'Service', 'ConfigMap', 'Ingress'],
    answer: [0, 1, 2, 3],
    explanation: '还有 Pod、StatefulSet、DaemonSet、Secret、PersistentVolume、HPA 等。Deployment 管无状态副本，Service 提供稳定访问入口。'
  },
  {
    id: 'micro-07',
    level: '中',
    difficulty: '基础',
    category: '微服务 / K8s / DevOps',
    type: 'judge',
    question: 'livenessProbe 失败会重启容器，readinessProbe 失败会把 Pod 从 Service 端点摘除。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: 'liveness 管“活着没”，失败重启；readiness 管“能不能接流量”，失败摘流量；startupProbe 用于启动慢的应用，成功前不执行其他探针。'
  },
  {
    id: 'micro-08',
    level: '低',
    difficulty: '基础',
    category: '微服务 / K8s / DevOps',
    type: 'judge',
    question: 'Nacos 只能做服务注册中心，不能做配置中心。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'Nacos 同时是注册中心和配置中心，支持动态配置、命名空间、分组和灰度发布，这也是它相比 Eureka 的优势之一。'
  },
  {
    id: 'micro-09',
    level: '高',
    difficulty: '进阶',
    category: '微服务 / K8s / DevOps',
    type: 'open',
    question: '说说你们一次完整的发布流程。',
    options: [],
    answerText: '1. 开发提交代码，触发 CI：编译、单测、代码扫描、构建镜像并打 tag。\n2. 推送镜像到仓库，更新 K8s 的 Deployment 镜像版本。\n3. 滚动发布：新 Pod 启动，readinessProbe 通过后接入流量，逐步替换旧 Pod。\n4. 观察监控：错误率、RT、CPU/内存、日志和链路追踪；异常则回滚到上一个镜像版本。\n5. 数据库变更单独管理：先兼容性变更（加字段/加索引），再发应用，避免回滚困难。\n6. 发布后做冒烟测试和业务验证，记录发布单和回滚预案。',
    explanation: '记忆要点：CI 构建 → 推镜像 → 滚动发布 → 探针接流量 → 监控 → 回滚预案 → 数据库兼容。'
  },
  {
    id: 'micro-10',
    level: '中',
    difficulty: '高难',
    category: '微服务 / K8s / DevOps',
    type: 'open',
    question: '灰度发布怎么做？',
    options: [],
    answerText: '1. 按流量比例：网关/Service Mesh 按权重把 5%、10%、50% 流量切到新版本。\n2. 按用户特征：内部用户、白名单、特定地区或设备先试用。\n3. 按实例分组：新旧版本各一组 Pod，通过标签和路由规则分流。\n4. 观察指标：错误率、RT、业务转化、日志异常；设置自动回滚阈值。\n5. 数据兼容：新旧版本要能同时读写，数据库变更先做向前兼容。\n6. 全量后保留旧版本一段时间，确认稳定再下线。',
    explanation: '记忆要点：流量比例/用户/实例分组 → 观察指标 → 自动回滚 → 数据兼容 → 全量收尾。'
  },
  /* ==================== 十二、场景与系统设计 ==================== */
  {
    id: 'design-01',
    level: '高',
    difficulty: '高难',
    category: '场景与系统设计',
    type: 'open',
    question: '设计一个秒杀系统，怎么防止超卖？',
    options: [],
    answerText: '1. 前端：按钮置灰、验证码、限流，减少重复提交。\n2. 库存预热：活动前把库存加载到 Redis；用 Lua 脚本原子判断并扣减，避免并发超卖。\n3. 异步下单：Redis 扣减成功后发 MQ，消费者异步创建订单，削峰填谷。\n4. 数据库兜底：UPDATE stock SET stock = stock - 1 WHERE id = ? AND stock > 0，判断影响行数；订单表用唯一索引防重复。\n5. 幂等：用户 + 商品 + 活动唯一键，重复请求直接返回已抢到。\n6. 限流降级：网关限流、热点隔离、失败快速返回；监控库存和 MQ 积压。',
    explanation: '记忆要点：前端限流 → Redis 原子扣减 → MQ 异步 → DB 条件更新兜底 → 幂等 → 限流降级。'
  },
  {
    id: 'design-02',
    level: '高',
    difficulty: '高难',
    category: '场景与系统设计',
    type: 'open',
    question: '接口幂等怎么设计？',
    options: [],
    answerText: '1. 先确定幂等键：订单号、支付流水号、用户 + 业务 + 请求号。\n2. 数据库唯一索引：插入重复直接失败，最简单可靠。\n3. 去重表：请求 ID 先落库，成功才执行业务，和业务在同一事务。\n4. Token 机制：进入页面前申请 token，提交时校验并删除，防止重复提交。\n5. 状态机：只允许合法状态流转，重复请求因状态不匹配被忽略。\n6. 乐观锁/版本号：更新时带版本条件，影响行数为 0 视为重复。\n7. 分布式锁只能防并发，不能替代长期幂等；关键业务还要对账补偿。',
    explanation: '记忆要点：幂等键 → 唯一索引/去重表 → token → 状态机 → 乐观锁 → 对账。'
  },
  {
    id: 'design-03',
    level: '中',
    difficulty: '高难',
    category: '场景与系统设计',
    type: 'open',
    question: '分布式 ID 生成器有哪些方案？雪花算法的原理和问题是什么？',
    options: [],
    answerText: '1. UUID：本地生成、性能好，但无序、占空间，不适合做 MySQL 主键。\n2. 数据库自增/号段模式：简单、趋势递增，但依赖数据库，号段模式可批量取号降低压力。\n3. Redis INCR：性能好，但要考虑持久化和集群一致性。\n4. 雪花算法：64 位 = 1 位符号 + 41 位时间戳 + 10 位机器 ID + 12 位序列号，趋势递增、本地生成、高并发。\n5. 雪花的问题：依赖系统时钟，时钟回拨可能生成重复 ID；机器 ID 要分配好；号段用完要等待下一毫秒。\n6. 解决时钟回拨：检测到回拨就等待、报警或切换备用 workerId。',
    explanation: '记忆要点：UUID、数据库号段、Redis、雪花；雪花的位分配、时钟回拨、workerId 管理。'
  },
  {
    id: 'design-04',
    level: '中',
    difficulty: '高难',
    category: '场景与系统设计',
    type: 'open',
    question: '设计一个短链接系统，怎么生成短码和跳转？',
    options: [],
    answerText: '1. 生成：长链接先查是否已存在，不存在用发号器生成自增 ID，再转成 Base62 短码；也可以用哈希 + 冲突重试。\n2. 存储：短码 → 长链接映射，Redis 缓存热点，MySQL 持久化。\n3. 跳转：查缓存/数据库，返回 302 重定向；302 便于统计点击，301 会被浏览器缓存。\n4. 防滥用：布隆过滤器判断短码是否存在，限流、黑名单、过期时间。\n5. 统计：异步记录点击量、来源、地域，用消息队列削峰。\n6. 高可用：发号器不能单点，缓存和数据库都要考虑扩容和容灾。',
    explanation: '记忆要点：发号器 + Base62、缓存、302、布隆过滤器、统计异步、发号器高可用。'
  },
  {
    id: 'design-05',
    level: '中',
    difficulty: '高难',
    category: '场景与系统设计',
    type: 'open',
    question: '大文件上传怎么设计？',
    options: [],
    answerText: '1. 分片：前端按固定大小切片，每片带文件 hash、分片序号上传。\n2. 秒传：先算文件 hash，服务端已存在则直接返回。\n3. 断点续传：服务端记录已上传分片，前端跳过已传部分。\n4. 合并：全部分片到齐后按序合并，校验最终文件 hash。\n5. 并发与限流：控制并发分片数，避免打满带宽和服务端 IO。\n6. 存储：小文件可直接对象存储，大文件用分片上传接口；临时分片要定期清理。',
    explanation: '记忆要点：分片 → 秒传（hash）→ 断点续传 → 合并校验 → 并发控制 → 临时文件清理。'
  },
  {
    id: 'design-06',
    level: '高',
    difficulty: '高难',
    category: '场景与系统设计',
    type: 'open',
    question: '系统突然变慢，你会怎么排查？',
    options: [],
    answerText: '1. 先看监控大盘：QPS、RT、错误率、CPU、内存、GC、连接池、磁盘 IO、网络。\n2. 看链路追踪：定位是哪个服务、哪个接口、哪一段耗时。\n3. 看日志：异常、慢 SQL、超时、重试风暴、下游报错。\n4. 分层排查：数据库（慢查询、锁等待、主从延迟）、Redis（热点/大 key/命中率）、MQ（积压）、下游接口（超时）。\n5. 看最近变更：发布、配置、数据量突增、活动流量。\n6. 先止血：回滚、限流、扩容、降级；再保留现场做根因分析和复盘。',
    explanation: '记忆要点：大盘 → 链路 → 日志 → DB/缓存/MQ/下游 → 最近变更 → 止血 → 复盘。'
  },
  {
    id: 'design-07',
    level: '高',
    difficulty: '进阶',
    category: '场景与系统设计',
    type: 'single',
    question: '数据库层面防止超卖，最可靠的写法是？',
    options: [
      'SELECT stock 后判断大于 0 再 UPDATE',
      'UPDATE stock SET stock = stock - 1 WHERE id = ? AND stock > 0，判断影响行数',
      '给 stock 加普通索引',
      '用 SELECT ... FOR UPDATE 但不加条件'
    ],
    answer: [1],
    explanation: '把判断和扣减放在同一条 UPDATE 里，由数据库保证原子性；影响行数为 0 说明库存不足。先查后改存在并发窗口。'
  },
  {
    id: 'design-08',
    level: '中',
    difficulty: '进阶',
    category: '场景与系统设计',
    type: 'multiple',
    question: '下列哪些可以作为接口幂等的实现手段？',
    options: ['数据库唯一索引', 'Token 机制', '状态机', '乐观锁版本号'],
    answer: [0, 1, 2, 3],
    explanation: '还有去重表、分布式锁、Redis SETNX。分布式锁只防并发，不防事后重放，通常要和其他手段组合。'
  },

  /* ==================== 十三、手写代码与算法 ==================== */
  {
    id: 'code-01',
    level: '高',
    difficulty: '基础',
    category: '手写代码与算法',
    type: 'open',
    question: '手写反转单链表，并说明时间和空间复杂度。',
    options: [],
    answerText: '1. 思路：用 prev、curr、next 三个指针，遍历时把 curr.next 指向 prev，再整体后移。\n2. 伪代码：prev = null; curr = head; while (curr != null) { next = curr.next; curr.next = prev; prev = curr; curr = next; } return prev;\n3. 时间复杂度 O(n)，只遍历一次；空间复杂度 O(1)，只用了常数个指针。\n4. 边界：head 为 null 或只有一个节点要能正常返回。\n5. 也可以用递归，但递归空间是 O(n)，链表很长时可能栈溢出。',
    explanation: '记忆要点：三指针、先存 next 再改指向、返回 prev；O(n)/O(1)；注意空链表边界。'
  },
  {
    id: 'code-02',
    level: '高',
    difficulty: '高难',
    category: '手写代码与算法',
    type: 'open',
    question: '手写一个 LRU 缓存，要求 get 和 put 都是 O(1)。',
    options: [],
    answerText: '1. 结构：HashMap + 双向链表。Map 存 key → Node，链表头放最近使用，尾部放最久未使用。\n2. get：不存在返回 -1；存在则把节点移到头部并返回 value。\n3. put：存在则更新值并移到头部；不存在则新建节点放头部、Map 加进去；超过容量删尾部节点并同步删 Map。\n4. 双向链表要带虚拟头尾节点，避免大量 null 判断。\n5. Java 里也可以用 LinkedHashMap 的 accessOrder=true，重写 removeEldestEntry 实现，但面试通常要求手写。\n6. 并发场景要加锁或用 ConcurrentHashMap + 同步链表，或直接用 Caffeine。',
    explanation: '记忆要点：HashMap + 双向链表、头插尾删、虚拟节点、O(1)；注意容量和节点同步删除。'
  },
  {
    id: 'code-03',
    level: '中',
    difficulty: '进阶',
    category: '手写代码与算法',
    type: 'open',
    question: '两个线程交替打印 1 到 100，说说你的实现。',
    options: [],
    answerText: '1. 方式一：synchronized + wait/notify。两个线程共享一个锁和一个计数器，线程 A 打印奇数、线程 B 打印偶数；每次打印后 notifyAll，另一个线程醒来判断条件。\n2. 方式二：ReentrantLock + 两个 Condition，按条件 await/signal，控制更清晰。\n3. 方式三：两个 Semaphore 互相 release/acquire，一个线程打印完释放对方的信号量。\n4. 关键点：判断条件要用 while 而不是 if，防止虚假唤醒；计数器要共享且可见。\n5. 注意打印顺序和结束条件，避免最后一个线程一直等待，可以用 notifyAll 或设置结束标志。',
    explanation: '记忆要点：共享锁 + 共享计数器、while 防虚假唤醒、notifyAll、结束条件；能说出两种实现即可。'
  },
  {
    id: 'code-04',
    level: '中',
    difficulty: '基础',
    category: '手写代码与算法',
    type: 'open',
    question: '手写二分查找，并说明边界和易错点。',
    options: [],
    answerText: '1. 前提：数组有序，支持随机访问。\n2. 写法：left = 0, right = nums.length - 1；while (left <= right) { mid = left + (right - left) / 2; if (nums[mid] == target) return mid; else if (nums[mid] < target) left = mid + 1; else right = mid - 1; } return -1;\n3. mid 用 left + (right - left) / 2，避免 left + right 溢出。\n4. 边界：空数组、只有一个元素、目标在两端、目标不存在。\n5. 找左右边界时用另一种模板：left < right，收缩区间，最后再判断。\n6. 时间复杂度 O(log n)，空间 O(1)。',
    explanation: '记忆要点：left <= right、mid 防溢出、mid ± 1、找不到返回 -1；能说出左右边界模板更加分。'
  },
  {
    id: 'code-05',
    level: '低',
    difficulty: '基础',
    category: '手写代码与算法',
    type: 'single',
    question: '快速排序的平均时间复杂度和最坏时间复杂度分别是？',
    options: ['O(n log n) 和 O(n log n)', 'O(n log n) 和 O(n²)', 'O(n²) 和 O(n²)', 'O(n) 和 O(n log n)'],
    answer: [1],
    explanation: '平均 O(n log n)，最坏（每次选到最大/最小 pivot）O(n²)。空间复杂度平均 O(log n)（递归栈），不稳定排序。'
  },
  {
    id: 'code-06',
    level: '中',
    difficulty: '基础',
    category: '手写代码与算法',
    type: 'single',
    question: '判断单链表是否有环，最优解法是？',
    options: ['用 HashSet 存节点', '快慢指针（Floyd 判圈）', '双重循环', '先反转链表'],
    answer: [1],
    explanation: '快指针每次走两步、慢指针走一步，有环必定相遇；时间复杂度 O(n)，空间 O(1)。HashSet 也能做，但空间 O(n)。'
  },

  /* ==================== 十四、项目与 HR ==================== */
  {
    id: 'hr-01',
    level: '高',
    difficulty: '基础',
    category: '项目与 HR',
    type: 'open',
    question: '请做一下自我介绍。',
    options: [],
    answerText: '1. 基本信息：姓名、工作年限、主要技术栈（Java/Spring Boot/MySQL/Redis 等）。\n2. 项目经历：最近一段公司、负责的核心模块、业务价值，挑 1-2 个最有代表性的项目。\n3. 技术亮点：大数据量优化、并发、事务、缓存、消息队列、线上排查，每个点准备一个真实例子。\n4. 匹配度：岗位要求的后端能力、中间件、部署运维，你分别有什么经验。\n5. 收尾：表达求职动机和到岗意愿，控制在 1 分半左右。',
    explanation: '记忆口诀：现在 → 过去 → 匹配。不要背简历，每个关键词后面都要有一个能展开的真实例子。'
  },
  {
    id: 'hr-02',
    level: '高',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'open',
    question: '为什么从上一家公司离职？',
    options: [],
    answerText: '1. 先客观陈述：项目周期结束、团队调整，正常交接后离开，不是被辞退。\n2. 再说发展：希望在 Java 后端深度上发展，去技术栈更规范、有高并发高可用场景的团队。\n3. 不吐槽前公司、领导、同事，不抱怨加班。\n4. 表达对新岗位的期待：能长期做后端、承担核心模块、补齐分布式和中间件经验。\n5. 强调已完整交接，可以随时到岗。',
    explanation: '记忆要点：客观原因 + 个人发展 + 不吐槽 + 向前看。回答不超过 1 分钟。'
  },
  {
    id: 'hr-03',
    level: '高',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'open',
    question: '离职后的空窗期在做什么？',
    options: [],
    answerText: '1. 系统补基础：JVM、并发、MySQL 索引和事务、Spring 原理，做笔记和练习。\n2. 做个人项目或开源小工具，从需求到发布独立完成，保持编码手感。\n3. 用 AI 工具辅助开发，同时练习代码 review。\n4. 认真看机会，不随便将就，目标明确是 Java 后端。\n5. 说明随时可以到岗，没有其他牵绊。',
    explanation: '记忆要点：学习 + 产出 + 看机会 + 可到岗。不要编“考研/创业/家里有事”，经不起追问。'
  },
  {
    id: 'hr-04',
    level: '中',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'open',
    question: '为什么选择来我们所在的城市发展？',
    options: [],
    answerText: '1. 职业发展：目标城市的互联网和软件公司密度高，后端技术栈和业务复杂度更丰富。\n2. 个人规划：打算长期在该城市发展，不是短期过渡。\n3. 已经完整交接上一份工作，来这边是确定的选择。\n4. 对当地的生活节奏有了解，适应没问题。\n5. 表达稳定性：希望找一家能长期做下去的公司。',
    explanation: '记忆要点：职业发展 + 长期规划 + 已交接 + 稳定性。结合你的真实原因准备，不要只说个人情感原因，容易被追问稳定性。'
  },
  {
    id: 'hr-05',
    level: '高',
    difficulty: '高难',
    category: '项目与 HR',
    type: 'open',
    question: '讲一个你项目中遇到的技术难点，以及你怎么解决的。',
    options: [],
    answerText: '1. 背景：项目、业务、数据量、你的职责。\n2. 问题：具体现象和影响，比如报表 20 秒、地图卡顿、接口超时、内存泄漏。\n3. 定位：用了什么工具、看了什么指标、怎么排除其他可能。\n4. 方案：至少两条备选，说明为什么选这条，以及改了什么。\n5. 结果：量化指标，比如耗时从 X 降到 Y、内存下降多少、错误率下降多少。\n6. 复盘：如果重做会怎么改进，沉淀了什么规范。',
    explanation: '记忆要点：STAR + 量化 + 取舍 + 复盘。准备 2-3 个高光故事，能从不同角度复用。'
  },
  {
    id: 'hr-06',
    level: '高',
    difficulty: '高难',
    category: '项目与 HR',
    type: 'open',
    question: '讲一次你处理线上故障的经历。',
    options: [],
    answerText: '1. 现象：监控告警、用户反馈、影响范围。\n2. 止血：回滚、限流、扩容、降级，先保核心业务。\n3. 定位：监控 → 日志/traceId → 数据库/Redis/MQ/下游 → 最近变更。\n4. 根因：慢 SQL、连接池耗尽、缓存击穿、消息积压、Pod OOM、证书过期等。\n5. 修复和验证：改配置/加索引/回滚，确认错误率和 RT 恢复。\n6. 复盘：补监控、补预案、补测试，明确责任人和时间。',
    explanation: '记忆要点：止血 → 定位 → 修复 → 验证 → 复盘。先讲结果和影响，不要只说“重启就好了”。'
  },
  {
    id: 'hr-07',
    level: '高',
    difficulty: '高难',
    category: '项目与 HR',
    type: 'open',
    question: '一个接口响应很慢，你会从哪些方面优化？',
    options: [],
    answerText: '1. 先定位：链路追踪看耗时在哪一段，是应用、数据库、Redis、下游还是网络。\n2. 数据库：慢 SQL、索引、回表、N+1 查询、大事务、锁等待。\n3. 缓存：热点数据加 Redis 或本地缓存，注意一致性和穿透。\n4. 代码：减少重复查询、批量查询、异步化、并行调用、避免大对象序列化。\n5. 资源：连接池、线程池大小是否合理，GC 是否有停顿。\n6. 架构：读写分离、分页、预聚合、消息队列削峰。\n7. 优化后用压测和监控验证，避免把问题转移给下游。',
    explanation: '记忆要点：定位 → DB → 缓存 → 代码 → 资源 → 架构 → 验证。答题时结合一个真实接口讲。'
  },
  {
    id: 'hr-08',
    level: '中',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'open',
    question: '和同事或产品经理意见不一致时，你怎么处理？',
    options: [],
    answerText: '1. 先听完对方方案，确认我们目标一致，避免各说各话。\n2. 用数据和事实讨论：性能、成本、工期、风险、可维护性。\n3. 列出方案对比和取舍，必要时做小原型或压测验证。\n4. 对事不对人，不贴标签；如果仍无法达成一致，升级给负责人决策。\n5. 决策后全力执行，保留不同意见但不在背后抱怨。\n6. 事后复盘，沉淀成团队规范。',
    explanation: '记忆要点：对齐目标 → 数据说话 → 方案对比 → 升级决策 → 执行 → 复盘。'
  },
  {
    id: 'hr-09',
    level: '中',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'open',
    question: '你的职业规划是什么？',
    options: [],
    answerText: '1. 短期 1-2 年：在 Java 后端体系规范的团队里做扎实，独立负责核心模块，把 Spring、JVM、数据库和中间件从“会用”做到“能定位、能优化”。\n2. 中期 3-5 年：往技术骨干/资深后端走，能负责系统设计和技术选型，带小团队做项目。\n3. 方向：在高并发、分布式、数据一致性等方向形成专长。\n4. 保持学习习惯，把 AI 工具用在工程效率上，但核心还是后端基本功。\n5. 希望和公司长期发展，不是短期过渡。',
    explanation: '记忆要点：短期深耕 → 中期骨干 → 专长方向 → 长期稳定。不要说“三年当架构师”这种空话。'
  },
  {
    id: 'hr-10',
    level: '中',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'open',
    question: '面试最后，你有什么想问我的？',
    options: [],
    answerText: '1. 团队：目前团队规模、分工、我进来负责哪块业务。\n2. 技术：团队的技术栈、架构演进方向、最大的技术挑战。\n3. 流程：需求到上线的流程、代码 review、测试和发布机制。\n4. 成长：新人培养、技术分享、晋升机制。\n5. 业务：公司/业务线的发展阶段和近期目标。\n6. 流程性问题：面试流程、多久出结果、后续还有几轮。',
    explanation: '记忆要点：团队、技术、流程、成长、业务、流程。不要第一句就问加班和薪资。'
  },
  {
    id: 'hr-11',
    level: '高',
    difficulty: '进阶',
    category: '项目与 HR',
    type: 'single',
    question: '面试官问期望薪资，比较稳妥的回答方式是？',
    options: [
      '直接报一个最低价，显得有诚意',
      '先说“都可以”，让公司定',
      '先了解岗位预算和薪酬结构，再给出区间和理由',
      '报一个远高于市场的价格，方便砍价'
    ],
    answer: [2],
    explanation: '先问预算不等于失礼；给出区间时说明依据（年限、技术栈、岗位职责、城市水平），并表达对成长空间的重视。不要第一个报死数，也不要说“都可以”。'
  },
  {
    id: 'hr-12',
    level: '中',
    difficulty: '基础',
    category: '项目与 HR',
    type: 'multiple',
    question: 'Java 后端面试的常见避坑做法有哪些？',
    options: [
      '不会就说不会，别硬编',
      '简历上的数字要能拆开解释',
      '不贬低前公司和同事',
      '把没做过的项目说成自己主导的'
    ],
    answer: [0, 1, 2],
    explanation: '编造项目经不起第二问，是面试大忌。可以主动暴露边界：“这块我没在生产上做过，但我的理解是……”。'
  },

  /* ==================== 十五、计算机网络与操作系统 ==================== */
  {
    id: 'cs-01',
    level: '高',
    difficulty: '基础',
    category: '计算机网络与操作系统',
    type: 'single',
    question: 'TCP 三次握手的正确顺序是？',
    options: [
      'SYN → SYN+ACK → ACK',
      'SYN → ACK → SYN+ACK',
      'ACK → SYN → SYN+ACK',
      'SYN+ACK → SYN → ACK'
    ],
    answer: [0],
    explanation: '三次握手确认双方收发能力正常并同步序列号；两次不够，因为服务端无法确认客户端收到了自己的 SYN。'
  },
  {
    id: 'cs-02',
    level: '中',
    difficulty: '基础',
    category: '计算机网络与操作系统',
    type: 'single',
    question: 'TCP 和 UDP 的核心区别是？',
    options: [
      'TCP 面向连接、可靠、字节流；UDP 无连接、不可靠、面向报文',
      'TCP 不可靠，UDP 可靠',
      '两者都是面向连接',
      'UDP 有拥塞控制'
    ],
    answer: [0],
    explanation: 'TCP 有握手、重传、流量控制、拥塞控制，适合文件传输和 Web；UDP 开销小、延迟低，适合视频、游戏、DNS。'
  },
  {
    id: 'cs-03',
    level: '中',
    difficulty: '基础',
    category: '计算机网络与操作系统',
    type: 'single',
    question: 'HTTP 状态码 401 和 403 的区别是？',
    options: [
      '401 是未认证，403 是已认证但无权限',
      '401 是无权限，403 是未认证',
      '两者完全一样',
      '401 表示服务器错误'
    ],
    answer: [0],
    explanation: '401 Unauthorized 表示缺少或无效的身份凭证；403 Forbidden 表示身份已识别但无权访问。500 是服务端内部错误，502 是网关收到上游无效响应，504 是网关超时。'
  },
  {
    id: 'cs-04',
    level: '中',
    difficulty: '进阶',
    category: '计算机网络与操作系统',
    type: 'single',
    question: 'HTTPS 如何保证传输安全？',
    options: [
      '全程使用非对称加密',
      '握手阶段用非对称加密协商出对称密钥，之后用对称加密传输，证书防中间人',
      '只靠 Base64 编码',
      '只靠 HTTP 头加密'
    ],
    answer: [1],
    explanation: '非对称加密安全但慢，所以只用来协商对称密钥；对称加密速度快，用于传输数据；数字证书由 CA 签发，防止公钥被替换。'
  },
  {
    id: 'cs-05',
    level: '中',
    difficulty: '基础',
    category: '计算机网络与操作系统',
    type: 'single',
    question: '浏览器输入域名后，第一步通常做什么？',
    options: ['建立 TCP 连接', 'DNS 解析域名得到 IP', '发送 HTTP 请求', '渲染页面'],
    answer: [1],
    explanation: '先查浏览器缓存、系统 hosts、本地 DNS，再逐级查询根/顶级/权威 DNS 拿到 IP，然后才建立连接。'
  },
  {
    id: 'cs-06',
    level: '中',
    difficulty: '基础',
    category: '计算机网络与操作系统',
    type: 'single',
    question: '进程和线程的关系，说法正确的是？',
    options: [
      '进程是资源分配的基本单位，线程是 CPU 调度的基本单位',
      '线程是资源分配的基本单位',
      '一个进程只能有一个线程',
      '线程之间不共享内存'
    ],
    answer: [0],
    explanation: '同一进程的线程共享堆和方法区，各自有独立的栈和程序计数器；线程切换比进程轻量，但一个线程崩溃可能影响整个进程。'
  },
  {
    id: 'cs-07',
    level: '中',
    difficulty: '进阶',
    category: '计算机网络与操作系统',
    type: 'multiple',
    question: '关于 IO 多路复用，说法正确的有？',
    options: [
      'select/poll 需要遍历文件描述符，epoll 基于事件回调',
      'epoll 适合大量连接、少量活跃的场景',
      'Redis 和 Nginx 都使用了 IO 多路复用',
      'IO 多路复用会让单个请求变成并行执行'
    ],
    answer: [0, 1, 2],
    explanation: 'IO 多路复用让一个线程管理多个连接，但事件处理仍是单线程/串行（除非配合线程池）。它提升的是连接管理效率，不是单请求并行度。'
  },
  {
    id: 'cs-08',
    level: '低',
    difficulty: '进阶',
    category: '计算机网络与操作系统',
    type: 'judge',
    question: 'TCP 主动关闭方进入 TIME_WAIT 并等待 2MSL，是为了保证最后一个 ACK 能到达，并让旧连接的报文在网络中消失。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: '如果最后一个 ACK 丢了，对方会重发 FIN，TIME_WAIT 状态下还能再回 ACK；等待 2MSL 也能避免旧连接的重复报文干扰新连接。'
  },
  {
    id: 'cs-09',
    level: '低',
    difficulty: '基础',
    category: '计算机网络与操作系统',
    type: 'judge',
    question: 'HTTP 是无状态协议，所以服务端必须借助 Cookie、Session 或 Token 来维持登录状态。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: 'HTTP 本身不记录请求之间的状态；Cookie 存在客户端，Session 存在服务端（靠 SessionId 关联），Token 把状态签名后交给客户端。'
  },
  {
    id: 'cs-10',
    level: '高',
    difficulty: '高难',
    category: '计算机网络与操作系统',
    type: 'open',
    question: '从浏览器输入 URL 到页面展示，中间发生了什么？',
    options: [],
    answerText: '1. URL 解析：补全协议、域名、端口、路径，检查缓存和 HSTS。\n2. DNS 解析：浏览器缓存 → 系统 hosts → 本地 DNS → 根/顶级/权威 DNS，拿到 IP。\n3. 建立连接：TCP 三次握手；HTTPS 还要 TLS 握手，校验证书并协商对称密钥。\n4. 发送 HTTP 请求：请求行、请求头、请求体；可能经过 CDN、负载均衡、网关。\n5. 服务端处理：路由 → 业务逻辑 → 数据库/缓存 → 返回响应。\n6. 浏览器解析：HTML → DOM，CSS → CSSOM，合并成渲染树，布局、绘制、合成。\n7. 加载静态资源、执行 JS，可能触发重新渲染；页面可交互。\n8. 连接复用或关闭，后续请求可能走缓存。',
    explanation: '记忆要点：URL → DNS → TCP/TLS → HTTP → 服务端 → 解析渲染 → 静态资源 → 可交互。能讲清 DNS、三次握手和渲染主流程即可。'
  }
  /* __END__ */
];
