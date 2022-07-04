
// Enable / disable button by using cursor and opacity
interface Styles {
    variant?: string,
    boxshadow?: string,
    size?: string,
    color?: string,
    backgroundColor?: string,
    cursor?: string,
    opacity?: number,
    icon?: string,
    iconPos?: string
}

const Button = (attributes: Styles) => {
    let variant = attributes.variant;
    let boxShadow = attributes.boxshadow;
    let size = attributes.size;
    let color = attributes.color;
    let backgroundColor = attributes.backgroundColor;
    let cursor = attributes.cursor;
    let opacity = attributes.opacity;
    let icon = attributes.icon;
    let iconPos = attributes.iconPos;

    const StyledVariant = getVariant(variant);

    const StyledBoxShadow = getBoxShadow(boxShadow);

    const StyledSize = size ? getSize(size) : {
        width: '200px',
        height: '150px'
    }

    const StyledColor = getColor(color);

    const StyledBackgroundColor = getBackgroundColor(backgroundColor);

    const StyledCursor = getCursor(cursor);

    const StyledOpacity = getOpacity(opacity);

    const StyledButton = {
        width: StyledSize.width,
        height: StyledSize.height,
        border: StyledVariant.border,
        borderRadius: StyledVariant.borderRadius,
        color: StyledColor.color,
        backgroundColor: StyledBackgroundColor.backgroundColor,
        boxShadow: StyledBoxShadow.boxShadow,
        cursor: StyledCursor.cursor,
        opacity: StyledOpacity.opacity,
    }

    if (icon) {
        return (<>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <button type='button' style={StyledButton}>
                <span className="material-icons">{icon}</span>
            </button>
        </>)
    }

    return (
        <button type="button" style={StyledButton}>button</button>
    );
}

const getVariant = (variant: Styles["variant"]): React.CSSProperties => {
    let returnVariant;
    if (variant === undefined) {
        variant = "default";
    }

    switch (variant.toLocaleLowerCase()) {
        case "outline":
            returnVariant = {
                border: '3px solid black',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: 'black'
            }
            break;
        case "text":
            returnVariant = {
                border: 'none',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: 'black'
            }
            break;
        default:
            returnVariant = {
                border: '1px solid black',
                borderRadius: '8px',
                backgroundColor: 'cornflowerblue',
                color: 'black'
            }
    }
    return returnVariant;
}

// box shadow actually accepts 4 parts not just 3
const getBoxShadow = (boxShadow: Styles["boxshadow"]): React.CSSProperties => {
    if (boxShadow === undefined) {
        return { boxShadow: '0px 0px white' }
    }

    let splitBoxShadow = boxShadow.split(' ');
    if (!splitBoxShadow[2]) {
        return { boxShadow: splitBoxShadow[0] + ' ' + splitBoxShadow[1] + ' black' }
    }

    return { boxShadow: splitBoxShadow[0] + ' ' + splitBoxShadow[1] + ' ' + splitBoxShadow[2] }
}

const getSize = (size: Styles["size"]): React.CSSProperties => {
    let returnSize;
    switch (size) {
        case "large":
            returnSize = { width: '400px', height: '335px' }
            break;
        case "small":
            returnSize = { width: '100px', height: '60px'}
            break;
        default:
            returnSize = { width: '200px', height: '150px' }
    }
    return returnSize;
}

const getColor = (color: Styles["color"]): React.CSSProperties => {
    if (color === undefined) {
        return { color: 'black' }
    }

    return { color: color }
}

const getBackgroundColor = (backgroundColor: Styles["backgroundColor"]): React.CSSProperties => {
    if (backgroundColor === undefined) {
        return { backgroundColor: 'white' }
    }

    return { backgroundColor: backgroundColor }
}

const getCursor = (cursor: Styles["cursor"]): React.CSSProperties => {
    if (cursor === undefined || cursor !== 'not-allowed') {
        return { cursor: 'default' }
    }
    return { cursor: 'not-allowed' }
}

const getOpacity = (opacity: Styles["opacity"]): React.CSSProperties => {
    if (opacity === undefined) {
        return { opacity: 1.0 }
    }
    return { opacity: opacity }
}



export default Button;