(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{tgHg:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),a=t("mcK/"),s=t("Ov9x"),c=t("2G++");n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{content:"\nAssume that we want to sort any column of the following table:\n\n~~~ html\n<table id=\"sortMe\" class=\"table\">\n    ...\n</table>\n~~~\n\n## Sort rows\n\nFirst of all, we [query](/select-an-element-or-list-of-elements) all the headers, [loop over](/loop-over-a-nodelist) them\nand [attach an event handler](/attach-or-detach-an-event-handler) for the `click` event to each of them:\n\n~~~ javascript\n// Query the table\nconst table = document.getElementById('sortMe');\n\n// Query the headers\nconst headers = table.querySelectorAll('th');\n\n// Loop over the headers\n[].forEach.call(headers, function(header, index) {\n    header.addEventListener('click', function() {\n        // This function will sort the column\n        sortColumn(index);\n    });\n});\n~~~\n\nThe `sortColumn(index)` function mentioned above will sort all rows by given column `index`.\n\nTo do so:\n* We can use the `Array`'s `sort()` method to sort the current rows\n* Then, [remove](/remove-an-element) all the current rows\n* And [append](/append-to-an-element) the sorted rows\n\n~~~ javascript\n// Query all rows\nconst tableBody = table.querySelector('tbody');\nconst rows = tableBody.querySelectorAll('tr');\n\nconst sortColumn = function(index) {\n    // Clone the rows\n    const newRows = Array.from(rows);\n\n    // Sort rows by the content of cells\n    newRows.sort(function(rowA, rowB) {\n        // Get the content of cells\n        const cellA = rowA.querySelectorAll('td')[index].innerHTML;\n        const cellB = rowB.querySelectorAll('td')[index].innerHTML;\n\n        switch (true) {\n            case cellA > cellB: return 1;\n            case cellA < cellB: return -1;\n            case cellA === cellB: return 0;\n        }\n    });\n\n    // Remove old rows\n    [].forEach.call(rows, function(row) {\n        tableBody.removeChild(row);\n    });\n\n    // Append new row\n    newRows.forEach(function(newRow) {\n        tableBody.appendChild(newRow);\n    });\n};\n~~~\n\nAs you see, an array provides a built-in `sort` method which accepts a function to compare two items.\nIn our case, two cells of the column are compared based on its [HTML content](/get-or-set-the-html-of-an-element):\n\n~~~ javascript\nnewRows.sort(function(rowA, rowB) {\n    // Get the content of cells\n    const cellA = rowA.querySelectorAll('td')[index].innerHTML;\n    const cellB = rowB.querySelectorAll('td')[index].innerHTML;\n\n    ...\n});\n~~~\n\nIt works well with the cells whose content are string, not numbers or another type such as date.\nGoing to the next section to see how we can support those cases.\n\n## Support other types\n\nWe add a custom attribute to each header to indicate the type of its cells:\n\n~~~ html\n<thead>\n    <tr>\n        <th data-type=\"number\">No.</th>\n        <th>First name</th>\n        <th>Last name</th>\n    </tr>\n</thead>\n~~~\n\nFor example, the _No._ column would have a `data-type=\"number\"` attribute. If the attribute is missing, the content types of cells are string.\nWe need a function to transform the content of cells from string to another type:\n\n~~~ javascript\n// Transform the content of given cell in given column\nconst transform = function(index, content) {\n    // Get the data type of column\n    const type = headers[index].getAttribute('data-type');\n    switch (type) {\n        case 'number':\n            return parseFloat(content);\n        case 'string':\n        default:\n            return content;\n    }\n};\n~~~\n\nThe sample code demonstrates the `number` and `string` columns, but you are free to support more types such as date.\n\nNow we improve the `sortColumn` function a little bit to support the custom content types. Instead of comparing the raw content,\nwe compare the values which are converted based on the content type:\n\n~~~ javascript\nnewRows.sort(function(rowA, rowB) {\n    const cellA = rowA.querySelectorAll('td')[index].innerHTML;\n    const cellB = rowB.querySelectorAll('td')[index].innerHTML;\n\n    // Transform the content of cells\n    const a = transform(index, cellA);\n    const b = transform(index, cellB);    \n\n    // And compare them\n    switch (true) {\n        case a > b: return 1;\n        case a < b: return -1;\n        case a === b: return 0;\n    }\n});\n~~~\n\n## Support both directions\n\nAt the moment, clicking a header sorts all the rows. We should reverse the direction if user clicks the header again.\nTo do so, we prepare a variable to manage the sorting directions of all headers:\n\n~~~ javascript\n// Track sort directions\nconst directions = Array.from(headers).map(function(header) {\n    return '';\n});\n~~~\n\n`directions` is an array which each item can be either `asc` or `desc` indicating the sorting direction in the associate column.\n\nThe `sortColumn()` function now involves more logics to compare two rows based on the current direction:\n\n~~~ javascript\nconst sortColumn = function(index) {\n    // Get the current direction\n    const direction = directions[index] || 'asc';\n\n    // A factor based on the direction\n    const multiplier = (direction === 'asc') ? 1 : -1;\n\n    ...\n\n    newRows.sort(function(rowA, rowB) {\n        const cellA = rowA.querySelectorAll('td')[index].innerHTML;\n        const cellB = rowB.querySelectorAll('td')[index].innerHTML;\n\n        const a = transform(index, cellA);\n        const b = transform(index, cellB);    \n\n        switch (true) {\n            case a > b: return 1 * multiplier;\n            case a < b: return -1 * multiplier;\n            case a === b: return 0;\n        }\n    });\n\n    ...\n\n    // Reverse the direction\n    directions[index] = direction === 'asc' ? 'desc' : 'asc';\n\n    ...\n};\n~~~\n"}),r.a.createElement(a.a,{src:"/demo/sort-a-table-by-clicking-its-headers/index.html"}),r.a.createElement(c.a,{slugs:["append-to-an-element","attach-or-detach-an-event-handler","get-or-set-the-html-of-an-element","get-set-and-remove-data-attributes","loop-over-a-nodelist","remove-an-element","select-an-element-or-list-of-elements"]}))}}}]);
//# sourceMappingURL=posts-sort-a-table-by-clicking-its-headers.bae0d04f604cbf781fd3.js.map