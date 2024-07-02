import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import {Request, Response} from 'express';
@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return [{username: 'rd', email: 'rd1234@gmail.com'}];
    }

    @Get('posts')
    getUsersPosts(){
        return [
            {
                username: 'rd',
                email: 'rd1234@gmail.com',
                post: [
                    {
                        id: 1,
                        title: 'Post 1'
                    },
                    {
                        id: 2,
                        title: 'Post 2'
                    },
                ]
            }
        ];
    }

    @Get('posts/comments')
    getUsersPostComments(){
        return [
            {
                post: [
                    {
                        id: 1,
                        title: 'Post 1',
                        comments: [
                            
                        ]
                    }
                ]
            }
        ]
    }

    @Post()
    createUser(@Req() request: Request, @Res() response: Response){
        console.log(request.body);
        response.send('Created');

    }
}
