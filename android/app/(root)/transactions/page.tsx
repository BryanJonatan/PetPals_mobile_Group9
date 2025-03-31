"use client";

import NormalContent from "../../components/ContentTemplate/NormalContent";
import PageNotFound from "../../components/PageNotFound";
import TransactionFilter from "../../components/Transactions/TransactionFilter";
import TransactionList from "../../components/Transactions/TransactionList";
import TransactionWrapper from "../../components/Transactions/TransactionWrapper";
import { useTransactions } from "../../context/transactions/TransactionsContext";
import { useUsers } from "../../context/users/UsersContext";
import React, { useEffect } from "react";

const Transactions = () => {
  const { loggedInUser } = useUsers();
  const { transactionType, fetchTransactionHistory, error } = useTransactions();

  useEffect(() => {
    fetchTransactionHistory(loggedInUser.userId, transactionType);
  }, []);

  useEffect(() => {
    fetchTransactionHistory(loggedInUser.userId, transactionType);
  }, [transactionType]);

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
          <h1 className="text-4xl font-bold">Transaction History</h1>
        </div>
        <TransactionFilter />
        <TransactionList transactionType="history" />
      </TransactionWrapper>
    </NormalContent>
  );
};

export default Transactions;
