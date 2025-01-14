import { CustomAccordion } from "@kleros/ui-components-library";
import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import { IParsedData } from "utils/mapDataForAccordion";
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionTitle from "./AccordionTitle/AccordionTitle";

const StyledSnapshotAccordionGlobal = styled(CustomAccordion)`
  display: flex;
  width: 100%;
  justify-content: center;

  ${smallScreenStyle(css`
    padding: 0px;
  `)}

  .accordion-button {
    border: 1px solid ${({ theme }) => theme.color.secondaryBlue};
    border-radius: 3px;
    padding: 16px;
    ${smallScreenStyle(css`
      padding: 16px calc(6px + (10) * (100vw - 370px) / (1250 - 370));
    `)}
  }

  .accordion-svg {
    ${smallScreenStyle(css`
      align-self: end;
      margin-bottom: 9px;
    `)}
  }

  .accordion-item__Body-sc-17yp2l-2 {
    background-color: ${({ theme }) => theme.color.secondaryPurple};
    border-right: 1px solid ${({ theme }) => theme.color.secondaryBlue};
    border-left: 1px solid ${({ theme }) => theme.color.secondaryBlue};
    border-bottom: 1px solid ${({ theme }) => theme.color.secondaryBlue};
    border-radius: 3px;

    ${smallScreenStyle(css`
      width: 100%;
      padding-left: 16px;
      padding-right: 16px;
    `)}
  }

  svg.accordion-svg path {
    fill: ${({ theme }) => theme.color.blue};
  }
`;

interface SnapshotAccordionProps {
  items: IParsedData[];
}

const SnapshotAccordion: React.FC<SnapshotAccordionProps> = ({ items }) => {
  return (
    <StyledSnapshotAccordionGlobal
      items={items.map(
        ({ epoch, bridgeIndex, snapshotId, status, transactions }, index) => ({
          key: index,
          title: (
            <AccordionTitle
              epoch={epoch}
              bridgeIndex={bridgeIndex}
              timestamp={transactions[0].timestamp}
              status={status}
            />
          ),
          body: (
            <AccordionBody
              {...{ transactions, snapshotId, bridgeIndex, epoch }}
            />
          ),
        })
      )}
    />
  );
};

export default SnapshotAccordion;
