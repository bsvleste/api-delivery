-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "idDeliveryman" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" DATETIME,
    CONSTRAINT "deliveries_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_idDeliveryman_fkey" FOREIGN KEY ("idDeliveryman") REFERENCES "deliveryman" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_deliveries" ("createdAt", "endAt", "id", "idClient", "idDeliveryman", "itemName") SELECT "createdAt", "endAt", "id", "idClient", "idDeliveryman", "itemName" FROM "deliveries";
DROP TABLE "deliveries";
ALTER TABLE "new_deliveries" RENAME TO "deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
