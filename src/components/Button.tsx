interface Styles {
    variant?: string,
    boxshadow?: boolean,
    size?: any
}

const Button = (attributes: Styles) => {
    let size = attributes.size;

    const StyledButton = size ? getSize(size) : {
        width: '200px',
        height: '150px',
        
    }

    return (
        <button type='button' style={StyledButton}>button</button>
    );
}

const getSize = (size: string): any => {
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

export default Button;