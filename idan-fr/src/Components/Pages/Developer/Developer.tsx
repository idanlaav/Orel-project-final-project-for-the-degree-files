import "./Developer.css";

function Developer(): JSX.Element {
    // If the route is different from order we remove the First name from the local storage and then the user will login again and it not displaying an hello message.
    if(window.location.href !== "http://localhost:3000/order"){
        localStorage.removeItem("firstName");
    }
    

    return (
        <div className="Developer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed interdum risus. Praesent molestie elit ligula, ut convallis libero pulvinar id. Quisque non metus quis enim ullamcorper consequat in non augue. Nam tincidunt non lorem quis iaculis. Aenean nec neque ullamcorper, dictum nisi a, maximus nibh. Curabitur interdum enim purus, ut tristique tortor dignissim non. Quisque tincidunt finibus dui, id interdum odio dapibus in</p>
            <p>Nulla ut mauris purus. Praesent sed condimentum quam. Praesent quis gravida mi. Phasellus fringilla porttitor pretium. Sed maximus lorem convallis lectus ornare, vitae mattis nulla faucibus. Sed consectetur leo non diam elementum varius. Integer finibus arcu sed dui aliquet, vel eleifend orci bibendum. Morbi vitae eros tempor, vehicula orci nec, tempor tellus. Maecenas ac tristique augue.</p>
            <p>Mauris id ultricies metus. Vivamus in quam est. Suspendisse faucibus vehicula eros sed scelerisque. Nullam aliquet dui quis dignissim viverra. Nulla vehicula dignissim massa. Vivamus dictum tellus eget nulla efficitur, sed aliquam magna viverra. Donec eu tortor mauris.</p>
        </div>
    );
}

export default Developer;
