(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"DL/0":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("TJpk"),o=n("Ov9x"),l=n("2G++");t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{name:"keywords",content:"addEventListener, attach event handler, detach event handler, removeEventListener"})),r.a.createElement(o.a,{content:"\n## Use the on attribute (not recommended)\n\nYou can set the event handler via the `on{eventName}` attribute, where `eventName` represents the name of event.\nFor example:\n\n~~~ javascript\nele.onclick = function() {\n    ...\n};\n\n// Remove the event handler\ndelete ele.onclick;\n~~~\n\nThis approach isn't recommended because we can only attach one handler for each event. Setting the `onclick` attribute, for example,\nwill override any existing handler for the `click` event.\n\n## Use the addEventListener method\n\n~~~ javascript\nconst handler = function() {\n    ...\n};\n\n// Atatch handler to the `click` event\nele.addEventListener('click', handler);\n\n// Detach the handler from the `click` event\nele.removeEventListener('click', handler);\n~~~\n\nNote that the event name is passed as the first parameter in both the `addEventListener` and `removeEventListener` methods.\nIt differs from the first approach which requires to prefix the event name with `on`.\n\nIf you want the handler to be invoke once, then look at the [Create one time event handler](/create-one-time-event-handler) post.\n"}),r.a.createElement(l.a,{slugs:["allow-to-enter-particular-characters-only","calculate-the-mouse-position-relative-to-an-element","communication-between-an-iframe-and-its-parent-window","count-the-number-of-characters-of-a-textarea","create-resizable-split-views","detect-if-the-caps-lock-is-on","distinguish-between-left-and-right-mouse-clicks","drag-and-drop-element-in-a-list","drag-and-drop-table-column","drag-and-drop-table-row","export-a-table-to-csv","get-size-of-the-selected-file","get-the-size-of-an-image","highlight-an-element-when-dragging-a-file-over-it","make-a-draggable-element","make-a-resizable-element","paste-as-plain-text","placeholder-for-a-contenteditable-element","press-shift-and-enter-for-a-new-line","prevent-the-default-action-of-an-event","review-an-image-before-uploading-it","replace-broken-images","resize-an-iframe-to-fit-its-content","resize-an-image","resize-columns-of-a-table","resize-the-width-of-a-text-box-to-fit-its-content-automatically","select-the-text-of-a-textarea-automatically","show-a-ghost-element-when-dragging-an-element","sort-a-table-by-clicking-its-headers"]}))}}}]);
//# sourceMappingURL=posts-attach-or-detach-an-event-handler.d78c22ae99fef527c3e7.js.map