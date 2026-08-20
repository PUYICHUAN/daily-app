// ===== 食谱数据 =====
// 想换掉内容：直接改这里的 name / desc / ingredients / steps 即可。
// img 字段填图片路径（如 "images/xxx.jpg"）；没有图片时用 emoji + gradient 自动生成漂亮占位图。
const RECIPES = [
  {
    id: 1,
    name: "红烧肉",
    category: "家常菜",
    desc: "肥而不腻、入口即化的经典家常硬菜。",
    time: "90 分钟",
    difficulty: "中等",
    servings: "3 人份",
    tags: ["下饭菜", "宴客", "经典"],
    img: "images/shipu.jpg",
    emoji: "🍖",
    gradient: "linear-gradient(135deg, #FF9A62, #E8602C)",
    ingredients: [
      { name: "五花肉", amount: "500g" },
      { name: "冰糖", amount: "30g" },
      { name: "生抽", amount: "2 勺" },
      { name: "老抽", amount: "1 勺" },
      { name: "料酒", amount: "2 勺" },
      { name: "姜、葱", amount: "适量" },
      { name: "八角、桂皮", amount: "少许" },
    ],
    steps: [
      "五花肉切块，冷水下锅加料酒焯水，捞出沥干。",
      "锅中放少许油，下冰糖小火炒出糖色，倒入五花肉翻炒上色。",
      "加入姜片、葱段、八角、桂皮，倒入生抽、老抽和热水没过肉。",
      "大火烧开后转小火炖 1 小时，最后大火收汁即可。",
    ],
  },
  {
    id: 2,
    name: "番茄炒蛋",
    category: "家常菜",
    desc: "酸甜开胃，五分钟就能搞定的国民下饭菜。",
    time: "10 分钟",
    difficulty: "简单",
    servings: "2 人份",
    tags: ["快手", "下饭菜", "家常"],
    emoji: "🍅",
    gradient: "linear-gradient(135deg, #FF8A8A, #FF4D4D)",
    ingredients: [
      { name: "番茄", amount: "2 个" },
      { name: "鸡蛋", amount: "3 个" },
      { name: "盐", amount: "少许" },
      { name: "糖", amount: "1 小勺" },
      { name: "葱花", amount: "少许" },
    ],
    steps: [
      "番茄切块，鸡蛋打散加少许盐搅匀。",
      "热油倒入蛋液，凝固后划散盛出备用。",
      "锅中留底油，下番茄炒出汁，加糖和盐调味。",
      "倒回鸡蛋翻炒均匀，撒葱花出锅。",
    ],
  },
  {
    id: 3,
    name: "清蒸鲈鱼",
    category: "家常菜",
    desc: "鲜嫩清淡，最大程度保留鱼本身的鲜美。",
    time: "25 分钟",
    difficulty: "简单",
    servings: "2 人份",
    tags: ["清淡", "高蛋白", "健康"],
    emoji: "🐟",
    gradient: "linear-gradient(135deg, #7EC8F0, #4A90D9)",
    ingredients: [
      { name: "鲈鱼", amount: "1 条" },
      { name: "姜", amount: "适量" },
      { name: "葱", amount: "2 根" },
      { name: "蒸鱼豉油", amount: "3 勺" },
      { name: "料酒", amount: "1 勺" },
    ],
    steps: [
      "鲈鱼处理干净，两面划花刀，用料酒和姜片腌 10 分钟。",
      "水开后上锅大火蒸 8 分钟，关火再焖 2 分钟。",
      "倒掉盘底汤汁，铺上葱丝，淋上蒸鱼豉油。",
      "烧热一勺油，浇在葱丝上激出香味即可。",
    ],
  },
  {
    id: 4,
    name: "玉米排骨汤",
    category: "汤羹",
    desc: "清甜滋润，玉米的甜香融入浓郁的骨汤。",
    time: "90 分钟",
    difficulty: "简单",
    servings: "4 人份",
    tags: ["滋补", "汤羹", "营养"],
    emoji: "🌽",
    gradient: "linear-gradient(135deg, #FFD86B, #FFA726)",
    ingredients: [
      { name: "排骨", amount: "500g" },
      { name: "玉米", amount: "2 根" },
      { name: "胡萝卜", amount: "1 根" },
      { name: "姜", amount: "3 片" },
      { name: "盐", amount: "适量" },
    ],
    steps: [
      "排骨冷水下锅焯水，撇去浮沫后捞出洗净。",
      "玉米切段，胡萝卜切滚刀块。",
      "排骨、玉米、胡萝卜、姜片一起放入锅中，加足量清水。",
      "大火烧开转小火炖 1 小时，出锅前加盐调味。",
    ],
  },
  {
    id: 5,
    name: "番茄牛腩汤",
    category: "汤羹",
    desc: "浓郁酸甜，牛腩软烂入味，拌饭一绝。",
    time: "120 分钟",
    difficulty: "中等",
    servings: "4 人份",
    tags: ["浓郁", "汤羹", "下饭"],
    emoji: "🍲",
    gradient: "linear-gradient(135deg, #FFB199, #E85D3A)",
    ingredients: [
      { name: "牛腩", amount: "600g" },
      { name: "番茄", amount: "3 个" },
      { name: "洋葱", amount: "半个" },
      { name: "番茄酱", amount: "2 勺" },
      { name: "姜、香叶", amount: "适量" },
      { name: "盐、糖", amount: "适量" },
    ],
    steps: [
      "牛腩切块焯水，番茄去皮切块，洋葱切丝。",
      "热油下洋葱炒香，加番茄炒出汁，加番茄酱。",
      "放入牛腩翻炒，加足量热水和香叶、姜片。",
      "小火炖 1.5 小时至软烂，加盐、糖调味。",
    ],
  },
  {
    id: 6,
    name: "蛋炒饭",
    category: "主食",
    desc: "粒粒分明，简单却最考验火候的家常美味。",
    time: "10 分钟",
    difficulty: "简单",
    servings: "1 人份",
    tags: ["快手", "主食", "剩饭"],
    emoji: "🍚",
    gradient: "linear-gradient(135deg, #FFE082, #FFB300)",
    ingredients: [
      { name: "隔夜米饭", amount: "1 碗" },
      { name: "鸡蛋", amount: "2 个" },
      { name: "火腿/葱花", amount: "适量" },
      { name: "盐", amount: "少许" },
      { name: "生抽", amount: "1 小勺" },
    ],
    steps: [
      "鸡蛋打散，火腿切丁，米饭提前打散。",
      "热油炒蛋，凝固后盛出。",
      "下米饭大火翻炒，炒至粒粒分明。",
      "倒回鸡蛋和火腿，加盐、生抽、葱花炒匀。",
    ],
  },
  {
    id: 7,
    name: "葱油拌面",
    category: "主食",
    desc: "葱香四溢，酱汁咸鲜回甘，几分钟就能上桌。",
    time: "15 分钟",
    difficulty: "简单",
    servings: "1 人份",
    tags: ["快手", "主食", "面条"],
    emoji: "🍜",
    gradient: "linear-gradient(135deg, #C9A96E, #8B6B3F)",
    ingredients: [
      { name: "面条", amount: "1 把" },
      { name: "小葱", amount: "5 根" },
      { name: "生抽", amount: "2 勺" },
      { name: "老抽", amount: "1 勺" },
      { name: "糖", amount: "1 小勺" },
      { name: "食用油", amount: "3 勺" },
    ],
    steps: [
      "小葱切段，锅中倒油小火慢炸至葱段焦黄，捞出。",
      "关火后加入生抽、老抽、糖，搅匀成葱油酱汁。",
      "面条煮熟捞出，过一下凉水更筋道。",
      "淋上葱油酱汁，撒上炸好的葱段拌匀。",
    ],
  },
  {
    id: 8,
    name: "杨枝甘露",
    category: "甜品",
    desc: "芒果、西柚、椰奶的经典组合，清甜不腻。",
    time: "20 分钟",
    difficulty: "简单",
    servings: "2 人份",
    tags: ["甜品", "清爽", "夏日"],
    emoji: "🥭",
    gradient: "linear-gradient(135deg, #FFE082, #FF8A65)",
    ingredients: [
      { name: "芒果", amount: "2 个" },
      { name: "西柚", amount: "半个" },
      { name: "椰浆", amount: "200ml" },
      { name: "牛奶", amount: "100ml" },
      { name: "西米", amount: "50g" },
    ],
    steps: [
      "西米煮至透明，过凉水备用。",
      "一个芒果切块加椰浆、牛奶打成泥。",
      "另一个芒果切丁，西柚剥出果肉。",
      "碗底放西米，倒入芒果椰奶泥，铺上芒果丁和西柚粒。",
    ],
  },
  {
    id: 9,
    name: "蒜蓉西兰花",
    category: "素食",
    desc: "清爽脆嫩，蒜香浓郁，减脂期的好搭档。",
    time: "10 分钟",
    difficulty: "简单",
    servings: "2 人份",
    tags: ["素食", "减脂", "清淡"],
    emoji: "🥦",
    gradient: "linear-gradient(135deg, #66BB6A, #2E7D32)",
    ingredients: [
      { name: "西兰花", amount: "1 颗" },
      { name: "大蒜", amount: "4 瓣" },
      { name: "盐", amount: "适量" },
      { name: "蚝油", amount: "1 勺" },
      { name: "食用油", amount: "适量" },
    ],
    steps: [
      "西兰花掰小朵，盐水浸泡后焯水 1 分钟捞出。",
      "大蒜切末，热油爆香蒜末。",
      "下西兰花大火翻炒，加盐和蚝油。",
      "翻炒均匀即可出锅。",
    ],
  },
  {
    id: 10,
    name: "凉拌黄瓜",
    category: "素食",
    desc: "爽脆解腻，酸辣开胃，夏日的开胃小菜。",
    time: "8 分钟",
    difficulty: "简单",
    servings: "2 人份",
    tags: ["凉菜", "开胃", "快手"],
    emoji: "🥒",
    gradient: "linear-gradient(135deg, #81C784, #43A047)",
    ingredients: [
      { name: "黄瓜", amount: "2 根" },
      { name: "大蒜", amount: "3 瓣" },
      { name: "香醋", amount: "2 勺" },
      { name: "生抽", amount: "1 勺" },
      { name: "辣椒油", amount: "1 勺" },
      { name: "盐、糖", amount: "适量" },
    ],
    steps: [
      "黄瓜拍碎切段，加少许盐腌 5 分钟倒掉水分。",
      "蒜末、香醋、生抽、辣椒油、糖调成料汁。",
      "料汁倒入黄瓜拌匀，冷藏一下风味更佳。",
    ],
  },
];

