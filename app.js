// ===== 食谱库 =====
// 想改内容：直接改这里的 name / desc / ingredients / steps 即可。
// img 填图片路径；没有图片时用 emoji + gradient 自动生成漂亮占位图。
const RECIPES = {
  1: { name: "红烧肉", category: "家常菜", stars: 5, minutes: 90, time: "90 分钟", difficulty: "中等", servings: "3 人份",
       desc: "肥而不腻、入口即化的经典家常硬菜。", tags: ["下饭菜", "宴客", "经典"],
       img: "images/shipu.jpg", emoji: "🍖", gradient: "linear-gradient(135deg,#FF9A62,#E8602C)",
       ingredients: [["五花肉","500g"],["冰糖","30g"],["生抽","2 勺"],["老抽","1 勺"],["料酒","2 勺"],["姜、葱","适量"],["八角、桂皮","少许"]],
       steps: ["五花肉切块，冷水下锅加料酒焯水，捞出沥干。","锅中放少许油，下冰糖小火炒出糖色，倒入五花肉翻炒上色。","加入姜片、葱段、八角、桂皮，倒入生抽、老抽和热水没过肉。","大火烧开后转小火炖 1 小时，最后大火收汁即可。"] },
  2: { name: "番茄炒蛋", category: "家常菜", stars: 5, minutes: 10, time: "10 分钟", difficulty: "简单", servings: "2 人份",
       desc: "酸甜开胃，五分钟就能搞定的国民下饭菜。", tags: ["快手", "下饭菜", "家常"],
       emoji: "🍅", gradient: "linear-gradient(135deg,#FF8A8A,#FF4D4D)",
       ingredients: [["番茄","2 个"],["鸡蛋","3 个"],["盐","少许"],["糖","1 小勺"],["葱花","少许"]],
       steps: ["番茄切块，鸡蛋打散加少许盐搅匀。","热油倒入蛋液，凝固后划散盛出备用。","锅中留底油，下番茄炒出汁，加糖和盐调味。","倒回鸡蛋翻炒均匀，撒葱花出锅。"] },
  3: { name: "清蒸鲈鱼", category: "家常菜", stars: 5, minutes: 25, time: "25 分钟", difficulty: "简单", servings: "2 人份",
       desc: "鲜嫩清淡，最大程度保留鱼本身的鲜美。", tags: ["清淡", "高蛋白", "健康"],
       emoji: "🐟", gradient: "linear-gradient(135deg,#7EC8F0,#4A90D9)",
       ingredients: [["鲈鱼","1 条"],["姜","适量"],["葱","2 根"],["蒸鱼豉油","3 勺"],["料酒","1 勺"]],
       steps: ["鲈鱼处理干净，两面划花刀，用料酒和姜片腌 10 分钟。","水开后上锅大火蒸 8 分钟，关火再焖 2 分钟。","倒掉盘底汤汁，铺上葱丝，淋上蒸鱼豉油。","烧热一勺油，浇在葱丝上激出香味即可。"] },
  4: { name: "玉米排骨汤", category: "汤羹", stars: 4, minutes: 90, time: "90 分钟", difficulty: "简单", servings: "4 人份",
       desc: "清甜滋润，玉米的甜香融入浓郁的骨汤。", tags: ["滋补", "汤羹", "营养"],
       emoji: "🌽", gradient: "linear-gradient(135deg,#FFD86B,#FFA726)",
       ingredients: [["排骨","500g"],["玉米","2 根"],["胡萝卜","1 根"],["姜","3 片"],["盐","适量"]],
       steps: ["排骨冷水下锅焯水，撇去浮沫后捞出洗净。","玉米切段，胡萝卜切滚刀块。","排骨、玉米、胡萝卜、姜片一起放入锅中，加足量清水。","大火烧开转小火炖 1 小时，出锅前加盐调味。"] },
  5: { name: "番茄牛腩汤", category: "汤羹", stars: 5, minutes: 120, time: "120 分钟", difficulty: "中等", servings: "4 人份",
       desc: "浓郁酸甜，牛腩软烂入味，拌饭一绝。", tags: ["浓郁", "汤羹", "下饭"],
       emoji: "🍲", gradient: "linear-gradient(135deg,#FFB199,#E85D3A)",
       ingredients: [["牛腩","600g"],["番茄","3 个"],["洋葱","半个"],["番茄酱","2 勺"],["姜、香叶","适量"],["盐、糖","适量"]],
       steps: ["牛腩切块焯水，番茄去皮切块，洋葱切丝。","热油下洋葱炒香，加番茄炒出汁，加番茄酱。","放入牛腩翻炒，加足量热水和香叶、姜片。","小火炖 1.5 小时至软烂，加盐、糖调味。"] },
  6: { name: "蛋炒饭", category: "主食", stars: 4, minutes: 10, time: "10 分钟", difficulty: "简单", servings: "1 人份",
       desc: "粒粒分明，简单却最考验火候的家常美味。", tags: ["快手", "主食", "剩饭"],
       emoji: "🍚", gradient: "linear-gradient(135deg,#FFE082,#FFB300)",
       ingredients: [["隔夜米饭","1 碗"],["鸡蛋","2 个"],["火腿/葱花","适量"],["盐","少许"],["生抽","1 小勺"]],
       steps: ["鸡蛋打散，火腿切丁，米饭提前打散。","热油炒蛋，凝固后盛出。","下米饭大火翻炒，炒至粒粒分明。","倒回鸡蛋和火腿，加盐、生抽、葱花炒匀。"] },
  7: { name: "葱油拌面", category: "主食", stars: 5, minutes: 15, time: "15 分钟", difficulty: "简单", servings: "1 人份",
       desc: "葱香四溢，酱汁咸鲜回甘，几分钟就能上桌。", tags: ["快手", "主食", "面条"],
       emoji: "🍜", gradient: "linear-gradient(135deg,#C9A96E,#8B6B3F)",
       ingredients: [["面条","1 把"],["小葱","5 根"],["生抽","2 勺"],["老抽","1 勺"],["糖","1 小勺"],["食用油","3 勺"]],
       steps: ["小葱切段，锅中倒油小火慢炸至葱段焦黄，捞出。","关火后加入生抽、老抽、糖，搅匀成葱油酱汁。","面条煮熟捞出，过一下凉水更筋道。","淋上葱油酱汁，撒上炸好的葱段拌匀。"] },
  8: { name: "杨枝甘露", category: "甜品", stars: 5, minutes: 20, time: "20 分钟", difficulty: "简单", servings: "2 人份",
       desc: "芒果、西柚、椰奶的经典组合，清甜不腻。", tags: ["甜品", "清爽", "夏日"],
       emoji: "🥭", gradient: "linear-gradient(135deg,#FFE082,#FF8A65)",
       ingredients: [["芒果","2 个"],["西柚","半个"],["椰浆","200ml"],["牛奶","100ml"],["西米","50g"]],
       steps: ["西米煮至透明，过凉水备用。","一个芒果切块加椰浆、牛奶打成泥。","另一个芒果切丁，西柚剥出果肉。","碗底放西米，倒入芒果椰奶泥，铺上芒果丁和西柚粒。"] },
  9: { name: "蒜蓉西兰花", category: "素食", stars: 4, minutes: 10, time: "10 分钟", difficulty: "简单", servings: "2 人份",
       desc: "清爽脆嫩，蒜香浓郁，减脂期的好搭档。", tags: ["素食", "减脂", "清淡"],
       emoji: "🥦", gradient: "linear-gradient(135deg,#66BB6A,#2E7D32)",
       ingredients: [["西兰花","1 颗"],["大蒜","4 瓣"],["盐","适量"],["蚝油","1 勺"],["食用油","适量"]],
       steps: ["西兰花掰小朵，盐水浸泡后焯水 1 分钟捞出。","大蒜切末，热油爆香蒜末。","下西兰花大火翻炒，加盐和蚝油。","翻炒均匀即可出锅。"] },
  10:{ name: "凉拌黄瓜", category: "素食", stars: 4, minutes: 8, time: "8 分钟", difficulty: "简单", servings: "2 人份",
       desc: "爽脆解腻，酸辣开胃，夏日的开胃小菜。", tags: ["凉菜", "开胃", "快手"],
       emoji: "🥒", gradient: "linear-gradient(135deg,#81C784,#43A047)",
       ingredients: [["黄瓜","2 根"],["大蒜","3 瓣"],["香醋","2 勺"],["生抽","1 勺"],["辣椒油","1 勺"],["盐、糖","适量"]],
       steps: ["黄瓜拍碎切段，加少许盐腌 5 分钟倒掉水分。","蒜末、香醋、生抽、辣椒油、糖调成料汁。","料汁倒入黄瓜拌匀，冷藏一下风味更佳。"] },
};

