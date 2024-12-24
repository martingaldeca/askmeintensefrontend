'use client';
import React from 'react';
import { CustomChip } from '@/atoms';
import { Category, Level } from '@/app/lib/client';
import { CategoryLevelInfoStyled } from './CategoryLevelInfo.styles';

interface CategoryInfoProps {
  category: Category;
  level: Level;
}

const CategoryLevelInfo = (props: CategoryInfoProps) => {
  return (
    <CategoryLevelInfoStyled>
      {props.category?.name && <CustomChip text={props.category?.name} />}
      {props.level?.number && props.level?.name && (
        <CustomChip text={`${props.level?.number} - ${props.level?.name}`} />
      )}
    </CategoryLevelInfoStyled>
  );
};

export default CategoryLevelInfo;
