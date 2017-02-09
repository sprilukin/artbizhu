let app = require("./app"),
    profile = require("../../profile");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = profile.name === profile.DEVELOPMENT ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});