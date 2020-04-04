(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"/EbE":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),o=n("mcK/"),r=n("Ov9x"),d=n("2G++");t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{content:"\nAssume that we want to have a placeholder for given `contenteditable` element:\n\n~~~ html\n<div contenteditable></div>\n~~~\n\n## 1. Use the `:empty` selector\n\nWe use a custom attribute, `data-placeholder`, to set the placeholder:\n\n~~~ html\n<div class=\"editable\" contenteditable data-placeholder=\"Edit me\"></div>\n~~~\n\nThe attribute will be shown when the element value is empty:\n\n~~~ css\n.editable:empty:before {\n    content: attr(data-placeholder);\n}\n~~~\n\n## 2. Handle the events\n\nFirst, we add the `id` and `data-placeholder` attributes to the element as following:\n\n~~~ html\n<div contenteditable data-placeholder=\"Edit me\" id=\"editMe\"></div>\n~~~\n\nWhen users focus on the element, we will reset its content if it's the same as the placeholder.\nAlso, when the element loses its focus, its content will be set back to the placeholder if users don't enter anything.\n\n~~~ javascript\nconst ele = document.getElementById('editMe');\n\n// Get the placeholder attribute\nconst placeholder = ele.getAttribute('data-placeholder');\n\n// Set the placeholder as initial content if it's empty\n(ele.innerHTML === '') && (ele.innerHTML = placeholder);\n\nele.addEventListener('focus', function(e) {\n    const value = e.target.innerHTML;\n    value === placeholder && (e.target.innerHTML = '');\n});\n\nele.addEventListener('blur', function(e) {\n    const value = e.target.innerHTML;\n    value === '' && (e.target.innerHTML = placeholder);\n});\n~~~\n"}),l.a.createElement(o.a,{src:"/demo/placeholder-for-a-contenteditable-element/index.html"}),l.a.createElement(d.a,{slugs:["attach-or-detach-an-event-handler","get-or-set-the-html-of-an-element","get-set-and-remove-attributes"]}))}}}]);
//# sourceMappingURL=posts-placeholder-for-a-contenteditable-element.2b5e21cef948947dfd09.js.map