import CourtsService, { Court } from "$/services/CourtsService";
import { transformWGS1984ToITM } from "$/services/transformService";
import { OpenInNew, Directions } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface CourtCardProps {
  court: Court;
  onSelect: (court: Court) => void;
}

const CourtCard = ({ court }: CourtCardProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      dir="rtl"
      style={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CornerTip
        text={court.data.type}
        color={CourtsService.getTypeColor(court.data.type)}
        hover={hover}
      />
      <CardContent sx={{ mt: 2 }}>
        <Typography variant="h6" textAlign="start">
          {court.data.name}
        </Typography>
        <KeyValueTypography name="כתובת" value={court.data.address} />
        <KeyValueTypography name="טלפון" value={court.data.info_center} />
      </CardContent>
      <CardActions dir="rtl" sx={{ gap: 1 }}>
        <LinkButton
          href={court.data.info_url}
          text={"לאתר בית המשפט"}
          Icon={OpenInNew}
        />
        <LinkButton
          href={`https://www.google.com/maps/dir/?api=1&destination=${court.coords.y},${court.coords.x}`}
          text={"ניווט בגוגל"}
          Icon={Directions}
        />
      </CardActions>
    </Card>
  );
};
export default CourtCard;

const KeyValueTypography = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <Typography variant="body2" textAlign="start">
    <Typography variant="body2" component="span" fontWeight="bold">
      {name}:{" "}
    </Typography>
    {value}
  </Typography>
);

interface LinkButtonProps {
  Icon: React.ComponentType;
  text: string;
  href: string;
}

const LinkButton = ({ Icon, text, href }: LinkButtonProps) => (
  <Button
    dir="ltr"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    startIcon={<Icon />}
  >
    {text}
  </Button>
);

interface CornerTipProps {
  text: string;
  color: string;
  hover: boolean;
}
const CornerTip = ({ text, color, hover }: CornerTipProps) => (
  <StyledTip color={color} hover={hover}>
    <Typography variant="body2" textAlign="center" fontWeight="bold">
      {text}
    </Typography>
  </StyledTip>
);

const StyledTip = styled("div")<{ color: string; hover: boolean }>`
  position: absolute;
  left: 0;
  height: ${({ theme }) => theme.spacing(4)};
  top: ${({ hover, theme }) => (hover ? theme.spacing(0) : theme.spacing(-3))};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  border-bottom: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
`;
