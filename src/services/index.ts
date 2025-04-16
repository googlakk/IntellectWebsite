import * as Blog from './blog-api'
import * as Contacts from './contacts-api'
import * as Email from './email-api'
import * as Home from './home-api'
import * as Rating from './rating-api'
import * as Team from './team-api'

export const Api = {
  team: Team,
  blog: Blog,
  contacts: Contacts,
  email: Email,
  home: Home,
  rating: Rating,
}
