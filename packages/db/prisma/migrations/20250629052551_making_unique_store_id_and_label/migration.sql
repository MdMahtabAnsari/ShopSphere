/*
  Warnings:

  - A unique constraint covering the columns `[storeId,label]` on the table `Billboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Billboard_storeId_label_key" ON "Billboard"("storeId", "label");
