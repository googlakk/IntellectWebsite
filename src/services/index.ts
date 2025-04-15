import * as Blog from './blog-api'
import * as Contacts from './contacts-api'
import * as Email from './email-api'
import * as Event from './event-api'
import * as Reviews from './reviews-api'
import * as Team from './team-api'

export const Api = {
  event: Event,
  team: Team,
  blog: Blog,
  reviews: Reviews,
  contacts: Contacts,
  email: Email,
}
