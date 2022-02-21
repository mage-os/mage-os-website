import got from 'got'
import md5 from 'md5'

export default async (request, response) => {
  try {
    const apiKey = process.env.MAILERLITE_API_KEY

    const raw = await got({
      method: 'GET',
      url: `https://api.mailerlite.com/api/v2/groups/${request.query.groupId}/subscribers/active?limit=5000`,
      headers: {
        'X-MailerLite-ApiKey': apiKey,
      }
    }).json()

    const subsribers = raw
      .map(subscriber => ({
        avatar: `https://www.gravatar.com/avatar/${md5(subscriber.email.toLowerCase())}`,
        name: subscriber.name,
        company: subscriber.fields.find(({ key }) => key === 'company')?.value || null
      }))
      .reverse()

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    response.json(subsribers)

  }
  catch (error) {
    response.status(500).json(error)
  }
}
