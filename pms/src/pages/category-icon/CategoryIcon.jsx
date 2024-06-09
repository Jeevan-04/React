export default function CategoryIcon({ iconCategory }) {

    if (iconCategory === "Phone") {
        return <i className="fa-solid fa-mobile-screen-button"></i>;
    }
    else if (iconCategory === "Clothing") {
        return <i className="fa-solid fa-shirt"></i>;
    }
}
