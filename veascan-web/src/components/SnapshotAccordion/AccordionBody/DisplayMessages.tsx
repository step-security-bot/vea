import React, { FC, useState } from "react";
import styled from "styled-components";
import { CompactPagination } from "@kleros/ui-components-library";
import { useMessages } from "hooks/useMessages";
import Message from "./Message";

interface DisplayMessagesProps {
  snapshotId: string;
  bridgeIndex: number;
}

const MESSAGES_PER_PAGE = 5;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 12px;
`;

const DisplayMessages: FC<DisplayMessagesProps> = ({
  snapshotId,
  bridgeIndex,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useMessages(
    snapshotId,
    bridgeIndex,
    (currentPage - 1) * MESSAGES_PER_PAGE,
    false
  );

  const totalMessages = parseInt(data?.totalMessages);
  const pageCount = Math.ceil(totalMessages / MESSAGES_PER_PAGE);

  return (
    <>
      <PaginationContainer>
        <small>Page {currentPage}</small>
        <CompactPagination
          currentPage={currentPage}
          callback={setCurrentPage}
          numPages={pageCount ? pageCount : currentPage}
        />
      </PaginationContainer>
      {data?.messages.map(([messageInboxData, messageOutboxData]) => {
        return (
          <Message
            key={messageInboxData?.id}
            messageInboxData={messageInboxData}
            messageOutboxData={messageOutboxData}
            bridgeIndex={bridgeIndex}
          />
        );
      })}
    </>
  );
};

export default DisplayMessages;
