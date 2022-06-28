interface Styles {
    variant?: string,
    boxshadow?: boolean,
    size?: string,
    color?: string,
    backgroundColor?: string
}

const Button = (attributes: Styles) => {
    let size = attributes.size;
    let variant = attributes.variant;
    let color = attributes.color;
    let backgroundColor = attributes.backgroundColor;

    const StyledSize = size ? getSize(size) : {
        width: '200px',
        height: '150px'
    }

    const StyledVariant = getVariant(variant);

    const StyledColor = getColor(color);

    const StyledBackgroundColor = getBackgroundColor(backgroundColor);

    const StyledButton = {
        width: StyledSize.width,
        height: StyledSize.height,
        border: StyledVariant.border,
        borderRadius: StyledVariant.borderRadius,
        color: StyledColor.color,
        backgroundColor: StyledBackgroundColor.backgroundColor
    }

    return (
        <button type='button' style={StyledButton}>button</button>
    );
}

const getSize = (size: string): React.CSSProperties => {
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

const getVariant = (variant: string | undefined): React.CSSProperties => {
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

const getColor = (color: string | undefined): React.CSSProperties => {
    if (color === undefined) {
        return { color: 'black' }
    }
    return { color: color }
}

const getBackgroundColor = (backgroundColor: string | undefined): React.CSSProperties => {
    if (backgroundColor === undefined) {
        return { backgroundColor: 'white' }
    }
    return { backgroundColor: backgroundColor }
}

export default Button;