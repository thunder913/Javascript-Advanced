function bugTracker()
{
    let sortingMethod = 'ID'
    let selector = undefined;
    let bugs = [];
    let counter = 0;
    let obj = (() =>
    {
        let report = function(author, description, reproducible, severity) {
            bugs[counter] ={
                ID: counter,
                description: description,
                reproducible: reproducible,
                author: author,
                severity: severity,
                status: 'Open'
            }

            obj.sort(sortingMethod);
            counter++;
            if(selector){
                draw();
            }
        }

        let setStatus = function(id, newStatus) {
            bugs.find(x=>x.ID === id).status = newStatus;
            if(selector){
                draw();
            }
        }

        let remove = function(id) {
            bugs.filter(el => el.ID != id);
            obj.sort(sortingMethod);
            if(selector){
                draw();
            }
        }

        let sort = function(method) {
            sortingMethod = method;
            switch (method) {
                case 'author':
                bugs = bugs.sort((a,b) => a.name - b.name)
                break;
                case 'ID':
                bugs = bugs.sort((a,b) => Number(a.ID) - Number(b.ID));
                break;
                case 'severity':
                bugs = bugs.sort((a,b) => a.severity - b.severity);
                 break;
            }

            if(selector){
                draw();
            }
        }

        let output = function(sel) {
            selector = sel;
        };

        let draw = function () {
            $(selector).html("");
            for(let bug of bugs){
                $(selector).append($('<div>').attr('id', "report_" + bug.ID).addClass('report').append($('<div>').addClass('body').append($('<p>').text(bug.description))).append($('<div>').addClass('title').append($('<span>').addClass('author').text('Submitted by: ' + bug.author)).append($('<span>').addClass('status').text(bug.status + " | " + bug.severity))));
            }
        };
        return {remove,sort,setStatus, report, output}
    })();

    return obj;
}


let tracker = bugTracker();
tracker.report('guy', 'report content', true, 5);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content three', true, 4);
tracker.sort('author');


let reports = $(`.report`);
console.log(reports);