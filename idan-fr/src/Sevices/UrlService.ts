abstract class Global{
}

class Development extends Global{
    public urls = {
        movies:'http://localhost:5196/api/cinema/Movies',
        login:'http://localhost:5196/api/cinema/users/login',
        users:'http://localhost:5196/api/cinema/users',
        orders:'http://localhost:5196/api/cinema/orders'

    }

}

class Production extends Global{
    public urls = {
        movies:'http://localhost:5196/api/cinema/Movies',
        login:'http://localhost:5196/api/cinema/users/login',
        users:'http://localhost:5196/api/cinema/users',
        orders:'http://localhost:5196/api/cinema/orders'
    }

}

const urlService = (process.env.NODE_ENV === "production") ? new Production() : new Development();
export default urlService;


