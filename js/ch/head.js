// 默认语言：中文
var urls = [
    { "url": "/ch/home.html", "title": "首页"},
    { "url": "/ch/reward.html", "title": "关于长期贡献奖"},
    { "url": "/ch/thanks.html", "title": "感谢信"},
    { "url": "/ch/gift.html", "title": "礼品中心"},
    { "url": "/ch/order.html", "title": "订购流程"},
    { "url": "/ch/chart.html", "title": "讨论专区"},
    { "url": "/ch/contact.html", "title": "联系我们"}
];
var title = `<div class="logo fl"></div><div class="list">`;
for (var i = 0, length = urls.length; i < length; i++) {
    let item = urls[i];
    let url = item.url;
    let className = getTitleName(url);
    if (location.href.indexOf(url) > -1) {
        className += ` active`;
    }
    title += `<a href="${url}" class="${className}">
        <span>${item.title}</span>
    </a>`;
}
title += `<div id="languageBox"><span>欢迎您，<b>潘浩</b><span class="logout">退出</span></span><span>切换语言:</span><select id="language">
        <option value ="ch">中文</option>
        <option value ="en">英文</option>
    </select></div>
</div>`;
document.getElementById("title").innerHTML = title;


function getTitleName (url) {
    let lastIndex = url.lastIndexOf("/");
    return url.slice(lastIndex + 1).split(".")[0];
}

let language = document.getElementById("language");
language.onchange = function () {
    let index = language.selectedIndex; // 选中索引
    let value = language.options[index].value; // 选中值
    if (value === "en") {
        let url = location.href;
        location.href = url.replace("/ch/", "/en/");
    }
}