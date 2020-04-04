(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"73fQ":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),l=n("TJpk"),r=n("mcK/"),d=n("Ov9x"),c=n("2G++");t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Helmet,null,o.a.createElement("meta",{name:"keywords",content:"\n            addRange, clipboardData, createTextNode, deleteContents, execCommand,\n            getRangeAt, getSelection, get text from clipboard, insertNode, insert text current position,\n            paste plain text, queryCommandSupported, removeAllRanges, selectNodeContents\n         "})),o.a.createElement(d.a,{content:"\nAssume that we have a `contenteditable` element as below:\n\n~~~ html\n<div contenteditable id=\"editor\"></div>\n~~~\n\nIn order to paste the plain text only in the element, we have to handle the `paste` event:\n\n~~~ javascript\nconst editorEle = document.getElementById('editor');\n\n// Handle the `paste` event\neditorEle.addEventListener('paste', function(e) {\n    // Prevent the default action\n    e.preventDefault();\n\n    // Get the copied text from the clipboard\n    const text = (e.clipboardData)\n        ? (e.originalEvent || e).clipboardData.getData('text/plain')\n        // For IE\n        : (window.clipboardData ? window.clipboardData.getData('Text') : '');\n    \n    if (document.queryCommandSupported('insertText')) {\n        document.execCommand('insertText', false, text);\n    } else {\n        // Insert text at the current position of caret\n        const range = document.getSelection().getRangeAt(0);\n        range.deleteContents();\n\n        const textNode = document.createTextNode(text);\n        range.insertNode(textNode);\n        range.selectNodeContents(textNode);\n        range.collapse(false);\n\n        const selection = window.getSelection();\n        selection.removeAllRanges();\n        selection.addRange(range);\n    }\n});\n~~~\n\nTry to paste some rich text in the following `contenteditable` element:\n"}),o.a.createElement(r.a,{src:"/demo/paste-as-plain-text/index.html"}),o.a.createElement(c.a,{slugs:["attach-or-detach-an-event-handler","copy-text-to-the-clipboard","create-an-element","prevent-the-default-action-of-an-event"]}))}}}]);
//# sourceMappingURL=posts-paste-as-plain-text.38fc5b178fe2c2530185.js.map