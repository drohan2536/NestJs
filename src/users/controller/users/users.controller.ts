import { Controller, Get } from '@nestjs/common';

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
}
