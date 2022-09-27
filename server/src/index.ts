import * as express from 'express'
import * as cors from 'cors'
import * as webpush from 'web-push'

// Middlewares
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Constantes
const pushSubscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fdKqc8VyJYU:APA91bFD8YhpgUZ_aQ-F8B0drIDchvxsc7RNe_xmJmeNE-5wux50uEjO0Xx7mG0s8Cg3NQydF_Y46rGuwhIImt62u-xaH3k95lJf6mvzDNtWAGhL7AgB2vB4DuG1-fxud5QU5jRsjMTF',
  expirationTime: 99999,
  keys: {
    p256dh:
      'BFMUtdc-GknhP53dUGx81XRqsz2k6jcdapVmifaXPUkQ95dy_kX3j6p6GUeoogTBzpD6pHPW7Cn8Ri_HU5c0RK0',
    auth: 'tHduACPV7ZDg6tgTocY3rw'
  }
}

const vapidKeys = {
  publicKey:
    'BEBpvqYgYBdCrrArEyRKnEauryvO-SOQCE5Uwhjj9ozYGfr85Wr6ncxNg5adACRn7y-ibah7fkunx4Z7SvSS5xU',
  privateKey: 'htmfHvhD8JWVwb41MQc-syuVMCxQWTvUWtcFrT4qrdE'
}

webpush.setVapidDetails(
  'mailto:oscarguerrero242@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

//Routes
app.get('/', async (req, res) => {
  const payload = JSON.stringify({
    title: 'Titulo notificación',
    message: 'Mensaje de la notificacion'
  })
  try {
    await webpush.sendNotification(pushSubscription, payload)
  } catch (e) {
    console.log(e)
  }
})

app.post('/subscription', (req, res) => {
  /* console.log(req.body) */
  res.sendStatus(200).json()
})

// Ruta ejercicio sesiones 6 y 7
app.post('/custom', async (req, res) => {
  console.log(req.body)
   const payload = JSON.stringify({
    title: req.body.title,
    message: req.body.message,
  })
  try {
    await webpush.sendNotification(pushSubscription, payload)
  } catch (e) {
    console.log(e)
  } 
})

app.listen(8000, () => console.log('Server listening on port 8000'))
