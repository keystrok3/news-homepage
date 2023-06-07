

// eslint-disable-next-line react/prop-types
const ResponsiveImage = ({ small, big }) => {
    return <>
        <img src={small} srcSet={`${small} 375w, ${big} 1440w`}/>
    </>
};

export default ResponsiveImage;