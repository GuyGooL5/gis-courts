import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";

// assets
import logoHarashut from "$/assets/logo_harashut_hashofetet.jpg";

import withFadeInAnimation from "./high-order-components/withFadeInAnimation";

const WelcomePage = () => (
  <PageLayout>
    <Container maxWidth="md">
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardContent>
          <Stack direction="row" flexWrap="nowrap" alignItems="center">
            <SplashLogo size={120} />
            <SplashTitle />
          </Stack>
        </CardContent>
        <CardContent dir="rtl">
          <SplashInfographic />
          <SplashStartHere />
        </CardContent>
      </Card>
    </Container>
    <Background />
  </PageLayout>
);

export default WelcomePage;

const SplashTitle = withFadeInAnimation(
  ({ className }) => (
    <div className={className}>
      <Typography dir="rtl" variant="h3" color="primary">
        ברוכים הבאים למערכת GIS למיפוי בתי משפט בישראל
      </Typography>
    </div>
  ),
  {
    initialDelayMs: 0,
    durationMs: 250,
  }
);

const SplashLogo = withFadeInAnimation(
  ({ className, size }: { className?: string; size?: number }) => (
    <img
      className={className}
      src={logoHarashut}
      alt="logo"
      width={size}
      height={size}
    />
  ),
  {
    initialDelayMs: 250,
    durationMs: 250,
  }
);

const SplashInfographic = withFadeInAnimation(
  ({ className }) => (
    <div className={className}>
      <Typography dir="rtl">
        {`מערכת זו פותחה במסגרת קורס GIS במכללת HIT על מנת למפות את כל בתי המשפט בישראל. במערכת זו ניתן לחפש בטסקט חופשי את בתי המשפט או לסנן לפי סוג בית המשפט. בנוסף ניתן להציג מידע אודות בית המשפט, להציג מיקום גאוגרפי שלו במפה ואף דרכי ניווט אליו.`}
        <br />
        <br />
        {`את המערכת פיתחנו תוך שימוש בטכנולוגיות GIS קיימות מאתר https://www.govmap.gov.il. נעשה גם שימוש בעיבוד והתאמת נתונים. הפרויקט פותח בסביבת React ו- NodeJS.`}
      </Typography>
    </div>
  ),
  {
    initialDelayMs: 500,
    durationMs: 250,
  }
);

const SplashStartHere = withFadeInAnimation(
  ({ className }) => {
    const navigate = useNavigate();
    return (
      <Box className={className} sx={{ mt: 2 }}>
        <Button
          dir="ltr"
          size="large"
          startIcon={<ArrowBack />}
          variant="contained"
          onClick={() => navigate("/home")}
        >
          התחל כאן
        </Button>
      </Box>
    );
  },
  {
    initialDelayMs: 1000,
    durationMs: 250,
  }
);

const PageLayout = styled("div")`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Background = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #0044ff 0%, #0084ff 100%);
  pointer-events: none;
  z-index: -1;
`;