// ===== 一周食谱计划（周一 ~ 周日） =====
const MEALS_META = [
  { name: "早餐", emoji: "🌅" },
  { name: "午餐", emoji: "☀️" },
  { name: "晚餐", emoji: "🌙" },
];

const WEEK = [
  { day: "周一", meals: [[6], [2, 10], [4]] },
  { day: "周二", meals: [[7], [1, 9], [3]] },
  { day: "周三", meals: [[6], [5], [7, 10]] },
  { day: "周四", meals: [[6], [3, 9], [4]] },
  { day: "周五", meals: [[7], [1, 2], [5]] },
  { day: "周六", meals: [[8], [1, 10], [7]] },
  { day: "周日", meals: [[6], [5, 9], [3, 8]] },
];

// ===== 状态 =====
let pickRecipe = null;

// ===== DOM =====
const dayStripEl = document.getElementById("dayStrip");
const mealsEl = document.getElementById("meals");
const summaryEl = document.getElementById("daySummary");
const heroDateEl = document.getElementById("heroDate");
const overlay = document.getElementById("detailOverlay");
const detailContent = document.getElementById("detailContent");
const detailClose = document.getElementById("detailClose");
const shuffleBtn = document.getElementById("shuffleBtn");
const pickOverlay = document.getElementById("pickOverlay");
const pickClose = document.getElementById("pickClose");
const pickAgain = document.getElementById("pickAgain");
const pickDetail = document.getElementById("pickDetail");
const pickEmoji = document.getElementById("pickEmoji");
const pickTitle = document.getElementById("pickTitle");
const pickDesc = document.getElementById("pickDesc");
const pickMeta = document.getElementById("pickMeta");

