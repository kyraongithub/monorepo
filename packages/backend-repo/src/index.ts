import { app } from './core/app'

const port = process.env.APP_PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
