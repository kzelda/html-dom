(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{xc8C:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),o=t.n(a),i=t("Ov9x"),l=t("2G++");e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{content:"\n## 1. Use the download attribute\n\nAdding the `download` attribute to a link will force the browser to download the file instead of navigating to the link.\nNote that the `download` attribute [isn't supported](https://caniuse.com/#feat=download) in IE 11.\n\n~~~ html\n<a href=\"/path/to/file\" download>Download</a>\n~~~\n\n## 2. Trigger the click event\n\nThe idea comes from creating a link, and trigger its `click` event.\n\n~~~ javascript\n// Create a new link\nconst link = document.createElement('a');\nlink.download = 'file name';\nlink.href = '/path/to/file';\n\n// Append to the document\ndocument.body.appendChild(link);\n\n// Trigger the click event\nlink.click();\n\n// Remove the element\ndocument.body.removeChild(link);\n~~~\n\n## 3. Download file with generated data\n\nIt's common to download a file with dynamic data, such as \n- a JSON\n- a text\n- an image\n\nFrom the data, we can turn it to a blob, then trigger the `click` event as described in the previous section.\nThe following sample code creates a blob of JSON and downloads it:\n\n~~~ javascript\nconst data = JSON.stringify({ 'message': 'Hello Word' });\n\nconst blob = new Blob([data], { type: 'application/json' });\n\n// Create new URL\nconst url = window.URL.createObjectURL(blob);\n\n// Create a link and trigger the download\n...\n\n// Free the URL created above\nwindow.URL.revokeObjectURL(url);\n~~~\n"}),o.a.createElement(l.a,{slugs:["append-to-an-element","create-an-element","export-a-table-to-csv","remove-an-element","trigger-an-event"]}))}}}]);
//# sourceMappingURL=posts-download-a-file.85fa1c527d0973439296.js.map