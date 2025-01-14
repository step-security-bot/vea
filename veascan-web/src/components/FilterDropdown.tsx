import { DropdownSelect } from "@kleros/ui-components-library";
import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";

interface Item {
  text: string;
  dot?: string;
  Icon?: React.FC<React.SVGAttributes<SVGAElement>>;
  value: number;
}

interface FilterDropdownProps {
  isSimpleButton: boolean;
  isAlignRight: boolean;
  itemData: Item[];
}

const FilterItem = styled(DropdownSelect)`
  .item-icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  h1 {
    font-family: "Oxanium";
    font-size: 14px;
    font-weight: 400;
    line-height: 17.5px;
  }
  svg {
    height: 8px;
    width: 8px;
  }

  p {
    font-family: "Open Sans";
  }

  .cOGsRq {
    ${smallScreenStyle(css`
      right: auto;
    `)}
  }

  .iVPRzL {
    ${smallScreenStyle(css`
      right: auto;
    `)}
  }
`;

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  isSimpleButton,
  isAlignRight,
  itemData,
}) => {
  return (
    <FilterItem
      items={itemData}
      defaultValue={1}
      simpleButton={isSimpleButton}
      alignRight={isAlignRight}
      callback={() => {}}
    />
  );
};
