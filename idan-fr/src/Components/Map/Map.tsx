import "./Map.css"

function Map(): JSX.Element {
    // If the route is different from order we remove the First name from the local storage and then the user will login again and it not displaying an hello message.
    if(window.location.href !== "http://localhost:3000/order"){
        localStorage.removeItem("firstName");
    }
    

    return (
        <div className="Map">
			<iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1932465215377!2d34.7865973!3d32.0640216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70c925e5ed%3A0x9e629a46351e04c3!2z15In15XXnyDXkdeo15nXmdehINeU15PXqNeb15QgLSDXnNeZ157XldeT15kg15TXmdeZ15jXpyAtINeq15wg15DXkdeZ15E!5e0!3m2!1siw!2sil!4v1681055102834!5m2!1siw!2sil"
             width="600"
             height="450"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
    );
}

export default Map;
