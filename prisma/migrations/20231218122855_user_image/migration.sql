/*
  Warnings:

  - Made the column `user_image` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `user_image` VARCHAR(191) NOT NULL;
