-- AlterTable
ALTER TABLE `user` ADD COLUMN `caption` VARCHAR(191) NULL,
    ADD COLUMN `postTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
