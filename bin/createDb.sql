-- [id], [first_name], [last_name], [email], [provider]
CREATE TABLE dbo.PassportUsers 
    ([id] NVARCHAR(100) NOT NULL,
    [first_name] NVARCHAR(200),
    [last_name] NVARCHAR(200),
    [email] NVARCHAR(400) DEFAULT 'nobody@home',
    [provider] NVARCHAR (200) NOT NULL);

GO

CREATE CLUSTERED INDEX IX_PassportUsers_IdProvider
    ON dbo.PassportUsers ([id], [provider])
