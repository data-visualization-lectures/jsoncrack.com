import React from "react";
import {
  Container,
  Flex,
  Title,
  Text,
  Paper,
  Center,
  Badge,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import { FaBolt, FaToolbox } from "react-icons/fa";
import { IoImages, IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineFormatIndentIncrease, MdOutlineGeneratingTokens } from "react-icons/md";
import { TbTransformFilled } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: FeatureItem[] = [
  {
    title: "JSONビジュアライザー",
    description:
      "入力と同時にデータをインタラクティブなグラフやツリーに変換します。JSON、YAML、CSV、XML、TOMLをサポート。",
    icon: <FaBolt size={20} />,
    color: "yellow",
  },
  {
    title: "データ変換",
    description:
      "JSONをCSVへ、YAMLをJSONへ、XMLをJSONへなど。当社のJSONコンバータは、データ交換を容易にするために複数のフォーマットをサポートしています。",
    icon: <TbTransformFilled size={20} />,
    color: "orange",
  },
  {
    title: "JSONフォーマッタ / バリデータ",
    description: "JSONデータを整形・美化して読みやすくします。JSON、YAML、CSVを検証します。",
    icon: <MdOutlineFormatIndentIncrease size={20} />,
    color: "green",
  },
  {
    title: "コード/型定義の生成",
    description:
      "TypeScriptインターフェース、Golang構造体、Rust serde、JSON Schemaなどを生成します。",
    icon: <MdOutlineGeneratingTokens size={20} />,
    color: "grape",
  },
  {
    title: "JSON Schema ジェネレータ",
    description:
      "JSON Schemaの検証、モックデータの作成、JSON、YAML、XML、CSVなどの様々なデータ形式からのJSON Schema生成。",
    icon: <VscJson size={20} />,
    color: "cyan",
  },
  {
    title: "高度なJSONツール",
    description: "JWTのデコード、データのランダム化、jq (JSON Query)、JSON Pathコマンドの実行。",
    icon: <FaToolbox size={20} />,
    color: "teal.5",
  },
  {
    title: "画像のエクスポート",
    description:
      "グラフの画像をPNG、JPEG、SVGとしてエクスポートします。データの可視化を他の人と共有できます。",
    icon: <IoImages size={20} />,
    color: "blue.4",
  },
  {
    title: "セキュア",
    description:
      "あなたのデータが当社のサーバーに保存されることはありません。すべてはデバイス上で完結します。",
    icon: <IoShieldCheckmark size={20} />,
    color: "gray",
  },
];

export const Features = () => {
  return (
    <Container component="section" id="features" fluid py={80}>
      <Container size="xl">
        <Center>
          <Badge
            fw="600"
            tt="none"
            variant="outline"
            c="blue.7"
            color="blue.3"
            bg="blue.0"
            size="lg"
          >
            機能
          </Badge>
        </Center>
        <Title
          c="black"
          order={2}
          px="lg"
          fz={{
            base: 26,
            xs: 32,
            sm: 42,
          }}
          fw={600}
          mb={15}
          style={{ textAlign: "center" }}
        >
          データを視覚的に探索
        </Title>
        <Title
          order={3}
          fw={500}
          c="gray.7"
          px="lg"
          mx="auto"
          ta="center"
          mb={50}
          fz={{ base: 16, sm: 18 }}
          w={{ base: "100%", xs: "80%", sm: "60%", md: "40%" }}
        >
          JSON、YAML、CSV、XML、TOMLのためのオールインワンツール。
        </Title>

        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
            md: 4,
          }}
          spacing="xl"
        >
          {features.map((feature, index) => (
            <Paper key={index} bg="gray.0" p="lg" radius="md">
              <Flex gap="sm" align="center" justify="center" direction="column">
                <ThemeIcon radius="xl" size="xl" variant="light" color={feature.color}>
                  {feature.icon}
                </ThemeIcon>
                <Title fw={500} ta="center" c="gray.9" order={3}>
                  {feature.title}
                </Title>
                <Text fz="sm" c="gray.8">
                  {feature.description}
                </Text>
              </Flex>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
};
