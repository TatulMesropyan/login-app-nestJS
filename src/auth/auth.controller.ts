import {Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller({})
export class AuthController{
    constructor(private authService:AuthService) {}
        @Post('signup ')
        signup(){
            return "We are on signup"
        }

        @Post('login')
        login(){
        return "We are on sign in"
        }

}
