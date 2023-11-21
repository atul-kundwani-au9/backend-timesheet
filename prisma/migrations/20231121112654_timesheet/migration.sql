-- CreateTable
CREATE TABLE `Employee` (
    `EmployeeID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`EmployeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `ClientID` INTEGER NOT NULL AUTO_INCREMENT,
    `ClientName` VARCHAR(191) NOT NULL,
    `ContactPerson` VARCHAR(191) NOT NULL,
    `ContactEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ClientID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `ProjectID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProjectName` VARCHAR(191) NOT NULL,
    `ClientID` INTEGER NOT NULL,

    PRIMARY KEY (`ProjectID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timesheet` (
    `TimesheetID` INTEGER NOT NULL AUTO_INCREMENT,
    `EmployeeID` INTEGER NOT NULL,
    `ProjectID` INTEGER NOT NULL,
    `Date` DATETIME(3) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `HoursWorked` DOUBLE NOT NULL,
    `Description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`TimesheetID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_ClientID_fkey` FOREIGN KEY (`ClientID`) REFERENCES `Client`(`ClientID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Timesheet` ADD CONSTRAINT `Timesheet_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Timesheet` ADD CONSTRAINT `Timesheet_ProjectID_fkey` FOREIGN KEY (`ProjectID`) REFERENCES `Project`(`ProjectID`) ON DELETE RESTRICT ON UPDATE CASCADE;
