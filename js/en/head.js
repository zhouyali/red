// 默认语言：英文
var urls = [
    { "url": "/en/home.html", "title": "home" },
    { "url": "/en/reward.html", "title": "reward" },
    { "url": "/en/thanks.html", "title": "thanks" },
    { "url": "/en/gift.html", "title": "gift" },
    { "url": "/en/order.html", "title": "order" },
    { "url": "/en/chart.html", "title": "chart" },
    { "url": "/en/contact.html", "title": "contact" }
];
var title = `<div class="logo fl"></div><div id="list" class="list">`;
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
title += `<select id="language">
        <option value ="en">english</option>
        <option value ="ch">china</option>
    </select>
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
    if (value === "ch") {
        let url = location.href;
        location.href = url.replace("/en/", "/ch/");
    }
}