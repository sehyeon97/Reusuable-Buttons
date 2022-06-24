import { useState } from "react";

// Question mark means that boxShadow is optional
interface State {
    state: any,
    alternativeState?: any,
    boxshadow?: boolean
}

const Button = (attributes: State) => {
    let currentState = attributes.state;
    const [boxShadow, setBoxShadow] = useState(currentState);

    if (attributes.boxshadow) {
        const BoxShadowHandler = () => {
            if (boxShadow === currentState) {
                setBoxShadow(attributes.alternativeState);
                alert("type is changing to alt!");
            } else {
                setBoxShadow(currentState);
                alert("alt is changing to type!");
            }
        }

        return (
            <button type="button" style={boxShadow} onClick={BoxShadowHandler}>button</button>
        )
    }

    return (
        <button type='button' style={currentState}>button</button>
    );
}

export default Button;