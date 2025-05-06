export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body

  // ⚠️ Replace with Power Automate HTTP trigger URL
  const flowUrl = 'https://prod-123.westus.logic.azure.com:...'

  const response = await fetch(flowUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  if (response.ok) return res.status(200).json({ status: 'ok' })
  return res.status(500).json({ status: 'error' })
}
