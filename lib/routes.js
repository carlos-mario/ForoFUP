// this is a home route
FlowRouter.route('/',{
	// other comment
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});
