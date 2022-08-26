import {
  Paper,
  Text,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBolt,
  IconCoinYen,
  IconBrandFinder,
  IconCloudLock,
} from "@tabler/icons";

interface FeatureProps {
  Icon: any;
  title: React.ReactNode;
  description: React.ReactNode;
}

const data = [
  {
    Icon: <IconCoinYen size={28} stroke={1.5} />,
    title: "価格",
    description:
      "日本の受託開発企業に比べて、圧倒的に安いです。予算が少ない場合でもぜひ一度ご相談ください。",
  },
  {
    Icon: <IconBolt size={28} stroke={1.5} />,
    title: "技術力",
    description:
      "基本的に開発者はベトナム人エンジニです。日本の企業のシステムを作っていた経験者たちが開発を行うので、技術力は非常に高いです。",
  },
  {
    Icon: <IconCloudLock size={28} stroke={1.5} />,
    title: "保守性",
    description:
      "優れた開発者たちがシステムを作るため保守性が高いです。トレンドな技術も使用できるため、システムの保守性が高くなります。",
  },
  {
    Icon: <IconBrandFinder size={28} stroke={1.5} />,
    title: "コミュニケーション",
    description:
      "オフシュアのデメリットとなるコミニュケーション。私たちははお客様とのやりとりは日本人が対応させていただきます。意見の食い違いが起きないように責任を持って対応いたします。",
  },
];

export function Feature({ Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        {Icon}
      </ThemeIcon>
      <div>
        <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
          {title}
        </Text>
        <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      </div>
    </Paper>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}));

export function Content({}: FeatureProps) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <>
      <div className="p-3">
        <h1 className="mb-3 text-4xl">事業内容</h1>
        <div className="ml-6">
          <h2 className="text-2xl">1. システム開発事業</h2>
          <label className="ml-6">system development</label>
          <p className="ml-6">
            我々の強みは広い人脈があること。
            <br />
            複数社のベトナム起業と提携をしているためお客様の要望に沿った開発者を選定し開発を行います。
            <br />
            お客様の要望に合わせて開発者を行います。
          </p>
        </div>

        <Container className={classes.wrapper} id="contact">
          <SimpleGrid
            mt={60}
            cols={3}
            spacing={theme.spacing.xl * 2}
            breakpoints={[
              { maxWidth: 1500, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          >
            {features}
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
}
