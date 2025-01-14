import { Notyf } from "notyf";

class NotificationService{

    private notification = new Notyf({duration:5000, position:{x:"left",y:"top"}});
    
    
    public success(message: string){
        this.notification.success(message);
    }

    public error(message: string){
        this.notification.error(message);
    }
}
const notifyService = new NotificationService();
export default notifyService;