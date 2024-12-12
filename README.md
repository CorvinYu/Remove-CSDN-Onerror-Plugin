# 自动移除 CSDN 网页 onerror 跳转插件

## 项目简介
本插件旨在自动移除 CSDN 离线保存的 HTML 文件或其子网站中存在的 `onerror` 脚本，以防止页面自动跳转至 CSDN 首页。

## 功能特点
- **移除 CSDN 跳转脚本**：自动检测并移除网页中嵌入的 `onerror` 跳转脚本。
- **自动运行**：无需手动触发，插件在访问相关页面时自动运行。

## 使用场景
**离线保存的 CSDN 网页**：
   - 通过浏览器保存的 CSDN 页面，打开后自动跳转至首页。
   - 安装本插件后，重新打开文件，跳转问题将自动解决。

## 安装方法

### 1. 手动安装
1. 下载并解压插件文件：
   - [点击此处下载插件](https://github.com/CorvinYu/Remove-CSDN-Onerror-Plugin/releases/download/v1.0/Remove.Onerror.Plugin.zip)（。
2. 打开 Chrome 浏览器，访问 `chrome://extensions/`。
3. 开启右上角的“开发者模式”。
4. 点击“加载已解压的扩展程序”，选择解压后的文件夹。
5. 加载完成后，插件会自动生效。

### 2. 从源码安装
1. 创建一个文件夹，将以下文件保存到文件夹中：
   - `manifest.json`
   - `content.js`

#### `manifest.json`
```json
{
  "manifest_version": 3,
  "name": "Auto Remove CSDN onerror Redirect",
  "version": "1.0",
  "description": "Automatically removes onerror redirect from CSDN pages and local HTML files.",
  "permissions": ["scripting", "activeTab"],
  "host_permissions": ["*://*.csdn.net/*", "file://*/*"],
  "content_scripts": [
    {
      "matches": ["*://*.csdn.net/*", "file://*/*"],
      "js": ["content.js"]
    }
  ]
}
```

#### `content.js`
```javascript
(function() {
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    if (img.hasAttribute('onerror') && /setTimeout\(.*window\.location\.href/.test(img.getAttribute('onerror'))) {
      img.removeAttribute('onerror');
    }
  });
  console.log("CSDN redirect removed or local file processed.");
})();
```

2. 打开 Chrome 浏览器，访问 `chrome://extensions/`。
3. 开启右上角的“开发者模式”。
4. 点击“加载已解压的扩展程序”，选择包含上述文件的文件夹。

## 如何使用
1. 安装插件后，打开任意 CSDN 子网站。
2. 插件会自动运行，并清除相关的 `onerror` 跳转逻辑。
3. 打开开发者工具（F12），在控制台中可看到日志输出：
   ```
CSDN redirect removed or local file processed.
```

## 许可证
本项目采用 [MIT 许可证](LICENSE) 开源，欢迎自由使用和修改。

## 贡献
如果您对插件有改进建议或发现问题，欢迎通过 [GitHub Issues](#) 提交反馈！

