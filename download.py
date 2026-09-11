import urllib.request
import re
import os

os.makedirs('public/assets/team-gen2', exist_ok=True)

urls = [
    ('divyanshu', 'https://www.instagram.com/nitj.esportsclub/p/DdHdNimyBSG/'),
    ('niraj', 'https://www.instagram.com/nitj.esportsclub/p/DdHc_ceymnU/'),
    ('manik', 'https://www.instagram.com/nitj.esportsclub/p/DdHdJFayTOb/'),
    ('harshit', 'https://www.instagram.com/nitj.esportsclub/p/DdHdExUS3K-/'),
    ('arnav', 'https://www.instagram.com/nitj.esportsclub/p/DdHdDIrSlwB/'),
    ('tanay', 'https://www.instagram.com/nitj.esportsclub/p/DdHc6-Ryr0v/'),
    ('krish', 'https://www.instagram.com/nitj.esportsclub/p/DdHdMZwyNNu/'),
    ('manas', 'https://www.instagram.com/nitj.esportsclub/p/DdHdOieyfNL/')
]

for name, url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        m = re.search(r'<meta property=\"og:image\" content=\"([^\"]+)\"', html)
        if m:
            img_url = m.group(1).replace('&amp;', '&')
            print('Downloading', name, img_url[:40])
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_img) as response, open(f'public/assets/team-gen2/{name}.jpg', 'wb') as out_file:
                out_file.write(response.read())
        else:
            print('No image found for', name)
    except Exception as e:
        print('Error:', name, e)
