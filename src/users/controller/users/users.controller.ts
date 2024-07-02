import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [{ username: 'rd', email: 'rd1234@gmail.com' }];
    }

    @Post()
    createUser(@Body() userData: createUserDto) {
        console.log(userData);
        return {};
    }

    // //Route parameters by express way
    @Get(':id')
    getUserId(@Req() request: Request, @Res() response: Response) {
        console.log(request.params);
        response.send(request.params);
    }

    // Route parameters by nest way(we can use nested param)
    @Get(':id/:postId')
    getUserByID(@Param('id') id: string, @Param('postId') postID: string ){
        console.log(id,postID);
        return{id, postID};
    }
}