const CATEGORIES = ["全部", "家常菜", "汤羹", "主食", "甜品", "素食"];

// ===== 状态 =====
let currentCategory = "全部";
let currentKeyword = "";

// ===== DOM 引用 =====
const listEl = document.getElementById("recipeList");
const chipsEl = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const emptyEl = document.getElementById("emptyState");
const overlay = document.getElementById("detailOverlay");
const detailContent = document.getElementById("detailContent");
const detailClose = document.getElementById("detailClose");

// ===== 分类标签渲染 =====
function renderChips() {
  chipsEl.innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="chip ${c === currentCategory ? "active" : ""}" data-category="${c}">${c}</button>`
  ).join("");
}

// ===== 卡片渲染 =====
function thumbHTML(r) {
  if (r.img) {
    return `<img src="${r.img}" alt="${r.name}" loading="lazy" />`;
  }
  return `<span class="emoji">${r.emoji}</span>`;
}

function renderList() {
  const filtered = RECIPES.filter((r) => {
    const matchCategory = currentCategory === "全部" || r.category === currentCategory;
    const kw = currentKeyword.trim();
    const matchKeyword =
      !kw ||
      r.name.includes(kw) ||
      r.desc.includes(kw) ||
      r.tags.some((t) => t.includes(kw)) ||
      r.ingredients.some((i) => i.name.includes(kw));
    return matchCategory && matchKeyword;
  });

  emptyEl.hidden = filtered.length > 0;

  listEl.innerHTML = filtered
    .map(
      (r, i) => `
      <article class="recipe-card" data-id="${r.id}" style="animation-delay:${Math.min(i * 0.04, 0.4)}s">
        <div class="recipe-thumb" style="${r.img ? "" : `background:${r.gradient}`}">
          ${thumbHTML(r)}
          <span class="badge">${r.category}</span>
        </div>
        <div class="recipe-body">
          <h3 class="recipe-title">${r.name}</h3>
          <p class="recipe-desc">${r.desc}</p>
          <div class="recipe-meta">
            <span class="time">⏱ ${r.time}</span>
            <span class="dot">·</span>
            <span>${r.difficulty}</span>
            <span class="dot">·</span>
            <span>${r.servings}</span>
          </div>
          <div class="recipe-tags">
            ${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>`
    )
    .join("");
}

// ===== 详情页 =====
function renderDetail(id) {
  const r = RECIPES.find((x) => x.id === id);
  if (!r) return;

  const hero =
    r.img
      ? `<img src="${r.img}" alt="${r.name}" />`
      : `<span class="emoji">${r.emoji}</span>`;

  detailContent.innerHTML = `
    <div class="detail-hero" style="${r.img ? "" : `background:${r.gradient}`}">
      ${hero}
      <h2 class="hero-title">${r.name}</h2>
    </div>
    <div class="detail-inner">
      <div class="detail-stats">
        <div class="stat"><div class="stat-label">时间</div><div class="stat-value">${r.time}</div></div>
        <div class="stat"><div class="stat-label">难度</div><div class="stat-value">${r.difficulty}</div></div>
        <div class="stat"><div class="stat-label">份量</div><div class="stat-value">${r.servings}</div></div>
      </div>

      <div class="section">
        <h3 class="section-title">简介</h3>
        <p class="detail-desc">${r.desc}</p>
      </div>

      <div class="section">
        <h3 class="section-title">食材</h3>
        <div class="ingredients">
          ${r.ingredients
            .map((i) => `<span class="ingredient">${i.name}<span class="amount">${i.amount}</span></span>`)
            .join("")}
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">步骤</h3>
        ${r.steps
          .map(
            (s, i) => `
            <div class="step">
              <span class="step-num">${i + 1}</span>
              <p class="step-text">${s}</p>
            </div>`
          )
          .join("")}
      </div>

      <div class="section">
        <h3 class="section-title">标签</h3>
        <div class="detail-tags">
          ${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ===== 事件绑定 =====
chipsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  currentCategory = chip.dataset.category;
  renderChips();
  renderList();
});

searchInput.addEventListener("input", () => {
  currentKeyword = searchInput.value;
  clearBtn.classList.toggle("visible", searchInput.value.length > 0);
  renderList();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentKeyword = "";
  clearBtn.classList.remove("visible");
  renderList();
  searchInput.focus();
});

listEl.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-card");
  if (card) renderDetail(Number(card.dataset.id));
});

detailClose.addEventListener("click", closeDetail);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeDetail();
});

// ===== 初始化 =====
renderChips();
renderList();

// ===== 注册 Service Worker（离线支持） =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
