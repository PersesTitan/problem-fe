export default class FooterMake {
    static footerItemMake(title, link, linkName, img = null) {
        if (img === null) {
            return <tr><th>{title}</th><td><a href={link}>{linkName}</a></td></tr>
        } else {
            return <tr><th>{title}</th><td><a href={link}>{linkName}<img src={img} alt="/" className="img-style"/></a></td></tr>
        }
    }
}