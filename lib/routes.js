// this is a home route
FlowRouter.route('/',{

    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');


    }
});
