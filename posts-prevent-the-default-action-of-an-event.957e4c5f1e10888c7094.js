(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{nPe5:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),o=t("Ov9x"),r=t("2G++");e.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{content:"\n## 1. Return `false` for the `on<event>`\n\n~~~ javascript\nele.onclick = function(e) {\n    // Do some thing\n    ...\n\n    return false;\n};\n~~~\n\nIt's same if you the inline attribute:\n\n~~~ html\n<form>\n    <button type=\"submit\" onclick=\"return false\">Click</button>\n</form>\n~~~\n\nI don't recommend this approach because\n* Returning `false` just doesn't make sense\n* It doesn't work with the [addEventListener()](/attach-or-detach-an-event-handler) method\n\n## 2. Use the `preventDefault()` method\n\nThis method works with inline attribute\n\n~~~ html\n<button type=\"submit\" onclick=\"event.preventDefault()\">Click</button>\n~~~\n\nand event handlers:\n\n~~~ javascript\nele.onclick = function(e) {\n    e.preventDefault();\n\n    // Do some thing\n    ...\n};\n\nele.addEventListener('click', function(e) {\n    e.preventDefault();\n    ...\n});\n~~~\n\n## Use cases\n\n1. Don't follow a link when clicking it. We often use this when creating tabs.\n2. Don't submit the form when clicking its submit button. For example, we want to validate the form first.\n3. Don't open a file or download the file when dragging and [dropping a file](/highlight-an-element-when-dragging-a-file-over-it) to a given area.\n4. Show a custom context menu when right-clicking an element.\n"}),i.a.createElement(r.a,{slugs:["allow-to-enter-particular-characters-only","attach-or-detach-an-event-handler","paste-as-plain-text","press-shift-and-enter-for-a-new-line"]}))}}}]);
//# sourceMappingURL=posts-prevent-the-default-action-of-an-event.957e4c5f1e10888c7094.js.map