const jwt = require("jsonwebtoken")

module.exports = function (
  access_token,
  refresh_token,
  params,
  profile,
  done
) {
  console.log(`**Passport ADFS strategy...`)
  const user_profile = jwt.decode(params.id_token, "", true)
  // New user
  console.log(`**New ADFS user...`)

  console.log(JSON.stringify(user_profile))

  var user = {
    id: user_profile.aud,
    groups: user_profile.groups,
    email: user_profile.unique_name,
    first_name: user_profile.given_name,
    last_name: user_profile.family_name,
    provider: "adfs"
  }


  console.log(`**ADFS user added...`)
  return done(null, user)
}
