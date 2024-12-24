"use client";
import { CardSelectorStyled } from "@/components/CardSelector/CardSelector.styles";
import { Category, Level } from "@/app/lib/client";
import { ListSelector } from "@/atoms";

export type CardSelectorProps = {
  items: Category[] | Level[] | null;
  image: "categories" | "levels";
  buttonText: string;
  type: "category" | "level";
};

const CardSelector = (props: CardSelectorProps) => {
  return (
    <CardSelectorStyled image={`/img/PreGame/${props.image}.png`}>
      <ListSelector
        items={props.items}
        buttonText={props.buttonText}
        type={props.type}
      />
    </CardSelectorStyled>
  );
};

export default CardSelector;
