import * as Blog from './blog-api'
import * as Event from './event-api'
import * as Team from './team-api'
import * as Reviews from './reviews-api'
import * as Request from './request-api'
import * as Contacts from './contacts-api'

export const Api = {
  event: Event,
  team: Team,
  blog: Blog,
  reviews: Reviews,
  request: Request,
  contacts: Contacts
}
