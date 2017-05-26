// Copyright (C) 2016 Nokia Corporation and/or its subsidiary(-ies).

// Build-time configuration for the deployer frontend

module.exports = {
    // When adding an environment, use this + the repository name as the default target path
    'defaultTargetPath': '/home/deployuser/',
    // In the repository view, to save space, hide common hostname suffixes
    'hideHostnameSuffixes': ['.example.com', '.example.net'],
    // Admin contact mail (will be displayed to users)
    'referenceMail': 'sysadmins@example.com',
    // Authentification
    // When a user does not have the sessionIdCookie set, he will be redirected to the authPage
    // The role of the authPage is to set this cookie with a suitable sessionid and redirect the user to the
    // deployer
    // This sessionid will then be exchanged against a deployer session token.
    'sessionidCookie': 'sessionid',
    'authPage': 'https://cas.example.net/authentification?r={originUrl}'
};