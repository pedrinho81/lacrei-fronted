import Image from "next/image"
import { InfoProps } from "./info.types"
import { Container, Button } from "./styles"
export const Info: React.FC<InfoProps> = ({
  title,
  message,
  buttons,
  img,
}) => {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="buttons-container">
          {buttons.map((button, i) => (
            <Button 
            key={i}
            bg={button.bg} 
            color={button.color}
            href={button.href}
            border={button.border}>{button.text}</Button>
          )
          )}
        </div>
      </div>
      <div className="image-container">
        <Image 
        src={img.src} 
        alt={img.alt}
        width={555}
        height={421} />
      </div>
    </Container>
  )
}