// ===== 日期计算（本周一 ~ 周日） =====
function buildWeek() {
  const now = new Date();
  const wd = now.getDay(); // 0=周日 1=周一 ...
  const monday = new Date(now);
  monday.setDate(now.getDate() - (wd === 0 ? 6 : wd - 1));
  const week = WEEK.map((w, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      day: w.day,
      meals: w.meals,
      date: `${d.getMonth() + 1}.${d.getDate()}`,
      isToday: (wd === 0 ? 6 : wd - 1) === i,
    };
  });
  const today = week.find((w) => w.isToday);
  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  heroDateEl.textContent = `${now.getMonth() + 1}月${now.getDate()}日 · ${weekdays[wd]}`;
  return week;
}

const WEEKDAYS = buildWeek();
let currentDay = WEEKDAYS.findIndex((w) => w.isToday);

// ===== 星期条 =====
function renderDayStrip() {
  dayStripEl.innerHTML = WEEKDAYS.map((w, i) => `
    <button class="day-item ${i === currentDay ? "active" : ""}" data-i="${i}">
      <div class="day-name">${w.isToday ? "今天" : w.day}</div>
      <div class="day-date">${w.date}</div>
      <div class="day-today">${w.isToday ? "●" : ""}</div>
    </button>
  `).join("");
}

