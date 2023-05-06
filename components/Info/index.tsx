import Image from "next/image";
import { InfoProps } from "./info.types";
import { Container, Button, Text } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
export const Info: React.FC<InfoProps> = ({
  title,
  message,
  buttons,
  img,
  borderOnLeft,
}) => {
  const router = useRouter();
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <Text borderOnLeft={borderOnLeft}>{message}</Text>
        <div className="buttons-container">
          {buttons &&
            buttons.map((button, i) => (
              <Link href={button.href}>
                <Button
                onClick={() => router.push(button.href)}
                  key={i}
                  bg={button.bg}
                  color={button.color}
                  border={button.border}
                >
                  {button.text}
                </Button>
              </Link>
            ))}
        </div>
      </div>
      <div className="image-container">
        <Image src={img.src} alt={img.alt} width={555} height={421} />
      </div>
    </Container>
  );
};
