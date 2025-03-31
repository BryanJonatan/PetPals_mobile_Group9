"use client";

import NormalContent from "../../components/ContentTemplate/NormalContent";
import PageNotFound from "../../components/PageNotFound";
import TransactionList from "../../components/Transactions/TransactionList"
import TransactionWrapper from "../../components/Transactions/TransactionWrapper";
import { useTransactions } from "../../context/transactions/TransactionsContext";
import { useUsers } from "../../context/users/UsersContext";
import React, { useEffect } from "react";

const AdoptionTransactionRequest = () => {
  const { loggedInUser } = useUsers();
  const { fetchAdoptionTransactionRequest, error } = useTransactions();

  useEffect(() => {
    fetchAdoptionTransactionRequest(loggedInUser.userId);
  }, []);

  if (error) {
    return (
      <NormalContent>
        <PageNotFound image_url="/img/page-not-found.png" message="" />
      </NormalContent>
    );
  }
  return (
    <NormalContent>
      <TransactionWrapper>
        <div className="border-b-2 pb-2 mb-4">
          <h1 className="text-4xl font-bold">Transaction Request</h1>
        </div>
        <TransactionList transactionType="adoptionReq" />
      </TransactionWrapper>
    </NormalContent>
  );
};

export default AdoptionTransactionRequest;
