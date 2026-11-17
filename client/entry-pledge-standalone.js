// 独立版启动引导（原「游玩前承诺」已移除）。
// 背景：本文件原本是「游玩前承诺」的闸门——必须逐字输入承诺并点「确认并进入」，
//       才会注入 client/gd.js 加载游戏引擎。现在改为进入页面即自动加载：
//       同一个脚本、同一条路径、同样是页面内相对路径 gd.js，只是不再弹窗、
//       不再需要输入承诺。
// 注意：本文件必须保持语法零风险（不写任何嵌套引号），因为一旦解析失败，
//       gd.js 就不会被注入，表现为进游戏后一直黑屏。
(function () {
  'use strict';
  // 1) 移除承诺对话框，确保任何情况下都不会再显示（含兜底隐藏）。
  var dialog = document.getElementById('entry-pledge-dialog');
  if (dialog) {
    try { dialog.parentNode.removeChild(dialog); } catch (e) { dialog.style.display = 'none'; }
  }
  // 2) 防止重复注入（例如页面被往返缓存恢复后再次执行）。
  if (document.getElementById('worldol-client-boot')) return;
  // 3) 立即加载游戏引擎。
  var boot = document.createElement('script');
  boot.id = 'worldol-client-boot';
  boot.src = 'gd.js';
  boot.onerror = function () {
    if (boot.parentNode) boot.parentNode.removeChild(boot);
    var el = document.getElementById('standalone-loading');
    if (!el) {
      el = document.createElement('div');
      el.id = 'standalone-loading';
      document.body.appendChild(el);
    }
    el.textContent = '游戏资源加载失败：请重新打开游戏。';
  };
  document.body.appendChild(boot);
})();
