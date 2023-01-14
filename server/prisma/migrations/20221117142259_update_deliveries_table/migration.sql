/*
  Warnings:

  - You are about to drop the `Deliveries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Deliveries";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "idDeliveryman" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" DATETIME NOT NULL,
    CONSTRAINT "deliveries_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_idDeliveryman_fkey" FOREIGN KEY ("idDeliveryman") REFERENCES "deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
