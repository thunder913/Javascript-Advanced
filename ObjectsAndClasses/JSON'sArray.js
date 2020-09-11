function solve([...input])
{
    let html = '<table>\n';
    for (const el of input) {
        let current = JSON.parse(el);
        html += '<tr>\n';
        for (const key of Object.values(current)) {
            html += '<td>' + key + '</td>\n';
        }
        html += '</tr>\n';
    }
    html += '</table>';

    console.log(html);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);