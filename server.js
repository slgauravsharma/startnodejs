import express from 'express'
import configuration from './configuration'
import http from 'http'
import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import widgetRouter from './routers/widgets'

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: 'secret',
    algorithms: ['HS256']
}

passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    done(null, { name:jwtPayload.name })
}))

const app = express()
const server = http.createServer(app)

app.use(passport.authenticate('jwt', { session: false}))
app.use('/api', widgetRouter)

server.listen(configuration.port, () => console.log(`app listening on port ${configuration.port}`))