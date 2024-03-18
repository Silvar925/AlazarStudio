import styels from "./BaseCard.module.css"

export const BaseCard = ({ img, imgHeight, imgWidth, text, specialization }) => {
    let style = {}

    if (specialization === undefined) style = { alignItems: 'center' }

    return (
        <div className={styels.card} style={{ ...style }}>
            <img style={{ height: imgHeight, width: imgWidth }} src={img} alt="#" />
            {
                specialization !== undefined ? (
                    <div className={styels.title}>
                        <h2>{text}</h2>
                        <h3>{specialization}</h3>
                    </div>
                ) : (
                    <p>{text}</p>
                )
            }
        </div>
    )
}