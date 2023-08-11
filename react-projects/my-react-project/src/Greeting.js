function Greeting({language}) {
   switch (language) {
    case "es":
        return <h1>Hola!</h1>;
        case "fr":
            return <h1>Bonjour!</h1>;
            case "en":
                default:
                    return <h1>Hello!</h1>
   }
}

function Notifications ({notifications}) {
    if (notifications.length > 0) {
        return <p>You have {notifications.length} notifications today!</p>
    }
}

export default Notifications;