// ===== 卡片 / 详情 =====
function thumb(r) {
  return r.img ? `<img src="${r.img}" alt="${r.name}" loading="lazy" />` : `<span class="emoji">${r.emoji}</span>`;
}
function starsHTML(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function cardHTML(id) {
  const r = RECIPES[id];
  return `
    <article class="recipe-card" data-id="${id}">
      <div class="recipe-thumb" style="${r.img ? "" : `background:${r.gradient}`}">
        ${thumb(r)}
        <span class="badge">${r.category}</span>
      </div>
      <div class="recipe-body">
        <div class="recipe-top">
          <h3 class="recipe-title">${r.name}</h3>
          <span class="recipe-stars">${starsHTML(r.stars)}</span>
        </div>
        <p class="recipe-desc">${r.desc}</p>
        <div class="recipe-meta">
          <span>⏱ ${r.time}</span><span class="dot">·</span>
          <span>${r.difficulty}</span><span class="dot">·</span>
          <span>${r.servings}</span>
        </div>
        <div class="recipe-tags">${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>`;
}

// ===== 渲染当日食谱 =====
function renderMeals() {
  const plan = WEEKDAYS[currentDay];
  const ids = plan.meals.flat();
  const totalMin = ids.reduce((s, id) => s + RECIPES[id].minutes, 0);

  summaryEl.innerHTML = `
    <span class="summary-chip">🥗 共 <b>${ids.length}</b> 道菜</span>
    <span class="summary-chip">⏱ 约 <b>${totalMin}</b> 分钟</span>
    <span class="summary-chip">${plan.isToday ? "🍚 今天也要好好吃饭" : "🍚 提前备菜更从容"}</span>
  `;

  mealsEl.innerHTML = plan.meals
    .map((mealIds, mi) => {
      const meta = MEALS_META[mi];
      const cards = mealIds.map(cardHTML).join("");
      return `
        <section class="meal-section">
          <div class="meal-head">
            <span class="meal-emoji">${meta.emoji}</span>
            <span class="meal-name">${meta.name}</span>
            <span class="meal-count">${mealIds.length} 道</span>
          </div>
          ${cards}
        </section>`;
    })
    .join("");
}

// ===== 详情页 =====
function openDetail(id) {
  const r = RECIPES[id];
  if (!r) return;
  detailContent.innerHTML = `
    <div class="detail-hero" style="${r.img ? "" : `background:${r.gradient}`}">
      ${thumb(r)}
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
          ${r.ingredients.map(([n, a]) => `<span class="ingredient">${n}<span class="amount">${a}</span></span>`).join("")}
        </div>
      </div>
      <div class="section">
        <h3 class="section-title">步骤</h3>
        ${r.steps.map((s, i) => `<div class="step"><span class="step-num">${i + 1}</span><p class="step-text">${s}</p></div>`).join("")}
      </div>
      <div class="section">
        <h3 class="section-title">标签</h3>
        <div class="detail-tags">${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>`;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeDetail() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ===== 随机「今天吃什么」 =====
function rollPick() {
  const ids = WEEKDAYS[currentDay].meals.flat();
  pickRecipe = ids[Math.floor(Math.random() * ids.length)];
  const r = RECIPES[pickRecipe];
  pickEmoji.textContent = r.emoji;
  pickTitle.textContent = r.name;
  pickDesc.textContent = r.desc;
  pickMeta.textContent = `⏱ ${r.time} · ${r.difficulty} · ${r.servings}`;
}
function openPick() {
  rollPick();
  pickOverlay.classList.add("open");
  pickOverlay.setAttribute("aria-hidden", "false");
}
function closePick() {
  pickOverlay.classList.remove("open");
  pickOverlay.setAttribute("aria-hidden", "true");
}

// ===== 事件 =====
dayStripEl.addEventListener("click", (e) => {
  const item = e.target.closest(".day-item");
  if (!item) return;
  currentDay = Number(item.dataset.i);
  renderDayStrip();
  renderMeals();
});

mealsEl.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-card");
  if (card) openDetail(Number(card.dataset.id));
});

detailClose.addEventListener("click", closeDetail);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeDetail(); });

shuffleBtn.addEventListener("click", openPick);
pickClose.addEventListener("click", closePick);
pickOverlay.addEventListener("click", (e) => { if (e.target === pickOverlay) closePick(); });
pickAgain.addEventListener("click", rollPick);
pickDetail.addEventListener("click", () => {
  if (pickRecipe) {
    closePick();
    openDetail(pickRecipe);
  }
});

// ===== 初始化 =====
renderDayStrip();
renderMeals();

// ===== 注册 Service Worker（离线支持） =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
