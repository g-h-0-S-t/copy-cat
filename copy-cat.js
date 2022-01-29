javascript:

    /* MIT License
     * 
     * Copyright (c) 2022 gh0$t
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE. */

    (function(window) {
        var tab = window.open('about:blank', '_blank');
        tab.document.write('<h1 id="copy-cat-holder"></h1><br>');
        tab.document.write(document.body.outerHTML);
        var downloadLink = 'data:text/html;base64,' + btoa(unescape(encodeURIComponent(tab.document.documentElement.innerHTML)));
        tab.document.getElementById('copy-cat-holder').innerHTML = '<a id="copy-cat" download="Download.html" style="position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; margin: 0 auto !important; background: #0a0a0a !important; color: #c3015c !important; z-index: 999999999999999999999999999999 !important; height: 100px !important; font-size: 50px !important; text-align: center !important; line-height: 100px !important; font-family: "Gill Sans", sans-serif !important;">Download as HTML</a>';
        tab.document.getElementById('copy-cat').href = downloadLink;
    })(window);
