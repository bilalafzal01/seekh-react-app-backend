let User = require('./models/User');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    User.findById(user.id, function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: `146817711106-6ib08svb5tr1codabtemnh97bg705blj.apps.googleusercontent.com`,
    clientSecret: `NtdHyajpntkDCsGUij36yNSv`,
    // url that user is redirected to after they login.
    callbackURL: "http://localhost:5000/google/callback"
}, async function (accessToken, refreshToken, profile, done) {
    console.log(`profile id is: ${profile.id}`)
    // User.findOrCreate({
    //     googleId: profile.id
    // }, function (err, user) {
    //     return done(err, user);
    // });

    let user = await User.findOne({
        userGoogleID: profile.id
    });
    if (!user) {
        user = User.create({
            userGoogleID: profile.id,
            userDisplayName: profile.displayName,
            userName: profile.name,
            userEmail: profile.emails[0].value,
            userPicture: profile.photos[0].value
        });
    }
    return done(null, user);

}));