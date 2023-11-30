/*
  Warnings:

  - You are about to alter the column `endDate` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.
  - You are about to alter the column `date` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `endDate` DATETIME(0) NOT NULL,
    MODIFY `date` DATETIME(0) NOT NULL;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
