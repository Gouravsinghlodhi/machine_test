'use strict';

const constants = Object.freeze({

    error: {
        auth: {
            emailTaken: 'Email has already been taken',
            codeMismatch: 'Verification code mismatch',
            invalidToken: 'Invalid Token',
            invalidCredentials: 'Invalid user credentials',
            invalidUser: 'Invalid user',
            userNotFound: 'User not found',
            userNotVerified: 'User not verified',
            userProfileNotFound: 'User Profile not found',
            deckNotFound: 'Deck Not Found',
            unauthorized: 'Unauthorized',
            noAuthToken: 'No auth token',
            noGitToken: 'No git token',
            noJupyterToken: 'No jupyter token',
            profileNotFound: 'Profile not found',
            invalidAuthToken: 'Invalid auth token',
            deckServiceCheck: 'All ready DeckService Exit',
            passwordNotMatch: 'Confirm Password does not match.',
            passwordWrong: 'Current Password is wrong.',
            invalidPasswordToken: 'Invalid Password Token'
        },
        content: {
           contentNotFound : 'Content not found',
        },
        bodyEmpty: 'Request body empty or malformed',
        accessDenied: 'Access Denied!',
        internalServerError: 'Internal Server Error',
        books:{
            booksNotFound: 'Book not found',   
            isbnNotFound: 'ISBN not found',
            invalidIsbn: 'Invalid ISBN code',
            booksNotAvailable: 'Book not available',
            qrCodeNotFound: 'QR Code not found',
            assignedBookNotFound: 'Assigned Book not found',
            assignedBookAlreadyAccepted: 'Assigned Book already accepted',
        }
    },
    activeStatus: {
        active: 'active',
        inactive: 'inactive',
        deleted: 'deleted'
    },
    
});

module.exports = constants;