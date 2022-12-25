exports.PAGE_SIZE = 20;
exports.curruntPage = parseInt(req.query.page);
exports.start = (curruntPage - 1) * PAGE_SIZE;
exports.end = (curruntPage - 1) * PAGE_SIZE + PAGE_SIZE;
exports.item = dataMovie.slice(start, end);
exports.total_pages = Math.ceil(dataMovie.length / PAGE_SIZE);
