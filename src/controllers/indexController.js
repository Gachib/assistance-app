module.exports = {
    index: (req, res) => {
        res.render('index', {
            titulo: 'Home',
        });
    },
    profile: (req, res) => {
        res.render('profile', {
            titulo: 'Profile',
        });
    }
};