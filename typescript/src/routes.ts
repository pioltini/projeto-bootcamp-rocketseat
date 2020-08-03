import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWord (request: Request, response: Response) {
    const user = createUser({
        email: 'brunopaiva523@gmail.com',
        password: '123456',
        techs: [ 
        'Node.js',
        'ReactJs', 
        'React-Native',
        { title: 'JavaScript', experience: 100}
    ]
    })

    return response.json({ message: 'Hello world' });
}