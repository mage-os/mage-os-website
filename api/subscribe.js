import got from 'got'

export default async (request, response) => {
  const apiKey = process.env.MAILERLITE_API_KEY

  const { groupId, email, name, company } = JSON.parse(request.body)

  try {
    const reply = await got({
      method: 'POST',
      url: `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
      headers: {
        'X-MailerLite-ApiKey': apiKey,
      },
      json: {
        email,
        name,
        fields: {
          company
        }
      }
    })

    response.send(reply.body)
  }
  catch (error) {
    response.status(500).send(error.response.body)
  }
}
