import ghpages from 'gh-pages';

ghpages.publish('dist', {
    branch: 'gh-pages',
    cname: "10e10patenti.it",
}, function(err) {
    if (err != undefined) {
        console.error(err)
    }
});
