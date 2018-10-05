import os
import shutil
import sys

from bs4 import BeautifulSoup

if __name__ == '__main__':
    app_dir = sys.argv[1]

    js_dir = os.path.join(app_dir, 'resources/vivaldi')
    css_dir = os.path.join(app_dir, 'resources/vivaldi/style')

    js_filename = 'custom.js'
    css_filename = 'custom.css'

    shutil.copyfile(js_filename, os.path.join(js_dir, js_filename))
    shutil.copyfile(css_filename, os.path.join(css_dir, css_filename))

    browser_html_path = os.path.join(app_dir, 'resources/vivaldi/browser.html')

    with open(browser_html_path) as f:
        parser = BeautifulSoup(f, 'html.parser')
        head = parser.find('head')
        parser.head.append(BeautifulSoup(
            '<link rel="stylesheet" href="style/custom.css" />', 'html.parser'))
        parser.head.append(BeautifulSoup(
            '<script src="custom.js"></script>', 'html.parser'))

    with open(browser_html_path, 'w') as f:
        f.write(parser.prettify())
