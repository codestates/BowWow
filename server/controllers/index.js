module.exports = {
    auth: require('./users/Auth'),
    signup: require('./users/SignUp'),
    login: require('./users/Login'),
    profile: require('./users/Profile'),
    service_list: require('./posts/Service_list'),
    volunteer_list: require('./posts/Volunteer_list'),
    comments: require('./comment/comments'),
    posts: require('./posts/post')
}