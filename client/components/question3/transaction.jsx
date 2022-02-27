export const Transaction = ({ transaction }) => {
  return (
    <div className="flex border-2 rounded m-4 p-4">
      <div className="">
        <div>
          <strong>Transaction ID: {transaction.id}</strong>
        </div>
        <div>
          <strong>
            {transaction.fromUser.name} to {transaction.toUser.name}
          </strong>
        </div>
        <div>
          <strong>Amount: ${transaction.amount}</strong>
        </div>
      </div>
    </div>
  );
};
