// import DataLoader from "dataloader";
// import { database } from "../datasources";
// import { OrderItems } from "../datasources/types";

// export const batchOrderItems = async (orderItemsIds: readonly string[]) => {
//   const orderItems = await database.getOrderItemsByOrderIds(orderItemsIds as string[]);

//   const orderItemsMap = orderItems.reduce((acc, next) => {
//     if (next.orderId) {
//       if (acc[next.orderId]) {
//         acc[next.orderId].push(next);
//       } else {
//         acc[next.orderId] = [next];
//       }
//     }
//     return acc;
//   }, {} as Record<string, OrderItems[]>);

//   return orderItemsIds.map(id => orderItemsMap[id]);
// }

// export const orderItemsLoader = () => new DataLoader(batchOrderItems);
