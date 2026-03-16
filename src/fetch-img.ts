fetch('https://ibb.co/d0sHhQJf').then(r=>r.text()).then(t=>console.log(t.match(/https:\/\/i\.ibb\.co\/[^\"\'\s]+/g)));
