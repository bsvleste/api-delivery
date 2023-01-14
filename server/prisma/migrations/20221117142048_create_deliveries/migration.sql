-- CreateTable
CREATE TABLE "Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "idDeliveryman" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" DATETIME NOT NULL,
    CONSTRAINT "Deliveries_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_idDeliveryman_fkey" FOREIGN KEY ("idDeliveryman") REFERENCES "deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
